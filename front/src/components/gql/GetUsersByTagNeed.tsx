import { gql } from '@apollo/client';

export const USERS_BY_NEED = gql`
query UserById($userId: ID, $needId: ID) {
    usersByTagNeed(userId: $userId, needId: $needId) {
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