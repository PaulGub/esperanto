import { Model, DataTypes } from 'sequelize';
import { SequelizeClient } from '@clients/sequelize';

export interface MaterialT extends Model {
    id: number,
    name: string,
    resourceLink: string,
    resourceImage?: string,
    description?: string,
}

export const Material = SequelizeClient.define<MaterialT>(
    'material',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        resourceLink: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              isUrl: true,
            },
        },
        resourceImage: {
          type: DataTypes.STRING,
          validate: {
            isUrl: true,
          },
        },
        description: DataTypes.TEXT,
    },
);