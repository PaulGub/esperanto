import { gql } from '@apollo/client';

export const ADD_USER_TO_USER_LIST = gql`
    mutation Mutation($userId: ID, $listId: ID, $arrayUserId: [ID]) {
        addUserToList(userId: $userId, listId: $listId, arrayUserId: $arrayUserId) {
            id
            name
        }
    }
`;
