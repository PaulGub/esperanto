import {
  getAllUsers,
  getUsersByTagUser,
  getUserById,
  getUsersByTagNeed,
  createUser,
  createIndustrial,
  createHealthActor,
  createResearcher,
  getAllFollowers,
  addFollow,
  removeFollow
} from '@controllers/UserControllers';

import { HealthActorTypes, UserInterface } from "@server/types";

export default {
  Query: {
    users: async (): Promise<UserInterface[]> => getAllUsers(),
    usersByTagUser: async (_, args: { userId: number }): Promise<UserInterface[]> => getUsersByTagUser(args.userId),
    userById: async (_, args: { userId: number }): Promise<UserInterface> => getUserById(args.userId),
    usersByTagNeed: async (_, args: { userId: number, needId: number }) => getUsersByTagNeed(args.userId, args.needId),
    getAllFollowers: async (_, args: { userId: number }) => getAllFollowers(args.userId),
  },
  Mutation: {
    createUser: async (_, args) => {
      return createUser(args);
    },
    createIndustrial: async (_, args) => {
      return createIndustrial(args);
    },
    createHealthActor: async (_, args: { userId: number, healthActorData: HealthActorTypes }) => {
      return createHealthActor(args.userId, args.healthActorData);
    },
    createResearcher: async (_, args) => {
      return createResearcher(args);
    },
    addFollow: async (_, args: { userId: number, followerId: number }) => addFollow(args),
    removeFollow: async (_, args: { userId: number, followerId: number }) => removeFollow(args)
  }
};