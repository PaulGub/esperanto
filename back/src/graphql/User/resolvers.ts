import { getAllUsers, getUsersByTagUser } from '@controllers/UserControllers';

export default {
  Query: {
    users: () => getAllUsers(),
    usersByTagUser: (userId: string) => getUsersByTagUser(userId),
  },
};