import { Model, DataTypes } from 'sequelize';
import { SequelizeClient } from '@clients/sequelize';

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
    'healthCareEstablishment',
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
          type: DataTypes.STRING(5),
          allowNull: false,
          validate: {
            len: [5, 5],
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