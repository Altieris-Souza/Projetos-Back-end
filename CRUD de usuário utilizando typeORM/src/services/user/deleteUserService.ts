import AppDataSource from "../../data-source";
import { User } from "../../entities/userEntity";
import { AppError } from "../../errors/AppError";

export const deleteUserService = async (
  idParams: string
): Promise<Array<any>> => {
  try {
    const userRepo = AppDataSource.getRepository(User);

    const user = await userRepo.findOneBy({ id: idParams });

    if (user.isActive == false) {
      return [400, { message: "User already deleted " }];
    }

    await userRepo.update({ id: idParams }, { isActive: false });

    return [204];
  } catch (error) {
    throw new AppError("invalid id", 404);
  }
};
