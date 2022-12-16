import { Request, Response } from "express";
import { ISessionRequest } from "../../interfaces/session/sessionInterfaces";
import { createSessionService } from "../../services/session/createSessionService";

export const createSessionController = async (req: Request, res: Response) => {
  const data: ISessionRequest = req.body;

  const token = await createSessionService(data);

  return res.status(200).json(token);
};
