import { Request, Response } from "express";
import { ProductServices } from "./product.services";

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const result = await ProductServices.createProductDB(product);
    res.status(200).json({
      success: true,
      message: "Product is create successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "could not create product!",
      error: error,
    });
  }
};

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getProductDB();
    res.status(200).json({
      success: true,
      message: "Product are fetch successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Could not create product!",
      error: error,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await ProductServices.getSingleProductDB(productId);
    res.status(200).json({
      success: true,
      message: "Single Product are fetch successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Could not Single Product are fetch successfully!",
      error: error,
    });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const reqBody = req.body;
    const productIds = req.params.productId;
    const result = await ProductServices.updateProductDB(productIds, reqBody);
    res.status(200).json({
      success: true,
      message: "Product are update successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Could not update Product!",
      error: error,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
};
