import {
  Model,
  DataTypes,
  BelongsToSetAssociationMixin,
  HasManyAddAssociationsMixin,
  HasManyRemoveAssociationMixin
} from 'sequelize';
import { SequelizeClient } from '@clients/sequelize';
import { UserT } from "@models/User";

export interface ListUsersT extends Model {
    id: number,
    name: string,

    userId?: number,
    users?: UserT[],

    setUser(user: UserT): BelongsToSetAssociationMixin<UserT, number>
    addUsers(usersId: number[]): HasManyAddAssociationsMixin<UserT[], number[]>
    removeUser(userId: number): HasManyRemoveAssociationMixin<UserT, number>
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