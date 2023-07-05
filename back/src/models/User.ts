import {
    BelongsToSetAssociationMixin,
    DataTypes,
    HasManyAddAssociationMixin,
    HasManyGetAssociationsMixin,
    Model,
    NonAttribute,
} from 'sequelize';
import {SequelizeClient} from '@clients/sequelize';
import CONST from "@server/CONST";
import {TagT} from "@models/Tag";
import bcrypt from "bcrypt";
import {ResearcherT} from "@models/Researcher";
import {HealthActorT} from "@models/HealthActor";
import {IndustrialT} from "@models/Industrial";

export interface UserT extends Model {
    id: number,
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    phoneNumber?: string,
    role: string,
    healthNetwork?: string,
    professionalStatus?: string,
    experiences?: string,
    description?: string,
    profilePicture?: string,
    profileBanner?: string,

    tags?: NonAttribute<TagT[]>;
    Followers?: NonAttribute<UserT[]>;
    Following?: NonAttribute<UserT[]>;

    addTag(tag: TagT): HasManyAddAssociationMixin<TagT, number>,
    getFollowers(): HasManyGetAssociationsMixin<UserT>,
    getFollowing(): HasManyGetAssociationsMixin<UserT>,
    addFollower(user: UserT): HasManyAddAssociationMixin<UserT, number>
    removeFollower(user: UserT): HasManyAddAssociationMixin<UserT, number>
    setIndustrial(industrial: IndustrialT): BelongsToSetAssociationMixin<IndustrialT, number>
    setResearcher(researcher: ResearcherT): BelongsToSetAssociationMixin<ResearcherT, number>
    setHealthActor(healthActor: HealthActorT): BelongsToSetAssociationMixin<HealthActorT, number>
}

export const User = SequelizeClient.define<UserT>(
    'user',
    {
        firstname: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                len: [1, 100],
            }
        },
        lastname: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                len: [1, 100],
            },
        },
        email: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false,
          validate: {
            isEmail: true,
          },
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        },
        phoneNumber: {
          type: DataTypes.STRING(20),
          validate: {
            len: [17, 20],
          },
        },
        role: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            isIn: [CONST.ROLES.ARRAY]
          },
        },
        healthNetwork: DataTypes.STRING,
        professionalStatus: DataTypes.TEXT,
        experiences: DataTypes.TEXT,
        description: DataTypes.TEXT,
        profilePicture: DataTypes.STRING,
        profileBanner: DataTypes.STRING
    },
  {
    hooks: {
      beforeCreate: async (user) => {
        user.password = await bcrypt.hash(user.password, 10);
      },
      beforeUpdate: async (user) => {
        if (user.changed('password')) {
          user.password = await bcrypt.hash(user.password, 10);
        }
      },
    },
  },
);