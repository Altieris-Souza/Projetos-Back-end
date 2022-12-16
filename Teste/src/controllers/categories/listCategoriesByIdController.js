import { listCategoriesByIdService } from "../../services/categories/listCategoriesByIdService";

export const listCategoriesByIdController = async (req, res) => {
  const message = await listCategoriesByIdService(req.params.id);

  return res.status(200).json(message);
};
