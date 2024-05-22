"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("./order.controller");
const body_parser_1 = __importDefault(require("body-parser"));
const router = express_1.default.Router();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
router.post("/", order_controller_1.OrderController.createOrder);
router.get("/", order_controller_1.OrderController.getAllOrder);
router.get("/", order_controller_1.OrderController.getOrderByEmail);
exports.OrderRoutes = router;
