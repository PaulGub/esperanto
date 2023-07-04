import { getAllNeeds, getNeedsById, getNeedByUserIdSuggestion } from '@controllers/NeedControllers';

export default {
    Query: {
        needs: () => getAllNeeds(),
        needByNeedId: async (_, args: { needsId: number }) => getNeedsById(args.needsId),
        needByUserIdSuggestion: async (_, args: { userId: number }) => getNeedByUserIdSuggestion(args.userId)
    },
};