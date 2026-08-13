/**
 * 为旧结构 URL 在三端生成 meta-refresh 占位
 * 覆盖：
 *  - 15 个节点在旧位置 nodes/{name} → basics/nodes/{name}
 *  - 3 个已弃用节点 nodes/{output,template,variable-assigner} → basics/nodes/variables-transformer
 *  - 旧 getting-started / build / debug / publish / knowledge-base / skill / workspace 高频页
 *  - 旧 platform-capabilities/{page} → basics/capabilities/{page}
 */
import fs from 'node:fs'
import path from 'node:path'

const REPO_ROOT = path.resolve(new URL('..', import.meta.url).pathname)
const LOCALES = ['zh-CN', 'zh-HK', 'en']

type Redirect = { from: string; to: string; label: string }
const REDIRECTS: Redirect[] = [
  // 老 getting-started
  { from: 'getting-started/introduction.md', to: 'basics/introduction', label: '平台概述与核心概念' },
  { from: 'getting-started/core-concepts.md', to: 'basics/introduction', label: '平台概述与核心概念' },
  { from: 'getting-started/pages-overview.md', to: 'basics/pages-overview', label: '主要页面介绍' },
  { from: 'getting-started/quick-start.md', to: 'basics/quick-start', label: '快速上手' },

  // 老 nodes（15 个 + 3 个弃用）
  { from: 'nodes/index.md', to: 'basics/nodes/', label: '节点参考手册' },
  { from: 'nodes/start.md', to: 'basics/nodes/start', label: 'Start 节点' },
  { from: 'nodes/answer.md', to: 'basics/nodes/answer', label: 'Answer 节点' },
  { from: 'nodes/end.md', to: 'basics/nodes/end', label: 'End 节点' },
  { from: 'nodes/llm.md', to: 'basics/nodes/llm', label: 'LLM 节点' },
  { from: 'nodes/agent.md', to: 'basics/nodes/agent', label: 'Agent 节点' },
  { from: 'nodes/question-classifier.md', to: 'basics/nodes/question-classifier', label: 'Question Classifier 节点' },
  { from: 'nodes/if-else.md', to: 'basics/nodes/if-else', label: 'IF Else 节点' },
  { from: 'nodes/branch-aggregator.md', to: 'basics/nodes/branch-aggregator', label: 'Branch Aggregator 节点' },
  { from: 'nodes/iteration.md', to: 'basics/nodes/iteration', label: 'Iteration 节点' },
  { from: 'nodes/loop.md', to: 'basics/nodes/loop', label: 'Loop 节点' },
  { from: 'nodes/code.md', to: 'basics/nodes/code', label: 'Code 节点' },
  {
    from: 'nodes/variables-transformer.md',
    to: 'basics/nodes/variables-transformer',
    label: 'Variables Transformer 节点',
  },
  { from: 'nodes/parameter-extractor.md', to: 'basics/nodes/parameter-extractor', label: 'Parameter Extractor 节点' },
  { from: 'nodes/tools.md', to: 'basics/nodes/tools', label: 'Tool 节点' },
  { from: 'nodes/http-request.md', to: 'basics/nodes/http-request', label: 'Http Request 节点' },
  // 3 个弃用节点
  { from: 'nodes/output.md', to: 'basics/nodes/variables-transformer', label: '模板转换（原 Output）' },
  { from: 'nodes/template.md', to: 'basics/nodes/variables-transformer', label: '模板转换（原 Template）' },
  {
    from: 'nodes/variable-assigner.md',
    to: 'basics/nodes/variables-transformer',
    label: '模板转换（原 Variable Assigner）',
  },

  // 老 build
  {
    from: 'build/chatflow-agenticchat-settings.md',
    to: 'basics/chatflow-agenticchat-settings',
    label: 'Chatflow 与 Agentic Chat 设置',
  },
  { from: 'build/canvas-collaboration.md', to: 'basics/capabilities/canvas-collaboration', label: '画布与协作效率' },
  { from: 'build/error-handling.md', to: 'basics/introduction', label: '基础功能介绍' },
  { from: 'build/flow-logic.md', to: 'basics/introduction', label: '基础功能介绍' },
  { from: 'build/mcp-tools.md', to: 'basics/capabilities/model-tool-ecosystem', label: '模型与工具生态' },
  { from: 'build/shortcuts.md', to: 'basics/introduction', label: '基础功能介绍' },
  { from: 'build/version-control.md', to: 'basics/introduction', label: '基础功能介绍' },

  // 老 debug
  { from: 'debug/observability.md', to: 'basics/capabilities/observability', label: '运行调试与观测' },
  { from: 'debug/run-history.md', to: 'basics/capabilities/observability', label: '运行调试与观测' },
  { from: 'debug/single-node.md', to: 'basics/capabilities/observability', label: '运行调试与观测' },
  { from: 'debug/workflow.md', to: 'basics/capabilities/observability', label: '运行调试与观测' },

  // 老 publish
  { from: 'publish/permissions.md', to: 'basics/permissions', label: 'Agent 权限管理' },
  { from: 'publish/share.md', to: 'basics/permissions', label: 'Agent 权限管理' },
  { from: 'publish/web-app.md', to: 'basics/permissions', label: 'Agent 权限管理' },

  // 老 knowledge-base
  { from: 'knowledge-base/introduction.md', to: 'basics/capabilities/knowledge-base', label: '知识库' },
  { from: 'knowledge-base/create.md', to: 'basics/capabilities/knowledge-base', label: '知识库' },
  { from: 'knowledge-base/manage.md', to: 'basics/capabilities/knowledge-base', label: '知识库' },
  { from: 'knowledge-base/recall-test.md', to: 'basics/capabilities/knowledge-base', label: '知识库' },

  // 老 skill
  { from: 'skill/introduction.md', to: 'basics/capabilities/skill', label: 'Skill 体系' },
  { from: 'skill/create.md', to: 'basics/capabilities/skill', label: 'Skill 体系' },
  { from: 'skill/manage.md', to: 'basics/capabilities/skill', label: 'Skill 体系' },

  // 老 workspace
  { from: 'workspace/plans.md', to: 'basics/plans', label: 'Workspace 与套餐体系' },
  { from: 'workspace/regions.md', to: 'basics/regions', label: '分地区服务说明' },
  { from: 'workspace/hksg-benefits.md', to: 'basics/hksg-benefits', label: 'HK/SG 权益卡' },
  { from: 'workspace/personal-settings.md', to: 'basics/plans', label: 'Workspace 与套餐体系' },
  { from: 'workspace/manage-members.md', to: 'basics/plans', label: 'Workspace 与套餐体系' },
  { from: 'workspace/manage-apps.md', to: 'basics/plans', label: 'Workspace 与套餐体系' },

  // 老 platform-capabilities（上一版短暂用过）
  { from: 'platform-capabilities/index.md', to: 'basics/capabilities/', label: '平台能力' },
  {
    from: 'platform-capabilities/workflow-triggers.md',
    to: 'basics/capabilities/workflow-triggers',
    label: 'Workflow 触发器',
  },
  { from: 'platform-capabilities/guardrail.md', to: 'basics/capabilities/guardrail', label: 'Guardrail 安全护栏' },
  {
    from: 'platform-capabilities/context-memory.md',
    to: 'basics/capabilities/context-memory',
    label: '上下文与记忆管理',
  },
  {
    from: 'platform-capabilities/planning-execution.md',
    to: 'basics/capabilities/planning-execution',
    label: '规划与执行能力',
  },
  {
    from: 'platform-capabilities/security-i18n.md',
    to: 'basics/capabilities/security-i18n',
    label: '安全校验与本地化',
  },
  {
    from: 'platform-capabilities/model-tool-ecosystem.md',
    to: 'basics/capabilities/model-tool-ecosystem',
    label: '模型与工具生态',
  },
  { from: 'platform-capabilities/chat-experience.md', to: 'basics/capabilities/chat-experience', label: '对话端体验' },
  {
    from: 'platform-capabilities/disaster-recovery.md',
    to: 'basics/capabilities/disaster-recovery',
    label: '容灾能力',
  },

  // 老 tutorials/simple-chatbot（老站的示例文章）
  { from: 'tutorials/simple-chatbot.md', to: 'tutorials/orchestration-debug', label: '流程编排模式与调试技巧' },
]

function writeRedirect(locale: string, r: Redirect) {
  const abs = path.join(REPO_ROOT, 'docs', locale, 'ai', 'docs', r.from)
  fs.mkdirSync(path.dirname(abs), { recursive: true })
  const targetUrl = `/${locale}/ai/docs/${r.to}`
  const content =
    `---\n` +
    `title: "已迁移"\n` +
    `hidden: true\n` +
    `head:\n` +
    `  - - meta\n` +
    `    - http-equiv: refresh\n` +
    `      content: "0; url=${targetUrl}"\n` +
    `  - - link\n` +
    `    - rel: canonical\n` +
    `      href: "${targetUrl}"\n` +
    `  - - meta\n` +
    `    - name: robots\n` +
    `      content: "noindex,nofollow"\n` +
    `---\n\n` +
    `本文档已迁移，正在跳转到 [${r.label}](${targetUrl})。\n`
  fs.writeFileSync(abs, content)
}

for (const locale of LOCALES) {
  console.log(`\n== ${locale} ==`)
  for (const r of REDIRECTS) {
    writeRedirect(locale, r)
    console.log(`  ✓ ${locale}/${r.from}`)
  }
}
console.log(`\n✅ Written ${REDIRECTS.length * LOCALES.length} redirect placeholders`)
