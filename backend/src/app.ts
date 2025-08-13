import express from 'express';
import { config } from './config';
import {
  errorHandler,
  notFoundHandler,
} from './helpers/middlewares/errorHandler';
import logger from './helpers/Logger';
import { expensesRouter } from './expenses/expenses.router';

const app = express();
const port = config.port;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/api/ping', (_req, res) => {
  res.json({ message: 'pong' });
});

app.use('/api/expenses', expensesRouter);

// 404 handler
app.use(notFoundHandler);

// Error handler (must be last)
app.use(errorHandler);

export function start(): void {
  app.listen(port, () => {
    logger.info(`Server listening on port ${port}`);
  });
}

export default app;
