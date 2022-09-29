import path, { dirname } from "path";
import { fileURLToPath } from "url";
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import errorHandler from "./errors/errorHandler.js";
import notFound from "./errors/notFound.js";
import productsRouter from "./products/products.router.js";

//import and configure dotenv file to have keys and values in .env file
const __dirName = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirName, "..", ".env") });

const app = express();

app.use(cors());
app.use(express.json());

app.use("/products", productsRouter);

app.use(notFound);
app.use(errorHandler);

export default app;
