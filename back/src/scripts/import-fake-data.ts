import { createFakeUsersHealthActor, createFakeUsersIndustrial, createFakeUsersResearcher } from "@fixtures/user";
import { associations } from "@models/associations";
import { createFakeMaterials } from "@fixtures/material";

async function main() {
  console.log('Importing data...');
  associations();
  await createFakeUsersHealthActor(150);
  await createFakeUsersResearcher(300);
  await createFakeUsersIndustrial(50);
  await createFakeMaterials(150);
  console.log('✅  Importing done!');
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
