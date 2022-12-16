import { editProductService } from "../../services/products/editProductService";

export const editProductController = async (req, res) => {
  const message = await editProductService(req.params.id, req.validatedBody);

  return res.status(200).json(message);
};
