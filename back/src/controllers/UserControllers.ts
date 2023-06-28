import { User, Industrial, HealthActor, Researcher } from "@models/index"

export const getAllUsers = async () => {
    const users =  User.findAll({
        include: [Industrial, HealthActor, Researcher]
    });
    return users;
}
export const getUsersByTagUser = async (userId: string) => {
    const users =  User.findAll({
        include: [Industrial, HealthActor, Researcher]
    });
    console.log(users)
    console.log(userId);
    return users;
}