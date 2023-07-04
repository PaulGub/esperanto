import { Model, DataTypes } from 'sequelize';
import { SequelizeClient } from '@clients/sequelize';

export interface ListMaterialsT extends Model {
    id: number,
    name: string,
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