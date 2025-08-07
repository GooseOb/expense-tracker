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

  /**
   * Creates a new expense based on the provided data.
   * @param req - The Express request object containing the expense data in the body.
   * @param res - The Express response object used to send the created expense.
   * @param next - The Express next function to pass errors to the error handler.
   * @throws {ValidationException} If the provided data fails validation.
   * @returns {Promise<void>} Resolves with a 201 response containing the created expense.
   */
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

  /**
   * Retrieves a list of expenses based on optional query filters.
   * @param req - The Express request object containing query parameters (fromDate, toDate, category, limit, offset).
   * @param res - The Express response object used to send the list of expenses.
   * @param next - The Express next function to pass errors to the error handler.
   * @returns {Promise<void>} Resolves with a 200 response containing the expenses and metadata.
   */
  async getAllExpenses(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { fromDate, toDate, category, limit, offset } = req.query;

      const filters = {
        ...(fromDate && { fromDate: fromDate.toString() }),
        ...(toDate && { toDate: toDate.toString() }),
        ...(category && { category: category.toString() }),
        ...(limit && { limit: parseInt(limit.toString(), 10) }),
        ...(offset && { offset: parseInt(offset.toString(), 10) }),
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

  /**
   * Retrieves a single expense by its ID.
   * @param req - The Express request object containing the expense ID in params.
   * @param res - The Express response object used to send the expense data.
   * @param next - The Express next function to pass errors to the error handler.
   * @returns {Promise<void>} Resolves with a 200 response containing the expense data.
   */
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

  /**
   * Updates an existing expense by its ID with the provided data.
   * @param req - The Express request object containing the expense ID in params and update data in the body.
   * @param res - The Express response object used to send the updated expense.
   * @param next - The Express next function to pass errors to the error handler.
   * @throws {ValidationException} If the provided data fails validation.
   * @returns {Promise<void>} Resolves with a 200 response containing the updated expense.
   */
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

  /**
   * Deletes an expense by its ID.
   * @param req - The Express request object containing the expense ID in params.
   * @param res - The Express response object used to send a 204 status.
   * @param next - The Express next function to pass errors to the error handler.
   * @returns {Promise<void>} Resolves with a 204 response indicating successful deletion.
   */
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
