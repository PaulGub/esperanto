import { faker } from "@faker-js/faker/locale/fr";
import { HealthCareEstablishment } from "@server/models";

export const createFakeHealthCareEstablishment = async (count: number): Promise<void> => {
  let nbHealthCareEstablishmentsCreated: number = 0;
  for (let i: number = 0; i < count; i++) {

    const healthCareEstablishment = {
      name: faker.lorem.sentence(),
      address1: faker.location.streetAddress(),
      zipCode: faker.location.zipCode("#####"),
      city: faker.location.city(),
      country: "France"
    }

    const [, created] = await HealthCareEstablishment.findOrCreate({ where: healthCareEstablishment });

    created ? nbHealthCareEstablishmentsCreated+=1 : null
  }

  console.log(`✅  ${nbHealthCareEstablishmentsCreated} Établissements de santé créés`);
}