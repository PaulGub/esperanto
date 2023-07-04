import { Need } from "../AddNeed";
import { CREATE_NEED } from "../gql/CreateNeed";
import { ApolloClientCall } from "./ApolloClient";

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
