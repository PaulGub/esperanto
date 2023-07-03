import { Model, DataTypes } from 'sequelize';
import { SequelizeClient } from '@clients/sequelize';

export interface HealthActorT extends Model {
    id: number,
    careServiceType: string,
    supportServices: string,
}

export const HealthActor = SequelizeClient.define<HealthActorT>(
    'healthActor',
    {
        careServiceType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        supportServices: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
);