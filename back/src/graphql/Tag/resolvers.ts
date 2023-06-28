import {getAllTag, getTagsByTagNeed, getTagsByTagUser} from '@controllers/TagControllers';

export default {
    Query: {
        tags: () => getAllTag(),
        tagsByTagUser: async (_, args: { userId: number }) => getTagsByTagUser(args.userId),
        tagsByTagNeed: async (_, args: { needId: number }) => getTagsByTagNeed(args.needId),
    },
};