import { listProductsByIdService } from "../../services/products/listProductsByIdService";

export const listProductsByIdController = async (req, res) => {
  const message = await listProductsByIdService(req.params.id);

  return res.status(200).json(message);
};
