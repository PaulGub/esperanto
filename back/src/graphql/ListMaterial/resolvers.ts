import {ListMaterialsT} from "@server/models";
import {createListMaterial, getListMaterialByUserId, addMaterialToList} from "@controllers/ListMaterialControllers";

export default {
    Query: {
        listMaterialByUserId: async (_, args: { userId: number }): Promise<ListMaterialsT[]> => getListMaterialByUserId(args.userId),
    },
    Mutation: {
        createListMaterial: async (_, args: { userId: number, listName: string, arrayMaterialId: number[] }): Promise<ListMaterialsT> => createListMaterial(args),
        addMaterialToList: async (_, args: { userId: number, listId: number, arrayMaterialId: number[] }): Promise<ListMaterialsT|Error> => addMaterialToList(args),
    },
};