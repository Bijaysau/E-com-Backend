import express from "express";

import {
  placeOrder,
  placeOrderstripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
  verifyStripe,
  verifyRazorPay,
} from "../controllers/order.controller.js";

import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();

orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/stripe", authUser, placeOrderstripe);
orderRouter.post("/razorpay", authUser, placeOrderRazorpay);

orderRouter.post("/userorders", authUser, userOrders);

orderRouter.post("/verifyStripe", authUser, verifyStripe);
orderRouter.post("/verifyRazorPay", authUser, verifyRazorPay);

export default orderRouter;
