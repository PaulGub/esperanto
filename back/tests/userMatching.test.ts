import { userTagsMatching } from '../src/helpers/matching';
import { UserInterface } from "../src/types";

describe('userTagsMatching', (): void => {
  const userToMatch: UserInterface = {
    id: 1,
    firstname: 'John',
    lastname: 'Doe',
    email: 'john.doe@example.com',
    role: 'user',
    tags: [
      {
        id: 1,
        name: 'tag1'
      },
      {
        id: 2,
        name: 'tag2'
      },
      {
        id: 3,
        name: 'tag3'
      },
    ],
  };

  const users: UserInterface[] = [
    {
      id: 2,
      firstname: 'Jane',
      lastname: 'Smith',
      email: 'jane.smith@example.com',
      role: 'user',
      tags: [
        {
          id: 1,
          name: 'tag1'
        },
        {
          id: 2,
          name: 'tag2'
        },
        {
          id: 4,
          name: 'tag4'
        },
      ],
    },
  ];

  it('should return users with matching tags in descending order of common tag count', (): void => {
    const result: UserInterface[] = userTagsMatching(userToMatch, users);
    expect(result).toEqual([
      {
        id: 2,
        firstname: 'Jane',
        lastname: 'Smith',
        email: 'jane.smith@example.com',
        role: 'user',
        tags: [
          {
            id: 1,
            name: 'tag1'
          },
          {
            id: 2,
            name: 'tag2'
          },
          {
            id: 4,
            name: 'tag4'
          },
        ],
      },
    ]);
  });

  it('should return up to 10 users', (): void => {
    const largeUserList: UserInterface[] = Array.from({ length: 20 }, (_, index: number): UserInterface => ({
      id: index + 1,
      firstname: 'User',
      lastname: `Name ${index + 1}`,
      email: `user${index + 1}@example.com`,
      role: 'user',
      tags: [
        {
          id: 1,
          name: 'tag1'
        },
        {
          id: 2,
          name: 'tag2'
        },
        {
          id: 3,
          name: 'tag3'
        },
      ],
    }));

    const result: UserInterface[] = userTagsMatching(userToMatch, largeUserList);
    expect(result.length).toBe(10);
  });
});
