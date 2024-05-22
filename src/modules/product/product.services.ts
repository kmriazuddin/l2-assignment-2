import { Product } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

const getProductDB = async () => {
  const result = await ProductModel.find();
  return result;
};

const getSingleProductDB = async (_id: string) => {
  const result = await ProductModel.findOne({ _id });
  return result;
};

const updateProductDB = async (_id: string, reqBody: any) => {
  const result = await ProductModel.findByIdAndUpdate(
    { _id },
    { $set: reqBody },
    { new: true }
  );
  return result;
};

export const ProductServices = {
  createProductDB,
  getProductDB,
  getSingleProductDB,
  updateProductDB,
};