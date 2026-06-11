const express = require("express");

const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const notFound = require("./middleware/notFound");

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());

// Custom Middleware
app.use(logger);

// Routes
app.use("/api/users", userRoutes);

// 404 Middleware
app.use(notFound);

// Global Error Handler
app.use(errorHandler);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});