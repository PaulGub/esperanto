import { gql } from '@apollo/client';

export const CHECK_IS_FOLLOWED = gql`
    query Query($userId: ID, $followerId: ID) {
        checkIsFollowed(userId: $userId, followerId: $followerId)
    }
`;