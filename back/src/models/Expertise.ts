import { Model, DataTypes } from 'sequelize';
import { SequelizeClient } from '@clients/sequelize';

export interface ExpertiseT extends Model {
    id: number,
    name: string,
    rating: number
}

export const Expertise = SequelizeClient.define<ExpertiseT>(
    'expertise',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5,
                isInt: true,
                isNumeric: true,
            },
        },
    },
);