import { Request, Response, NextFunction } from 'express';
import { ValidationException } from '../Exception';

export function validateRequiredFields(fields: string[]) {
  return (req: Request, _res: Response, next: NextFunction): void => {
    const missingFields: string[] = [];

    for (const field of fields) {
      if (!req.body[field] && req.body[field] !== 0) {
        missingFields.push(field);
      }
    }

    if (missingFields.length > 0) {
      throw new ValidationException(
        `Missing required fields: ${missingFields.join(', ')}`
      );
    }

    next();
  };
}

export function validateIdParam(
  req: Request,
  _res: Response,
  next: NextFunction
): void {
  const id = req.params['id'];

  if (!id || isNaN(Number(id))) {
    throw new ValidationException('Invalid ID parameter');
  }

  next();
}

export function validateDateRange(
  req: Request,
  _res: Response,
  next: NextFunction
): void {
  const { fromDate, toDate } = req.query;

  if (fromDate && typeof fromDate === 'string') {
    const from = new Date(fromDate);
    if (isNaN(from.getTime())) {
      throw new ValidationException('Invalid fromDate format');
    }
  }

  if (toDate && typeof toDate === 'string') {
    const to = new Date(toDate);
    if (isNaN(to.getTime())) {
      throw new ValidationException('Invalid toDate format');
    }
  }

  if (
    fromDate &&
    toDate &&
    typeof fromDate === 'string' &&
    typeof toDate === 'string'
  ) {
    const from = new Date(fromDate);
    const to = new Date(toDate);
    if (from > to) {
      throw new ValidationException('fromDate cannot be after toDate');
    }
  }

  next();
}
