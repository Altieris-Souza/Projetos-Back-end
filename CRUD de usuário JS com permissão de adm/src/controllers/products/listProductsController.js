import { listProductsService } from "../../services/products/listProductsService";

export const listProductsController = async (req, res) => {
  const message = await listProductsService();

  return res.status(200).json(message);
};
