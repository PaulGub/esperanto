import {
    HealthActor,
    Industrial,
    ListNeed,
    ListNeedT, ListUser, ListUsersT,
    Material,
    Need,
    Professional,
    Researcher,
    Tag,
    User
} from "@models/index"
import {Op} from "sequelize";
import {HealthActorTypes, UserInterface, NeedInterface} from "@server/types";
import {userTagsMatching, needUserTagsMatching} from "@helpers/matching";

export const getListUserByUserId = async (userId: number): Promise<ListUsersT[]> => {
    return await ListUser.findAll({
        where: {userId: userId},
        include: [User]
    })
};