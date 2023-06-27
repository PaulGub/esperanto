import { Model, DataTypes } from 'sequelize';
import { SequelizeClient } from "../clients/sequelize";

export interface HealthActorT extends Model {
    id: number,
    careGiver: string,
    careServiceType: string,
    supportServices: string,
}

export const HealthActor = SequelizeClient.define<HealthActorT>(
    'HealthActor',
    {
        careServiceType: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^[a-z]+$/i,
                min: 1,
                notNull: true,
            },
        },
        supportServices: {
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