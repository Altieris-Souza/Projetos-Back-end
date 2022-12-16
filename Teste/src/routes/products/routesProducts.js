import { Router } from "express";
import { createProductController } from "../../controllers/products/createProductController";
import { listProductsController } from "../../controllers/products/listProductsController";
import verifyBodyRequest from "../../middleware/categories/createCategorieMiddleware";
import { createProductSchema } from "../../schemas/products/createProductSchema";
import { listProductsByIdController } from "../../controllers/products/listProductsByIdController";
import { listProductsByCategoryIdController } from "../../controllers/products/listProductsByCategoryIdController";
import { checkIfTheIdExistsMiddleware } from "../../middleware/products/checkIfTheProductOrCategoryExistsMiddleware";
import { deleteProductController } from "../../controllers/products/deleteProductController";
import { editProductController } from "../../controllers/products/editProductController";
import verifyBodyRequestEdit from "../../middleware/products/verifyBodyRequestEdit";
import { editProductSchema } from "../../schemas/products/editProductSchema";

const routesProducts = Router();

//GET
routesProducts.get("", listProductsController);
routesProducts.get(
  "/:id",
  checkIfTheIdExistsMiddleware,
  listProductsByIdController
);
routesProducts.get("/category/:id", listProductsByCategoryIdController);

//POST
routesProducts.post(
  "",
  verifyBodyRequest(createProductSchema),
  createProductController
);

//PATCH
routesProducts.patch(
  "/:id",
  checkIfTheIdExistsMiddleware,
  verifyBodyRequestEdit(editProductSchema),
  editProductController
);

//DELETE
routesProducts.delete(
  "/:id",
  checkIfTheIdExistsMiddleware,
  deleteProductController
);

export default routesProducts;
