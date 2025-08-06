export const isNonEmptyString = (value: unknown): value is string =>
  typeof value === 'string' && value.trim().length > 0;

export const isPositiveNumber = (value: unknown): value is number =>
  typeof value === 'number' && value > 0;

export const isValidDateString = (value: string): boolean =>
  typeof value === 'string' && !isNaN(new Date(value).getTime());
