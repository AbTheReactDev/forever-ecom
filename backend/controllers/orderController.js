import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();
    await userModel.findByIdAndUpdate(userId, { cartData: {} });
    res.json({
      success: true,
      message: "Order Placed !",
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
};

const placeStripeOrder = async (req, res) => {};

const placeRazerPayOrder = async (req, res) => {};

const getAllAdminOrders = async (req, res) => {};

const getAllUserOrders = async (req, res) => {};

// ADMIN
const updateOrderStatus = async (req, res) => {};

export {
  placeOrder,
  placeRazerPayOrder,
  placeStripeOrder,
  getAllAdminOrders,
  getAllUserOrders,
  updateOrderStatus,
};
