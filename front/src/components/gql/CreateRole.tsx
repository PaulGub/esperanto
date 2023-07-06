import { gql } from '@apollo/client';

export const CREATE_HEALTH_ACTOR = gql`
    mutation CreateHealthActor($userId: ID, $healthActorData: HealthActorData) {
        createHealthActor(userId: $userId, healthActorData: $healthActorData) {
            id
        }
    }
`;

export const CREATE_INDUSTRIAL = gql`
    mutation CreateIndustrial($userId: ID, $industrialData: IndustrialData) {
        createIndustrial(userId: $userId, industrialData: $industrialData) {
            id
        }
    }
`;

export const CREATE_RESEARCHER = gql`
    mutation CreateResearcher($userId: ID, $researcherData: ResearcherData) {
        createResearcher(userId: $userId, researcherData: $researcherData) {
            id
        }
    }
`;
