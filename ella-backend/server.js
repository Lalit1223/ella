const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const emailRoutes = require("./routes/emailRoutes");

dotenv.config(); // Load environment variables from .env file

const app = express(); // Initialize the app

// Middleware
app.use(bodyParser.json());

// CORS configuration for local testing
const corsOptions = {
  origin: "http://localhost:5175", // Allow requests from your React app in localhost
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOptions));

// API Routes
app.use("/api/email", emailRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
