import { gql } from '@apollo/client';

export const CREATE_USER = gql`
    mutation CreateUser($firstname: String!, $lastname: String!, $email: String!, $password: String!, $phoneNumber: String, $role: String, $healthNetwork: String, $professionalStatus: String, $experiences: String, $description: String) {
        createUser(
            firstname: $firstname,
            lastname: $lastname,
            email: $email,
            password: $password,
            phoneNumber: $phoneNumber,
            role: $role,
            healthNetwork: $healthNetwork,
            professionalStatus: $professionalStatus,
            experiences: $experiences,
            description: $description
        ) {
            id
            email
            firstname
        }
    }
`;
