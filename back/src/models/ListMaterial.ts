import {Model, DataTypes, BelongsToSetAssociationMixin, HasManyAddAssociationsMixin} from 'sequelize';
import { SequelizeClient } from '@clients/sequelize';
import {UserT} from "@models/User";
import {MaterialT} from "@models/Material";

export interface ListMaterialsT extends Model {
    id: number,
    name: string,

    userId?: number

    setUser(user: UserT): BelongsToSetAssociationMixin<UserT, number>
    addMaterials(materialsId: number[]): HasManyAddAssociationsMixin<MaterialT[], number[]>
}

export const ListMaterial = SequelizeClient.define<ListMaterialsT>(
    'listMaterial',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
);