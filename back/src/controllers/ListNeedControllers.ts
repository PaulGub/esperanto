import {
    ListNeed,
    ListNeedT,
    Material,
    Need,
    Professional,
    Tag,
    User,
    UserT
} from "@models/index";

export const getListNeedByUserId = async (userId: number): Promise<ListNeedT[]> => {
    return await ListNeed.findAll({
        where: {userId: userId},
        include: 
        [
            {
                model: Need,
                include: [Tag, Material, Professional, User]
            }
        ]
    })
};

export const createListNeed = async (args: { userId: number, listName: string, arrayNeedId: number[] }): Promise<ListNeedT> => {
    const { userId, listName, arrayNeedId } = args;

    try {
        const listNeed: ListNeedT = await ListNeed.create({ name: listName });

        const user: UserT = await User.findByPk(userId);

        await listNeed.setUser(user);

        if (arrayNeedId.length > 0) {
            const arrayNeedIdFormatted: number[] = arrayNeedId.map((id) => +id);
            await listNeed.addNeeds(arrayNeedIdFormatted);
        }

        return await ListNeed.findOne({
            where: { id: listNeed.id },
            include: [Need]
        });
    } catch (e) {
        console.log(e);
    }
}

export const addNeedToList = async (args : { userId: number, listId: number, arrayNeedId: number[] }): Promise<ListNeedT|Error> => {
    const { userId, listId, arrayNeedId } = args;

    const listNeed: ListNeedT = await ListNeed.findByPk(listId);

    try {
        if (listNeed.userId === +userId) {
            if (arrayNeedId.length > 0) {
                const needs: number[] = arrayNeedId.map((id) => +id);
                await listNeed.addNeeds(needs);

                return await ListNeed.findOne({
                    where: { id: listNeed.id },
                    include: [Need]
                });
            } else {
                return new Error("Vous n'avez pas de nouveau besoin à ajouter");
            }
        } else {
            return new Error("Vous ne pouvez pas ajouter à une liste qui ne vous appartient pas");
        }
    } catch (e) {
        console.log(e);
        return null;
    }
}