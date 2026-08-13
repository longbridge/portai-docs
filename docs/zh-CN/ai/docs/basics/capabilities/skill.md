---
sidebar_position: 2
title: "Skill 体系"
---

## 是什么

Skill 是面向 Agent 的**动态上下文管理与能力扩展机制**:把某个领域的方法论、规则、工具组合打包成可复用的能力包，Agent 在需要时按需加载 —— 避免把所有内容塞进 System Prompt 导致上下文臃肿，提升响应质量与执行效率。

一句话理解：**System Prompt 是 Agent 的性格，Skill 是 Agent 可随取随用的专业技能。**

## 三种创建方式

![Skills 页空态:「创建 Skill」入口，支持直接拖拽 Skill 文件到页面](./images/02-1-Skill%E9%A6%96%E9%A1%B5.png)

| 方式 | 适用场景 |
|------|---------|
| 手动创建与编辑 (创建空 Skill) | 从零沉淀自己的方法论 |
| 上传 Skill 压缩包 | 导入团队已有的 Skill 资产 |
| 联网搜索 GitHub Skill 并导入 | 复用社区成熟 Skill |

创建流程分两步：**① 上传/搜索/建空 → ② 命名和描述 → 发布**。

**第一步**:默认为上传方式，支持 `.zip` 或 `.skill` 文件 (需包含 `SKILL.md`);下方「其他创建方式」可切换为**搜索 Skill** 或**创建空 Skill**:

![创建 Skill 第一步：上传 .zip/.skill,或切换搜索 Skill / 创建空 Skill](./images/02-2-%E5%88%9B%E5%BB%BASkill%E4%B8%8A%E4%BC%A0.png)

选择「搜索 Skill」可**联网搜索 GitHub 上的社区 Skill**,按关键词检索 (如 superpowers 系列),点选即可导入：

![搜索 GitHub Skill:关键词检索社区 Skill，展示名称、作者与描述](./images/02-3-%E6%90%9C%E7%B4%A2GitHubSkill.png)

**第二步**:命名和描述——系统自动从上传/导入的文件中提取名称与描述，可手动修改;确认后点击「发布」:

![命名你的 Skill:名称、描述、来源 URL 与工具挂载，确认后发布](./images/02-4-%E5%91%BD%E5%90%8D%E4%B8%8E%E5%8F%91%E5%B8%83.png)

- **名称规则**:仅限小写字母、数字和连字符，最大 64 字符
- **描述**:用准确的语言描述功能与适用场景 (方便模型判断何时调用),**不支持换行**
- 从 GitHub 导入的 Skill 自动记录**来源 URL**;可在此步为 Skill 挂载工具

## Skill 详情与编辑

发布后进入 Skill 详情页：

![Skill 详情页：用户可调用开关、工具、文件浏览器与 SKILL.md 内容预览](./images/02-5-Skill%E8%AF%A6%E6%83%85.png)

- **用户可调用**:开关，开启后用户可在对话中输入 `/` 直接触发该 Skill
- **工具**:查看/添加 Skill 挂载的工具;更新 Skill 时会保留已添加的工具
- **文件浏览器**:查看 Skill 内的文件列表，支持创建文件/文件夹、「添加文件」补充资产
- **内容预览**:选中文件 (如 `SKILL.md`) 直接预览渲染效果，点「编辑」进入编辑模式

编辑模式提供**编辑器/预览**双 tab,`SKILL.md` 顶部为 frontmatter(`name`、`description`),正文即 Skill 的方法论内容，改完「保存文件」生效：

![编辑 SKILL.md:编辑器/预览切换，frontmatter(name/description)+正文](./images/02-6-%E7%BC%96%E8%BE%91SKILLmd.png)

## 三种使用方式

### 固定 Skill(Agentic Chat / Chatflow / Workflow)

把 Skill 挂载到 Agent 上，由 Agent 根据任务上下文**自动判断**是否调用，并在合适阶段执行相关能力。

- 典型场景：财报分析 —— Agent 收到财报类问题时自动加载财报分析 Skill

两个挂载位置：

**① Agentic Chat**:Agent 配置页的「Skills」区 (知识库下方),点「+ 添加 Skill」挂载：

![Agentic Chat 配置页:Skills 区挂载 Skill](./images/02-9-AgenticChat%E6%8C%82%E8%BD%BDSkill.png)

**② Chatflow / Workflow 的 Agent 节点**:节点编辑面板的「Skills」区，点 `+` 添加 (与工具列表并列，同样支持变量注入):

![Agent 节点编辑面板:Skills 区添加入口](./images/02-10-Agent%E8%8A%82%E7%82%B9%E6%8C%82%E8%BD%BDSkill.png)

两处的选择弹窗一致：列出**自定义 Skill** 与带「官方」标签的**官方内置 Skill**,也可从弹窗直接「创建 Skill」:

![选择 Skill 弹窗：自定义与官方 Skill，支持直接创建](./images/02-11-%E9%80%89%E6%8B%A9Skill%E5%BC%B9%E7%AA%97.png)

### 动态 Skill(Chatflow 的 Agent 节点)

Skill 不在配置时写死，而是**运行时由前端通过开始节点动态传入**。

- 典型场景：策略分析 —— 用户手动选择某个策略时，前端把对应 Skill 传入，Agent 执行过程中调用该 Skill 完成任务

### 对话中手动触发 (用户可调用)

Skill 详情页开启「**用户可调用**」后，用户在与 Agent 对话时**输入 `/` 唤起 Skill 选择浮层**,浮层展示 Skill 名称、描述与 Skill 标签，选中即在本轮对话中直接触发该 Skill:

![对话输入框中输入 / 唤起 Skill 选择浮层，选中后本轮直接触发](./images/02-7-%E5%AF%B9%E8%AF%9D%E4%B8%AD%E8%A7%A6%E5%8F%91Skill.png)

- 与前两种方式的区别：前两种由 Agent/流程决定何时用 Skill，这种由**用户显式指定**——适合"用户明确知道要执行哪个专项任务"的场景
- Skill 的**描述写得是否清晰**直接影响用户在浮层中的选择效率，命名与描述规范见上文创建第二步

选中 Skill 后，**可在其后追加具体指令一起发送**(如 `/superpowers-brainstorm 帮我罗列下谷歌的可能的分析思路`):消息气泡中 Skill 以标签形式展示，Agent 会**按该 Skill 定义的方法论/模板结构执行输出**——下图中回答严格遵循了 Skill 里定义的 Goal / Constraints / Known context / Risks 框架：

![Skill 执行效果：消息中的 Skill 标签 + 追加指令，回答按 Skill 模板结构输出](./images/02-8-Skill%E6%89%A7%E8%A1%8C%E6%95%88%E6%9E%9C.png)

## 官方内置 Skill

平台提供高质量官方 Skill,**Pro 及以上套餐**可使用。

## 注意事项

1. **数量随套餐**:自定义 Skill 上限 Starter 3 / Pro 20 / Premium 100，超限需删除或升级 —— 见 [1.5 Workspace 与套餐体系](../plans)
2. Skill 内容写法与提示词同理：结论前置、规则可执行、附正反示例，参考 [2.1 提示词编写技巧](../../tutorials/prompt-writing)
3. 从 GitHub 导入的社区 Skill 用于面向客户的 Agent 前，需自行审查内容是否符合 [03-合规要求](../../compliance/index)

## 关联阅读

- [Agent 节点帮助文档](../nodes/agent) — Skill 的挂载位置
