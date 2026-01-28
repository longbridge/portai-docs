# Knowledge Base Overview

On the Infra platform, you can use your own data as "knowledge" inside AI applications. A knowledge base provides domain context to large language models (LLMs), making responses more accurate, relevant, and less prone to hallucination. This is powered by **Retrieval-Augmented Generation (RAG)**.

## How RAG Works

The LLM is not limited to its pretrained data; it also uses your custom knowledge as an additional source of facts:

| Stage | Description |
|-------|-------------|
| **Retrieve** | The system retrieves the most relevant information from your knowledge base for the user's question. |
| **Augment** | Retrieved content and the user's question are sent together to the LLM as augmented context. |
| **Generate** | The LLM produces a more accurate answer using that context. |

Knowledge is stored as files you upload into a knowledge base. You can create multiple knowledge bases by domain, use case, or data source, and connect them to your apps as needed.

## Use Cases

Knowledge bases work well for AI applications that rely on your own data and domain expertise. Common examples include:

- **Customer support**: Answer customer questions using up-to-date product docs, FAQs, and troubleshooting guides.
- **Investment style analysis**: Use holdings and historical data of specific investors to generate style reports and support style-based investment decisions.
- **Financial report analysis**: Upload annual reports and peer financial data to build a financial knowledge base for report analysis and comparison.

## Creating a Knowledge Base

- **Quick setup**: Upload files, set processing rules, then follow the wizard and click **Continue** to finish.
- **Empty knowledge base**: You can create a knowledge base with only a name and add documents later.

## Managing and Tuning Your Knowledge Base

- **Documents and chunks**: View, add, edit, and delete documents and chunks to keep content up to date and consistent.
- **Recall testing**: Run test queries to check how well the knowledge base recalls relevant content.
- **Settings**: Adjust indexing, embedding model, retrieval strategy, and other parameters as needed.

## Using a Knowledge Base in Your App

Connect a knowledge base to your AI app via the **Knowledge Retrieval** node in the application flow. That node supplies context from the knowledge base to your conversations or tasks.
