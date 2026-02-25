// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import connectDB from "./config/db.js";
// import authRoutes from "./routes/authRoutes.js";

// import customProjectRoute from "./routes/customProject.js";


// dotenv.config();
// connectDB();

// const app = express();

// /* 🔥 FORCE CORS HEADERS MANUALLY (GUARANTEED FIX) */
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http://localhost:5173");
//   res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
//   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

//   if (req.method === "OPTIONS") {
//     return res.sendStatus(200);
//   }

//   next();
// });

// app.use(express.json());

// app.use("/api/auth", authRoutes);

// app.use("/api/custom-project", customProjectRoute);


// app.use(cors({
//   origin: process.env.CLIENT_URL,
//   credentials: true
// }));



// app.get("/", (req, res) => {
//   res.send("API Running");
// });

// const PORT = 8000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });




import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import customProjectRoute from "./routes/customProject.js";

dotenv.config();
connectDB();

const app = express();

/* ================= SECURITY ================= */

// Security headers
app.use(helmet());

// Rate limiting (100 requests per 15 minutes per IP)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

// CORS (Production safe)
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}));

// Body parser
app.use(express.json());

/* ================= ROUTES ================= */

app.use("/api/auth", authRoutes);
app.use("/api/custom-project", customProjectRoute);

app.get("/", (req, res) => {
  res.send("API Running");
});

/* ================= ERROR HANDLER ================= */

app.use((req, res, next) => {
  res.status(404).json({ message: "Route Not Found" });
});

/* ================= SERVER ================= */

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});