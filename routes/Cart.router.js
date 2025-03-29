import express from "express";
import {
  addProductToCart,
  getCartProducts,
  removeAllFromCart,
  updateProductQuantity,
} from "../controllers/Cart.controller.js";
import { protectedRoute } from "../middlewares/Auth.middleware.js";

const router = express.Router();

// GET : Get Cart Products
router.get("/", protectedRoute, getCartProducts);
// POST : ADD Product to Cart
router.post("/", protectedRoute, addProductToCart);
// DELETE : Remove Product from Cart
router.delete("/", protectedRoute, removeAllFromCart);
// PUT : Update Product Quantity in Cart
router.put("/:id", protectedRoute, updateProductQuantity);

export default router;
