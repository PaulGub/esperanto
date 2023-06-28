import { getAllUsers, getUsersByTagUser } from '@controllers/UserControllers';

export default {
  Query: {
    users: () => getAllUsers(),
    usersByTagUser: async (_, args: { userId: number }) => getUsersByTagUser(args.userId),
  },
};