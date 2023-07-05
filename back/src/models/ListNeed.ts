import {Model, DataTypes, BelongsToSetAssociationMixin, HasManyAddAssociationsMixin} from 'sequelize';
import { SequelizeClient } from '@clients/sequelize';
import { UserT, NeedT } from "@models/index";

export interface ListNeedT extends Model {
    id: number,
    name: string,

    userId?: number

    setUser(user: UserT): BelongsToSetAssociationMixin<UserT, number>
    addNeeds(needsId: number[]): HasManyAddAssociationsMixin<NeedT[], number[]>
}

export const ListNeed = SequelizeClient.define<ListNeedT>(
    'listNeed',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
);