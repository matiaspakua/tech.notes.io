---
title: "Herramientas de AI"
tags:
  - inteligencia-artificial
  - ai
  - notas
---

[← Inicio](https://matiaspakua.github.io/tech.notes.io)

# Herramientas de AI


## Ecosistema de Herramientas de AI

```mermaid
flowchart TD
    DEV["👨‍💻 Desarrollador"] --> CLI["💻 CLI / Agentes\nde Coding"]
    DEV --> PROTO["🧪 Protocolos\ny Estándares"]
    DEV --> PROMPT["📝 Prompt\nEngineering"]
    DEV --> TOOLS["🛠️ Herramientas\nde Exploración"]

    CLI --> GEMCLI["Gemini CLI"]
    CLI --> OPENCODE["OpenCode"]
    CLI --> CLAUDE["Claude Code"]

    PROTO --> MCP["MCP\n(Model Context Protocol)"]
    PROTO --> SKILLS["Agent Skills"]
    PROTO --> RULES["AI Coding Rules"]

    PROMPT --> FEWSHOT["Few-Shot\nPrompting"]
    PROMPT --> CHAIN["Chain of Thought"]

    TOOLS --> TOKENIZER["GPT Tokenizer\nPlayground"]
    TOOLS --> GITHUB["GitHub\nIntegrations"]

    style DEV fill:#1e1e2e,stroke:#64ffda,color:#f8f8f2
    style CLI fill:#1e1e2e,stroke:#61dafb,color:#f8f8f2
    style PROTO fill:#1e1e2e,stroke:#bd93f9,color:#f8f8f2
    style PROMPT fill:#1e1e2e,stroke:#ffd700,color:#f8f8f2
    style TOOLS fill:#1e1e2e,stroke:#50fa7b,color:#f8f8f2
```

# Gemini CLI

[Gemini CLI — Google Gemini, GitHub](https://github.com/google-gemini/gemini-cli)

# OpenCode

[OpenCode — opencode.ai](https://opencode.ai/)

# MCP - Model Context Protocol

[Introduction — Model Context Protocol](https://modelcontextprotocol.io/docs/getting-started/intro)

# Agents Skills

- [Agent Skills Overview — Anthropic](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview)
- [Agent Skills Directory — agentskills.io](https://agentskills.io/home)


# Agents Rules (spec)

[AI Coding Rules — aicodingrules.org](https://aicodingrules.org/)


# Prompt Engineering

few-shot

Referencia:
- [Prompt Engineering — Wikipedia](https://en.wikipedia.org/wiki/Prompt_engineering)


# Connect OpenCode and Github

[Connect OpenCode and GitHub — YouTube](https://www.youtube.com/watch?v=-Zr2gI8R-Sk)


# GPT Tokenizer Playground

[GPT Tokenizer Playground — gpt-tokenizer.dev](https://gpt-tokenizer.dev/)

## Notas relacionadas

- [Conceptos de IA](ruta_de_aprendisaje/1.fundamentos_inteligencia_artificial/1_conceptos_generales.md)
- [Generative AI](../software_engineering/generative_ai.md)
- [Claude Code](ruta_de_aprendisaje/claude%20code.md)
