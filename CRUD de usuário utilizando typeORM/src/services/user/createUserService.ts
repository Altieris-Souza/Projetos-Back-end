import AppDataSource from "../../data-source";
import { User } from "../../entities/userEntity";
import { IUser, IUserRequest } from "../../interfaces/users";

export const createUserService = async (data: IUserRequest): Promise<IUser> => {
  const userRepo = AppDataSource.getRepository(User);

  const user = userRepo.create(data);

  await userRepo.save(user);

  const userResp = {
    id: user.id,
    name: user.name,
    email: user.email,
    isAdm: user.isAdm,
    isActive: user.isActive,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };

  return userResp;
};
