import {
  Model,
  DataTypes,
  NonAttribute,
  HasOneSetAssociationMixin,
  HasManyAddAssociationMixin,
} from 'sequelize';
import { SequelizeClient } from '@clients/sequelize';
import {TagT} from "@models/Tag";
import {UserT} from "@models/User";

export interface NeedT extends Model {
    id: number,
    title: string,
    type: string,
    description?: string,
    infrastructure?: string,

    userId?: number
    tags?: NonAttribute<TagT[]>;

    addTag(tag: TagT): HasManyAddAssociationMixin<TagT, number>,
    setUser(user: UserT): HasOneSetAssociationMixin<UserT, number>
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