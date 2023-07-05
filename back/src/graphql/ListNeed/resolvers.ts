import {ListNeedT} from "@server/models";
import {addNeedToList, createListNeed, getListNeedByUserId} from "@controllers/ListNeedControllers";

export default {
    Query: {
        listNeedByUserId: async (_, args: { userId: number }): Promise<ListNeedT[]> => getListNeedByUserId(args.userId),
    },
    Mutation: {
        createListNeed: async (_, args: { userId: number, listName: string, arrayNeedId: number[] }):  Promise<ListNeedT> => createListNeed(args),
        addNeedToList : async (_, args: { userId: number, listId: number, arrayNeedId: number[] }): Promise<ListNeedT|Error>  => addNeedToList(args)
    }
};