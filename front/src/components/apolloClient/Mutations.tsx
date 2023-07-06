import { Need } from "../AddNeed";
import { CREATE_NEED } from "../gql/CreateNeed";
import { ApolloClientCall } from "./ApolloClient";
import { CREATE_LIST_USER } from "../gql/CreateListUser.tsx";
import { REMOVE_USER_FROM_USER_LIST } from "../gql/RemoveUserFromUserList.tsx";
import { ADD_USER_TO_USER_LIST } from "../gql/AddUserToUserList.tsx";

export async function createNeed(userId: number, needData: Need): Promise<any> {
    try {
        const result = await ApolloClientCall.mutate({
            mutation: CREATE_NEED,
            variables: {
                userId: userId,
                needData: {
                    title: needData.title,
                    type: needData.type,
                    description: needData.description,
                    infrastructure: needData.infrastructure,
                    tags: needData.tags
                },
            },
        })
        console.log(result.data.createNeed);
    } catch (error) {
        console.error(error);
    }
}

export async function createListUser(userId: number, listName: string, arrayUserId: number[]) {
    try {
        const result = await ApolloClientCall.mutate({
            mutation: CREATE_LIST_USER,
            variables: {
                userId: userId,
                listName: listName,
                arrayUserId: arrayUserId
            },
        })
        return result.data.createListUser;
    } catch (error) {
        console.error(error);
    }
}

export async function removeUserFromUserList(userId: number, listId: number, userToRemoveId: number) {
    try {
        const result = await ApolloClientCall.mutate({
            mutation: REMOVE_USER_FROM_USER_LIST,
            variables: {
                userId: userId,
                listId: listId,
                userToRemoveId: userToRemoveId
            },
        })
        return result.data.removeUserFromListUser;
    } catch (error) {
        console.error(error);
    }
}

export async function addUserToUserList(userId: number, listId: number, arrayUserId: number[]) {
    try {
        const result = await ApolloClientCall.mutate({
            mutation: ADD_USER_TO_USER_LIST,
            variables: {
                userId: userId,
                listId: listId,
                arrayUserId: arrayUserId
            },
        })
        return result.data.addUserToList;
    } catch (error) {
        console.error(error);
    }
}