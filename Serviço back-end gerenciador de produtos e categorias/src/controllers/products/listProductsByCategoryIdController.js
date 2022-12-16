import { listProductsByCategoryIdService } from "../../services/products/listProductsByCategoryIdService";

export const listProductsByCategoryIdController = async (req, res) => {
  const message = await listProductsByCategoryIdService(req.params.id);

  return res.status(200).json(message);
};
