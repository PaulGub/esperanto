import { gql } from '@apollo/client';

export const USER = gql`
    query UserById($userId: ID) {
        userById(userId: $userId) {
            id
            email
            experiences
            firstname
            lastname
            tags {
                name
                id
            }
            healthActor {
                careServiceType
                id
                supportServices
            }
            healthNetwork
            industrial {
                id
                otherSector
                careSector
            }
            phoneNumber
            professionalStatus
            researcher {
                id
                otherSector
                researchArea
                researchUnitName
            }
            role
        }
    }
`;