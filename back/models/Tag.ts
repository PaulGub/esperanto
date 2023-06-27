import { Model, DataTypes } from 'sequelize';
import { SequelizeClient } from "../clients/sequelize";

export interface TagT extends Model {
    id: number,
    name: string,
}

export const Tag = SequelizeClient.define<TagT>(
    'Tag',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^[a-z]+$/i,
                min: 1,
                notNull: true,
            },
        }
    }
);