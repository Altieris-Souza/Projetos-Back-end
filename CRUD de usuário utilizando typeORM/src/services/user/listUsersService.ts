import AppDataSource from "../../data-source";
import { User } from "../../entities/userEntity";
import { IUserResponse } from "../../interfaces/users";
import { userResponseSchema } from "../../schemas/createUserSchema";

export const listUsersService = async (): Promise<IUserResponse[]> => {
  const userRepo = AppDataSource.getRepository(User);

  const users = await userRepo.find({
    select: [
      "id",
      "name",
      "email",
      "isAdm",
      "isActive",
      "createdAt",
      "updatedAt",
    ],
  });

  return users;
};
