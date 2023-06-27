import { Model, DataTypes } from 'sequelize';
import { SequelizeClient } from "../clients/sequelize";

export interface ExpertiseT extends Model {
    id: number,
    name: string,
    rating: number
}

export const Expertise = SequelizeClient.define<ExpertiseT>(
    'Expertise',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^[a-z]+$/i,
                min: 1,
                notNull: true,
            },
        },
        rating: {
            type: DataTypes.NUMBER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5,
                notNull: true,
            },
        }
    }
);