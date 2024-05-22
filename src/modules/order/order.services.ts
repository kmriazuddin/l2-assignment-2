import { Order } from "./order.interface";
import { OrderModel } from "./order.model";

const createProductDB = async (order: Order) => {
  const result = await OrderModel.create(order);
  return result;
};

export const OrderServices = {
  createProductDB,
};
