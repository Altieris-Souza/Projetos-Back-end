import "express-async-errors";
import express from "express";
import routesCategories from "./routes/categories/routesCategories.js";
import routesProducts from "./routes/products/routesProducts.js";
import { errorHandler } from "./errors/error.js";

const app = express();

app.use(express.json());

app.use("/categories", routesCategories);
app.use("/products", routesProducts);

app.use(errorHandler);

export default app;
