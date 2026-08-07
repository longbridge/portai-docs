/**
 * 从 zh-CN 镜像到 zh-HK（简→繁）与 en（占位）
 * 用法：bun run scripts/mirror-locales.ts
 */
import fs from 'node:fs'
import path from 'node:path'
import * as OpenCC from 'opencc-js'

const REPO_ROOT = path.resolve(new URL('..', import.meta.url).pathname)
const DOCS_ROOT = path.join(REPO_ROOT, 'docs')
const SRC = path.join(DOCS_ROOT, 'zh-CN', 'ai', 'docs')
const HK = path.join(DOCS_ROOT, 'zh-HK', 'ai', 'docs')
const EN = path.join(DOCS_ROOT, 'en', 'ai', 'docs')

const s2t = OpenCC.Converter({ from: 'cn', to: 'twp' })

function walk(dir: string, cb: (abs: string, rel: string) => void, base = dir) {
  for (const name of fs.readdirSync(dir)) {
    const abs = path.join(dir, name)
    const rel = path.relative(base, abs)
    if (fs.statSync(abs).isDirectory()) {
      walk(abs, cb, base)
    } else {
      cb(abs, rel)
    }
  }
}

function ensureDir(p: string) {
  fs.mkdirSync(path.dirname(p), { recursive: true })
}

// en 占位 stub 的标记：含此标记说明尚未人工翻译，可以安全覆盖
const EN_STUB_MARK = '🚧 English translation in progress'

// en 侧边栏分组标签（目录相对路径 -> 英文 label）；未列出的目录保留已有 en 文件，缺失时才拷贝 zh 版
const EN_CATEGORY_LABELS: Record<string, string> = {
  basics: 'Basics',
  tutorials: 'Tips & Examples',
  compliance: 'Compliance',
  api: 'API Reference',
  appendix: 'Appendix',
  'basics/nodes': 'Node Reference',
  'basics/capabilities': 'Platform Capabilities',
}

function convertZhHK() {
  console.log(`\n== zh-HK simp→trad from ${SRC} ==`)
  let skippedAssets = 0

  walk(SRC, (abs, rel) => {
    // 跳过顶级 index.md（hero home 独立维护，link 前缀需按 locale 定制）
    if (rel === 'index.md') return
    const dst = path.join(HK, rel)
    ensureDir(dst)
    if (abs.endsWith('.md')) {
      const txt = fs.readFileSync(abs, 'utf8')
      fs.writeFileSync(dst, s2t(txt))
    } else if (abs.endsWith('_category_.json')) {
      const raw = JSON.parse(fs.readFileSync(abs, 'utf8'))
      raw.label = s2t(raw.label || '')
      fs.writeFileSync(dst, JSON.stringify(raw))
    } else if (!fs.existsSync(dst)) {
      // 图片等资源只在缺失时拷贝，避免覆盖已本地化的截图
      fs.copyFileSync(abs, dst)
    } else {
      skippedAssets++
    }
  })
  console.log(`  ✓ zh-HK done（保留已有资源 ${skippedAssets} 个）`)
}

function generateEnPlaceholder() {
  console.log(`\n== en placeholder mirror ==`)
  let skippedTranslated = 0
  let skippedAssets = 0

  walk(SRC, (abs, rel) => {
    // 跳过顶级 index.md（en hero 独立维护）
    if (rel === 'index.md') return
    const dst = path.join(EN, rel)
    ensureDir(dst)
    if (abs.endsWith('.md')) {
      // 已人工翻译的文件（不含 stub 标记）不再覆盖
      if (fs.existsSync(dst) && !fs.readFileSync(dst, 'utf8').includes(EN_STUB_MARK)) {
        skippedTranslated++
        return
      }
      const zhContent = fs.readFileSync(abs, 'utf8')
      // 提取 frontmatter 中的 title / sidebar_label
      const fmMatch = zhContent.match(/^---\n([\s\S]+?)\n---/)
      const fm = fmMatch ? fmMatch[1] : ''
      const titleMatch = fm.match(/^title:\s*"?(.+?)"?$/m)
      const title = titleMatch ? titleMatch[1] : path.basename(rel, '.md')
      // 用相对路径引用简中版
      const depthFromRoot = rel.split(path.sep).length - 1
      const upSegs = '../'.repeat(depthFromRoot + 3) // ../../../ 回到 docs/
      const zhLink = `/zh-CN/ai/docs/${rel.replace(/\.md$/, '').replace(/\/index$/, '')}`
      const body =
        `${fm ? `---\n${fm}\n---\n\n` : ''}` +
        `# ${title}\n\n` +
        `> 🚧 English translation in progress. See the [Simplified Chinese version](${zhLink}) for the latest content.\n`
      fs.writeFileSync(dst, body)
    } else if (abs.endsWith('_category_.json')) {
      const relDir = path.dirname(rel).replace(/\\/g, '/')
      if (EN_CATEGORY_LABELS[relDir]) {
        const raw = JSON.parse(fs.readFileSync(abs, 'utf8'))
        raw.label = EN_CATEGORY_LABELS[relDir]
        fs.writeFileSync(dst, JSON.stringify(raw))
      } else if (!fs.existsSync(dst)) {
        // 新目录且映射表未收录：先拷贝 zh 版占位，并提醒补充映射
        fs.copyFileSync(abs, dst)
        console.warn(`  ⚠ 未收录的 en 分组标签：${relDir}（已拷贝 zh 版，请在 EN_CATEGORY_LABELS 中补充英文）`)
      }
    } else if (!fs.existsSync(dst)) {
      // 图片等资源只在缺失时拷贝，避免覆盖已本地化的截图
      fs.copyFileSync(abs, dst)
    } else {
      skippedAssets++
    }
  })
  console.log(`  ✓ en done（保留已翻译文档 ${skippedTranslated} 个、已有资源 ${skippedAssets} 个）`)
}

function main() {
  if (!fs.existsSync(SRC)) throw new Error(`zh-CN docs not found at ${SRC}`)
  convertZhHK()
  generateEnPlaceholder()
  console.log('\n✅ All locales mirrored')
}

main()
