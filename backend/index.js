require("dotenv").config();

if (process.env.VERCEL !== "1") {
  const dns = require("dns");
  dns.setServers(["8.8.8.8", "1.1.1.1"]);
}

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://tahir-rashid.vercel.app"
  ],
  credentials: true
}));
app.use(express.json());

app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    console.error("DB connection failed:", err.message);
    res.status(500).json({ error: "Database connection failed", detail: err.message });
  }
});

app.use("/auth", authRoutes);

const PORT = process.env.PORT || 3000;

if (process.env.VERCEL !== "1") {
  app.listen(PORT, () => console.log(`Server running on ${PORT}`));
}

module.exports = app;