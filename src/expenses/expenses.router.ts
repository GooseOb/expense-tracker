import { Router } from 'express';
import { ExpensesController } from './expenses.controller';
import {
  validateIdParam,
  validateDateRange,
} from '../helpers/middlewares/validator';

const expensesRouter = Router();
const expensesController = new ExpensesController();

expensesRouter.post(
  '/',
  expensesController.createExpense.bind(expensesController)
);
expensesRouter.get(
  '/',
  validateDateRange,
  expensesController.getAllExpenses.bind(expensesController)
);
expensesRouter.get(
  '/:id',
  validateIdParam,
  expensesController.getExpenseById.bind(expensesController)
);
expensesRouter.patch(
  '/:id',
  validateIdParam,
  expensesController.updateExpense.bind(expensesController)
);
expensesRouter.delete(
  '/:id',
  validateIdParam,
  expensesController.deleteExpense.bind(expensesController)
);

export { expensesRouter };
