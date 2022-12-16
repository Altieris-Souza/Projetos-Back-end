import { listService } from "../../services/categories/listCategoriesService";

export const listController = async (req, res) => {
  const message = await listService();

  return res.status(200).json(message);
};
