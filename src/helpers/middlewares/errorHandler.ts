import { Request, Response, NextFunction } from 'express';
import { AppException } from '../Exception';
import logger from '../Logger';

export function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  _next: NextFunction
): void {
  logger.error('Error occurred:', {
    error: error.message,
    stack: error.stack,
    url: req.url,
    method: req.method,
  });

  if (error instanceof AppException) {
    res.status(error.statusCode).json({
      error: error.message,
      statusCode: error.statusCode,
    });
    return;
  }

  res.status(500).json({
    error: 'Internal server error',
    statusCode: 500,
  });
}

export function notFoundHandler(_req: Request, res: Response): void {
  res.status(404).json({
    error: 'Route not found',
    statusCode: 404,
  });
} 