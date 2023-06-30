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
            description
            profilePicture
            profileBanner
        }
    }
`;

export const USERS = gql`
    query Users {
        users {
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
            description
            profilePicture
            profileBanner
        }
    }
`;

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
            description
            profilePicture
            profileBanner
        }
    }
`;

export const CREATE_USER = gql`
    mutation CreateUser($firstname: String, $lastname: String, $email: String, $password: String, $phoneNumber: String, $role: String, $healthNetwork: String, $professionalStatus: String, $experiences: String, $description: String) {
        createUser(firstname: $firstname, lastname: $lastname, email: $email, password: $password, phoneNumber: $phoneNumber, role: $role, healthNetwork: $healthNetwork, professionalStatus: $professionalStatus, experiences: $experiences, description: $description) {
            firstname
            lastname
            email
            password
            phoneNumber
            role
            healthNetwork
            professionalStatus
            experiences
            description
        }
    }
`;
