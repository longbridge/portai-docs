---
sidebar_position: 6
title: "用 Skill 快速扩展 Agent 能力"
---

> 本篇由 [模式与模型选型技巧](mode-model-selection) 原「技巧四」独立而来。

## 场景

想让 Agent 具备某个领域的专业方法 (如财报分析框架、行业研究 checklist、写作风格规范),从零自己写 Skill 太慢。

Skill 本质是"按需加载的方法/知识包"——而互联网上已经有大量打磨好的提示词与方法论 (GitHub 的 awesome-prompts 类仓库、技术博客、公开的分析框架)。把它们改造成**自定义 Skill** 挂载到 Agent 上，是成本最低的能力扩展方式。

平台对此有原生支持：创建 Skill 时选择「搜索 Skill」,可**联网搜索 GitHub 上的社区 Skill 直接导入**(见 [Skill 体系 · 三种创建方式](../basics/capabilities/skill));搜不到现成 Skill 的，再按下面的流程自己改造。

## 四步流程

1. **搜**:优先用平台内置的「搜索 Skill」按关键词检索 (如 superpowers);没有现成 Skill 的，用「主题 + prompt / framework / checklist / skill」等关键词在 GitHub、技术社区检索候选内容
2. **筛**:只要"可执行"的内容——有步骤、有判断标准、有正反例;空泛的概念科普做不成好 Skill
3. **改**:按 Skill 写法重构——结论前置、规则可执行、附示例 (写法参考 [提示词编写技巧](prompt-writing) 与 [Skill 体系](../basics/capabilities/skill));删掉与平台无关的工具指令，金融场景剔除荐股/收益承诺类内容并补上合规红线 (见 [合规要求](../compliance/index))
4. **验**:挂载后用正常/边界/越界三类用例试运行，确认 Skill 生效且与已有提示词不冲突

## 注意

- 注意来源的**版权与许可**,确认可用后再改造使用
- 网上内容质量参差，**人工审核后再挂载**,上线后用 bad case 持续迭代;直接导入的社区 Skill 用于面向客户的 Agent 前，同样需自行审查合规性
- 自定义 Skill 数量上限随套餐 (Starter 3 / Pro 20 / Premium 100),优先沉淀高频使用的领域方法

## 关联阅读

- [Skill 体系](../basics/capabilities/skill) — Skill 的创建 (含搜索导入)、写法与挂载
- [提示词编写技巧](prompt-writing) — Skill 内容的写法同提示词
- [合规要求](../compliance/index) — 面向客户 Agent 的内容合规
