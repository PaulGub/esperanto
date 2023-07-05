import { useEffect, useState } from "react";
import { USERS_LISTS_USER } from "./gql/GetUserList";
import { ApolloClientCall } from "./apolloClient/ApolloClient";

export default function UserLists({ userId }: { userId: number }) {
    const [lists, setLists] = useState();

    useEffect(() => {
        ApolloClientCall.query({
          query: USERS_LISTS_USER,
          variables: {
            userId: userId,
          },
        })
        .then((result) => {
            console.log(result.data.listUserByUserId);
            setLists(result.data.listUserByUserId);
        })
        .catch((error) => {
            console.error(error);
        });
    }, [userId]);

  return (
    <div className="flex flex-col items-center justify-start bg-white w-full mt-1">
        {lists?.map((list)=>
            <div className="bg-primary-200 w-full rounded p-2">
                <h3 className="text-sm">
                    {list.name}
                </h3>
            </div>
        )}
    </div>
  );
}
