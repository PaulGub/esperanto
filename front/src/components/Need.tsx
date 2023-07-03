import { useEffect, useState } from "react";
import { globalUserProps, needProps } from "../utils/types/data";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

export default function Need({ need }: needProps) {
  const [needSuggestions, setNeedSuggestions] = useState<globalUserProps>();
  useEffect(() => {
    client
      .query({
        query: need,
        variables: {
          userId: "1",
          needId: "1",
        },
      })
      .then((result) => {
        setNeedSuggestions(result.data.usersByTagNeed);
        console.log(result.data.usersByTagNeed)
      })
      .catch((error) => {
        console.error(error);
      });
    }, []);
  return (
    <div className="p-4 bg-base rounded-lg">
      {needSuggestions?.map((user) => (
          <span key={user?.id} className="bg-primary-100 rounded py-0.5 px-1 m-0.5">
            {user?.id}
          </span>
        ))}
    </div>
  );
}
