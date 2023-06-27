import { Model, DataTypes } from 'sequelize';
import { SequelizeClient } from "../clients/sequelize";

export interface UserT extends Model {
    id: number,
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    phoneNumber?: string,
    healthNetwork?: string,
    professionalStatus?: string,
    experiences?: string,
}

export const User = SequelizeClient.define<UserT>(
    'user',
    {
        firstname: {
            type: DataTypes.STRING,
            validate: {
                is: /^[a-z]+$/i,
                min: 1,
                notNull: true,
            }
        },
        lastname: {
            type: DataTypes.STRING,
            validate: {
                is: /^[a-z]+$/i,
                min: 1,
                notNull: true,
            }
        },
        email: {
          type: DataTypes.STRING,
          unique: true,
          validate: {
            isEmail: true,
            notNull: true,
          },
        },
        password: {
          type: DataTypes.STRING,
          validate: {
            notNull: true,
            notEmpty: true,
          },
        },
        phoneNumber: {
          type: DataTypes.STRING,
          validate: {
            len: [10, 10],
          },
        },
        healthNetwork: DataTypes.STRING,
        professionalStatus: DataTypes.TEXT,
        experiences: DataTypes.TEXT
    },
);

