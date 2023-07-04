import { Model, DataTypes } from 'sequelize';
import { SequelizeClient } from '@clients/sequelize';

export interface ListUsersT extends Model {
    id: number,
    name: string,
}

export const ListUser = SequelizeClient.define<ListUsersT>(
    'listUser',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
);