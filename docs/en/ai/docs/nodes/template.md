# Template Transformer

## What is it?

The Template Transformer node is used to **transform variables and content into a specified format output according to a preset template**.

It is not responsible for reasoning, nor does it perform business judgments. It does only one thing:

> **"Organize existing content into the format you want."**

## What can you do with it?

#### 1. Unify Output Format

The Template Transformer can:

* Combine multiple variables into a single segment of text
* Output content in a unified format
* Ensure that the results from different branches have a consistent structure

Example:

```text
Title: {{title}}
Content: {{content}}
Summary: {{summary}}
```

---

#### 2. Generate Structured Results

You can use templates to:

* Generate JSON
* Generate text structures with fixed fields
* Prepare standardized data for APIs or downstream systems

---

#### 3. Decouple "Content Generation" from "Content Presentation"

A common practice is:

* Use LLM / Agent to generate content
* Use Template Transformer to organize and output it

This makes the workflow clearer and easier to maintain.

## Input and Output

* **Input**:
  * Any workflow variables
* **Output**:
  * Content generated according to the template
  * Can be used as input for Answer or End nodes

## Usage Rules

* Variables referenced in the template must already exist
* The Template Transformer does not modify variable values; it only generates new content
* It does not perform conditional judgment or logic processing

## Usage Recommendations

* Keep templates as simple and clear as possible
* Do not write complex logic within the template
* It is recommended that external output consistently passes through a Template Transformer
