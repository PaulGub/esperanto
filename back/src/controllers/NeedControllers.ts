import { Material, Need, NeedT, Professional, Tag, TagT, User, UserT} from "@models/index";
import { Op } from "sequelize";
import { NeedData, NeedInterface, UserInterface } from "@server/types";
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

export const createNeed = async (args : { userId: number, needData: NeedData }): Promise<NeedT> => {
    const { userId, needData } = args;
    const { title, type, description, infrastructure, tags } = needData;

    const needToCreate = {
        title: title,
        type: type,
        description: description,
        infrastructure: infrastructure,
    }

    try {
        const user: UserT = await User.findByPk(userId);
        const needCreated: NeedT = await Need.create(needToCreate);

        if (needCreated) {
            if (tags) {
                tags.map(async (tag: TagT) => {
                    const tagFound: TagT = await Tag.findByPk(tag.id);
                    console.log(tagFound)
                    needCreated.addTag(tagFound);
                });
            }
            needCreated.setUser(user);
        }

        return needCreated;
    } catch (err) {
        console.log(err);
        return null;
    }
}

export const deleteNeed = async (args: { userId: number, needId: number }): Promise<String|Error> => {
    const { userId, needId } = args;

    try {
        const need: NeedT = await Need.findByPk(needId);

        if (+userId === need.userId) {
            await need.destroy();

            return "Besoin supprimé avec succès !"
        } else {
            return new Error("Le besoin ne peut être supprimé")
        }
    } catch (e) {
        console.log(e)
    }
}