import { createProductService } from "../../services/products/createProductService";

export const createProductController = async (req, res) => {
  const message = await createProductService(req.validatedBody);

  return res.status(201).json(message);
};
