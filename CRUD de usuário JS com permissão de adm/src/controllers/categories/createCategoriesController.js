import { createCategorieService } from "../../services/categories/createCategoriesService";

export const createCategorieController = async (req, res) => {
  const message = await createCategorieService(req.validatedBody);

  return res.status(201).json(message);
};
