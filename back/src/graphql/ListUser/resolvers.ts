import {ListUsersT} from "@server/models";
import {addUserToList, createListUser, getListUserByUserId} from "@controllers/ListUserControllers";

export default {
    Query: {
        listUserByUserId: async (_, args: { userId: number }): Promise<ListUsersT[]> => getListUserByUserId(args.userId),
    },
    Mutation: {
        createListUser: async (_, args: { userId: number, listName: string, arrayUserId: number[] }): Promise<ListUsersT> => createListUser(args),
        addUserToList: async (_, args: { userId: number, listId: number, arrayUserId: number[] }): Promise<ListUsersT|Error> => addUserToList(args),
    },
};