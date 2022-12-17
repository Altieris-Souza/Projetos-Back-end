import AppDataSource from "../../data-source";
import { Pets } from "../../entities/pets.entity";
import { Owner } from "../../entities/owners.entity";
import { AppError } from "../../errors/AppError";

const listOwnerPetsService = async (id: number): Promise<Owner> => {
  const OwnerRepository = AppDataSource.getRepository(Owner);
  const owner = await OwnerRepository.findOne({
    where: {
      id: id,
    },
    // relations: {
    //   pets: true,
    // },
  });

  if (!owner) {
    throw new AppError("Owner not found", 404);
  }

  return owner;
};

export default listOwnerPetsService;
