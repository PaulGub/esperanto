import { gql } from '@apollo/client';

export const LOG_USER = gql`
    mutation LogUser($email: String, $password: String) {
        logUser(email: $email, password: $password) {
            id
            email
        }
    }
`;
  