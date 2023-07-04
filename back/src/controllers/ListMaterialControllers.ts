import {
    ListMaterial, ListMaterialsT,
    Material,
} from "@models/index"
export const getListMaterialByUserId = async (userId: number): Promise<ListMaterialsT[]> => {
    return await ListMaterial.findAll({
        where: {userId: userId},
        include: [Material]
    })
};