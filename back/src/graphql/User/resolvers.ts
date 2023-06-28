import { getAllUsers } from '@controllers/UserControllers';

export default {
  Query: {
    users: () => getAllUsers(),
  },
};