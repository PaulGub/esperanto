import { faker } from '@faker-js/faker/locale/fr';
import { User, HealthActor, Researcher, Industrial, Tag } from '@models/index';
import CONST from '@server/CONST';

export const createFakeUsersHealthActor = async (count) => {
  for (let i = 0; i < count; i++) {
    const tags = faker.helpers.arrayElements(CONST.HEALTH_KEY_WORDS, { min: 3, max: 30 });

    const fakeUser = {
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      phoneNumber: faker.phone.number('+33 6 ## ## ## ##'),
      healthNetwork: faker.helpers.arrayElement(CONST.HEALTH_NETWORKS),
      professionalStatus: faker.lorem.word(),
      experiences: faker.lorem.paragraph(),
      profilePicture: faker.image.avatar(),
      description: faker.lorem.paragraph(),
      profileBanner: faker.image.url(),
      role: CONST.ROLES.HEALTH_ACTOR,
      healthActor: {
        careServiceType: faker.helpers.arrayElement(CONST.CARE_SERVICES),
        supportServices: faker.helpers.arrayElement(CONST.SUPPORT_SERVICES),
      },
    };

    const existingUser = await User.findOne({ where: { email: fakeUser.email } });

    if (existingUser) {
      console.log(`User with email ${fakeUser.email} already exists. Skipping...`);
      continue;
    }

    const user = await User.create(fakeUser, { include: [HealthActor] });

    for (const tagName of tags) {
      const [tag] = await Tag.findOrCreate({ where: { name: tagName } });
      await user.addTag(tag);
    }
  }
  console.log(`✅  ${count} acteurs de la santé créés`);
}

export const createFakeUsersResearcher = async (count) => {
  for (let i = 0; i < count; i++) {
    const tags = faker.helpers.arrayElements(CONST.HEALTH_KEY_WORDS, { min: 3, max: 30 });

    const fakeUser = {
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      phoneNumber: faker.phone.number('+33 6 ## ## ## ##'),
      healthNetwork: faker.helpers.arrayElement(CONST.HEALTH_NETWORKS),
      professionalStatus: faker.lorem.word(),
      experiences: faker.lorem.paragraph(),
      profilePicture: faker.image.avatar(),
      profileBanner: faker.image.url(),
      description: faker.lorem.paragraph(),
      role: CONST.ROLES.HEALTH_ACTOR,
      researcher: {
        researchUnitName: faker.helpers.arrayElement(CONST.RESEARCH_UNITS),
        researchDepartment: faker.helpers.arrayElement(CONST.RESEARCH_DEPARTMENTS),
        researchArea: faker.helpers.arrayElement(CONST.RESEARCH_AREAS),
        description: faker.lorem.paragraph(),
      },
    };

    const existingUser = await User.findOne({ where: { email: fakeUser.email } });

    if (existingUser) {
      console.log(`User with email ${fakeUser.email} already exists. Skipping...`);
      continue;
    }

    const user = await User.create(fakeUser, { include: [Researcher] });

    for (const tagName of tags) {
      const [tag] = await Tag.findOrCreate({ where: { name: tagName } });
      await user.addTag(tag);
    }
  }
  console.log(`✅  ${count} chercheurs créés`);
}

export const createFakeUsersIndustrial = async (count) => {
  for (let i = 0; i < count; i++) {
    const tags = faker.helpers.arrayElements(CONST.HEALTH_KEY_WORDS, { min: 3, max: 30 });

    const fakeUser = {
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      phoneNumber: faker.phone.number('+33 6 ## ## ## ##'),
      healthNetwork: faker.helpers.arrayElement(CONST.HEALTH_NETWORKS),
      professionalStatus: faker.lorem.word(),
      experiences: faker.lorem.paragraph(),
      profilePicture: faker.image.avatar(),
      profileBanner: faker.image.url(),
      description: faker.lorem.paragraph(),
      role: CONST.ROLES.HEALTH_ACTOR,
      industrial: {
        careSector: faker.helpers.arrayElement(CONST.CARE_SECTORS),
      }
    };

    const existingUser = await User.findOne({ where: { email: fakeUser.email } });

    if (existingUser) {
      console.log(`User with email ${fakeUser.email} already exists. Skipping...`);
      continue;
    }

    const user = await User.create(fakeUser, { include: [Industrial] });

    for (const tagName of tags) {
      const [tag] = await Tag.findOrCreate({ where: { name: tagName } });
      await user.addTag(tag);
    }
  }
  console.log(`✅  ${count} industriels créés`);
}