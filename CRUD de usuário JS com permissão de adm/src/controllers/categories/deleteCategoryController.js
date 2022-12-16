import { deleteCategoryService } from "../../services/categories/deleteCategoryservice";

export const deleteCategoryController = async (req, res) => {
  const message = await deleteCategoryService(req.params.id);

  return res.status(204).json(message);
};
