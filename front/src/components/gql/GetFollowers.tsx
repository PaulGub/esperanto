import { gql } from '@apollo/client';

export const USER_FOLLOWERS = gql`
    query Query($userId: ID) {
        getAllFollowers(userId: $userId) {
            firstname
            id
            lastname
            healthActor {
                id
                professional {
                    id
                    name
                }
                careServiceType
                supportServices
            }
            profileBanner
            profilePicture
            professionalStatus
        }
    }
`;