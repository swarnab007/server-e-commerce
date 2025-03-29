import express from "express";
import {
  createProduct,
  deleteProduct,
  getFeaturedProducts,
  getProducts,
  getProductsByCategory,
  getRecommendedProducts,
  toggleFeaturedProduct,
} from "../controllers/Product.controller.js";
import { adminAccess, protectedRoute } from "../middlewares/Auth.middleware.js";

const router = express.Router();

// GET : All Products
router.get("/", protectedRoute, adminAccess, getProducts);
// GET : Featured Products
router.get("/featured", getFeaturedProducts);
// GET : CATEGORY Products
router.get("/category/:category", getProductsByCategory);
// GET : Recommended Products
router.get("/recommended", getRecommendedProducts);
// POST : Create a Product
router.post("/", protectedRoute, adminAccess, createProduct);
// PATCH : Toggle Featured Product
router.patch("/:id", protectedRoute, adminAccess, toggleFeaturedProduct);
// DELETE : Delete a Product
router.delete("/:id", protectedRoute, adminAccess, deleteProduct);

export default router;
