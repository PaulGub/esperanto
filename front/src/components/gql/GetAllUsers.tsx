import { gql } from "@apollo/client";

export const USERS = gql`
  query users {
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
