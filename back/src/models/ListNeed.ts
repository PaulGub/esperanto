import { Model, DataTypes } from 'sequelize';
import { SequelizeClient } from '@clients/sequelize';

export interface ListNeedT extends Model {
    id: number,
    name: string,
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