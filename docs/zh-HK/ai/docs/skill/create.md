---
sidebar_position: 2
---

# 創建 Skill

本文說明創建 Skill 的四種方式、文件格式要求及命名規則。

## 拖拽文件

在「我的 Skills」列表頁，將本地壓縮包直接拖拽到頁面上，系統自動進入創建流程。這是最快捷的方式，無需點擊任何按鈕。

系統會自動從 `SKILL.md` 的 frontmatter 中提取名稱和描述，預填到下一步的表單中。文件格式要求與上傳文件方式相同。

## 上傳文件

點擊「創建 Skill」卡片進入創建流程，在上傳區域拖拽文件或點擊「選擇文件」從本地選取。適合已在本地準備好 Skill 內容的場景。

**文件格式要求**

上傳的壓縮包需滿足以下要求：

- 支持格式：`.zip` 或 `.skill`
- 壓縮包內必須包含 `SKILL.md` 文件
- 可選包含參考文件、腳本等其他資源文件

系統會自動從 `SKILL.md` 的 frontmatter 中提取名稱和描述，預填到下一步的表單中。

**SKILL.md 文件格式**

`SKILL.md` 文件的開頭必須包含 YAML frontmatter，聲明 Skill 的名稱和描述，格式如下：

```
---
name: your-skill-name
description: 描述此 Skill 的功能及適用場景，供模型理解何時調用
---

# Skill 標題

在這裡編寫 Skill 的執行邏輯，包括角色定義、工作流程、使用示例等。
```

frontmatter 字段說明：

| 字段        | 規則                                                                                     |
| ----------- | ---------------------------------------------------------------------------------------- |
| name        | 僅限小寫字母、數字和連字符（`-`），最大 64 字符。不能包含 `anthropic`、`claude` 等保留詞 |
| description | 最多 1024 字符，不支持換行。請用清晰、準確的語言描述功能和適用場景                       |

**推薦的壓縮包目錄結構**

對於包含參考資料的複雜 Skill，建議按以下結構組織文件：

```
your-skill.zip
├── SKILL.md              # 核心定義文件（必需）
├── references/           # 參考資料目錄（可選）
│   ├── rules.md          # 規則或判斷邏輯
│   └── examples.md       # 典型案例
└── scripts/              # 腳本目錄（可選）
    └── calculator.py     # 計算腳本
```

## 搜尋 Skill

從 GitHub 上的公共 Skill 社區中搜尋並匯入現有 Skill。目前已有超過 30,000 個 Skill 可供搜尋，涵蓋數據分析、內容生成、金融分析等多種類型。

適合以下場景：

- 快速獲得一個通用能力的基礎版本，再根據需要二次修改
- 複用社區內成熟的 Skill，節省從零搭建的時間

搜尋結果中每條記錄顯示 Skill 名稱、作者的 GitHub 用戶名及描述摘要。選擇目標 Skill 後，系統將自動預填名稱和描述，並在頁面底部顯示**來源 URL**，即該 Skill 在 GitHub 上的原始倉庫地址。點擊來源 URL 可查看 Skill 的完整原始內容。

## 創建空 Skill

創建一個不含任何文件的空白 Skill。適合從零開始構建完全自訂 Skill 的場景，後續可在 Skill 詳情頁逐步添加 SKILL.md 和其他文件。

## 填寫名稱和描述

無論使用哪種創建方式，都需要在最後一步填寫 Skill 的名稱和描述。

**名稱**

- 僅限小寫字母、數字和連字符（`-`），最大 64 字符
- 建議使用「動詞 + 名詞」的格式，清晰表達 Skill 的功能，例如：
  - `get-weather-info`
  - `financial-report-analysis`
  - `stock-screener`
- 不能包含 `anthropic`、`claude` 等保留詞

**描述**

- 最多 1024 字符，不支持換行
- 描述將被模型讀取，用於判斷在何種情況下調用該 Skill
- 建議說明：該 Skill 適合處理什麼類型的問題，以及不適合哪些場景

描述示例：

> Use this skill when users need in-depth analysis of company financials, valuation models, or long-term investment value. Not suitable for real-time stock price queries or short-term technical analysis.

填寫完成後，點擊「發布」完成創建。
