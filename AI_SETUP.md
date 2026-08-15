````md
# Samuray Media Hub — Initial Project Setup

## Purpose

Set up the initial development environment for **Samuray Media Hub**.

The repository is currently empty. Create the project foundation only.

### IMPORTANT

Do NOT:

- implement application/business functionality;
- create database models;
- create Prisma migrations;
- implement authentication;
- implement email verification;
- implement API endpoints except `/api/health`;
- invent domain entities or database fields;
- introduce additional frameworks or libraries without explicit approval;
- make architectural changes to the decisions below.

---

# 1. Project Architecture

Samuray Media Hub is a **full-stack modular monolith** using a **monorepo**.

```text
Samuray Media Hub
│
├── client/        React + Vite frontend
├── server/        Node.js + Express backend
├── docs/          Project documentation
│
├── package.json
├── README.md
├── .gitignore
└── AI_SETUP.md
````

Frontend and backend are separate applications but belong to the same Git repository.

---

# 2. Technology Stack

## Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* Redux Toolkit
* RTK Query

## Backend

* Node.js
* Express
* TypeScript
* Zod
* Prisma

## Database

* PostgreSQL
* Prisma ORM

## Repository

* Git
* npm workspaces
* Monorepo

---

# 3. Root Workspace

Configure the repository as an npm workspace.

Root `package.json` should be private and contain:

```json
{
  "private": true,
  "workspaces": [
    "client",
    "server"
  ]
}
```

Do not install application-specific dependencies in the root unless genuinely required.

The root should provide convenient scripts for:

```text
npm run dev
npm run build
npm run lint
```

The individual `client` and `server` workspaces must also be runnable independently.

---

# 4. Frontend Setup

Inside `client/`, create a React + TypeScript application using **Vite**.

Use the standard Vite React TypeScript setup.

Target structure:

```text
client/
├── src/
│   ├── app/
│   ├── pages/
│   ├── widgets/
│   ├── features/
│   ├── entities/
│   └── shared/
│
├── public/
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

Do not implement actual application features.

---

# 5. Frontend Dependencies

Install/configure only:

* React
* React DOM
* TypeScript
* Vite
* Redux Toolkit
* React Redux
* RTK Query
* Tailwind CSS

Do NOT install:

* authentication libraries;
* Axios;
* form libraries;
* UI component libraries;
* additional state-management libraries;
* React Router unless it is absolutely required by the current setup.

Do not make architectural decisions about routing yet.

---

# 6. Tailwind CSS

Configure Tailwind CSS for the Vite React application.

Verify that Tailwind works correctly.

A minimal test component is acceptable only for verifying the setup.

Do not create a UI/design system.

---

# 7. Redux Toolkit

Install Redux Toolkit and React Redux.

Create the basic Redux store:

```text
client/src/app/store.ts
```

Configure an empty store.

Do NOT create:

* authSlice;
* mediaSlice;
* librarySlice;
* userSlice;
* API endpoints.

Those will be implemented later.

---

# 8. Backend Setup

Inside `server/`, create a Node.js + Express + TypeScript application.

Target structure:

```text
server/
├── src/
│   ├── config/
│   ├── middleware/
│   ├── modules/
│   ├── services/
│   ├── utils/
│   ├── app.ts
│   └── server.ts
│
├── prisma/
│
├── package.json
├── tsconfig.json
└── ...
```

Do not implement application modules yet.

---

# 9. Express

Configure a minimal Express application.

The server must:

* start successfully;
* use a configurable port;
* parse JSON requests;
* expose:

```text
GET /api/health
```

Response:

```json
{
  "status": "ok"
}
```

Do not create any other API endpoints.

---

# 10. Environment Variables

Create:

```text
server/.env
server/.env.example
```

`.env` must NOT be committed.

`.env.example` must contain placeholders only.

Initially prepare:

```text
PORT=
DATABASE_URL=
```

Do not add authentication, JWT, Resend, or other future configuration yet.

---

# 11. Environment Validation

Use **Zod** for backend environment validation.

Create:

```text
server/src/config/env.ts
```

Validate required environment variables when the server starts.

Keep the implementation simple.

---

# 12. Prisma

Install Prisma and Prisma Client in the `server` workspace.

Initialize Prisma.

Create:

```text
server/prisma/schema.prisma
```

Configure PostgreSQL as the database provider.

Use:

```text
DATABASE_URL
```

from the environment.

The initial Prisma schema must contain only the datasource and generator configuration.

### VERY IMPORTANT

Do NOT:

* create User;
* create Media;
* create Library;
* create Collection;
* create any other application model;
* create relations;
* create indexes;
* create migrations;
* run `prisma migrate`.

The database model will be designed separately in Section 5 of the project documentation.

---

# 13. Database Documentation Process

Database design will follow:

```text
5. Database
├── 5.1 Database Overview
├── 5.2 ER Diagram
├── 5.3 Tables
├── 5.4 Relationships
├── 5.5 Indexes
└── 5.6 Migrations
```

Only after this design is finalized should Prisma models and migrations be created.

Do not invent schema details now.

---

# 14. Backend Error Handling

Prepare basic centralized error-handling infrastructure.

Create:

```text
server/src/middleware/error.middleware.ts
```

Keep it minimal.

Do not implement domain-specific error types yet.

Detailed error-handling behavior is already defined in the project architecture documentation.

---

# 15. TypeScript

Configure TypeScript with strict mode enabled.

Use separate TypeScript configuration for frontend and backend where appropriate.

Ensure both applications compile successfully.

---

# 16. ESLint / Formatting

Configure ESLint for the project.

Use Prettier if appropriate.

Keep configuration simple and conventional.

Do not introduce unnecessary linting rules or tools.

---

# 17. Git Configuration

Create a root `.gitignore`.

It must ignore at least:

```text
node_modules/
dist/
.env
.env.*
!.env.example
coverage/
*.log
```

Do not ignore:

```text
.env.example
```

The repository must be ready for the first Git commit.

---

# 18. README

Create a concise root `README.md`.

Include:

## Samuray Media Hub

Short project description.

## Technology Stack

List:

* React
* Vite
* TypeScript
* Tailwind CSS
* Redux Toolkit
* RTK Query
* Node.js
* Express
* Zod
* PostgreSQL
* Prisma

## Project Structure

Explain:

```text
client/
server/
docs/
```

## Development

Explain:

1. how to install dependencies;
2. how to configure environment variables;
3. how to start the frontend;
4. how to start the backend;
5. how to run the project from the root.

Do not document features that do not exist yet.

---

# 19. Future Architecture Constraints

These decisions are already made.

## Repository

Monorepo.

## Frontend

```text
React
+
Vite
+
TypeScript
+
Tailwind CSS
+
Redux Toolkit
+
RTK Query
```

## Backend

```text
Node.js
+
Express
+
TypeScript
+
Zod
+
Prisma
```

## Database

```text
PostgreSQL
```

## Authentication

Future authentication will use:

```text
JWT
+
Access Token
+
Refresh Token
+
Email Verification
```

Email verification will use:

```text
Resend
```

However, authentication and email functionality must NOT be implemented during this setup task.

## Architecture

Use a modular monolith.

Do NOT introduce microservices.

---

# 20. Development Commands

Ensure these capabilities exist:

```text
npm run dev
npm run build
npm run lint
```

The root development command should start both frontend and backend if practical.

Individual workspace commands must also work.

---

# 21. Verification

After setup, verify all of the following.

### Frontend

The Vite development server starts successfully.

### Backend

The Express development server starts successfully.

### Health Check

```text
GET /api/health
```

returns:

```json
{
  "status": "ok"
}
```

### TypeScript

Both workspaces compile successfully.

### ESLint

Linting succeeds.

### Prisma

Prisma is initialized and recognizes PostgreSQL configuration.

Do NOT run migrations.

---

# 22. Final Report

After completing the setup, report:

1. directories created;
2. files created;
3. dependencies installed;
4. scripts configured;
5. frontend setup status;
6. backend setup status;
7. `/api/health` status;
8. Prisma setup status;
9. TypeScript status;
10. ESLint status;
11. any warnings;
12. any decisions that require my approval.

Do not modify this `AI_SETUP.md` file.

---

# 23. Critical Rule

If something is not specified:

1. prefer the simplest conventional solution;
2. do not add new technologies;
3. do not redesign the architecture;
4. do not invent domain models;
5. do not implement future functionality;
6. if a decision would materially affect the architecture, stop and report it instead of deciding yourself.

The goal of this task is ONLY to establish the clean initial development foundation for Samuray Media Hub.

```
```
