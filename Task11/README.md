# Middleware & Error Handling

## Features

- Custom Logger Middleware
- Global Error Handler
- 404 Middleware
- Error Response Handling

## Routes

### Success Route

GET /api/users

### Error Route

GET /api/users/error

### Invalid Route

GET /anything

Returns 404 error.

## Run

```bash
npm install express
node server.js
```