import express, { Request, Response } from "express";
import { sampleProduct } from "./data";

const app = express();
const PORT = 4000;

app.get("/api/products", (req: Request, res: Response) => {
  res.json(sampleProduct);
});

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});
