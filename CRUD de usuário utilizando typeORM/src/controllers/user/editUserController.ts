import { Request, Response } from "express";
import { IUserUpdate } from "../../interfaces/users";
import { editUserService } from "../../services/user/editUserService";

export const editUserController = async (req: Request, res: Response) => {
  const data: IUserUpdate = req.body;

  const id = req.params.id;

  const updateuser = await editUserService(data, id);

  return res.status(200).json(updateuser);
};
