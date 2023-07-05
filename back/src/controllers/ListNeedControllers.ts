import {
    HealthActor,
    Industrial,
    ListNeed,
    ListNeedT,
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

export const getListNeedByUserId = async (userId: number): Promise<ListNeedT[]> => {
    return await ListNeed.findAll({
        where: {userId: userId},
        include: 
        [
            {
                model: Need,
                include: [Tag, Material, Professional, User]
            }
        ]
    })
};