import { gql } from '@apollo/client';

export const REMOVE_USER_FROM_USER_LIST = gql`
    mutation Mutation($userId: ID, $listId: ID, $userToRemoveId: ID) {
        removeUserFromListUser(userId: $userId, listId: $listId, userToRemoveId: $userToRemoveId)
    }
`;