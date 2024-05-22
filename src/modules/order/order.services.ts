import { Order } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrderDB = async (order: Order) => {
  const result = await OrderModel.create(order);
  return result;
};

const getOrderDB = async (res: any) => {
  const result = await OrderModel.find();
  if (result == null) {
    res.status(500).json({
      success: false,
      message: "Could not found Order!",
    });
  }
  return result;
};

const getOrderByEmail = async (email: string) => {
  const result = await OrderModel.find({ email });
  return result;
};

export const OrderServices = {
  createOrderDB,
  getOrderDB,
  getOrderByEmail,
};
