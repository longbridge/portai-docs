---
sidebar_position: 6
title: "用 Skill 快速擴充套件 Agent 能力"
---

> 本篇由 [2.5 模式與模型選型技巧](mode-model-selection) 原「技巧四」獨立而來。

## 場景

想讓 Agent 具備某個領域的專業方法 (如財報分析框架、行業研究 checklist、寫作風格規範),從零自己寫 Skill 太慢。

Skill 本質是"按需載入的方法/知識包"——而網際網路上已經有大量打磨好的提示詞與方法論 (GitHub 的 awesome-prompts 類倉庫、技術部落格、公開的分析框架)。把它們改造成**自定義 Skill** 掛載到 Agent 上，是成本最低的能力擴充套件方式。

平臺對此有原生支援：建立 Skill 時選擇「搜尋 Skill」,可**聯網搜尋 GitHub 上的社群 Skill 直接匯入**(見 [1.7.2 Skill 體系 · 三種建立方式](../basics/capabilities/skill));搜不到現成 Skill 的，再按下面的流程自己改造。

## 四步流程

1. **搜**:優先用平臺內建的「搜尋 Skill」按關鍵詞檢索 (如 superpowers);沒有現成 Skill 的，用「主題 + prompt / framework / checklist / skill」等關鍵詞在 GitHub、技術社群檢索候選內容
2. **篩**:只要"可執行"的內容——有步驟、有判斷標準、有正反例;空泛的概念科普做不成好 Skill
3. **改**:按 Skill 寫法重構——結論前置、規則可執行、附示例 (寫法參考 [2.1 提示詞編寫技巧](prompt-writing) 與 [1.7.2 Skill 體系](../basics/capabilities/skill));刪掉與平臺無關的工具指令，金融場景剔除薦股/收益承諾類內容並補上合規紅線 (見 [3.1 合規要求](../compliance/index))
4. **驗**:掛載後用正常/邊界/越界三類用例試執行，確認 Skill 生效且與已有提示詞不衝突

## 注意

- 注意來源的**版權與許可**,確認可用後再改造使用
- 網上內容質量參差，**人工稽核後再掛載**,上線後用 bad case 持續迭代;直接匯入的社群 Skill 用於面向客戶的 Agent 前，同樣需自行審查合規性
- 自定義 Skill 數量上限隨套餐 (Starter 3 / Pro 20 / Premium 100),優先沉澱高頻使用的領域方法

## 關聯閱讀

- [1.7.2 Skill 體系](../basics/capabilities/skill) — Skill 的建立 (含搜尋匯入)、寫法與掛載
- [2.1 提示詞編寫技巧](prompt-writing) — Skill 內容的寫法同提示詞
- [3.1 合規要求](../compliance/index) — 面向客戶 Agent 的內容合規
