import { gql } from "@apollo/client";

export const TAGS = gql`
  query tags {
    tags {
      name
      id
    }
  }
`;
