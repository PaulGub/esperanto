import { useEffect, useState } from "react";
import CardSuggestion from "../components/CardSuggestion";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { USERS_BY_TAG } from "./gql/GetUserByTagUser";
import { userProps } from "../utils/types";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

export default function Suggestions({ userId, title }: { userId: number, title:string }) {
  const [users, setUsers] = useState<userProps[]>([]);
  const pageTitle = title ?? "Profils suggérés";
  useEffect(() => {
    client
      .query({
        query: USERS_BY_TAG,
        variables: {
          userId: userId,
        },
      })
      .then((result) => {
        console.log(result.data.usersByTagUser);
        setUsers(result.data.usersByTagUser);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="bg-white p-2 rounded-lg max-h-[550px]">
      <div className="flex flex-col p-2">
        <h2 className="mb-1">{pageTitle}</h2>
        <span className="w-1/4 bg-primary-300 rounded h-1"></span>
      </div>
      <div className="max-h-[440px] overflow-auto small-scrollbar p-2">
        {users.map((user) => (
          <CardSuggestion user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
}
