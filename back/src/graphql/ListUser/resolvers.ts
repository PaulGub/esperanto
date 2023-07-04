import {ListUsersT} from "@server/models";
import { getListUserByUserId} from "@controllers/ListUserControllers";

export default {
    Query: {
        listUserByUserId: async (_, args: { userId: number }): Promise<ListUsersT[]> => getListUserByUserId(args.userId),
    }
};