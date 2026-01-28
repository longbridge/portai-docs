# Recall Testing

Recall testing lets you run sample queries against your knowledge base, see what gets retrieved, and try different retrieval settings to find a good configuration.

## Open Recall Testing

On the **Knowledge base document list** page or the **Knowledge base settings** page, click the **Recall test** icon in the top-right to open the test view.

## How It Works

| Item | Description |
|------|-------------|
| **Testing** | Enter a question and see which chunks are recalled from the knowledge base and in what order. |
| **Scope of settings** | Any retrieval changes you make in the recall test view apply only to the current test session. They are for comparing strategies and parameters, not for saving. For parameter details, see the retrieval strategy section in **Create a Knowledge Base**. |
| **History** | The page keeps a history of recall tests for this knowledge base (method, query text, time). You can click a past query to copy it for reruns or comparison. |

## Suggested Workflow

- Use questions that are typical in your business and check whether the recalled chunks cover the needed information.
- Switch between retrieval strategies (vector, full-text, hybrid) and try different TopK and score thresholds to compare recall quality and volume.
- Use history to compare results for the same question under different settings and choose a configuration that fits the knowledge base.
