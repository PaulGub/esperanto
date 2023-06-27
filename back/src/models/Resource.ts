import { Model, DataTypes } from 'sequelize';
import { SequelizeClient } from '@clients/sequelize';

export interface ResourceT extends Model {
    id: number,
    link: string
}

export const Resource = SequelizeClient.define<ResourceT>(
    'resource',
    {
        link: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isUrl: true,
            },
        },
    },
);