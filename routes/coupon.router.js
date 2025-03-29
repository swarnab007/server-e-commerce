import express from "express";
import { getCoupons, verifyCoupon } from "../controllers/Coupon.controller.js";
import { protectedRoute } from "../middlewares/Auth.middleware.js";

const router = express.Router();

// GET : Get Coupons
router.get("/", protectedRoute, getCoupons);
// POST : Verify Coupon
router.post("/verify", protectedRoute, verifyCoupon);

export default router;
