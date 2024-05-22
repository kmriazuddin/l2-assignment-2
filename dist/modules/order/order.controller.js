"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const order_services_1 = require("./order.services");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = req.body;
        const result = yield order_services_1.OrderServices.createOrderDB(order);
        res.status(200).json({
            success: true,
            message: "Order is create successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "could not create order!",
            error: error,
        });
    }
});
const getAllOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_services_1.OrderServices.getOrderDB(res);
        res.status(200).json({
            success: true,
            message: "Order are fetch successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "could not fetch order!",
            error: error,
        });
    }
});
const getOrderByEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.query.email;
    console.log(email);
    if (!email) {
        return res.status(400).json({
            success: false,
            message: "Email is required",
        });
    }
    try {
        const result = order_services_1.OrderServices.getOrderByEmail(email);
        res.status(200).json({
            success: true,
            message: "Order are fetch successful By Email!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "could not fetch order!",
            error: error,
        });
    }
});
exports.OrderController = {
    createOrder,
    getAllOrder,
    getOrderByEmail,
};
