import { getAllNeeds, getNeedsById } from '@controllers/NeedControllers';

export default {
    Query: {
        needs: () => getAllNeeds(),
        needByNeedId: async (_, args: { needsId: number }) => getNeedsById(args.needsId),
    },
};