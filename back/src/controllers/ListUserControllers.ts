import {
    ListUser,
    ListUsersT,
    User, UserT
} from "@models/index"

export const getListUserByUserId = async (userId: number): Promise<ListUsersT[]> => {
    return await ListUser.findAll({
        where: {userId: userId},
        include: [User]
    })
};

export const createListUser = async (args: { userId: number, listName: string, arrayUserId: number[] }): Promise<ListUsersT> => {
    const { userId, listName, arrayUserId } = args;

    try {
        const listUser: ListUsersT = await ListUser.create({ name: listName });

        const user: UserT = await User.findByPk(userId);

        await listUser.setUser(user);

        if (arrayUserId.length > 0) {
            const arrayUserIdFormatted: number[] = arrayUserId.map((id) => +id);
            await listUser.addUsers(arrayUserIdFormatted);
        }

        return await ListUser.findOne({
            where: { id: listUser.id },
            include: [User]
        });
    } catch (e) {
        console.log(e);
    }
}

export const addUserToList = async (args: { userId: number, listId: number, arrayUserId: number[] }): Promise<ListUsersT|Error> => {
    const { userId, listId, arrayUserId } = args;

    const listUser: ListUsersT = await ListUser.findByPk(listId);

    try {
        if (listUser.userId === +userId) {
            if (arrayUserId.length > 0) {
                const users: number[] = arrayUserId.map((id) => +id);
                await listUser.addUsers(users);

                return await ListUser.findOne({
                    where: { id: listUser.id },
                    include: [User]
                });
            } else {
                return new Error("Vous n'avez pas de nouveau utilisateur à ajouter");
            }
        } else {
            return new Error("Vous ne pouvez pas ajouter à une liste qui ne vous appartient pas");
        }
    } catch (e) {
        console.log(e);
        return null;
    }
}