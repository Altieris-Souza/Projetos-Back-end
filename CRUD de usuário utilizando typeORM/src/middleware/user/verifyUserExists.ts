import { NextFunction, Request, Response } from "express";
import AppDataSource from "../../data-source";
import { User } from "../../entities/userEntity";

export const verifyUserExists = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const email = request.body.email;

  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOneBy({
    email: email,
  });

  if (user) {
    return response.status(400).json({ message: "Email already exists" });
  }

  return next();
};
