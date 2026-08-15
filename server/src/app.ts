import express from 'express';
import { errorMiddleware } from './middleware/error.middleware.js';

export const app = express();

app.use(express.json());

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok' });
});

app.use(errorMiddleware);
