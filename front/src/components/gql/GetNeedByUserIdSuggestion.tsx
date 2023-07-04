import { gql } from "@apollo/client";

export const USER_FEED = gql`
query NeedByUserIdSuggestion($userId: ID) {
    needByUserIdSuggestion(userId: $userId) {
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
        id
        name
        resourceLink
        resourceImage
        description
      }
      user {
        id
        firstname
        lastname
        email
        profilePicture
        profileBanner
      }
    }
  }
`;