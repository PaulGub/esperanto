import {HealthActor, Industrial, Material, Need, Professional, Researcher, Tag, User} from "@models/index"
import {Op} from "sequelize";
import {HealthActorTypes, UserInterface, NeedInterface} from "@server/types";
import {userTagsMatching, needUserTagsMatching} from "@helpers/matching";

export const getAllUsers = async (): Promise<UserInterface[]> => {
    return User.findAll({
        include: [Industrial, Researcher, Tag,
            {
                model: Need,
                include: [Tag]
            },
            {
                model: HealthActor,
                include: [Professional]
            }
        ]
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
        include: [
            Tag, Industrial, Researcher,         
            {
                model: Need,
                include: [Tag]
            },
            {
                model: HealthActor,
                include: [Professional]
            },
        ]
    });

    return userTagsMatching(currentUser, users);
}

export const getUserById = async (userId: number): Promise<UserInterface> => {
    return await User.findByPk(userId, {
      include: [
        Tag,
        {
          model: HealthActor,
          include: [Professional]
        },
        Industrial,
        Researcher,
        {
            model: Need,
            include: [Tag, Professional, Material]
        }
      ]
    });
  };
  


export const getUsersByTagNeed = async (userId: number, needId: number): Promise<UserInterface[]> => {
    const currentUser: UserInterface = await User.findByPk(userId, {
        include: [Tag]
    });

    const currentNeed: NeedInterface = await Need.findByPk(needId, {
        include: [Tag]
    });

    const users: UserInterface[] = await User.findAll({
        where: {
            id: {
                [Op.ne]: userId
            }
        },
        include: [Tag, Industrial, Researcher,         
            {
            model: Need,
            include: [Tag]
            },
            {
                model: HealthActor,
                include: [Professional]
            },
        ]
    });

    return needUserTagsMatching(currentUser, users, currentNeed);
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

export const getAllFollowers = async (userId: number) => {
    const user = await User.findByPk(userId);
    return user.getFollowers()

}

export const addFollow = async ( args: { userId: number, followerId: number }) => {
    const {userId, followerId} = args
    const user = await User.findByPk(userId);
    const follower = await User.findByPk(followerId);
    user.addFollower(follower)

    return "Votre abonnement a été pris en compte !"
}