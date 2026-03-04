// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import helmet from "helmet";
// import rateLimit from "express-rate-limit";
// import connectDB from "./config/db.js";
// import authRoutes from "./routes/authRoutes.js";
// import customProjectRoute from "./routes/customProject.js";



// // ================= LOAD ENV =================
// dotenv.config();

// // ================= CONNECT DATABASE =================
// connectDB();

// // ================= INITIALIZE APP =================
// const app = express();

// // ================= SECURITY MIDDLEWARE =================

// // Security headers
// app.use(helmet());

// // Rate limiting (100 requests per 15 minutes per IP)
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000,
//   max: 100,
// });
// app.use(limiter);

// // CORS configuration
// const allowedOrigins =
//   process.env.NODE_ENV === "production"
//     ? [process.env.CLIENT_URL]
//     : ["http://localhost:5173"];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         console.log("Blocked by CORS:", origin);
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     credentials: true,
//   })
// );

// // ================= BODY PARSER =================
// app.use(express.json());

// // ================= ROUTES =================
// app.use("/api/auth", authRoutes);
// app.use("/api/custom-project", customProjectRoute);

// app.get("/", (req, res) => {
//   res.send("API Running 🚀");
// });

// // ================= 404 HANDLER =================
// app.use((req, res) => {
//   res.status(404).json({ message: "Route Not Found" });
// });

// // ================= START SERVER =================
// const PORT = process.env.PORT || 8000;

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
import chatRoutes from "./routes/chatRoutes.js";

// ================= LOAD ENV =================
dotenv.config();

// ================= CONNECT DATABASE =================
connectDB();

// ================= INITIALIZE APP =================
const app = express();

// ================= SECURITY MIDDLEWARE =================
app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

// ================= CORS =================
const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? [process.env.CLIENT_URL]
    : ["http://localhost:5173"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log("Blocked by CORS:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// ================= BODY PARSER =================
app.use(express.json());

// ================= ROUTES =================
app.use("/api/auth", authRoutes);
app.use("/api/custom-project", customProjectRoute);
app.use("/api/chat", chatRoutes);

app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

// ================= 404 HANDLER =================
app.use((req, res) => {
  res.status(404).json({ message: "Route Not Found" });
});

// ================= START SERVER =================
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});