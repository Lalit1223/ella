const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const emailRoutes = require("./routes/emailRoutes");

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api/email", emailRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
