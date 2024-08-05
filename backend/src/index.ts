import express, { Request, Response } from "express";
import { sampleProduct } from "./data";
import cors from "cors";

const app = express();
app.use(cors({ credentials: true, origin: ["http://localhost:5173"] }));
const PORT = 4000;

app.get("/api/products", (req: Request, res: Response) => {
  res.json(sampleProduct);
});

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});
