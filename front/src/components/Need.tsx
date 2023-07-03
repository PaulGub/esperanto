import { useEffect, useState } from "react";
import { globalUserProps, needProps } from "../utils/types/data";
import { ApolloClientCall } from './apolloClient/ApolloClient';
import { CURRENT_USER } from "./loggedUser/userLoged";
import { USERS_BY_NEED } from "./gql/GetUsersByTagNeed";
import CardSuggestionVariant from "../components/CardSuggestionVariant";

export default function Need({ need }: needProps) {
  const [needSuggestions, setNeedSuggestions] = useState<globalUserProps>();
  const NEED_ID = need.id;
  console.log(need)
  useEffect(() => {
    ApolloClientCall
      .query({
        query: USERS_BY_NEED,
        variables: {
          userId: CURRENT_USER,
          needId: NEED_ID,
        },
      })
      .then((result) => {
        setNeedSuggestions(result.data.usersByTagNeed);
      })
      .catch((error) => {
        console.error(error);
      });
    }, []);
  return (
    <div className="p-4 bg-slate-50 rounded-lg w-full">
      <h3 className="text-sm pb-1">Titre de votre besoin</h3>
      <span className="w-[50px] bg-primary-300 rounded h-1"></span>
      {need?.description}
      <div className="suggestions grid grid-cols-4 gap-2">
        {needSuggestions?.map((user) => (
          <CardSuggestionVariant user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
}
