import {HealthActor, Industrial, Researcher, User, Tag} from "@models/index"
import { Op } from "sequelize";
import {HealthActorTypes} from "@server/types";

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

    const sortedUsersSliced = sortedUsers.slice(0, 10);

    return sortedUsersSliced;
}

export const getUserById = async (userId: number) => {
    const user = await User.findByPk(userId, {
        include: [Tag, Industrial, HealthActor, Researcher]
    });
    console.log(user)
    return user;
}

export const createUser = async (userData) => {
    const user = await User.create(userData);
    return user;
}

export const createIndustrial = async (industrialData) => {
    const industrial = await Industrial.create(industrialData);
    return industrial;
}

export const createHealthActor = async (userId: number, healthActorData: HealthActorTypes) => {
    const data = {
        userId: userId,
        ...healthActorData
    }
    return await HealthActor.create(data, {
        include: [User]
    });
}

export const createResearcher = async (researcherData) => {
    const researcher = await Researcher.create(researcherData);
    return researcher;
}