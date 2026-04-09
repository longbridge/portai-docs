---
sidebar_position: 2
---

# 创建 Skill

本文说明创建 Skill 的四种方式、文件格式要求及命名规则。

## 拖拽文件

在「我的 Skills」列表页，将本地压缩包直接拖拽到页面上，系统自动进入创建流程。这是最快捷的方式，无需点击任何按钮。

系统会自动从 `SKILL.md` 的 frontmatter 中提取名称和描述，预填到下一步的表单中。文件格式要求与方式二相同。

## 上传文件

点击「创建 Skill」卡片进入创建流程，在上传区域拖拽文件或点击「选择文件」从本地选取。适合已在本地准备好 Skill 内容的场景。

**文件格式要求**

上传的压缩包需满足以下要求：

- 支持格式：`.zip` 或 `.skill`
- 压缩包内必须包含 `SKILL.md` 文件
- 可选包含参考文件、脚本等其他资源文件

系统会自动从 `SKILL.md` 的 frontmatter 中提取名称和描述，预填到下一步的表单中。

**SKILL.md 文件格式**

`SKILL.md` 文件的开头必须包含 YAML frontmatter，声明 Skill 的名称和描述，格式如下：

```
---
name: your-skill-name
description: 描述此 Skill 的功能及适用场景，供模型理解何时调用
---

# Skill 标题

在这里编写 Skill 的执行逻辑，包括角色定义、工作流程、使用示例等。
```

frontmatter 字段说明：

| 字段        | 规则                                                                                     |
| ----------- | ---------------------------------------------------------------------------------------- |
| name        | 仅限小写字母、数字和连字符（`-`），最大 64 字符。不能包含 `anthropic`、`claude` 等保留词 |
| description | 最多 1024 字符，不支持换行。请用清晰、准确的语言描述功能和适用场景                       |

**推荐的压缩包目录结构**

对于包含参考资料的复杂 Skill，建议按以下结构组织文件：

```
your-skill.zip
├── SKILL.md              # 核心定义文件（必需）
├── references/           # 参考资料目录（可选）
│   ├── rules.md          # 规则或判断逻辑
│   └── examples.md       # 典型案例
└── scripts/              # 脚本目录（可选）
    └── calculator.py     # 计算脚本
```

## 搜索 Skill

从 GitHub 上的公共 Skill 社区中搜索并导入现有 Skill。目前已有超过 30,000 个 Skill 可供搜索，涵盖数据分析、内容生成、金融分析等多种类型。

适合以下场景：

- 快速获得一个通用能力的基础版本，再根据需要二次修改
- 复用社区内成熟的 Skill，节省从零搭建的时间

搜索结果中每条记录显示 Skill 名称、作者的 GitHub 用户名及描述摘要。选择目标 Skill 后，系统将自动预填名称和描述，并在页面底部显示**来源 URL**，即该 Skill 在 GitHub 上的原始仓库地址。点击来源 URL 可查看 Skill 的完整原始内容。

## 创建空 Skill

创建一个不含任何文件的空白 Skill。适合从零开始构建完全自定义 Skill 的场景，后续可在 Skill 详情页逐步添加 SKILL.md 和其他文件。

## 填写名称和描述

无论使用哪种创建方式，都需要在最后一步填写 Skill 的名称和描述。

**名称**

- 仅限小写字母、数字和连字符（`-`），最大 64 字符
- 建议使用「动词 + 名词」的格式，清晰表达 Skill 的功能，例如：
  - `get-weather-info`
  - `financial-report-analysis`
  - `stock-screener`
- 不能包含 `anthropic`、`claude` 等保留词

**描述**

- 最多 1024 字符，不支持换行
- 描述将被模型读取，用于判断在何种情况下调用该 Skill
- 建议说明：该 Skill 适合处理什么类型的问题，以及不适合哪些场景

描述示例：

> Use this skill when users need in-depth analysis of company financials, valuation models, or long-term investment value. Not suitable for real-time stock price queries or short-term technical analysis.

填写完成后，点击「发布」完成创建。
