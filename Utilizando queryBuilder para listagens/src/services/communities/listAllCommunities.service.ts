import AppDataSource from "../../data-source";
import { Community } from "../../entities/community.entity";
import { User } from "../../entities/user.entity";
import { UsersCommunities } from "../../entities/usersCommunities.entity";

//Service que irá listar todos os usuários de determinada comunidades
const listAllUsersCommunitiesService = async (
  communityId: number
): Promise<User[]> => {
  const userRepo = AppDataSource.getRepository(User);

  const users = await userRepo
    .createQueryBuilder()
    .select(["u.id", "u.name", "u.email", "u.createdAt"])
    .from(User, "u")
    .innerJoin(UsersCommunities, "uc", "uc.communityId = :id", {
      id: communityId,
    })
    .andWhere("u.id = uc.userId")
    .getMany();

  // select * from users inner join users_communities on users_communities.communityId = 1 and users.id = users_communities."userId";

  return users;
};

export default listAllUsersCommunitiesService;
