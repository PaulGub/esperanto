import * as dotenv from 'dotenv';
import { SequelizeClient } from '../clients/sequelize.js';
dotenv.config();

const main = async () => {
    console.log('Connecting to database...');
    await SequelizeClient.authenticate();
    console.log('✅ Database connected !');

    //console.log(`🚀 Server ready`);
}

main().catch((error) => {
    console.log(error)
})