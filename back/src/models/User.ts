import { Model, DataTypes } from 'sequelize';
import { SequelizeClient } from '@clients/sequelize';
import CONST from "@server/CONST";

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
        profilePicture: DataTypes.STRING
    },
);