import { Schema, model } from "mongoose";
import { Product, Variant } from "./product.interface";

const variantsSchema = new Schema<Variant>({
  type: {
    type: String,
    require: true,
  },
  value: {
    type: String,
    require: true,
  },
});

const productSchema = new Schema<Product>({
  name: {
    type: String,
    required: [true, "Name Is  Required"],
  },
  description: {
    type: String,
    required: [true, "Description is Required"],
  },
  price: {
    type: Number,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  variants: {
    type: [variantsSchema],
  },
});

export const ProductModel = model<Product>("Product", productSchema);
