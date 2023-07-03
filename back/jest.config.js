/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '@clients/(.*)': '<rootDir>/src/clients/$1',
    '@config': '<rootDir>/config/index.ts',
    '@controllers/(.*)': '<rootDir>/src/controllers/$1',
    '@enums/(.*)': '<rootDir>/src/enums/$1',
    '@fixtures/(.*)': '<rootDir>/src/fixtures/$1',
    '@helpers/(.*)': '<rootDir>/src/helpers/$1',
    '@models/(.*)': '<rootDir>/src/models/$1',
    '@repositories/(.*)': '<rootDir>/src/repositories/$1',
    '@resolvers/(.*)': '<rootDir>/src/resolvers/$1',
    '@scripts/(.*)': '<rootDir>/src/scripts/$1',
    '@server/(.*)': '<rootDir>/src/$1',
    '@typedefs/(.*)': '<rootDir>/src/typedefs/$1',
  },
};
