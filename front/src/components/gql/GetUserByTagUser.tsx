import { gql } from '@apollo/client';

export const USERS_BY_TAG = gql`
    query UserByTagUser($userId: ID) {
        usersByTagUser(userId: $userId) {
            email
            experiences
            firstname
            healthActor {
                careServiceType
                id
                supportServices
            }
            healthNetwork
            id
            industrial {
                careSector
                id
                otherSector
            }
            lastname
            phoneNumber
            professionalStatus
            researcher {
                id
                otherSector
                researchArea
                researchUnitName
            }
            role
            tags {
                id
                name
            }
        }
    }
`;