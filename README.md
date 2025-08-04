# Expense Tracker Backend

A Node.js backend API for tracking expenses built with Express, TypeScript, and SQLite.

## Features

- RESTful API for expense management
- TypeScript with strict mode enabled
- SQLite database with Prisma ORM
- Comprehensive logging with Winston
- Input validation and error handling
- Linting and formatting with ESLint and Prettier
- Testing setup with Jest

## Project Structure

```
src/
  app.ts                 # Main application setup
  index.ts              # Application entry point
  config/
    index.ts            # Environment configuration
  db/
    db.service.ts       # Database connection service
  expenses/
    dto/                # Data Transfer Objects
    entity/             # Database entities
    expenses.controller.ts
    expenses.repository.ts
    expenses.service.ts
  helpers/
    Logger.ts           # Logging configuration
    Exception.ts        # Custom error classes
    dateUtils.ts        # Date utility functions
    middlewares/
      errorHandler.ts   # Error handling middleware
      validator.ts      # Request validation middleware
prisma/
  schema.prisma         # Database schema
tests/
  setup.ts             # Test configuration
  expenses.test.ts     # Test files
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy environment variables:
   ```bash
   cp .env.example .env
   ```

4. Initialize the database:
   ```bash
   npm run migrate
   ```

### Development

Start the development server:
```bash
npm run dev
```

The server will start on port 3000 (or the port specified in your .env file).

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project
- `npm start` - Start production server
- `npm test` - Run tests
- `npm run lint` - Check for linting issues
- `npm run lint:fix` - Fix linting issues
- `npm run format` - Format code with Prettier
- `npm run migrate` - Run database migrations

## API Endpoints

### Health Check
- `GET /api/ping` - Health check endpoint

### Expenses
- `POST /api/expenses` - Create a new expense
- `GET /api/expenses` - Get all expenses (with optional filtering)
- `GET /api/expenses/:id` - Get expense by ID
- `PATCH /api/expenses/:id` - Update expense
- `DELETE /api/expenses/:id` - Delete expense

### Query Parameters for GET /api/expenses
- `fromDate` - Filter expenses from this date
- `toDate` - Filter expenses to this date
- `category` - Filter by category
- `limit` - Limit number of results
- `offset` - Offset for pagination

## Environment Variables

- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment (development/production)
- `DATABASE_URL` - Database connection URL

## Testing

Run tests:
```bash
npm test
```

Run tests with coverage:
```bash
npm test -- --coverage
```

## Contributing

1. Follow the existing code style
2. Add tests for new features
3. Ensure all tests pass
4. Run linting and formatting before committing 