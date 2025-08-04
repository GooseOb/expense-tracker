export interface CreateExpenseDto {
  name: string;
  amount: number;
  currency: string;
  category: string;
  date: string;
}

export function validateCreateExpenseDto(data: any): CreateExpenseDto {
  const { name, amount, currency, category, date } = data;

  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    throw new Error('Name is required and must be a non-empty string');
  }

  if (typeof amount !== 'number' || amount <= 0) {
    throw new Error('Amount is required and must be a positive number');
  }

  if (!currency || typeof currency !== 'string' || currency.trim().length === 0) {
    throw new Error('Currency is required and must be a non-empty string');
  }

  if (!category || typeof category !== 'string' || category.trim().length === 0) {
    throw new Error('Category is required and must be a non-empty string');
  }

  if (!date || typeof date !== 'string' || date.trim().length === 0) {
    throw new Error('Date is required and must be a non-empty string');
  }

  // Validate date format
  const dateObj = new Date(date);
  if (isNaN(dateObj.getTime())) {
    throw new Error('Date must be a valid date string');
  }

  return {
    name: name.trim(),
    amount,
    currency: currency.trim(),
    category: category.trim(),
    date: date.trim(),
  };
} 