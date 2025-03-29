import Order from "../models/Order.model.js";

// checkout session
export const createCheckoutSession = async (req, res) => {
  const { products, couponCode } = req.body;

  // validate products
  if (!Array.isArray(products) || products.length == 0) {
    return res.status(400).json({ message: "Please provide products" });
  }

  // calculate total amount
  let totalAmount = 0;
  const lineitems = products.map((product) => {
    const amount = Math.round(product.price * 100); // convert to cents
    totalAmount = amount * product.quantity;
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: product.name,
          images: [product.image],
        },
        unit_amount: amount,
      },
      quantity: product.quantity,
    };
  });

  let coupon = null;
    if (couponCode) {
        
    }
};
