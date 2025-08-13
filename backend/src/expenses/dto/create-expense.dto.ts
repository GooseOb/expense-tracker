import {
  isNonEmptyString,
  isPositiveNumber,
  isValidDateString,
} from '../../helpers/validationUtils';

export interface CreateExpenseDto {
  name: string;
  amount: number;
  currency: string;
  category: string;
  date: string;
}

export function validateCreateExpenseDto(
  data: Record<string, unknown>
): CreateExpenseDto {
  const { name, amount, currency, category, date } = data;

  if (!isNonEmptyString(name)) {
    throw new Error('Name is required and must be a non-empty string');
  }

  if (!isPositiveNumber(amount)) {
    throw new Error('Amount is required and must be a positive number');
  }

  if (!isNonEmptyString(currency)) {
    throw new Error('Currency is required and must be a non-empty string');
  }

  if (!isNonEmptyString(category)) {
    throw new Error('Category is required and must be a non-empty string');
  }

  if (!isNonEmptyString(date)) {
    throw new Error('Date is required and must be a non-empty string');
  }

  if (!isValidDateString(date)) {
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
