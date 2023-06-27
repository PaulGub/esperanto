import { SequelizeClient } from '@clients/sequelize';
import * as dotenv from 'dotenv';
import { associations } from "@models/associations";

dotenv.config();

const main = async () => {
    try {
        console.log('Connecting to database...');
        await SequelizeClient.authenticate();
        associations();
        console.log('✅ Database connected !');
    } catch (error) {
        console.log('⛔ Database connection failed !');
    }
}

main().catch((error) => {
    console.log(error)
});