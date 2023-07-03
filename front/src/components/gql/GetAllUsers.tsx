import { gql } from "@apollo/client";

export const USERS = gql`
  query Query {
    users {
      id
      email
      experiences
      firstname
      lastname
      tags {
        name
        id
      }
      healthActor {
        careServiceType
        id
        supportServices
        professional{
          id
          name
        }
      }
      healthNetwork
      industrial {
        id
        otherSector
        careSector
      }
      phoneNumber
      professionalStatus
      researcher {
        id
        otherSector
        researchArea
        researchUnitName
      }
      role
      description
      profilePicture
      profileBanner
    }
  }
`;
