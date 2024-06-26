import express, { Request, Response } from "express";
import { ProductRoutes } from "./modules/product/product.route";
import bodyParser from "body-parser";
import { OrderRoutes } from "./modules/order/order.route";
const app = express();

// Parser
app.use(express.json());
app.use(bodyParser.json());

app.use("/api/products", ProductRoutes);
app.use("/api/orders", OrderRoutes);

export default app;
