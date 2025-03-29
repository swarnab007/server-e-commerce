import Coupon from "../models/Coupon.model.js";

// Get all Coupons
export const getCoupons = async (req, res) => {
  try {
    // check if coupon is active and belongs to the user
    const coupons = await Coupon.findOne({
      userId: req.user._id,
      isActive: true,
    });
    res.status(200).json(coupons || null);
  } catch (error) {
    console.log("Error in getCoupons: ", error.message);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// verify the coupon
export const verifyCoupon = async (req, res) => {
  try {
    const { code } = req.body;
    // check if coupon is active and belongs to the user
    const coupon = await Coupon.findOne({
      code,
      userId: req.user._id,
      isActive: true,
    });
    if (!coupon) {
      return res.status(404).json({ message: "Coupon not found" });
    }
    // check if coupon has expired
    if (coupon.expirationDate < new Date()) {
      coupon.isActive = false;
      await coupon.save();
      return res.status(404).json({ message: "Coupon has expired" });
    }
    res.status(200).json({ message: "Coupon is valid", coupon });
  } catch (error) {
    console.log("Error in verifyCoupon: ", error.message);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
