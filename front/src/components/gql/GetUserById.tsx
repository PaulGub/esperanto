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
                id
                careServiceType
                supportServices
                professional {
                    id
                    name
                }
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
                researchDepartment
                researchArea
                researchUnitName
            }
            role
            description
            profilePicture
            profileBanner
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
            }      
        }
    }
`;