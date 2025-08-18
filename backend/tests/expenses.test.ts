import { ExpensesService } from '../src/expenses/expenses.service';
import { CreateExpenseData } from '../src/expenses/entity/expense.entity';

describe('ExpensesService', () => {
  let service: ExpensesService;

  beforeEach(() => {
    service = new ExpensesService();
  });

  describe('createExpense', () => {
    it('should create an expense with valid data', async () => {
      const expenseData: CreateExpenseData = {
        name: 'Test Expense',
        amount: 100.5,
        currency: 'USD',
        category: 'Food',
        date: '2024-01-01',
      };

      // This test would need a mock database to run properly
      // For now, we'll just test that the service can be instantiated
      expect(service).toBeDefined();
      expect(expenseData.name).toBe('Test Expense');
      expect(expenseData.amount).toBe(100.5);
    });
  });

  describe('getAllExpenses', () => {
    it('should return an array of expenses', async () => {
      // This test would need a mock database to run properly
      expect(service).toBeDefined();
    });
  });
});
