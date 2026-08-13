---
sidebar_position: 1
title: "Knowledge Base"
---

## What It Is

Upload your local documents to the platform, where they are parsed, chunked, and vectorized for the Agent to retrieve — so the Agent answers based on **your private knowledge** instead of relying only on the model's general knowledge. Typical scenarios: product FAQ customer service, internal policy Q&A, and research material analysis.

![Knowledge base home page: the "Create Knowledge Base" entry in empty state](./images/01-1-%E7%9F%A5%E8%AF%86%E5%BA%93%E9%A6%96%E9%A1%B5.png)

## Creation Flow (Four Steps)

1. **Create a knowledge base**: fill in the name and description, and choose the retrieval settings. Three retrieval methods are supported:
   - **Hybrid retrieval** (recommended default): vector + full-text combined
   - **Vector retrieval**: semantic similarity matching, suited for conversational questions
   - **Full-text retrieval**: exact keyword matching, suited for terminology, code, and ID-style queries
   - You can also click "Create Blank Knowledge Base" to create the base first and add files later

   ![Create knowledge base: name, description, and retrieval settings (hybrid retrieval is the recommended default)](./images/01-2-%E5%88%9B%E5%BB%BA%E7%9F%A5%E8%AF%86%E5%BA%93.png)

2. **Upload files**: drag and drop or select files, up to 5 per batch and 10MB each; supports DOCX, PPTX, HTML, PDF, MD, CSV, XLSX, VTT, JPG, PNG, TXT

   ![Upload files: drag-and-drop or select, with supported formats and size limits](./images/01-3-%E4%B8%8A%E4%BC%A0%E6%96%87%E4%BB%B6.png)

   ![Uploaded file list: a large document can be split into multiple files and uploaded in batches (example: a book split into 4 PDFs by page range)](./images/01-4-%E6%96%87%E4%BB%B6%E5%B7%B2%E4%B8%8A%E4%BC%A0.png)

3. **Text settings**: customize the chunk length per file type (default 1024 characters), text preprocessing rules (replace consecutive spaces/line breaks, remove URLs and emails), **semantic chunk enhancement** (enable image content understanding via vlm), and click "Preview Chunks" to **preview the chunking result** — chunking quality directly determines retrieval quality, so this step is worth extra time

   ![Text settings: chunk length, preprocessing rules, semantic enhancement, and chunk preview](./images/01-5-%E6%96%87%E6%9C%AC%E8%AE%BE%E7%BD%AE.png)

4. **Process and finish**: view the embedding progress (each file shows its own steps and percentage), with a summary below of this batch's segmentation mode, chunk length, preprocessing rules, and retrieval settings; you can go straight to the document list page while processing continues in the background

   ![Process and finish: embedding progress and configuration summary](./images/01-6-%E5%A4%84%E7%90%86%E5%B9%B6%E5%AE%8C%E6%88%90.png)

## Day-to-Day Management

- **Knowledge base list**: the knowledge base tab shows all knowledge bases as cards (retrieval method, document count, update time), with a **storage usage progress bar** at the top; the "…" in the top-right corner of each card opens management actions

  ![Knowledge base list page: storage progress bar and knowledge base cards](./images/01-7-%E7%9F%A5%E8%AF%86%E5%BA%93%E5%88%97%E8%A1%A8.png)

- **Document list** (knowledge base detail page): filter by processing status and search by name; shows character count, **retrieval count** (which documents are actually used), upload time, and status (such as "Indexing"); each document has an enable/disable toggle and more actions, and you can keep adding files via "Add File" in the top right

  ![Knowledge base detail page: document list with status and enable toggles](./images/01-8-%E6%96%87%E6%A1%A3%E5%88%97%E8%A1%A8.png)

- **Knowledge base settings**: modify the knowledge base's name, description, and **retrieval settings** (switch between hybrid/vector/full-text at any time; hybrid retrieval offers advanced settings to adjust weights)

  ![Knowledge base settings page: modify name, description, and retrieval settings](./images/01-9-%E7%9F%A5%E8%AF%86%E5%BA%93%E8%AE%BE%E7%BD%AE.png)

- **Chunk editing**: open a single document to view the final chunks handed to the LLM; you can re-edit specific chunks and their keywords; "Add Chunk" inserts custom content with keywords at the top of the document
- **Recall testing**: see the next section

## Recall Testing

The entry is in the top-right corner of the knowledge base detail page (to the left of the Add File button). Enter the **source text** on the left (up to 200 characters), confirm the retrieval method, and click "Test":

![Recall test: source text input, retrieval method, and test button](./images/01-10-%E5%8F%AC%E5%9B%9E%E6%B5%8B%E8%AF%95.png)

The right side shows the matched **recalled chunks**: each chunk displays its index, character count, and **relevance score** (e.g. 0.67), used to judge retrieval quality:

![Recall test result: 3 recalled chunks with chunk info and scores](./images/01-11-%E5%8F%AC%E5%9B%9E%E6%B5%8B%E8%AF%95%E7%BB%93%E6%9E%9C.png)

- Each recalled chunk is labeled with its **source file** at the bottom, so you can confirm which document the content came from
- The "Records" list at the bottom left keeps past tests (retrieval method, query, time), making it easy to **compare results** for the same query across retrieval methods
- Use "questions real users would actually ask" as queries rather than sentences copied verbatim from the documents — verbatim sentences naturally score high and won't reveal real-world performance

![Recall test records: query history list, recalled chunks labeled with source file](./images/01-12-%E5%8F%AC%E5%9B%9E%E6%B5%8B%E8%AF%95%E8%AE%B0%E5%BD%95.png)

## Using It in a Flow

Two mounting points; in both, the Agent **automatically retrieves** from the selected knowledge bases when needed:

**① Agentic Chat**: in the "Knowledge Base" section of the Agent configuration page, click "+ Add Knowledge Base" to mount one (adjacent to the Skills section; see the configuration page screenshot in [Skill System](skill)).

**② Agent node in Chatflow / Workflow**: turn on the "Knowledge Base" switch in the node editing panel and click `+` to select the knowledge bases to mount:

![Agent node: the selection entry appears after the knowledge base switch is turned on](./images/01-13-Agent%E8%8A%82%E7%82%B9%E7%9F%A5%E8%AF%86%E5%BA%93%E5%BC%80%E5%85%B3.png)

Selected knowledge bases are shown as tags (multiple can be mounted):

![Agent node: "Investment Books Knowledge Base" mounted](./images/01-14-Agent%E8%8A%82%E7%82%B9%E7%9F%A5%E8%AF%86%E5%BA%93%E5%B7%B2%E9%80%89.png)

### Write Good Descriptions to Help the Agent Retrieve

The Agent relies on the knowledge base's **name and description** to decide "which questions require this base" — the description should clearly state **the scope of content covered** (e.g. "Investment knowledge base, currently including options-related data"), so the Agent knows to retrieve from it when an options question comes in; a vague or missing description leads to missed retrievals when they should happen:

![Knowledge base settings: a description that clearly states the content scope helps the Agent decide when to retrieve](./images/01-15-%E9%85%8D%E7%BD%AE%E7%9F%A5%E8%AF%86%E5%BA%93%E6%8F%8F%E8%BF%B0.png)

### Retrieval in Action at Runtime

Once configured, when a user's question falls within the knowledge base's coverage, the Agent retrieves automatically: the **reasoning process** shows a "Knowledge Base Retrieval" step (including the search query), and citations in the answer body are marked with `Document +N` tags:

![Asking an options question in chat: the reasoning process shows the knowledge base retrieval step, and the answer carries Document citation tags](./images/01-16-%E5%AF%B9%E8%AF%9D%E4%B8%AD%E7%9F%A5%E8%AF%86%E5%BA%93%E5%8F%AC%E5%9B%9E.png)

Click the "Knowledge Base Retrieval" step to view the **request/response details** — the request contains the target knowledge bases and search query, and the response shows each matched chunk's content, relevance score, and rank, useful for troubleshooting retrieval quality:

![Knowledge base retrieval details: request (dataset_uids/query) and response (chunk content/score/rank)](./images/01-17-%E7%9F%A5%E8%AF%86%E5%BA%93%E6%A3%80%E7%B4%A2%E8%AF%A6%E6%83%85.png)

The prompt should explicitly state "answer only based on retrieved content, and say so honestly when nothing is retrieved" to prevent the model from fabricating answers.

## Notes

1. **Storage scales with plan**: Starter 50MB / Pro 5GB / Premium 20GB; once over the limit, new uploads are blocked, and over-limit files are marked disabled starting from the oldest by upload time (excluded from retrieval); delete files or upgrade to restore — see [Workspace & Plans](../plans)
2. **Embedding billing**: document vectorization consumes usage quota by token
3. **Compliance**: content in customer-facing knowledge bases must come from compliant sources and must not contain PII or undisclosed material information; see [Data Usage & Privacy Restrictions](../../compliance/index)
4. Before going live, run recall tests on typical questions to confirm retrieval quality before publishing

## Related Reading

- [Variables & Data Flow Design](../../tutorials/variables-dataflow) — how retrieval results flow through the pipeline
