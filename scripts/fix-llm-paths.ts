/**
 * Post-build script: fix vitepress-plugin-llms paths and generate locale .md files.
 *
 * Problem A (English):
 *   The plugin uses workDir:'en/ai/docs', so it strips that prefix from output paths.
 *   Example: dist/skill/introduction.md  (accessible at /skill/introduction.md)
 *   But HTML pages are served at /en/ai/docs/skill/introduction, so the .md version
 *   must be at /en/ai/docs/skill/introduction.md.
 *   Fix: move dist/{path}.md → dist/en/ai/docs/{path}.md
 *
 * Problem B (zh-CN / zh-HK):
 *   The plugin only processes workDir:'en/ai/docs', so Chinese locales never get .md files.
 *   nginx expects /zh-CN/ai/docs/{path}.md → OSS zh-CN/ai/docs/{path}.md.
 *   Fix: copy source files docs/{locale}/ai/docs/**\/*.md → dist/{locale}/ai/docs/**\/*.md
 *
 * Run: bun run scripts/fix-llm-paths.ts
 */

import { glob } from 'glob'
import { copyFile, mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { dirname, join, relative } from 'node:path'

const DIST_DIR = 'docs/.vitepress/dist'
const SRC_DIR = 'docs'
const EN_PREFIX = 'en/ai/docs'

// ── A: Move English per-page .md files to correct paths ─────────────────────
// Plugin strips workDir prefix → dist/nodes/start.md must become dist/en/ai/docs/nodes/start.md
const mdFiles = await glob(`${DIST_DIR}/**/*.md`)
let movedCount = 0

for (const file of mdFiles) {
  const relPath = relative(DIST_DIR, file) // e.g. 'skill/introduction.md'

  // Skip files already under the target prefix (idempotent re-runs)
  if (relPath.startsWith(`${EN_PREFIX}/`)) continue

  const targetPath = join(DIST_DIR, EN_PREFIX, relPath)
  await mkdir(dirname(targetPath), { recursive: true })
  await copyFile(file, targetPath)
  await rm(file)
  console.log(`  moved: ${relPath} → ${EN_PREFIX}/${relPath}`)
  movedCount++
}

// ── B: Copy Chinese/HK source .md files to dist ─────────────────────────────
// Source: docs/zh-CN/ai/docs/**/*.md → dist/zh-CN/ai/docs/**/*.md
// Source: docs/zh-HK/ai/docs/**/*.md → dist/zh-HK/ai/docs/**/*.md
const LOCALE_DIRS = ['zh-CN/ai/docs', 'zh-HK/ai/docs']
let copiedCount = 0

for (const localeDir of LOCALE_DIRS) {
  const srcPattern = `${SRC_DIR}/${localeDir}/**/*.md`
  const localeFiles = await glob(srcPattern)

  for (const srcFile of localeFiles) {
    const relPath = relative(SRC_DIR, srcFile) // e.g. 'zh-CN/ai/docs/nodes/start.md'
    const destPath = join(DIST_DIR, relPath)
    await mkdir(dirname(destPath), { recursive: true })
    await copyFile(srcFile, destPath)
    copiedCount++
  }
  console.log(`  copied ${localeFiles.length} files for ${localeDir}`)
}

// ── Update llms*.txt URLs ────────────────────────────────────────────────────
// With workDir:'en/ai/docs', generated URLs lack the /en/ai/docs/ prefix; fix them.
const MARKDOWN_URL_RE = /\]\((https?:\/\/[^/]+)\/((?!en\/ai\/docs\/)[^)]+\.md)\)/g
const YAML_URL_RE = /(url:\s*['"])(https?:\/\/[^/'"]+)\/((?!en\/ai\/docs\/)[^'"]+\.md)(['"])/g

for (const txtFile of ['llms.txt', 'llms-full.txt']) {
  const txtPath = join(DIST_DIR, txtFile)
  if (!existsSync(txtPath)) continue
  let content = await readFile(txtPath, 'utf-8')
  const fixed = content
    .replace(MARKDOWN_URL_RE, `]($1/${EN_PREFIX}/$2)`)
    .replace(YAML_URL_RE, `$1$2/${EN_PREFIX}/$3$4`)
  if (fixed !== content) {
    await writeFile(txtPath, fixed, 'utf-8')
    console.log(`  updated ${txtFile} URLs`)
  }
}

console.log(`\n✓ Relocated ${movedCount} English .md file(s) under /${EN_PREFIX}/`)
console.log(`✓ Copied ${copiedCount} locale .md file(s) for zh-CN and zh-HK`)
