import { gql } from "@apollo/client";

export const INDUSTRIAL_SEARCH = gql`
  query industrialsBySearch($start: Int, $limit: Int, $search: String) {
    industrialsBySearch(start: $start, limit: $limit, search: $search) {
      count
      rows {
        firstname
        description
        id
        lastname
        tags {
          id
          name
        }
        profilePicture
      }
    }
  }
`;
