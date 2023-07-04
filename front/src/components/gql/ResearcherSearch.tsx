import { gql } from "@apollo/client";

export const RESEARCHER_SEARCH = gql`
  query researchersBySearch($start: Int, $limit: Int, $search: String) {
    researchersBySearch(start: $start, limit: $limit, search: $search) {
      count
      rows {
        description
        firstname
        id
        lastname
        profilePicture
        tags {
          id
          name
        }
      }
    }
  }
`;
