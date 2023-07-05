import {
    createNeed,
    deleteNeed,
    getAllNeeds,
    getNeedByUserIdSuggestion,
    getNeedsById
} from '@controllers/NeedControllers';
import {NeedT} from "@models/Need";
import {NeedData} from "@server/types";

export default {
    Query: {
        needs: () => getAllNeeds(),
        needByNeedId: async (_, args: { needsId: number }) => getNeedsById(args.needsId),
        needByUserIdSuggestion: async (_, args: { userId: number }) => getNeedByUserIdSuggestion(args.userId)
    },
    Mutation: {
        createNeed: async (_, args: { userId: number, needData: NeedData }): Promise<NeedT> => createNeed(args),
        deleteNeed: async (_, args: { userId: number, needId: number }): Promise<String|Error> => deleteNeed(args),
    },
};