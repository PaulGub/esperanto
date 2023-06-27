import { Model, DataTypes } from 'sequelize';
import { SequelizeClient } from "../clients/sequelize";

export interface NeedT extends Model {
    id: number,
    title: string,
    description?: string,
    type: string,
    infrastructure?: string,
}

export const Need = SequelizeClient.define<NeedT>(
    'Need',
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^[a-z]+$/i,
                min: 1,
                notNull: true,
            },
        },
        description: {
            type: DataTypes.TEXT,
            validate: {
                min: 1,
            },
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [['Material', 'Professional', 'Infrastructure']],
                notNull: true,
            },
        },
        infrastructure: {
            type: DataTypes.TEXT,
            validate: {
                is: /^[a-z]+$/i,
                min: 1,
            },
        }
    }
);