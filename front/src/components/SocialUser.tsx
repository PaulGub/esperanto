import { useEffect, useState } from "react";
import { needProps } from "../utils/types/data";
import CardSuggestionVariant from "../components/CardSuggestionVariant";
import { USER_FOLLOWERS } from "./gql/GetFollowers";
import { USER_FOLLOWINGS } from "./gql/GetFollowing";
import { ApolloClientCall } from "./apolloClient/ApolloClient";

export default function SocialUser({ tab, userId }: { tab: string, userId: number }) {
    const [usersArray, setUsersArray] = useState<needProps[]>([]);
  
    useEffect(() => {
      const query = tab === 'abonnes' ? USER_FOLLOWERS : USER_FOLLOWINGS;
        
      ApolloClientCall.query({
        query: query,
        variables: {
          userId: userId,
        },
      })
        .then((result) => {
        const data = tab === 'abonnes' ? result.data.getAllFollowers : result.data.getAllFollowing;
          setUsersArray(data);
          console.log(result);
        })
        .catch((error) => {
          console.error(error);
        });
    }, [tab, userId]);
  
    return (
        <div className="flex flex-col items-start justify-center w-full">
            {usersArray.length === 0 ? (
                <p className="text-xs p-2 bg-gray-100 rounded w-full mt-2">Il n'y a rien a voir ici pour le moment.</p>
            ) : (
                <div className="grid grid-cols-4 gap-2 mt-2">
                    {usersArray?.map((user) => (
                    <CardSuggestionVariant user={user} key={user.id} />
                    ))}
                </div>
            )}
        </div>
    );      
}
