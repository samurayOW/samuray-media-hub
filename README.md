# Samuray Media Hub

A full-stack application for managing a personal media library. This repository currently contains the initial project foundation only.

## Technology Stack

- React, Vite, TypeScript, Tailwind CSS
- Redux Toolkit and RTK Query
- Node.js, Express, Zod
- PostgreSQL and Prisma

## Project Structure

- `client/` — React frontend
- `server/` — Express REST API
- `docs/` — project documentation

## Development

1. Install dependencies: `npm install`
2. Configure `server/.env` using `server/.env.example` as a reference. A local PostgreSQL database must be available at the configured `DATABASE_URL`.
3. Start both applications: `npm run dev`
4. Or start them separately: `npm run dev --workspace=client` and `npm run dev --workspace=server`

### Local PostgreSQL

The development database is configured through `server/.env`. It is intentionally local and untracked. For the current setup, PostgreSQL listens on `127.0.0.1:5433` and the database is named `samuray_media_hub`. No application tables or Prisma migrations have been created yet.

Other commands:

- `npm run build`
- `npm run lint`
