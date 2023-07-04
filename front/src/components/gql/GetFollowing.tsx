import { gql } from '@apollo/client';

export const USER_FOLLOWINGS = gql`
    query Query($userId: ID) {
        getAllFollowing(userId: $userId) {
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