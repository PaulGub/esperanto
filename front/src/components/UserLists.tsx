import { useEffect, useState } from "react";
import { USERS_LISTS_USER } from "./gql/GetUserList";
import { ApolloClientCall } from "./apolloClient/ApolloClient";
import CardSuggestionVariant from "./CardSuggestionVariant";
import { MATERIAL_LISTS_USER } from "./gql/GetMaterialLists";
import { NEEDS_LISTS_USER } from "./gql/GetNeedLists";
import Need from "./Need";
import Material from "./Material";


export default function UserLists({ userId, type }: { userId: number, type: string }) {
    const [lists, setLists] = useState<any[]>([]);
    const [displayedListId, setDisplayedListId] = useState<number | null>(null);

    useEffect(() => {
        let query;
        switch (type) {
            case "utilisateurs":
                query = USERS_LISTS_USER;
                break;
            case "materiels":
                query = MATERIAL_LISTS_USER;
                break;
            case "besoins":
                query = NEEDS_LISTS_USER;
                break;
            default:
                query = null;
                break;
        }

        if (query) {
            ApolloClientCall.query({
                query: query,
                variables: {
                    userId: userId,
                },
            })
            .then((result) => {
                let data;
                switch (type) {
                    case "utilisateurs":
                        data = result.data.listUserByUserId;
                        break;
                    case "materiels":
                        data = result.data.listMaterialByUserId;
                        break;
                    case "besoins":
                        data = result.data.listNeedByUserId;
                        break;
                    default:
                        data = [];
                        break;
                }
                setLists(data);
            })
            .catch((error) => {
                console.error(error);
            });
        }
    }, [userId, type]);

    const toggleDisplayList = (listId: number): void => {
        setDisplayedListId((prevListId) => (prevListId === listId ? null : listId));
    };

    return (
        <div className="flex flex-col items-center justify-start bg-white w-full mt-1">
            {lists.length === 0 ? (
                <p className="text-xs p-2 bg-gray-100 rounded w-full mt-2">Il n'y a rien à voir ici pour le moment.</p>
            ) : (
                lists.map((list) => (
                    <div className="w-full rounded mt-5" key={list.id}>
                        <div 
                            className={`text-sm bg-primary-100 p-2 rounded cursor-pointer flex items-center justify-between ${
                                displayedListId === list.id ? "bg-primary-200" : ""
                            }`}
                            onClick={() => toggleDisplayList(list.id)}
                        >
                            <h3>
                                {list.name}
                            </h3>
                            <p className="text-lg -mt-1">
                                {displayedListId === list.id ? "-" : "+"}
                            </p>
                        </div>
                        {displayedListId === list.id && (
                            <div>
                                {type === "utilisateurs" && (
                                    <div className="grid grid-cols-4 gap-2 bg-white rounded my-5">
                                        {list?.users?.map((user) => (
                                            <CardSuggestionVariant user={user} key={user.id} />
                                        ))}
                                    </div>
                                )}
                                {type === "materiels" && (
                                    <div className="p-4 bg-slate-50 rounded-lg w-full mt-2">
                                        {list.materials?.map((material) => (
                                            <Material key={material.id} material={material} />
                                        ))}
                                    </div>
                                )}
                                {type === "besoins" && (
                                    <div>
                                        {list.needs?.map((need) => (
                                            <Need key={need.id} need={need} userId={need.user.id} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ))
            )}
        </div>
    );
}
