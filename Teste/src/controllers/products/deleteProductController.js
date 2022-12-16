import { deleteProductService } from "../../services/products/deleteProductService";

export const deleteProductController = async (req, res) => {
  const message = await deleteProductService(req.params.id);

  return res.status(204).json(message);
};
