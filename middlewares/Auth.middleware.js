import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

// protected routes
export const protectedRoute = async (req, res, next) => {
  try {
    const accessToken = req.cookies.accessToken;

    if (!accessToken) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized - No access token provided",
      });
    }

    try {
      const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
      const user = await User.findById(decoded.userId).select("-password");

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "No user found with this id",
        });
      }

      req.user = user;
      next();
    } catch (error) {}
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "error in protected middleware" });
  }
};

// admin access
export const adminAccess = async (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    return res.status(403).json({
      success: false,
      message: "Denied - Admin access only",
    });
  }
};
