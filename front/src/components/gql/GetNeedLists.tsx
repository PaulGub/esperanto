import { gql } from '@apollo/client';

export const NEEDS_LISTS_USER = gql`
    query Query($userId: ID) {
        listNeedByUserId(userId: $userId) {
            id
            name
            needs {
                id
                title
                description
                type
                tags {
                    id
                    name
                }
                infrastructure
                professionals {
                    id
                    name
                }
                materials {
                    id
                    name
                    resourceLink
                    resourceImage
                    description
                }
                user {
                    id
                    firstname
                    lastname
                    email
                    profilePicture
                    profileBanner
                }
            }
        }
    }
`;