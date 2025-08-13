export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0]!;
}

export function parseDate(dateString: string): Date {
  return new Date(dateString);
}

export function isValidDate(dateString: string): boolean {
  const date = new Date(dateString);
  return date instanceof Date && !isNaN(date.getTime());
}

export function getCurrentDate(): Date {
  return new Date();
}

export function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function subtractDays(date: Date, days: number): Date {
  return addDays(date, -days);
}
