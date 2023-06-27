import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';
dotenv.config();

export const SequelizeClient = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        host: process.env.DATABASE_HOST,
        port: +process.env.DATABASE_PORT || 3306,
        dialect: 'mysql',
        logging: false,
    },
);