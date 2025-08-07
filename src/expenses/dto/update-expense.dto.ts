import {
  isNonEmptyString,
  isPositiveNumber,
  isValidDateString,
} from '../../helpers/validationUtils';

export interface UpdateExpenseDto {
  name?: string;
  amount?: number;
  currency?: string;
  category?: string;
  date?: string;
}

export function validateUpdateExpenseDto(
  data: Record<string, unknown>
): UpdateExpenseDto {
  const { name, amount, currency, category, date } = data;
  const updateData: UpdateExpenseDto = {};

  if (name !== undefined) {
    if (!isNonEmptyString(name)) {
      throw new Error('Name must be a non-empty string');
    }
    updateData.name = name.trim();
  }

  if (amount !== undefined) {
    if (!isPositiveNumber(amount)) {
      throw new Error('Amount must be a positive number');
    }
    updateData.amount = amount;
  }

  if (currency !== undefined) {
    if (!isNonEmptyString(currency)) {
      throw new Error('Currency must be a non-empty string');
    }
    updateData.currency = currency.trim();
  }

  if (category !== undefined) {
    if (!isNonEmptyString(category)) {
      throw new Error('Category must be a non-empty string');
    }
    updateData.category = category.trim();
  }

  if (date !== undefined) {
    if (!isNonEmptyString(date)) {
      throw new Error('Date must be a non-empty string');
    }

    if (!isValidDateString(date)) {
      throw new Error('Date must be a valid date string');
    }
    updateData.date = date.trim();
  }

  return updateData;
}
