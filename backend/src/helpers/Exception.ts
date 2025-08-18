export class AppException extends Error {
  public statusCode: number;
  public isOperational: boolean;

  constructor(
    message: string,
    statusCode: number = 500,
    isOperational: boolean = true
  ) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;

    Error.captureStackTrace(this, this.constructor);
  }
}

export class ValidationException extends AppException {
  constructor(message: string) {
    super(message, 400);
  }
}

export class NotFoundException extends AppException {
  constructor(message: string = 'Resource not found') {
    super(message, 404);
  }
}

export class ConflictException extends AppException {
  constructor(message: string = 'Resource conflict') {
    super(message, 409);
  }
}
