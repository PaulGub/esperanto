import { gql } from '@apollo/client';

export const USER_NEED = gql`
    query UserById($userId: ID) {
        userById(userId: $userId) {
            needs {
                id
                title
                description
                type
                infrastructure
                tags {
                    id
                    name
                }
                professionals {
                    id
                    name
                }
                materials {
                    name
                    id
                    resourceLink
                    description
                }    
                user {
                    id
                }
            }      
        }
    }
`;