import AppDataSource from "../../data-source";
import { User } from "../../entities/userEntity";
import { AppError } from "../../errors/AppError";
import { IUserResponse, IUserUpdate } from "../../interfaces/users";
import { userResponseSchema } from "../../schemas/createUserSchema";

export const editUserService = async (
  body: IUserUpdate,
  id: string
): Promise<IUserResponse> => {
  const userRepo = AppDataSource.getRepository(User);

  if (body.isAdm != undefined) {
    throw new AppError("IsAdm field cannot be changed", 401);
  }

  if (body.isActive != undefined) {
    throw new AppError("IsActive field cannot be changed", 401);
  }

  if (body.id != undefined) {
    throw new AppError("id field cannot be changed", 401);
  }

  try {
    const user = await userRepo.findOneBy({ id: id });

    const updatedUser = userRepo.create({
      ...user,
      ...body,
    });
    await userRepo.save(updatedUser);

    const userResponse = await userResponseSchema.validate(updatedUser, {
      stripUnknown: true,
    });

    return userResponse;
  } catch (error) {
    throw new AppError("Non-existent id", 404);
  }
};
