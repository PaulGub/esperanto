import { gql } from '@apollo/client';

export const CREATE_NEED = gql`
  mutation CreateNeed($userId: ID!, $needData: NeedInput!) {
    createNeed(userId: $userId, needData: $needData) {
      id
      title
      type
      description
      infrastructure
      tags {
        id
        name
      }
    }
  }
`;
