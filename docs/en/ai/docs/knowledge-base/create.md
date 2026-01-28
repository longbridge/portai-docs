# Create a Knowledge Base

This page describes how to create and configure a knowledge base and the main options available.

## Define the Knowledge Base and Retrieval Method

Go to **My Knowledge Base** → **Create New Knowledge Base**.

In this step you define:

- **Name** and **Description**: To identify and describe the knowledge base.
- **Retrieval settings**: How the system finds and extracts relevant content from your documents when it receives a user query, so the LLM can use it.

Three retrieval strategies are supported. See the table below and the sections that follow.

| Strategy | Summary |
|----------|---------|
| **Vector retrieval** | Turns the question into a vector and compares it to document vectors to return the most similar chunks. |
| **Full-text retrieval** | Builds a full-text index over documents and returns chunks that match the user’s keywords. |
| **Hybrid retrieval** | Runs both full-text and vector retrieval, then merges and reranks the results. |

### Vector retrieval

**What it does**: Converts the user’s question into a query vector, compares it to document vectors by similarity, and returns the closest chunks.

**Options**:

| Option | Description |
|--------|-------------|
| **Rerank model** | Off by default. When on, reranks vector-retrieval results to improve accuracy of the chunks sent to the LLM. |
| **TopK** | Number of most similar chunks to return. The system may adjust this based on the model’s context window. Default is 3; higher values return more chunks. |
| **Score threshold** | Minimum similarity score; only chunks above this value are returned. Off by default; higher values return fewer chunks. |

### Full-text retrieval

**What it does**: Builds a full-text index so users can query by any word and get back chunks that contain those words.

**Options**:

| Option | Description |
|--------|-------------|
| **Rerank model** | Off by default. When on, reranks full-text results to improve chunk quality. |
| **TopK** | Number of chunks to return. The system may adjust this based on context. Default is 3. |
| **Score threshold** | Only chunks with scores above this value are returned. Off by default; higher values return fewer chunks. |

### Hybrid retrieval

**What it does**: Runs both full-text and vector retrieval, then merges and reranks the results into a single set of chunks.

**Options**:

| Option | Description |
|--------|-------------|
| **Weight** | Balance between semantic (vector) and keyword (full-text) retrieval. Weight 1 for semantic = vector-only, which helps with paraphrasing and cross-language matching. Weight 1 for keyword = full-text only, which suits exact terms and lower compute. You can also set a custom mix for your use case. |
| **Rerank model** | Off by default. When on, reranks hybrid results. |
| **TopK** | Number of chunks to return. Default is 3. |
| **Score threshold** | Only chunks above this score are returned. Off by default. |

After name, description, and retrieval settings, you can either **Create empty knowledge base** to finish, or click **Create** to go to the file upload step.

## Upload Files

- **Count and size**: Up to 5 files per upload; each file up to 10 MB.
- **Formats**: DOCX, PPTX, HTML, PDF, MD, CSV, XLSX, VTT, JPG, PNG, TXT.
- **Source**: Only local upload is supported. Web or other external sources are not supported.

## Text and Chunking Settings

This step preprocesses your content and splits it into **chunks**, which are the units used for retrieval. Chunk quality directly affects recall and answer quality.

- **Chunk length**: For all formats except TXT, you can set the approximate length (in characters) per chunk; the system will split as close to that as possible.
- **TXT-only options**:
  - **Chunk delimiter**: Characters (or string) that trigger a new chunk. Default is `\n\n` (paragraph breaks).
  - **Chunk overlap**: Number of overlapping characters between adjacent chunks. Some overlap helps keep context and can improve recall; a typical value is 10–25% of the chunk length in tokens.

## Finish Creation

Confirm your upload and chunking settings, then wait for processing to complete. Once done, the knowledge base can be used in your apps for retrieval.
