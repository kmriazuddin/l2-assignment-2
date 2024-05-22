"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const variantsSchema = new mongoose_1.Schema({
    type: {
        type: String,
        require: true,
    },
    value: {
        type: String,
        require: true,
    },
});
const productSchema = new mongoose_1.Schema({
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
exports.ProductModel = (0, mongoose_1.model)("Product", productSchema);
