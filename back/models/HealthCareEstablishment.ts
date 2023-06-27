import { Model, DataTypes } from 'sequelize';
import { SequelizeClient } from "../clients/sequelize";

export interface HealthCareEstablishmentT extends Model {
    id: number,
    name: string,
    address1: string,
    address2?: string,
    address3?: string,
    zipCode: number,
    city: string,
    country: string
}

export const HealthCareEstablishment = SequelizeClient.define<HealthCareEstablishmentT>(
    'HealthCareEstablishment',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^[a-z]+$/i,
                min: 1,
                notNull: true,
            },
        },
        address1: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^[a-z]+$/i,
                min: 1,
                notNull: true,
            },
        },
        address2: {
            type: DataTypes.STRING,
            validate: {
                is: /^[a-z]+$/i,
                min: 1,
            },
        },
        address3: {
            type: DataTypes.STRING,
            validate: {
                is: /^[a-z]+$/i,
                min: 1,
            },
        },
        zipCode: {
            type: DataTypes.NUMBER,
            allowNull: false,
            validate: {
                len: [5, 5],
                notNull: true,
            },
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^[a-z]+$/i,
                min: 1,
                notNull: true,
            },
        },
        country: {
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