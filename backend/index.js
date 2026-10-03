require("dotenv").config();
const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

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

connectDB();

app.use("/auth", authRoutes);

const PORT = process.env.PORT || 3000;

// Local pe server chalao, Vercel pe nahi
if (process.env.VERCEL !== "1") {
  app.listen(PORT, () => {
    console.log(`Server running on this : ${PORT}`);
  });
}

module.exports = app;