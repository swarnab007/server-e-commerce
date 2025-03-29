const express = require("express");
const {
  requiresignIn,
  adminAccess,
} = require("../middlewares/Auth.middleware.js");
const {
  createCategory,
  updateCategory,
  getAllCategories,
  getSingleCategory,
  deleteCategory
} = require("../controllers/Category.controller.js");

const router = express.Router();

// create category
router.post("/create-category", requiresignIn, adminAccess, createCategory);
// update category
router.put("/update-category/:id", requiresignIn, adminAccess, updateCategory);
// get all categories
router.get("/categories", getAllCategories);
// single category
router.get("/get-category/:slug", getSingleCategory);
// delete category
router.delete("/delete-category/:id", requiresignIn, adminAccess, deleteCategory);

module.exports = router;
