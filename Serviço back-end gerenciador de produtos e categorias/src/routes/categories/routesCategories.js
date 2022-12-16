import { Router } from "express";
import verifyBodyRequest from "../../middleware/categories/createCategorieMiddleware";
import { createCategorieSchema } from "../../schemas/createCategorieSchema";
import { createCategorieController } from "../../controllers/categories/createCategoriesController";
import { listController } from "../../controllers/categories/listCategoriesController";
import { listCategoriesByIdController } from "../../controllers/categories/listCategoriesByIdController";
import { checkIfTheIdExistsMiddleware } from "../../middleware/products/checkIfTheProductOrCategoryExistsMiddleware";
import { deleteCategoryController } from "../../controllers/categories/deleteCategoryController";
import { editCategoryController } from "../../controllers/categories/editCategoryController";

const routesCategories = Router();

//POST
routesCategories.post(
  "",
  verifyBodyRequest(createCategorieSchema),
  createCategorieController
);

//GET
routesCategories.get("", listController);
routesCategories.get(
  "/:id",
  checkIfTheIdExistsMiddleware,
  listCategoriesByIdController
);

//PATCH
routesCategories.patch(
  "/:id",
  checkIfTheIdExistsMiddleware,
  verifyBodyRequest(createCategorieSchema),
  editCategoryController
);

//DELETE
routesCategories.delete(
  "/:id",
  checkIfTheIdExistsMiddleware,
  deleteCategoryController
);

export default routesCategories;
