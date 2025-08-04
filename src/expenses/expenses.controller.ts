import { Request, Response, NextFunction } from 'express';
import { ExpensesService } from './expenses.service';
import { validateCreateExpenseDto } from './dto/create-expense.dto';
import { validateUpdateExpenseDto } from './dto/update-expense.dto';
import { ValidationException } from '../helpers/Exception';

export class ExpensesController {
  private service: ExpensesService;

  constructor() {
    this.service = new ExpensesService();
  }

  async createExpense(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const validatedData = validateCreateExpenseDto(req.body);
      const expense = await this.service.createExpense(validatedData);

      res.status(201).json({
        success: true,
        data: expense,
      });
    } catch (error) {
      if (error instanceof Error) {
        next(new ValidationException(error.message));
      } else {
        next(error);
      }
    }
  }

  async getAllExpenses(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { fromDate, toDate, category, limit, offset } = req.query;

      const filters = {
        ...(fromDate && { fromDate: fromDate as string }),
        ...(toDate && { toDate: toDate as string }),
        ...(category && { category: category as string }),
        ...(limit && { limit: parseInt(limit as string, 10) }),
        ...(offset && { offset: parseInt(offset as string, 10) }),
      };

      const expenses = await this.service.getAllExpenses(filters);

      res.status(200).json({
        success: true,
        data: expenses,
        meta: {
          count: expenses.length,
          filters,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  async getExpenseById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const id = parseInt(req.params['id']!, 10);
      const expense = await this.service.getExpenseById(id);

      res.status(200).json({
        success: true,
        data: expense,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateExpense(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const id = parseInt(req.params['id']!, 10);
      const validatedData = validateUpdateExpenseDto(req.body);
      const expense = await this.service.updateExpense(id, validatedData);

      res.status(200).json({
        success: true,
        data: expense,
      });
    } catch (error) {
      if (error instanceof Error) {
        next(new ValidationException(error.message));
      } else {
        next(error);
      }
    }
  }

  async deleteExpense(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const id = parseInt(req.params['id']!, 10);
      await this.service.deleteExpense(id);

      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}
