import { Model, DataTypes } from 'sequelize';
import { SequelizeClient } from "../clients/sequelize";

export interface ResourceT extends Model {
    id: number,
    link: string
}

export const Resource = SequelizeClient.define<ResourceT>(
    'Resource',
    {
        link: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: 1,
                notNull: true,
            }
        }
    }
);