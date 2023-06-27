import { Model, DataTypes } from 'sequelize';
import { SequelizeClient } from '@clients/sequelize';

export interface ProfessionalT extends Model {
    id: number,
    name: string,
}

export const Professional = SequelizeClient.define<ProfessionalT>(
    'professional',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
);