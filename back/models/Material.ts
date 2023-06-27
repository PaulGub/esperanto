import { Model, DataTypes } from 'sequelize';
import { SequelizeClient } from "../clients/sequelize";

export interface MaterialT extends Model {
    id: number,
    name: string,
    resourceLink?: string,
    description?: string,
}

export const Material = SequelizeClient.define<MaterialT>(
    'Material',
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
        resourceLink: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.TEXT
        },
    }
);