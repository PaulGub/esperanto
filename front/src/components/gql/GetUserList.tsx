import { gql } from '@apollo/client';

export const USERS_LISTS_USER = gql`
  query Query($userId: ID) {
    listUserByUserId(userId: $userId) {
      id
      name
      users {
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
  }
`;