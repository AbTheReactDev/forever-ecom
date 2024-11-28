import express from "express";
import adminAuth from "../middleware/adminAuth.js";
import {
  getAllAdminOrders,
  getAllUserOrders,
  placeOrder,
  placeRazerPayOrder,
  placeStripeOrder,
  updateOrderStatus,
} from "../controllers/orderController.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();

orderRouter.post("/list", adminAuth, getAllAdminOrders);
orderRouter.post("/status", adminAuth, updateOrderStatus);

orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/stripe", authUser, placeStripeOrder);
orderRouter.post("/razerpay", authUser, placeRazerPayOrder);

orderRouter.post("/user-orders", authUser, getAllUserOrders);

export default orderRouter;
