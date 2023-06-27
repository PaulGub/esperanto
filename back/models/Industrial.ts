import { Model, DataTypes } from 'sequelize';
import { SequelizeClient } from "../clients/sequelize";

export interface IndustrialT extends Model {
    id: number,
    careSector: string,
    otherSector: string,
}

export const Industrial = SequelizeClient.define<IndustrialT>(
    'Industrial',
    {
        careSector: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^[a-z]+$/i,
                min: 1,
                notNull: true,
            },
        },
        otherSector: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^[a-z]+$/i,
                min: 1,
                notNull: true,
            },
        },
    }
);