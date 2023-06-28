import {HealthActor, Industrial, Researcher, User, Tag} from "@models/index"
import { Op } from "sequelize";

export const getAllUsers = async () => {
    return User.findAll({
        include: [Industrial, HealthActor, Researcher]
    });
}

export const getUsersByTagUser = async (userId: number) => {
    const currentUser = await User.findByPk(userId, {
        include: [Tag]
    });

    const currentUserTags = currentUser.dataValues.tags.map((tag: any) => tag.name);

    const users = await User.findAll({
        where: {
            id: {
                [Op.ne]: userId
            }
        },
        include: [Tag, Industrial, HealthActor, Researcher]
    });

    const usersWithCommonTags = users.map((user: any) => {
        const userTags = user.tags.map((tag: any) => tag.name);
        const commonTags = currentUserTags.filter((tag: string) => userTags.includes(tag));
        const commonTagCount = commonTags.length;
        return {
            user,
            commonTagCount
        };
    });

    usersWithCommonTags.sort((a: any, b: any) => b.commonTagCount - a.commonTagCount);

    const sortedUsers = usersWithCommonTags.map((item: any) => item.user);

    return sortedUsers;
}

export const getUserById = async (userId: number) => {
    const user = await User.findByPk(userId, {
        include: [Tag, Industrial, HealthActor, Researcher]
    });
    console.log(user)
    return user;
}
