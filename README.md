<div align="center">

# 🔔 Oryn

**A personal NestJS learning project — signals & event tracking API**

[![NestJS](https://img.shields.io/badge/NestJS-11-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Zod](https://img.shields.io/badge/Zod-4-3E67B1?style=for-the-badge&logo=zod&logoColor=white)](https://zod.dev/)
[![License](https://img.shields.io/badge/license-UNLICENSED-gray?style=for-the-badge)](./LICENSE)

*Learning NestJS by building something real — one module at a time.*

</div>

---

## 🧠 About

**Oryn** is a personal side project I built to get hands-on experience with [NestJS](https://nestjs.com/), the Node.js framework for building scalable and well-structured server-side applications.

Rather than following yet another tutorial, I decided to build a small but meaningful API: a **signals and event tracking system** that collects typed events (deploys, test results, notes, etc.) with metadata and severity levels.

The goal isn't production-readiness — it's learning. But I try to keep the code clean, typed and well-structured as if it were.

---

## ✨ What I explored

- 🏗️ **NestJS architecture** — modules, controllers, services, providers
- ✅ **Schema-first validation** with [Zod](https://zod.dev/) instead of class-validator
- 🎨 **Custom decorators** — built a `@ZodBody()` decorator to validate request bodies using Zod schemas directly in controller method signatures
- 🔁 **Custom pipes** — implemented a `ZodValidationPipe` to integrate Zod validation into the NestJS request lifecycle
- 📦 **TypeScript inference** — letting Zod infer types from schemas to avoid duplication

---

## 📡 API Overview

The API exposes a `signals` resource — typed events with a source, severity and optional metadata.

### Signal shape

```ts
{
  type:     "test_passed" | "test_failed" | "deploy_started" | "deploy_failed" | "note"
  source:   string          // e.g. "ci-pipeline", "my-app"
  title:    string          // human-readable description
  severity: "info" | "warn" | "error"
  metadata: Record<string, unknown>  // optional extra data
}
```

### Endpoints

| Method | Path                | Description         |
| ------ | ------------------- | ------------------- |
| `GET`  | `/signals/ping`     | Health check        |
| `POST` | `/signals`          | Create a new signal |
| `GET`  | `/signals/find-all` | List all signals    |

### Example request

```bash
curl -X POST http://localhost:3000/signals \
  -H "Content-Type: application/json" \
  -d '{
    "type": "deploy_started",
    "source": "github-actions",
    "title": "Deploying oryn v0.1.0",
    "severity": "info",
    "metadata": { "branch": "main", "commit": "abc123" }
  }'
```

---

## 🚀 Getting started

### Prerequisites

- Node.js ≥ 20
- npm or bun

### Install & run

```bash
# Install dependencies
npm install

# Start in development (watch mode)
npm run start:dev

# Start in production mode
npm run start:prod
```

The server will be available at `http://localhost:3000`.

### Run tests

```bash
# Unit tests
npm run test

# End-to-end tests
npm run test:e2e

# Coverage report
npm run test:cov
```

---

## 🗂️ Project structure

```
src/
├── common/
│   └── pipes/
│       └── zod-validation.pipe.ts   # Custom Zod validation pipe
├── decorators/
│   └── decorators.ts                # @ZodBody() custom decorator
├── modules/
│   └── signals/
│       ├── schemas/                 # Zod schemas & inferred types
│       ├── signals.controller.ts
│       ├── signals.service.ts
│       └── signals.module.ts
├── app.module.ts
└── main.ts
```

---

## 🛠️ Tech stack

| Technology                                        | Purpose                            |
| ------------------------------------------------- | ---------------------------------- |
| [NestJS 11](https://nestjs.com/)                  | Server-side framework              |
| [TypeScript 5.7](https://www.typescriptlang.org/) | Type safety                        |
| [Zod 4](https://zod.dev/)                         | Schema validation & type inference |
| [Jest](https://jestjs.io/)                        | Testing                            |

---

## 📝 Notes & learnings

This project is a work in progress. As I explore more NestJS features, I'll keep adding things here — database integration, guards, interceptors, OpenAPI docs, etc.

If you're also learning NestJS and stumble upon this repo, feel free to look around. Feedback and suggestions are always welcome!

---

<div align="center">

Made with ❤️ and a lot of `nest generate` by [Giulio](https://github.com/Remeic)

</div>
