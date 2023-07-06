import { gql } from '@apollo/client';

export const CREATE_LIST_USER = gql`
    mutation Mutation($userId: ID, $listName: String, $arrayUserId: [ID]) {
        createListUser(userId: $userId, listName: $listName, arrayUserId: $arrayUserId) {
            id
            name
            users {
                id
            }
        }
    }
`;
