import { ISessionRequest } from "../../interfaces/session/sessionInterfaces";
import Jwt from "jsonwebtoken";
import { compare } from "bcryptjs";
import AppDataSource from "../../data-source";
import { User } from "../../entities/userEntity";
import "dotenv/config";
import { AppError } from "../../errors/AppError";

export const createSessionService = async ({
  email,
  password,
}: ISessionRequest): Promise<number | string | object> => {
  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOneBy({
    email: email,
  });

  if (!user) {
    throw new AppError("Wrong email or password", 403);
  }

  const passwordCompare = await compare(password, user.password);

  if (!passwordCompare) {
    throw new AppError("Wrong email or password", 403);
  }

  const token = Jwt.sign(
    { id: user.id, isAdm: user.isAdm, isActive: user.isActive },
    process.env.SECRET_KEY,
    {
      subject: user.id,
      expiresIn: "24h",
    }
  );

  return { token: token };
};
