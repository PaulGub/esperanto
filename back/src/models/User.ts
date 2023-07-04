import {
    Model,
    DataTypes,
    HasManyAddAssociationMixin,
    NonAttribute,
    HasManyGetAssociationsMixin,
} from 'sequelize';
import { SequelizeClient } from '@clients/sequelize';
import CONST from "@server/CONST";
import { TagT } from "@models/Tag";

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

    addTag(tag: TagT): HasManyAddAssociationMixin<TagT, number>,
    getFollowers(): HasManyGetAssociationsMixin<UserT>,
    addFollower(user: UserT): HasManyAddAssociationMixin<UserT, number>
    removeFollower(user: UserT): HasManyAddAssociationMixin<UserT, number>
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
);