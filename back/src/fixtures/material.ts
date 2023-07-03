import { faker } from "@faker-js/faker/locale/fr";
import { Material } from "@server/models";

export const createFakeMaterials = async (count: number): Promise<void> => {
  let nbMaterialsCreated: number = 0;
  for (let i: number = 0; i < count; i++) {

    const fakeMaterial = {
      name: faker.lorem.word(),
      resourceLink: faker.image.url(),
      resourceImage: faker.image.url(),
      description: faker.lorem.paragraph(),
    }

    const [, created] = await Material.findOrCreate({ where: fakeMaterial });

    created ? nbMaterialsCreated+=1 : null
  }

  console.log(`✅  ${nbMaterialsCreated} Matériels créés`);
}