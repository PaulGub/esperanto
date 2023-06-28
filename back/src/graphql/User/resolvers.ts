import { getAllUsers, getUsersByTagUser, getUserById } from '@controllers/UserControllers';

export default {
  Query: {
    users: () => getAllUsers(),
    usersByTagUser: async (_, args: { userId: number }) => getUsersByTagUser(args.userId),
    userById: async (_, args: { userId: number }) => getUserById(args.userId),
  },
};