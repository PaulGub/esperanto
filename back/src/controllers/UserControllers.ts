import {HealthActor, Industrial, Researcher, Tag, User} from "@models/index"
import {Op} from "sequelize";
import {HealthActorTypes, UserInterface} from "@server/types";
import {userTagsMatching} from "@helpers/matching";

export const getAllUsers = async (): Promise<UserInterface[]> => {
    return User.findAll({
        include: [Industrial, HealthActor, Researcher]
    });
}

export const getUsersByTagUser = async (userId: number): Promise<UserInterface[]> => {
    const currentUser: UserInterface = await User.findByPk(userId, {
        include: [Tag]
    });

    const users: UserInterface[] = await User.findAll({
        where: {
            id: {
                [Op.ne]: userId
            }
        },
        include: [Tag, Industrial, HealthActor, Researcher]
    });

    return userTagsMatching(currentUser, users);
}

export const getUserById = async (userId: number): Promise<UserInterface> => {
    return await User.findByPk(userId, {
        include: [Tag, Industrial, HealthActor, Researcher]
    });
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