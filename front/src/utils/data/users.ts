import { userProps } from "../types";
import { faker } from "@faker-js/faker";

function createRandomUser() {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    avatar: faker.image.avatar(),
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl nec lacinia lacinia, nunc nisl tincidunt nunc, quis lacinia nisl nunc ne",
    tag: faker.helpers.arrayElement(["Chercheur", "Santé", "Industriel"]),
  };
}
const users = [];
for (let i = 0; i < 10; i++) {
  users.push(createRandomUser());
}

export default users as userProps[];
