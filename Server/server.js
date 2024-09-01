const express = require("express");
const { connectDB } = require("./config/db");
const netWorthRoutes = require("./routes/netWorthRoutes");
const usersRoutes = require("./routes/user");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Connect to MongoDB
connectDB(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.log("Failed to connect to DB", err);
    process.exit(1);
  });

// cors for cross origin allowance
const corsOptions = {
  // origin: "http://localhost:5173",
  origin: "https://net-worth-calculator-frontend.vercel.app",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Routes for API
app.use("/api", netWorthRoutes);
app.use("/v1", usersRoutes);
app.use("/", (req, res) => {
  res.send("Server is running well!");
});

// Export app
module.exports = app;

// Start server only if this module is not being imported
if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
