import {ListMaterial, ListMaterialsT, Material, User, UserT,} from "@models/index"

export const getListMaterialByUserId = async (userId: number): Promise<ListMaterialsT[]> => {
    return await ListMaterial.findAll({
        where: {userId: userId},
        include: [Material]
    })
};

export const createListMaterial = async (args: { userId: number, listName: string, arrayMaterialId: number[] }): Promise<ListMaterialsT> => {
    const { userId, listName, arrayMaterialId } = args;

    try {
        const listMaterial: ListMaterialsT = await ListMaterial.create({ name: listName });

        const user: UserT = await User.findByPk(userId)

        await listMaterial.setUser(user);

        if (arrayMaterialId.length > 0) {
            const arrayMaterialIdFormatted: number[] = arrayMaterialId.map((id) => +id);
            await listMaterial.addMaterials(arrayMaterialIdFormatted);
        }

        return await ListMaterial.findOne({
            where: { id: listMaterial.id },
            include: [Material]
        });
    } catch (e) {
        console.log(e)
    }
}

export const addMaterialToList = async (args : { userId: number, listId: number, arrayMaterialId: number[] }): Promise<ListMaterialsT|Error> => {
    const { userId, listId, arrayMaterialId } = args;

    const listMaterial = await ListMaterial.findByPk(listId);

    try {
        if (listMaterial.userId === +userId) {
            if (arrayMaterialId.length > 0) {
                const materials: number[] = arrayMaterialId.map((id) => +id);
                await listMaterial.addMaterials(materials);

                return await ListMaterial.findOne({
                    where: { id: listMaterial.id },
                    include: [Material]
                });
            } else {
                return new Error("Vous n'avez pas de nouveau matériel à ajouter")
            }
        } else {
            return new Error("Vous ne pouvez pas ajouter à une liste qui ne vous appartient pas")
        }
    } catch (e) {
        console.log(e);
        return null;
    }
}