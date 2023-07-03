import { useEffect, useState } from "react";
import { globalUserProps, needProps } from "../utils/types/data";
import { ApolloClientCall } from './apolloClient/ApolloClient';
import { CURRENT_USER } from "./loggedUser/userLoged";
import { USERS_BY_NEED } from "./gql/GetUsersByTagNeed";
import CardSuggestionVariant from "../components/CardSuggestionVariant";

export default function Need({ need }: needProps) {
  const [needSuggestions, setNeedSuggestions] = useState<globalUserProps>();
  const NEED_ID = need.id;
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
    console.log(need)
  return (
    <div className="p-4 bg-slate-50 rounded-lg w-full">
      <div className="flex flex-col items-start justify-center w-full mb-2 bg-gray-100 p-2 rounded">
        <h3 className="text-sm pb-1">Titre de votre besoin :</h3>
          <div className="bg-white p-2 w-full rounded mt-2">
            {need?.title}
          </div>
        </div>
      <div className="flex flex-col items-start justify-center w-full mt-5 mb-2 bg-gray-100 p-2 rounded">
        <h3 className="text-sm pb-1">Description de votre besoin :</h3>
        <div className="bg-white p-2 w-full rounded mt-2">
          {need?.description}
        </div>
      </div>
      <div className="flex flex-col items-start justify-center w-full mt-5 mb-2 bg-gray-100 p-2 rounded">
        <h3 className="text-sm pb-1">Tags de votre besoin :</h3>
        <div className="w-full rounded mt-2 p-2 bg-white">
            {need?.tags?.map((tag) => (
              <span key={tag.id} className="bg-primary-100 rounded py-0.5 px-1 m-0.5">
                {tag.name}
              </span>
            ))}
        </div>
      </div>
      <div className="flex flex-col items-start justify-center w-full mt-5 mb-2 bg-gray-100 p-2 rounded">
        <h3 className="text-sm pb-1">Valeur votre besoin :</h3>
        <div className="bg-white p-2 w-full rounded mt-2">
          <p className="underline text-xs">{need?.type} : </p>
           <p className="text-xs">{need?.infrastructure}</p>
           {need?.professionals.map((needed) => (
              <p className="text-xs"> {needed.name}</p>
            ))}
           {need?.materials.map((needed) => (
              <p className="text-xs"> {needed.name}</p>
            ))}
        </div>
      </div>
      <div className="flex flex-col items-start justify-center w-full mt-5 mb-2 mb-2 p-2">
        <h3 className="text-sm pb-1">Ils peuvent vous aider</h3>
        <div className="suggestions grid grid-cols-4 gap-2 mt-2">
          {needSuggestions?.map((user) => (
            <CardSuggestionVariant user={user} key={user.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
