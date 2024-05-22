import { Order } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrderDB = async (order: Order) => {
  const result = await OrderModel.create(order);
  return result;
};

const getOrderDB = async () => {
  const result = await OrderModel.find();
  return result;
};

export const OrderServices = {
  createOrderDB,
  getOrderDB,
};
