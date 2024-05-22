import express from "express";
import { OrderController } from "./order.controller";
import bodyParser from "body-parser";
const router = express.Router();
const app = express();

app.use(express.json());
app.use(bodyParser.json());

router.post("/", OrderController.createOrder);
router.get("/", OrderController.getAllOrder);
router.get("/", OrderController.getOrderByEmail);

export const OrderRoutes = router;
