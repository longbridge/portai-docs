# Manage a Knowledge Base

This page describes how to manage documents, chunks, and knowledge base settings.

## Manage Documents

Each uploaded file appears in the knowledge base as a **document**. In the document list you can view and manage all documents, keep or remove them as needed, and use upload time to judge freshness.

The document list supports these actions:

| Action | Description |
|--------|-------------|
| **Add files** | Click **Add files** in the document list to start upload. You choose files, set chunking, and see processing progress. Chunk settings can only be changed at upload or re-upload time; editing chunk settings for a single document in the list is not supported yet. |
| **Delete document** | Permanently deletes the document. This cannot be undone. |
| **Enable / Disable** | Temporarily includes or excludes the document from retrieval. |
| **Edit** | Opens the document and lets you edit chunk content. See **Manage chunks** below. |
| **Rename** | Changes the document’s display name. |

## Manage Chunks

A document is split into one or more **chunks** based on its chunking settings. Chunks are the units used for retrieval. In a document’s chunk list you can view and manage chunks to improve retrieval quality and accuracy.

The chunk list supports these actions:

| Action | Description |
|--------|-------------|
| **Add chunk** | Add a new chunk on the document page. You can set keywords for the chunk to help retrieval match it later. |
| **Delete chunk** | Permanently deletes the chunk. This cannot be undone. |
| **Enable / Disable** | Temporarily includes or excludes the chunk from retrieval. Use the circles next to chunks to select multiple and act on them. Disabled chunks can still be edited. |
| **Add / Edit / Delete keywords** | Maintain keywords for a chunk to make it easier to retrieve. |

## Chunking Tips

After chunking, it’s a good idea to scan each chunk: it should be semantically complete, not cut off mid-sentence, and a reasonable length. That helps retrieval accuracy and relevance.

Common issues and effects:

| Issue | Effect |
|-------|--------|
| **Chunks too short** | Not enough context; easier to lose meaning and get wrong answers. |
| **Chunks too long** | May include irrelevant content, add noise, and reduce retrieval precision. |
| **Broken semantics** | Sentences or paragraphs cut by chunk boundaries can lead to missing or misleading retrieval results. |

## Knowledge Base Settings

Open **Knowledge base settings** from the top-right of the knowledge base page.

Supported actions:

| Action | Description |
|--------|-------------|
| **Change name and description** | Set a custom name and description to identify the knowledge base. The name must be unique; if it duplicates another knowledge base, the change will fail. |
| **Change retrieval settings and model** | Adjust how the knowledge base retrieves content and which model and parameters it uses. For details, see the retrieval strategy section in **Create a Knowledge Base**. |
