import { Model, DataTypes } from 'sequelize';
import { SequelizeClient } from '@clients/sequelize';

export interface IndustrialT extends Model {
    id: number,
    careSector?: string,
    otherSector?: string,
}

export const Industrial = SequelizeClient.define<IndustrialT>(
    'industrial',
    {
        careSector: DataTypes.STRING,
        otherSector: DataTypes.STRING,
    },
);