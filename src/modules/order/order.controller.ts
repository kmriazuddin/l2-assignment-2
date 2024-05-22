import { Request, Response } from "express";
import { OrderServices } from "./order.services";

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const result = await OrderServices.createOrderDB(order);
    res.status(200).json({
      success: true,
      message: "Order is create successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "could not create order!",
      error: error,
    });
  }
};

const getAllOrder = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.getOrderDB();
    res.status(200).json({
      success: true,
      message: "Order are fetch successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "could not fetch order!",
      error: error,
    });
  }
};

export const OrderController = {
  createOrder,
  getAllOrder,
};
