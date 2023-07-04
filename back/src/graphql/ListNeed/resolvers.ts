import {ListNeedT} from "@server/models";
import { getListNeedByUserId} from "@controllers/ListNeedControllers";

export default {
    Query: {
        listNeedByUserId: async (_, args: { userId: number }): Promise<ListNeedT[]> => getListNeedByUserId(args.userId),
    }
};