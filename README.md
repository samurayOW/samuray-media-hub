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
2. Configure `server/.env` using `server/.env.example` as a reference.
3. Start both applications: `npm run dev`
4. Or start them separately: `npm run dev --workspace=client` and `npm run dev --workspace=server`

Other commands:

- `npm run build`
- `npm run lint`
