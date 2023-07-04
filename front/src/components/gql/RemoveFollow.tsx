
import { gql } from '@apollo/client';

export const REMOVE_FOLLOW = gql`
    mutation Mutation($userId: ID, $followerId: ID) {
        removeFollow(userId: $userId, followerId: $followerId)
    }
`;

