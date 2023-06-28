import {HealthActor, Industrial, Need, Researcher, Tag, User} from "@models/index"
import {Model} from "sequelize";
import * as module from "module";

export const getAllTag = async () => {
    return Tag.findAll({
    });
}
export const getTagsByTagUser = async (userId: number) => {
    const tags = await User.findByPk(userId,{
        attributes : [],
        include: [{
            model: Tag,
            attributes: ["id", "name"]
        }]
    });
    console.log(tags)
    return tags.dataValues.tags;
}

export const getTagsByTagNeed = async (needId: number) => {
    const tags = await Need.findByPk(needId,{
        attributes : [],
        include: [{
            model: Tag,
            attributes: ["id", "name"]
        }]
    });
    console.log(tags)
    return tags.dataValues.tags;
}