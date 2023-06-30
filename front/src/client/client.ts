import { ApolloClient, InMemoryCache } from "@apollo/client";
import { USER, USERS_BY_TAG, CREATE_USER, USERS} from "./gql";

const client = new ApolloClient({
    uri: "http://localhost:4000/",
    cache: new InMemoryCache(),
});

export async function getUser(userId: number|string): Promise<any> {
    try {
        const result = await client.query({
            query: USER,
            variables: {
                userId: userId,
            },
        });
        console.log(result.data.userById);
        return result.data.userById;
    } catch (error) {
        console.error(error);
    }
}

export async function getAllUsers(): Promise<any> {
    try {
        const result = await client.query({
            query: USERS
        });
        console.log(result.data.users);
        return result.data.users;
    } catch (error) {
        console.error(error);
    }
}

export async function getUsersByTags(userId: number|string): Promise<any> {
    try {
        const result = await client.query({
            query: USERS_BY_TAG,
            variables: {
                userId: userId,
            },
        });
        console.log(result.data.usersByTagUser);
        return result.data.usersByTagUser;
    } catch (error) {
        console.error(error);
    }
}

export async function createUser(firstName: string, lastName: string, email: string, password: string, phoneNumber: string, role: string, healthNetwork: string, professionalStatus: string, experiences: string, description: string): Promise<any> {
    try {
        await client.query({
            query: CREATE_USER,
            variables: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                phoneNumber: phoneNumber,
                role: role,
                healthNetwork: healthNetwork,
                professionalStatus: professionalStatus,
                experiences: experiences,
                description: description
            },
        });
    } catch (error) {
        console.error(error);
    }
}
