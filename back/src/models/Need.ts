import { Model, DataTypes } from 'sequelize';
import { SequelizeClient } from '@clients/sequelize';

export interface NeedT extends Model {
    id: number,
    title: string,
    type: string,
    description?: string,
    infrastructure?: string,
}

export const Need = SequelizeClient.define<NeedT>(
    'need',
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [['Material', 'Professional', 'Infrastructure']],
            },
        },
        description: DataTypes.TEXT,
        infrastructure: DataTypes.TEXT,
    },
);