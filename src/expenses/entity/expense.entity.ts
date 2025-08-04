export interface Expense {
  id: number;
  name: string;
  amount: number;
  currency: string;
  category: string;
  date: string;
  created_at?: string;
  updated_at?: string;
}

export interface CreateExpenseData {
  name: string;
  amount: number;
  currency: string;
  category: string;
  date: string;
}

export interface UpdateExpenseData {
  name?: string;
  amount?: number;
  currency?: string;
  category?: string;
  date?: string;
}

export interface ExpenseFilters {
  fromDate?: string;
  toDate?: string;
  category?: string;
  limit?: number;
  offset?: number;
} 