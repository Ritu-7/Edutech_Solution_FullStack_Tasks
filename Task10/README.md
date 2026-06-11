# JWT Authentication System

## Technologies Used

- Node.js
- Express.js
- MongoDB
- JWT
- bcryptjs

## Features

- User Registration
- Password Hashing
- User Login
- JWT Token Generation
- Protected Routes

## API Endpoints

### Register

POST /api/auth/register

```json
{
  "name": "Ritika",
  "email": "ritika@gmail.com",
  "password": "123456"
}
```

### Login

POST /api/auth/login

```json
{
  "email": "ritika@gmail.com",
  "password": "123456"
}
```

### Profile

GET /api/auth/profile

Authorization: Bearer <token>