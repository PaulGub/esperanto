import { gql } from '@apollo/client';

export const ADD_FOLLOW = gql`
  mutation Mutation($userId: ID, $followerId: ID) {
    addFollow(userId: $userId, followerId: $followerId)
  }
`;
