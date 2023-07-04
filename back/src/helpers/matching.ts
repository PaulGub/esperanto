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

  return usersWithCommonTags.map((userAndNumberTagsMatched: UserAndNumberTagsMatched) => userAndNumberTagsMatched.user).slice(0, 8);
};


export const needByUserIdSuggestion = (currentUser: UserInterface, allNeeds: NeedInterface[]): NeedInterface[] => {
  const userTags: string[] = currentUser.tags.map((tag: TagInterface) => tag.name);

  const matchingNeeds: NeedInterface[] = [];

  allNeeds.forEach((need: NeedInterface) => {
      const needTags: string[] = need.tags.map((tag: TagInterface) => tag.name);
      const commonTags: string[] = needTags.filter((tag: string) => userTags.includes(tag));
      if (commonTags.length > 0) {
          matchingNeeds.push(need);
      }
  });

  matchingNeeds.sort((a: NeedInterface, b: NeedInterface) => {
    const tagsInCommonA = a.tags.filter((tag: TagInterface) => userTags.includes(tag.name)).length;
    const tagsInCommonB = b.tags.filter((tag: TagInterface) => userTags.includes(tag.name)).length;
    return tagsInCommonB - tagsInCommonA;
  });

  return matchingNeeds;
}
