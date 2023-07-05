import { gql } from '@apollo/client';

export const MATERIAL_LISTS_USER = gql`
    query Query($userId: ID) {
        listMaterialByUserId(userId: $userId) {
        id
        name
        materials {
            id
            name
            resourceLink
            resourceImage
            description
        }
        }
    }
`;