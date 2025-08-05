import { PrismaClient } from '@prisma/client';
import {
  Expense,
  CreateExpenseData,
  UpdateExpenseData,
  ExpenseFilters,
} from './entity/expense.entity';
import logger from '../helpers/Logger';

export class ExpensesRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(data: CreateExpenseData): Promise<Expense> {
    try {
      const expense = await this.prisma.expense.create({
        data: {
          name: data.name,
          amount: data.amount,
          currency: data.currency,
          category: data.category,
          date: data.date,
        },
      });

      logger.info('Expense created successfully', { id: expense.id });
      return expense;
    } catch (error) {
      logger.error('Failed to create expense:', error);
      throw error;
    }
  }

  async findAll(filters: ExpenseFilters = {}): Promise<Expense[]> {
    try {
      const where: any = {};

      if (filters.fromDate || filters.toDate) {
        where.date = {};
        if (filters.fromDate) {
          where.date.gte = filters.fromDate;
        }
        if (filters.toDate) {
          where.date.lte = filters.toDate;
        }
      }

      if (filters.category) {
        where.category = filters.category;
      }

      const expenses = await this.prisma.expense.findMany({
        where,
        orderBy: {
          date: 'desc',
        },
        ...(filters.offset && { skip: filters.offset }),
        ...(filters.limit && { take: filters.limit }),
      });

      logger.info('Expenses retrieved successfully', {
        count: expenses.length,
      });
      return expenses;
    } catch (error) {
      logger.error('Failed to retrieve expenses:', error);
      throw error;
    }
  }

  async findById(id: number): Promise<Expense | null> {
    try {
      const expense = await this.prisma.expense.findUnique({
        where: { id },
      });

      if (expense) {
        logger.info('Expense retrieved successfully', { id });
      } else {
        logger.warn('Expense not found', { id });
      }

      return expense;
    } catch (error) {
      logger.error('Failed to retrieve expense by ID:', error);
      throw error;
    }
  }

  async update(id: number, data: UpdateExpenseData): Promise<Expense | null> {
    try {
      const expense = await this.prisma.expense.update({
        where: { id },
        data,
      });

      logger.info('Expense updated successfully', { id });
      return expense;
    } catch (error) {
      if (
        error instanceof Error &&
        error.message.includes('Record to update not found')
      ) {
        logger.warn('No expense found to update', { id });
        return null;
      }
      logger.error('Failed to update expense:', error);
      throw error;
    }
  }

  async delete(id: number): Promise<boolean> {
    try {
      await this.prisma.expense.delete({
        where: { id },
      });

      logger.info('Expense deleted successfully', { id });
      return true;
    } catch (error) {
      if (
        error instanceof Error &&
        error.message.includes('Record to delete does not exist')
      ) {
        logger.warn('No expense found to delete', { id });
        return false;
      }
      logger.error('Failed to delete expense:', error);
      throw error;
    }
  }

  async disconnect(): Promise<void> {
    await this.prisma.$disconnect();
  }
}
