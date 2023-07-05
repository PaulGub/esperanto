import { gql } from '@apollo/client';

export const CREATE_HEALTH_ACTOR = gql`
    mutation CreateHealthActor($careServiceType: String, $supportServices: String, $professional: String) {
        createHealthActor(careServiceType: $careServiceType, supportServices: $supportServices, professional: $professional) {
            id
            careServiceType
            supportServices
            professional {
                id
                name
            }
        }
    }
`;

export const CREATE_INDUSTRIAL = gql`
    mutation CreateIndustrial($careSector: String, $otherSector: String) {
        createIndustrial(careSector: $careSector, otherSector: $otherSector) {
            id
            careSector
            otherSector
        }
    }
`;

export const CREATE_RESEARCHER = gql`
    mutation CreateResearcher($researchUnitName: String, $researchDepartment: String, $otherSector: String, $researchArea: String) {
        createResearcher(researchUnitName: $researchUnitName, researchDepartment: $researchDepartment, otherSector: $otherSector, researchArea: $researchArea) {
            id
            researchUnitName
            researchDepartment
            otherSector
            researchArea
        }
    }
`;
