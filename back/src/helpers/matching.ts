import {TagInterface, UserAndNumberTagsMatched, UserInterface, NeedInterface} from "@server/types";

export const userTagsMatching = (userToMatch: UserInterface, users: UserInterface[]): UserInterface[] => {

  const userToMatchTags: string[] = userToMatch.tags.map((tag: TagInterface) => tag.name);

  const usersWithCommonTags: UserAndNumberTagsMatched[] = users.map((user: UserInterface): UserAndNumberTagsMatched => {
    const userTags: string[] = user.tags.map((tag: TagInterface) => tag.name);
    const commonTags: string[] = userToMatchTags.filter((tag: string) => userTags.includes(tag));
    const commonTagCount: number = commonTags.length;
    return {
      user,
      commonTagCount
    };
  });

  usersWithCommonTags.sort((a: UserAndNumberTagsMatched, b: UserAndNumberTagsMatched) => b.commonTagCount - a.commonTagCount);

  return usersWithCommonTags.map((userAndNumberTagsMatched: UserAndNumberTagsMatched) => userAndNumberTagsMatched.user).slice(0, 10);
}

export const needUserTagsMatching = (userToMatch: UserInterface, users: UserInterface[], currentNeed: NeedInterface): UserInterface[] => {
  const needTags: string[] = currentNeed.tags.map((tag: TagInterface) => tag.name);
  
  const usersWithCommonTags: UserAndNumberTagsMatched[] = users
    .filter((user: UserInterface) => user.id !== userToMatch.id) // Exclure l'utilisateur qui a créé le besoin
    .map((user: UserInterface): UserAndNumberTagsMatched => {
      const userTags: string[] = user.tags.map((tag: TagInterface) => tag.name);
      const commonTags: string[] = needTags.filter((tag: string) => userTags.includes(tag));
      const commonTagCount: number = commonTags.length;
      return {
        user,
        commonTagCount
      };
    });

  usersWithCommonTags.sort((a: UserAndNumberTagsMatched, b: UserAndNumberTagsMatched) => b.commonTagCount - a.commonTagCount);

  return usersWithCommonTags.map((userAndNumberTagsMatched: UserAndNumberTagsMatched) => userAndNumberTagsMatched.user).slice(0, 10);
};
