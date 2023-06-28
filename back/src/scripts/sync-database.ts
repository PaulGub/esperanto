import * as dotenv from 'dotenv';

dotenv.config();

import { SequelizeClient } from '@clients/sequelize';
import { associations } from '@models/associations';
require('@models/index');

async function main() {
  console.log('Syncing database...');
  associations();
  await SequelizeClient.sync({ alter: true });
  console.log('✅ Done!');
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
