import AppDataSource from "../../data-source";
import { Community } from "../../entities/community.entity";
import { User } from "../../entities/user.entity";
import { UsersCommunities } from "../../entities/usersCommunities.entity";

//Service que irá listar todas as comunidades de um determinado usuário
const listAllCommunitiesUserService = async (userId: number) => {
  const communityRepo = AppDataSource.getRepository(Community);

  const communities = await communityRepo
    .createQueryBuilder()
    .select(["c.id", "c.name", "c.description", "c.createdAt"])
    .from(Community, "c")
    .innerJoin(UsersCommunities, "uc", "uc.userId = :id", {
      id: userId,
    })
    .andWhere("c.id = uc.communityId")
    .getMany();

  // select * from communities inner join users_communities on users_communities.userId = 1 and communities.id = users_communities."communityId;

  return communities;
};

export default listAllCommunitiesUserService;
