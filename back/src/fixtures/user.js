import { faker } from '@faker-js/faker/locale/fr';
import { User, HealthActor, Researcher, Industrial, Tag } from '@models/index';
import CONST from '@server/CONST';

const createFakeUser = async (count, role, modelIncluded, additionalFields) => {
  for (let i = 0; i < count; i++) {
    const tags = faker.helpers.arrayElements(CONST.HEALTH_KEY_WORDS, { min: 3, max: 30 });

    const fakeUser = {
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      phoneNumber: faker.phone.number('+33 6 ## ## ## ##'),
      healthNetwork: faker.helpers.arrayElement(CONST.HEALTH_NETWORKS),
      professionalStatus: faker.lorem.paragraph(),
      experiences: faker.lorem.paragraph(),
      role: role,
      ...additionalFields,
    };

    const existingUser = await User.findOne({ where: { email: fakeUser.email } });

    if (existingUser) {
      console.log(`User with email ${fakeUser.email} already exists. Skipping...`);
      continue;
    }

    const user = await User.create(fakeUser, { include: [modelIncluded] });

    for (const tagName of tags) {
      const [tag] = await Tag.findOrCreate({ where: { name: tagName } });
      await user.addTag(tag);
    }
  }
}

export const createFakeUsersHealthActor = async (count) => {
  await createFakeUser(count, CONST.ROLES.HEALTH_ACTOR, HealthActor, {
    healthActor: {
      careServiceType: faker.helpers.arrayElement(CONST.CARE_SERVICES),
      supportServices: faker.helpers.arrayElement(CONST.SUPPORT_SERVICES),
    },
  });
  console.log(`✅  ${count} acteurs de la santé créés`)
};

export const createFakeUsersResearcher = async (count) => {
  await createFakeUser(count, CONST.ROLES.RESEARCHER, Researcher, {
    researcher: {
      researchUnitName: faker.helpers.arrayElement(CONST.RESEARCH_UNITS),
      researchDepartment: faker.helpers.arrayElement(CONST.RESEARCH_DEPARTMENTS),
      researchArea: faker.helpers.arrayElement(CONST.RESEARCH_AREAS),
      description: faker.lorem.paragraph(),
    },
  });
  console.log(`✅  ${count} chercheurs créés`)
};

export const createFakeUsersIndustrial = async (count) => {
  await createFakeUser(count, CONST.ROLES.INDUSTRIAL, Industrial, {
    industrial: {
      careSector: faker.helpers.arrayElement(CONST.CARE_SECTORS),
    },
  });
  console.log(`✅  ${count} industriels créés`)
};