import { Model, DataTypes } from 'sequelize';
import { SequelizeClient } from '@clients/sequelize';

export interface CompanyT extends Model {
    id: number,
    name: string,
    address1: string,
    address2?: string,
    address3?: string,
    zipCode: number,
    city: string,
    country: string
}

export const Company = SequelizeClient.define<CompanyT>(
    'company',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address2: DataTypes.STRING,
        address3: DataTypes.STRING,
        zipCode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [5, 5],
                isInt: true,
                isNumeric: true,
            },
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
);