import {HealthActor, Industrial, Material, Need, Professional, Researcher, Tag, User} from "@models/index"
import {Model, Op} from "sequelize";
import * as module from "module";
import { NeedInterface, UserInterface } from "@server/types";
import { needByUserIdSuggestion } from "@helpers/matching";

export const getAllNeeds = async () => {
    return Need.findAll({
    });
}
export const getNeedsById = async (needId: number) => {
    const needs = await Need.findByPk(needId);
    console.log(needs)
    return needs;
}
export const getNeedByUserIdSuggestion = async (userId: number): Promise<NeedInterface[]> => {
    const currentUser: UserInterface = await User.findByPk(userId, {
        include: [Tag]
    });
    const allNeeds: NeedInterface[] = await Need.findAll({
        where: {
            userId: {
                [Op.ne]: userId
            }
        },
        include: [Tag, Material, Professional, User]
    });
    return needByUserIdSuggestion(currentUser, allNeeds);
}

