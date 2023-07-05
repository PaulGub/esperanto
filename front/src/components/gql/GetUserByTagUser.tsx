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
                professional{
                    id
                    name
                }
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
                researchDepartment
                researchArea
                researchUnitName
            }
            role
            tags {
                id
                name
            }
            description
            profilePicture
            profileBanner
        }
    }
`;