import { Model, DataTypes } from 'sequelize';
import { SequelizeClient } from "../clients/sequelize";

export interface ResearcherT extends Model {
    id: number,
    researchUnitName: string,
    researchDepartment: string,
    researchArea: string,
    description?: string
}

export const Researcher = SequelizeClient.define<ResearcherT>(
    'Researcher',
    {
        researchUnitName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^[a-z]+$/i,
                min: 1,
                notNull: true,
            },
        },
        researchDepartment: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^[a-z]+$/i,
                min: 1,
                notNull: true,
            },
        },
        researchArea: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^[a-z]+$/i,
                min: 1,
                notNull: true,
            },
        },
        description: {
            type: DataTypes.TEXT
        },
    }
);