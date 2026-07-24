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

// 清空目录内容但保留顶级 index.md（每个 locale 的 hero home 独立维护）
function clearExceptIndex(dir: string) {
  fs.mkdirSync(dir, { recursive: true })
  for (const name of fs.readdirSync(dir)) {
    if (name === 'index.md') continue
    fs.rmSync(path.join(dir, name), { recursive: true, force: true })
  }
}

function convertZhHK() {
  console.log(`\n== zh-HK simp→trad from ${SRC} ==`)
  clearExceptIndex(HK)

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
    } else {
      fs.copyFileSync(abs, dst)
    }
  })
  console.log('  ✓ zh-HK done')
}

function generateEnPlaceholder() {
  console.log(`\n== en placeholder mirror ==`)
  clearExceptIndex(EN)

  walk(SRC, (abs, rel) => {
    // 跳过顶级 index.md（en hero 独立维护）
    if (rel === 'index.md') return
    const dst = path.join(EN, rel)
    ensureDir(dst)
    if (abs.endsWith('.md')) {
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
      // en 保留原 label；api 目录特殊：显示为 "API" 而非 "API 参考"
      const relDir = path.dirname(rel).replace(/\\/g, '/')
      if (relDir === 'api') {
        fs.writeFileSync(dst, JSON.stringify({ label: 'API' }))
      } else {
        fs.copyFileSync(abs, dst)
      }
    } else {
      fs.copyFileSync(abs, dst)
    }
  })
  console.log('  ✓ en done')
}

function main() {
  if (!fs.existsSync(SRC)) throw new Error(`zh-CN docs not found at ${SRC}`)
  convertZhHK()
  generateEnPlaceholder()
  console.log('\n✅ All locales mirrored')
}

main()
