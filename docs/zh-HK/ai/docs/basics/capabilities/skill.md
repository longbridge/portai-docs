---
sidebar_position: 2
title: "Skill 體系"
---

## 是什麼

Skill 是面向 Agent 的**動態上下文管理與能力擴充套件機制**:把某個領域的方法論、規則、工具組合打包成可複用的能力包，Agent 在需要時按需載入 —— 避免把所有內容塞進 System Prompt 導致上下文臃腫，提升響應質量與執行效率。

一句話理解：**System Prompt 是 Agent 的性格，Skill 是 Agent 可隨取隨用的專業技能。**

## 三種建立方式

![Skills 頁空態:「建立 Skill」入口，支援直接拖拽 Skill 檔案到頁面](./images/02-1-Skill%E9%A6%96%E9%A1%B5.png)

| 方式 | 適用場景 |
|------|---------|
| 手動建立與編輯 (建立空 Skill) | 從零沉澱自己的方法論 |
| 上傳 Skill 壓縮包 | 導入團隊已有的 Skill 資產 |
| 聯網搜尋 GitHub Skill 並匯入 | 複用社群成熟 Skill |

建立流程分兩步：**① 上傳/搜尋/建空 → ② 命名和描述 → 釋出**。

**第一步**:預設為上傳方式，支援 `.zip` 或 `.skill` 檔案 (需包含 `SKILL.md`);下方「其他建立方式」可切換為**搜尋 Skill** 或**建立空 Skill**:

![建立 Skill 第一步：上傳 .zip/.skill,或切換搜尋 Skill / 建立空 Skill](./images/02-2-%E5%88%9B%E5%BB%BASkill%E4%B8%8A%E4%BC%A0.png)

選擇「搜尋 Skill」可**聯網搜尋 GitHub 上的社群 Skill**,按關鍵詞檢索 (如 superpowers 系列),點選即可匯入：

![搜尋 GitHub Skill:關鍵詞檢索社群 Skill，展示名稱、作者與描述](./images/02-3-%E6%90%9C%E7%B4%A2GitHubSkill.png)

**第二步**:命名和描述——系統自動從上傳/匯入的檔案中提取名稱與描述，可手動修改;確認後點擊「釋出」:

![命名你的 Skill:名稱、描述、來源 URL 與工具掛載，確認後釋出](./images/02-4-%E5%91%BD%E5%90%8D%E4%B8%8E%E5%8F%91%E5%B8%83.png)

- **名稱規則**:僅限小寫字母、數字和連字元，最大 64 字元
- **描述**:用準確的語言描述功能與適用場景 (方便模型判斷何時呼叫),**不支援換行**
- 從 GitHub 匯入的 Skill 自動記錄**來源 URL**;可在此步為 Skill 掛載工具

## Skill 詳情與編輯

釋出後進入 Skill 詳情頁：

![Skill 詳情頁：使用者可呼叫開關、工具、檔案瀏覽器與 SKILL.md 內容預覽](./images/02-5-Skill%E8%AF%A6%E6%83%85.png)

- **使用者可呼叫**:開關，開啟後用戶可在對話中輸入 `/` 直接觸發該 Skill
- **工具**:檢視/新增 Skill 掛載的工具;更新 Skill 時會保留已新增的工具
- **檔案瀏覽器**:檢視 Skill 內的檔案列表，支援建立檔案/資料夾、「新增檔案」補充資產
- **內容預覽**:選中檔案 (如 `SKILL.md`) 直接預覽渲染效果，點「編輯」進入編輯模式

編輯模式提供**編輯器/預覽**雙 tab,`SKILL.md` 頂部為 frontmatter(`name`、`description`),正文即 Skill 的方法論內容，改完「儲存檔案」生效：

![編輯 SKILL.md:編輯器/預覽切換，frontmatter(name/description)+正文](./images/02-6-%E7%BC%96%E8%BE%91SKILLmd.png)

## 三種使用方式

### 固定 Skill(Agentic Chat / Chatflow / Workflow)

把 Skill 掛載到 Agent 上，由 Agent 根據任務上下文**自動判斷**是否呼叫，並在合適階段執行相關能力。

- 典型場景：財報分析 —— Agent 收到財報類問題時自動載入財報分析 Skill

兩個掛載位置：

**① Agentic Chat**:Agent 配置頁的「Skills」區 (知識庫下方),點「+ 新增 Skill」掛載：

![Agentic Chat 配置頁:Skills 區掛載 Skill](./images/02-9-AgenticChat%E6%8C%82%E8%BD%BDSkill.png)

**② Chatflow / Workflow 的 Agent 節點**:節點編輯面板的「Skills」區，點 `+` 新增 (與工具列表並列，同樣支援變數注入):

![Agent 節點編輯面板:Skills 區新增入口](./images/02-10-Agent%E8%8A%82%E7%82%B9%E6%8C%82%E8%BD%BDSkill.png)

兩處的選擇彈窗一致：列出**自定義 Skill** 與帶「官方」標籤的**官方內建 Skill**,也可從彈窗直接「建立 Skill」:

![選擇 Skill 彈窗：自定義與官方 Skill，支援直接建立](./images/02-11-%E9%80%89%E6%8B%A9Skill%E5%BC%B9%E7%AA%97.png)

### 動態 Skill(Chatflow 的 Agent 節點)

Skill 不在配置時寫死，而是**執行時由前端通過開始節點動態傳入**。

- 典型場景：策略分析 —— 使用者手動選擇某個策略時，前端把對應 Skill 傳入，Agent 執行過程中呼叫該 Skill 完成任務

### 對話中手動觸發 (使用者可呼叫)

Skill 詳情頁開啟「**使用者可呼叫**」後，使用者在與 Agent 對話時**輸入 `/` 喚起 Skill 選擇浮層**,浮層展示 Skill 名稱、描述與 Skill 標籤，選中即在本輪對話中直接觸發該 Skill:

![對話輸入框中輸入 / 喚起 Skill 選擇浮層，選中後本輪直接觸發](./images/02-7-%E5%AF%B9%E8%AF%9D%E4%B8%AD%E8%A7%A6%E5%8F%91Skill.png)

- 與前兩種方式的區別：前兩種由 Agent/流程決定何時用 Skill，這種由**使用者顯式指定**——適合"使用者明確知道要執行哪個專項任務"的場景
- Skill 的**描述寫得是否清晰**直接影響使用者在浮層中的選擇效率，命名與描述規範見上文建立第二步

選中 Skill 後，**可在其後追加具體指令一起傳送**(如 `/superpowers-brainstorm 幫我羅列下谷歌的可能的分析思路`):訊息氣泡中 Skill 以標籤形式展示，Agent 會**按該 Skill 定義的方法論/模板結構執行輸出**——下圖中回答嚴格遵循了 Skill 裡定義的 Goal / Constraints / Known context / Risks 框架：

![Skill 執行效果：訊息中的 Skill 標籤 + 追加指令，回答按 Skill 模板結構輸出](./images/02-8-Skill%E6%89%A7%E8%A1%8C%E6%95%88%E6%9E%9C.png)

## 官方內建 Skill

平臺提供高質量官方 Skill,**Pro 及以上套餐**可使用。

## 注意事項

1. **數量隨套餐**:自定義 Skill 上限 Starter 3 / Pro 20 / Premium 100，超限需刪除或升級 —— 見 [1.5 Workspace 與套餐體系](../plans)
2. Skill 內容寫法與提示詞同理：結論前置、規則可執行、附正反示例，參考 [2.1 提示詞編寫技巧](../../tutorials/prompt-writing)
3. 從 GitHub 匯入的社群 Skill 用於面向客戶的 Agent 前，需自行審查內容是否符合 [03-合規要求](../../compliance/index)

## 關聯閱讀

- [Agent 節點幫助文件](../nodes/agent) — Skill 的掛載位置
