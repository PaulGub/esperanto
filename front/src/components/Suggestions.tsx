import { useEffect, useState } from "react";
import CardSuggestion from "../components/CardSuggestion";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { USERS_BY_TAG } from "./gql/GetUserByTagUser";
import { userProps } from "../utils/types";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});
const userId = "1";

export default function Suggestions() {
  const [users, setUsers] = useState<userProps[]>([]);
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
    <div className="bg-white p-2">
      <h2 className="mb-1">Profil suggérés</h2>
      <div className="max-h-96 overflow-auto small-scrollbar">
        {users.map((user) => (
          <CardSuggestion user={user} />
        ))}
      </div>
    </div>
  );
}