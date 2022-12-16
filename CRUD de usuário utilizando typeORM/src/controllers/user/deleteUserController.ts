import { Request, Response } from "express";
import { deleteUserService } from "../../services/user/deleteUserService";

export const deleteUserController = async (req: Request, res: Response) => {
  const [status, message] = await deleteUserService(req.params.id);

  return res.status(status).json({ message });
};
