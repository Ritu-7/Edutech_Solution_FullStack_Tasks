# Task 8: RESTful API with CRUD Operations

## Overview

This project is a RESTful API built using Node.js and Express.js. It demonstrates the implementation of CRUD (Create, Read, Update, Delete) operations on product data.

## Technologies Used

* Node.js
* Express.js
* dotenv
* Postman (for API testing)

## Features

* Get all products
* Get a product by ID
* Create a new product
* Update an existing product
* Delete a product
* Environment variable configuration using dotenv

## Project Structure

Task8-REST-API/

├── data/
│   └── products.js

├── server.js

├── .env

├── .gitignore

├── package.json

└── README.md

## Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Navigate to the project folder

```bash
cd Task8-REST-API
```

3. Install dependencies

```bash
npm install
```

4. Start the server

```bash
npm run dev
```

The server will run on:

```text
http://localhost:5000
```

## API Endpoints

### Get All Products

```http
GET /products
```

### Get Product By ID

```http
GET /products/:id
```

### Create Product

```http
POST /products
```

Request Body:

```json
{
  "name": "Headphones",
  "price": 2500
}
```

### Update Product

```http
PUT /products/:id
```

Request Body:

```json
{
  "name": "Gaming Laptop",
  "price": 70000
}
```

### Delete Product

```http
DELETE /products/:id
```

## Testing

All API endpoints were tested successfully using Postman.

## Learning Outcomes

* Understanding REST API architecture
* Implementing CRUD operations
* Working with Express routes
* Handling HTTP status codes
* Testing APIs with Postman

## Author

Ritika Marotha
Full Stack Development Internship - Edutech Solution
