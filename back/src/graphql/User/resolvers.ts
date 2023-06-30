import {
  getAllUsers,
  getUsersByTagUser,
  getUserById,
  createUser,
  createIndustrial,
  createHealthActor, createResearcher
} from '@controllers/UserControllers';

import {HealthActorTypes} from "@server/types";

export default {
  Query: {
    users: () => getAllUsers(),
    usersByTagUser: async (_, args: { userId: number }) => getUsersByTagUser(args.userId),
    userById: async (_, args: { userId: number }) => getUserById(args.userId),
  },
  Mutation: {
    createUser: async (_, args) => {
      return createUser(args);
    },
    createIndustrial: async (_, args) => {
      return createIndustrial(args);
    },
    createHealthActor: async (_, args :{userId: number, healthActorData: HealthActorTypes}) => {
      return createHealthActor(args.userId, args.healthActorData);
    },
    createResearcher: async (_, args) => {
      return createResearcher(args);
    },
  },
};
