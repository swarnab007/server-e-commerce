import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
// import rateLimit from "express-rate-limit";
import connectDB from "./lib/db.js";
import userRoutes from "./routes/Auth.router.js";
import productRoutes from "./routes/Product.router.js";
import cartRoutes from "./routes/Cart.router.js";
import AnalyticsRoutes from "./routes/Analytics.router.js";
import PaymentRoutes from "./routes/Payment.router.js";

// Configure dotenv
dotenv.config({ path: "./.env" });

// Database connection
connectDB();

// Express server
const app = express();

// Rate limiting
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100, // Limit each IP to 100 requests per windowMs
//   message: "Too many requests from this IP, please try again after 15 minutes",
// });
// app.use(limiter);

// CORS configuration
const corsOptions = {
  origin: ["http://localhost:5173", "https://watchstore-e-commerce.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "Authorization",
    "token",
  ],
  credentials: true,
};
app.use(cors(corsOptions));

// Body parser
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());

// Logging
app.use(morgan("dev"));

// Routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/cart", cartRoutes);
app.use("/api/v1/analytics", AnalyticsRoutes);
app.use("/api/v1/payment", PaymentRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("<h1>Working</h1>");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
