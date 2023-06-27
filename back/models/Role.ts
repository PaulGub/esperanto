import { Model, DataTypes } from 'sequelize';
import { SequelizeClient } from "../clients/sequelize";

export interface RoleT extends Model {
    id: number,
    name: string,
}

export const Role = SequelizeClient.define<RoleT>(
    'role',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
            },
        }
    }
);