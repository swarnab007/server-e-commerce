import Product from "../models/product.model.js";

// Get all Cart Products
export const getCartProducts = async (req, res) => {
  try {
    const products = await Product.find({ _id: { $in: req.body.cart } });
    // add quantity for each product
    const cartItems = products.map((product) => {
      const item = req.user.cartItems.find(
        (cartItem) => cartItem.id === product.id
      );
      return { ...product.toJSON(), quantity: item.quantity };
    });
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(404).json({
      message: "Error in Getting cart products",
      error: error.message,
    });
  }
};

// Add Product to Cart
export const addProductToCart = async (req, res) => {
  try {
    const { productId } = req.body;
    const user = req.user;
    // check if product already exists in cart
    const productExists = user.cartItems.find((item) => item.id === productId);
    if (productExists) {
      productExists.quantity += 1;
    } else {
      user.cartItems.push(productId);
    }
    await user.save();
    res.status(200).json({ message: "Product added to cart", cart: user.cart });
  } catch (error) {
    res.status(404).json({
      message: "Error in adding product to cart",
      error: error.message,
    });
  }
};

// Remove Product from Cart
export const removeAllFromCart = async (req, res) => {
  try {
    const { productId } = req.body;
    const user = req.user;
    // if productId is not provided, remove all products from cart
    if (!productId) {
      user.cartItems = [];
    } else {
      // Filter out the product to be removed
      user.cartItems = user.cartItems.filter((item) => item.id !== productId);
    }
    await user.save();
    res
      .status(200)
      .json({ message: "Product removed from cart", cart: user.cart });
  } catch (error) {
    console.log("Error in removing product from cart", error.message);
    res.status(404).json({
      message: "Error in removing product from cart",
      error: error.message,
    });
  }
};

// Update Product Quantity in Cart
export const updateProductQuantity = async (req, res) => {
  try {
    const { id: productId } = req.body;
    const { quantity } = req.body;

    const user = req.user;
    const existingProduct = user.cartItems.find(
      (item) => item.id === productId
    );
    if (existingProduct) {
      if (quantity === 0) {
        user.cartItems = user.cartItems.filter((item) => item.id !== productId);
      }
      existingProduct.quantity = quantity;
    }
    await user.save();
    res
      .status(200)
      .json({ message: "Product quantity updated", cart: user.cart });
  } catch (error) {
    console.log("Error in updating product quantity", error.message);
    res.status(404).json({
      message: "Error in updating product quantity",
      error: error.message,
    });
  }
};
