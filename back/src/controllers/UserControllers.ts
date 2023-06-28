import {HealthActor, Industrial, Researcher, User} from "@models/index"

export const getAllUsers = async () => {
    return User.findAll({
        include: [Industrial, HealthActor, Researcher]
    });
}
export const getUsersByTagUser = async (userId: number) => {
    const users =  User.findAll({
        include: [Industrial, HealthActor, Researcher]
    });
    console.log(users)
    console.log(userId);
    return users;
}