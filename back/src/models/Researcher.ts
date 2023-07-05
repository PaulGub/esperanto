import { Model, DataTypes } from 'sequelize';
import { SequelizeClient } from '@clients/sequelize';

export interface ResearcherT extends Model {
    id: number,
    researchUnitName: string,
    researchDepartment: string,
    researchArea: string,
    description?: string
}

export const Researcher = SequelizeClient.define<ResearcherT>(
    'researcher',
    {
        researchUnitName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        researchDepartment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        researchArea: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
);