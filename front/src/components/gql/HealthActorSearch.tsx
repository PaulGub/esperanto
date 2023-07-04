import { gql } from "@apollo/client";

export const HEALTH_ACTOR_SEARCH = gql`
  query healthActorsBySearch($start: Int, $limit: Int, $search: String) {
    healthActorsBySearch(start: $start, limit: $limit, search: $search) {
      count
      rows {
        firstname
        description
        lastname
        id
        profilePicture
        tags {
          id
          name
        }
      }
    }
  }
`;
