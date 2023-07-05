import {
    HealthActor,
    Industrial,
    Material,
    Need,
    Professional,
    Researcher,
    ResearcherT,
    Tag,
    User,
    UserT
} from "@models/index"
import {BelongsToSetAssociationMixin, Op} from "sequelize";
import {HealthActorTypes, UserInterface, NeedInterface} from "@server/types";
import {userTagsMatching, needUserTagsMatching} from "@helpers/matching";
import bcrypt from "bcrypt";

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
            include: [Tag, Professional, Material, User]
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

export const createIndustrial = async (userId: number, industrialData) => {
    const user = await User.findByPk(userId)
    const industrial = await Industrial.create(industrialData);
    await user.setIndustrial(industrial)
    return user;
}

export const createHealthActor = async (userId: number, healthActorData) => {
    const user = await User.findByPk(userId)
    const researcher = await HealthActor.create(healthActorData);
    await user.setHealthActor(researcher)
    return user;
}

export const createResearcher = async (userId: number, researcherData) => {
    const user = await User.findByPk(userId)
    const researcher = await Researcher.create(researcherData);
    await user.setResearcher(researcher)
    return user;
}

export const getAllFollowers = async (userId: number) => {
    const user = await User.findByPk(userId);
    return user.getFollowers();
}

export const addFollow = async ( args: { userId: number, followerId: number }) => {
    try {
        const {userId, followerId} = args;

        if (userId === followerId) {
            throw new Error("Un utilisateur ne peut pas se suivre lui-même");
        }

        const user = await User.findByPk(userId);
        const follower = await User.findByPk(followerId);

        if (!user) {
            throw new Error(`Utilisateur avec l'ID ${userId} non trouvé`);
        }

        if (!follower) {
            throw new Error(`Suiveur avec l'ID ${followerId} non trouvé`);
        }

        await user.addFollower(follower);

        return "Votre abonnement a été pris en compte !"
    } catch (error) {
        console.error(error);
        return `Une erreur est survenue: ${error.message}`;
    }
}

export const removeFollow = async (args: { userId: number, followerId: number }) => {
    try {
        const { userId, followerId } = args;

        const user = await User.findByPk(userId);
        const follower = await User.findByPk(followerId);

        if (!user) {
            throw new Error(`Utilisateur avec l'ID ${userId} non trouvé`);
        }

        if (!follower) {
            throw new Error(`Suiveur avec l'ID ${followerId} non trouvé`);
        }

        await user.removeFollower(follower);

        return "Vous avez arrêté de suivre cet utilisateur.";
    } catch (error) {
        console.error(error);
        return `Une erreur est survenue: ${error.message}`;
    }
};

export const getAllFollowing = async (userId: number) => {
    const user = await User.findByPk(userId);
    return user.getFollowing();
}

export const checkIsFollowed = async (args: { userId: number, followerId: number }): Promise<Boolean> => {
    const { userId, followerId } = args;

    const user = await User.findByPk(userId, {
        include: ['Following', 'Followers'],
    });

    const followings: UserT[] = user.Following;

    const followingsIdArr: number[] = followings.map((follower: UserT) => follower.id);

    return followingsIdArr.includes(+followerId);

}

export const logUser = async (args: { email: string, password: string }): Promise<UserT|Error> => {
    const { email, password } = args;

    try {
        const user = await User.findOne({
            where : { email: email }
        })

        const isCorrectPassword = await bcrypt.compare(password, user.password)

        if (isCorrectPassword) {
            return user;
        } else {
            return new Error('Email ou mot de passe incorrect')
        }
    } catch (e) {
        console.log(e)
    }
}