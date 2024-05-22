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

const getSingleProductDB = async (_id: string, res: any) => {
  const result = await ProductModel.findOne({ _id });
  if (result == null) {
    res.status(500).json({
      success: false,
      message: "Could not Single Product are fetch successfully!",
    });
  }
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

const deleteProductDB = async (_id: string) => {
  const result = await ProductModel.deleteOne({ _id });
  return result;
};

export const ProductServices = {
  createProductDB,
  getProductDB,
  getSingleProductDB,
  updateProductDB,
  deleteProductDB,
};
