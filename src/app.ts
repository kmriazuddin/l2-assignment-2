import express, { Request, Response } from "express";
import { ProductRoutes } from "./modules/product/product.route";
const app = express();

// Parser
app.use(express.json());

app.use("/api/product", ProductRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
