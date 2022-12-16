import { editCategoryservice } from "../../services/categories/editCategoryService";

export const editCategoryController = async (req, res) => {
  const message = await editCategoryservice(req.params.id, req.body);

  return res.status(200).json(message);
};
