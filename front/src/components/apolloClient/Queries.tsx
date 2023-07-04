import { DocumentNode } from "graphql";
import { TAGS } from "../gql/GetAllTags";
import { USERS } from "../gql/GetAllUsers";
import { USER } from "../gql/GetUserById";
import { USERS_BY_TAG } from "../gql/GetUserByTagUser";
import { USER_NEED } from "../gql/GetUserNeed";
import { USERS_BY_NEED } from "../gql/GetUsersByTagNeed";
import { ApolloClientCall } from "./ApolloClient";
import { CHECK_IS_FOLLOWED } from "../gql/CheckIsFollowed";

export async function getAllUsers(): Promise<any> {
  try {
    const result = await ApolloClientCall.query({
      query: USERS,
    });
    console.log(result.data.users);
    return result.data.users;
  } catch (error) {
    console.error(error);
  }
}

export async function getUserById(userId: number | string): Promise<any> {
  try {
    const result = await ApolloClientCall.query({
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

export async function getAllTags(): Promise<any> {
  try {
    const result = await ApolloClientCall.query({
      query: TAGS,
    });
    return result.data.tags;
  } catch (error) {
    console.error(error);
  }
}

export async function getUsersByTagUser(userId: number | string): Promise<any> {
  try {
    const result = await ApolloClientCall.query({
      query: USERS_BY_TAG,
      variables: {
        userId: userId,
      },
    });
    return result.data.usersByTagUser;
  } catch (error) {
    console.error(error);
  }
}

export async function getUsersByTagNeed(
  userId: number | string,
  needId: number | string
): Promise<any> {
  try {
    const result = await ApolloClientCall.query({
      query: USERS_BY_NEED,
      variables: {
        userId: userId,
        needId: needId,
      },
    });
    return result.data.usersByTagNeed;
  } catch (error) {
    console.error(error);
  }
}

export async function getUserNeeds(userId: number | string): Promise<any> {
  try {
    const result = await ApolloClientCall.query({
      query: USER_NEED,
      variables: {
        userId: userId,
      },
    });
    console.log(result.data);
    return result.data.userById.needs;
  } catch (error) {
    console.error(error);
  }
}

export async function checkIsFollowed(userId: number, followerId: number): Promise<any> {
  try {
    const result = await ApolloClientCall.query({
      query: CHECK_IS_FOLLOWED,
      variables: {
        userId: userId,
        followerId: followerId
      },
    });
    return result.data.checkIsFollowed;
  } catch (error) {
    console.error(error);
  }
}

export async function getSearchedUser(
  queries: DocumentNode,
  input: string
): Promise<any> {
  try {
    const result = await ApolloClientCall.query({
      query: queries,
      variables: {
        search: input,
      },
    });
    return result.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
