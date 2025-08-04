import express from 'express';
import { config } from './config';
import { ExpensesController } from './expenses/expenses.controller';
import { errorHandler, notFoundHandler } from './helpers/middlewares/errorHandler';
import { validateIdParam, validateDateRange } from './helpers/middlewares/validator';
import logger from './helpers/Logger';

const app = express();
const port = config.port;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const expensesController = new ExpensesController();

// Health check route
app.get('/api/ping', (_req, res) => {
  res.json({ message: 'pong' });
});

// Expense routes
app.post('/api/expenses', expensesController.createExpense.bind(expensesController));
app.get('/api/expenses', validateDateRange, expensesController.getAllExpenses.bind(expensesController));
app.get('/api/expenses/:id', validateIdParam, expensesController.getExpenseById.bind(expensesController));
app.patch('/api/expenses/:id', validateIdParam, expensesController.updateExpense.bind(expensesController));
app.delete('/api/expenses/:id', validateIdParam, expensesController.deleteExpense.bind(expensesController));

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