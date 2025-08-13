import {
  Expense,
  CreateExpenseData,
  UpdateExpenseData,
  ExpenseFilters,
} from './entity/expense.entity';
import { ExpensesRepository } from './expenses.repository';
import { NotFoundException } from '../helpers/Exception';
import logger from '../helpers/Logger';

export class ExpensesService {
  private repository: ExpensesRepository;

  constructor() {
    this.repository = new ExpensesRepository();
  }

  async createExpense(data: CreateExpenseData): Promise<Expense> {
    try {
      logger.info('Creating new expense', { data });
      const expense = await this.repository.create(data);
      logger.info('Expense created successfully', { id: expense.id });
      return expense;
    } catch (error) {
      logger.error('Failed to create expense in service:', error);
      throw error;
    }
  }

  async getAllExpenses(filters: ExpenseFilters = {}): Promise<Expense[]> {
    try {
      logger.info('Retrieving all expenses', { filters });
      const expenses = await this.repository.findAll(filters);
      logger.info('Expenses retrieved successfully', {
        count: expenses.length,
      });
      return expenses;
    } catch (error) {
      logger.error('Failed to retrieve expenses in service:', error);
      throw error;
    }
  }

  async getExpenseById(id: number): Promise<Expense> {
    try {
      logger.info('Retrieving expense by ID', { id });
      const expense = await this.repository.findById(id);

      if (!expense) {
        logger.warn('Expense not found', { id });
        throw new NotFoundException(`Expense with ID ${id} not found`);
      }

      logger.info('Expense retrieved successfully', { id });
      return expense;
    } catch (error) {
      logger.error('Failed to retrieve expense by ID in service:', error);
      throw error;
    }
  }

  async updateExpense(id: number, data: UpdateExpenseData): Promise<Expense> {
    try {
      logger.info('Updating expense', { id, data });
      const expense = await this.repository.update(id, data);

      if (!expense) {
        logger.warn('Expense not found for update', { id });
        throw new NotFoundException(`Expense with ID ${id} not found`);
      }

      logger.info('Expense updated successfully', { id });
      return expense;
    } catch (error) {
      logger.error('Failed to update expense in service:', error);
      throw error;
    }
  }

  async deleteExpense(id: number): Promise<void> {
    try {
      logger.info('Deleting expense', { id });
      const deleted = await this.repository.delete(id);

      if (!deleted) {
        logger.warn('Expense not found for deletion', { id });
        throw new NotFoundException(`Expense with ID ${id} not found`);
      }

      logger.info('Expense deleted successfully', { id });
    } catch (error) {
      logger.error('Failed to delete expense in service:', error);
      throw error;
    }
  }
}
