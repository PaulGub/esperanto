import {Model, DataTypes, BelongsToSetAssociationMixin, HasManyAddAssociationsMixin} from 'sequelize';
import { SequelizeClient } from '@clients/sequelize';
import {UserT} from "@models/User";

export interface ListUsersT extends Model {
    id: number,
    name: string,

    userId?: number,

  setUser(user: UserT): BelongsToSetAssociationMixin<UserT, number>
  addUsers(usersId: number[]): HasManyAddAssociationsMixin<UserT[], number[]>
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