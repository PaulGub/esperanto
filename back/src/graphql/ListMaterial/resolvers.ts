import {ListMaterialsT} from "@server/models";
import { getListMaterialByUserId} from "@controllers/ListMaterialControllers";

export default {
    Query: {
        listMaterialByUserId: async (_, args: { userId: number }): Promise<ListMaterialsT[]> => getListMaterialByUserId(args.userId),
    }
};