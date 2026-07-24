/**
 * 把《Infra 帮助文档》正式版从解压目录迁移到 docs/zh-CN/ai/docs/
 * 用法：SOURCE=<解压路径> DEST_LOCALE=zh-CN bun run scripts/migrate-infra-docs.ts
 * 若 SOURCE 未提供，默认使用 scratchpad 路径
 */
import fs from 'node:fs'
import path from 'node:path'
import mapJson from './migrate-infra-docs.map.json' with { type: 'json' }

const SOURCE = process.env.SOURCE || ''
const DEST_LOCALE = process.env.DEST_LOCALE || 'zh-CN'
const REPO_ROOT = path.resolve(new URL('..', import.meta.url).pathname)
const DEST_ROOT = path.join(REPO_ROOT, 'docs', DEST_LOCALE, 'ai', 'docs')

// 映射：源 relPath → { target, position, sidebar_label? }
// target 相对 DEST_ROOT，例如 'nodes/llm.md'
type MapEntry = { target: string; position?: number; label?: string }
const FILE_MAP: Record<string, MapEntry> = mapJson as Record<string, MapEntry>

// 目录 label（用于 _category_.json）；key 是相对 zh-CN/ai/docs 的目录路径
const CATEGORY_LABELS: Record<string, { label: string; position?: number }> = {
  basics: { label: '基础功能介绍', position: 1 },
  'basics/nodes': { label: '节点参考手册', position: 4 },
  'basics/capabilities': { label: '平台能力', position: 7 },
  tutorials: { label: '技巧和案例', position: 2 },
  compliance: { label: '合规要求', position: 3 },
  api: { label: 'API 参考', position: 4 },
  appendix: { label: '附录', position: 5 },
}

// 反向 index：源文件名 basename → 目标 md（用于内链改写）
const BASENAME_TO_TARGET: Record<string, string> = {}
for (const [src, m] of Object.entries(FILE_MAP)) {
  BASENAME_TO_TARGET[path.basename(src)] = m.target
}

// ─── 工具 ───
function ensureDir(dir: string) {
  fs.mkdirSync(dir, { recursive: true })
}

function loadSourceMd(srcRel: string): string {
  const p = path.join(SOURCE, srcRel)
  return fs.readFileSync(p, 'utf8')
}

function stripSourceMetaBlock(body: string): string {
  // 移除新版首部的 "> **版本**:1.0 · **日期**:..." 元信息行
  return body.replace(/^>\s*\*\*版本\*\*[^\n]*\n\n?/m, '')
}

function extractH1(body: string): string | null {
  const m = body.match(/^#\s+(.+?)\s*$/m)
  return m ? m[1].trim() : null
}

function stripFirstH1(body: string): string {
  return body.replace(/^#\s+.+?\s*\n+/, '')
}

// 清洗源标题：去掉开头的 "1.4.4 " / "3.1 " 类序号；去掉 "节点帮助文档" / "节点帮助文件" 后缀
function cleanTitle(t: string): string {
  return t
    .replace(/^\s*\d+(?:\.\d+)*[.\s\-　:：]*/, '')
    .replace(/\s*节点(?:帮助文档|帮助文件)\s*$/, '')
    .replace(/\s*節點(?:幫助文件|幫助文檔)\s*$/, '')
    .trim()
}

function buildFrontmatter(m: MapEntry, title: string): string {
  // 优先用 map.json 里定义的 label 作为标题（已经是干净的最终形态）
  // 否则清洗从 h1 提取的标题
  const cleanedH1 = cleanTitle(title)
  const finalTitle = m.label || cleanedH1
  const lines = ['---']
  if (m.position !== undefined) lines.push(`sidebar_position: ${m.position}`)
  lines.push(`title: ${JSON.stringify(finalTitle)}`)
  // label 与 title 一致时不重复
  if (m.label && m.label !== finalTitle) lines.push(`sidebar_label: ${JSON.stringify(m.label)}`)
  lines.push('---')
  return lines.join('\n') + '\n\n'
}

// 改写图片引用：./images/xxx.png (来源自 <srcDir>/images/xxx.png) → 复制到 <targetDir>/images/xxx.png
function processImagesAndRewrite(body: string, srcRel: string, targetRel: string): string {
  const srcDir = path.dirname(path.join(SOURCE, srcRel))
  const targetDir = path.dirname(path.join(DEST_ROOT, targetRel))
  const targetImgDir = path.join(targetDir, 'images')

  // alt 可包含 [xxx]（如 array[string]）；url 锁定 images/ 前缀避免误匹配
  const imgRegex = /!\[([^\n]*?)\]\((\.?\/?images\/[^)\s]+)\)/g
  return body.replace(imgRegex, (full, alt, url) => {
    if (/^https?:\/\//.test(url)) return full
    // decode url (处理空格 URL-encode)
    const cleanUrl = decodeURIComponent(url.trim())
    if (!cleanUrl.startsWith('./images/') && !cleanUrl.startsWith('images/')) return full
    const relPath = cleanUrl.replace(/^\.?\/?images\//, '')
    let srcImg = path.join(srcDir, 'images', relPath)
    // fallback：新版 1.3 快速上手笔误引用 1.3-*.png，实际图片名叫 1.2-*.png
    if (!fs.existsSync(srcImg) && /^1\.3-/.test(relPath)) {
      const alt2 = relPath.replace(/^1\.3-/, '1.2-')
      const p2 = path.join(srcDir, 'images', alt2)
      if (fs.existsSync(p2)) srcImg = p2
    }
    if (!fs.existsSync(srcImg)) {
      console.warn(`  ! 图片不存在：${srcImg}`)
      return full
    }
    // 目标图片名保留原名（含中文），只把空格替换为 -
    const safeName = relPath.replace(/\s+/g, '-')
    ensureDir(targetImgDir)
    const dstImg = path.join(targetImgDir, safeName)
    fs.copyFileSync(srcImg, dstImg)
    return `![${alt}](./images/${encodeURI(safeName)})`
  })
}

// 改写内链：../1.1-xxx.md 或 ./1.4.4-LLM 节点帮助文档.md → 目标 md 相对路径（无 .md 后缀）
function rewriteInternalLinks(body: string, targetRel: string): string {
  const targetDir = path.dirname(targetRel)
  return body.replace(/\[([^\]]+)\]\(([^)]+\.md)\)/g, (full, text, link) => {
    if (/^https?:\/\//.test(link)) return full
    const cleanLink = decodeURIComponent(link.split('#')[0].trim())
    const anchor = link.includes('#') ? '#' + link.split('#')[1] : ''
    const basename = path.basename(cleanLink)
    if (BASENAME_TO_TARGET[basename]) {
      const target = BASENAME_TO_TARGET[basename]
      const relFromTarget = path.relative(targetDir, target).replace(/\.md$/, '')
      return `[${text}](${relFromTarget}${anchor})`
    }
    return full
  })
}

// ─── 主流程 ───
function migrateOne(srcRel: string, mapping: MapEntry) {
  const targetAbs = path.join(DEST_ROOT, mapping.target)
  ensureDir(path.dirname(targetAbs))

  let body = loadSourceMd(srcRel)
  body = stripSourceMetaBlock(body)
  const title = extractH1(body) || mapping.label || path.basename(mapping.target, '.md')
  body = stripFirstH1(body)
  body = processImagesAndRewrite(body, srcRel, mapping.target)
  body = rewriteInternalLinks(body, mapping.target)

  const frontmatter = buildFrontmatter(mapping, title)
  fs.writeFileSync(targetAbs, frontmatter + body.trimStart())
  console.log(`  ✓ ${srcRel} → ${mapping.target}`)
}

function writeCategoryJson() {
  for (const [dir, cfg] of Object.entries(CATEGORY_LABELS)) {
    const p = path.join(DEST_ROOT, dir, '_category_.json')
    if (!fs.existsSync(path.dirname(p))) continue // 该 locale 没这个目录就跳过
    const body: Record<string, unknown> = { label: cfg.label }
    if (cfg.position !== undefined) body.position = cfg.position
    fs.writeFileSync(p, JSON.stringify(body, null, 0))
  }
}

function main() {
  console.log(`SOURCE  = ${SOURCE}`)
  console.log(`DEST    = ${DEST_ROOT}`)

  if (!fs.existsSync(SOURCE)) {
    throw new Error(`Source not found: ${SOURCE}`)
  }

  for (const [srcRel, m] of Object.entries(FILE_MAP)) {
    migrateOne(srcRel, m)
  }

  writeCategoryJson()
  console.log('\n✅ Done')
}

main()
