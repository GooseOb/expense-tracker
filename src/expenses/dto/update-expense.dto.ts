export interface UpdateExpenseDto {
  name?: string;
  amount?: number;
  currency?: string;
  category?: string;
  date?: string;
}

export function validateUpdateExpenseDto(data: any): UpdateExpenseDto {
  const { name, amount, currency, category, date } = data;
  const updateData: UpdateExpenseDto = {};

  if (name !== undefined) {
    if (typeof name !== 'string' || name.trim().length === 0) {
      throw new Error('Name must be a non-empty string');
    }
    updateData.name = name.trim();
  }

  if (amount !== undefined) {
    if (typeof amount !== 'number' || amount <= 0) {
      throw new Error('Amount must be a positive number');
    }
    updateData.amount = amount;
  }

  if (currency !== undefined) {
    if (typeof currency !== 'string' || currency.trim().length === 0) {
      throw new Error('Currency must be a non-empty string');
    }
    updateData.currency = currency.trim();
  }

  if (category !== undefined) {
    if (typeof category !== 'string' || category.trim().length === 0) {
      throw new Error('Category must be a non-empty string');
    }
    updateData.category = category.trim();
  }

  if (date !== undefined) {
    if (typeof date !== 'string' || date.trim().length === 0) {
      throw new Error('Date must be a non-empty string');
    }
    
    // Validate date format
    const dateObj = new Date(date);
    if (isNaN(dateObj.getTime())) {
      throw new Error('Date must be a valid date string');
    }
    updateData.date = date.trim();
  }

  return updateData;
} 