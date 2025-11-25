# Getting Started

Welcome to PortAI Docs! This guide will help you get started quickly.

## Prerequisites

Before you begin, make sure you have the following installed:

- [Bun](https://bun.sh) >= 1.0.0
- Node.js >= 18.0.0 (optional, Bun can replace it)

## Installation

First, clone the project and install dependencies:

```bash
# Clone the project
git clone <your-repo-url>
cd portai-docs

# Install dependencies
bun install
```

## Local Development

Start the local development server:

```bash
bun run docs:dev
```

VitePress will start a hot-reloading development server at `http://localhost:5173`.

## Project Structure

```
portai-docs/
├── docs/
│   ├── .vitepress/
│   │   └── config.mts      # VitePress config file
│   ├── guide/              # Guide documentation
│   ├── api/                # API documentation
│   └── index.md            # Home page
├── package.json
└── README.md
```

## Writing Documentation

All documentation files are located in the `docs/` directory. You can write documentation using Markdown syntax.

### Creating a New Page

1. Create a new `.md` file in the `docs/` directory
2. Add navigation or sidebar configuration in `docs/.vitepress/config.mts`
3. Start writing content

### Markdown Extensions

VitePress supports many Markdown extensions:

::: info
This is an info box
:::

::: tip
This is a tip box
:::

::: warning
This is a warning box
:::

::: danger
This is a danger warning box
:::

## Next Steps

- Learn how to [configure](/guide/configuration) your documentation site
- Learn how to [deploy](/guide/deployment) to production
- Check out the [API Reference](/api/introduction) for more features
