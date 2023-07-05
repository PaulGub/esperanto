import { useLocation } from "react-router-dom";
import Need from "./Need";
import { useEffect, useState } from "react";
import { CURRENT_USER } from "./loggedUser/userLoged";
import { getUserNeeds } from "./apolloClient/Queries";
import { needProps } from "../utils/types/data";
import { USER_FEED } from "./gql/GetNeedByUserIdSuggestion";
import { ApolloClientCall } from "./apolloClient/ApolloClient";
import AddNeed from "./AddNeed";
import UserMenuSocial from "./UserSocialMenu";
import SocialUser from "./SocialUser";
import UserLists from "./UserLists";

export default function ProfilFeed() {
  const pathname = useLocation().pathname;
  const [userNeed, setUserNeed] = useState<needProps[]>([]);
  const [userFeed, setUserFeed] = useState<needProps[]>([]);

  useEffect(() => {
    getUserNeeds(CURRENT_USER)
      .then((needData) => {
        setUserNeed(needData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    ApolloClientCall.query({
      query: USER_FEED,
      variables: {
        userId: CURRENT_USER,
      },
    })
      .then((result) => {
        setUserFeed(result.data.needByUserIdSuggestion);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white p-4 rounded-lg">
        {pathname.split("/")[2] === "besoins" && (
          <div className="flex flex-col items-start justify-center w-full mt-2">
            <h3 className="text-sm pb-1">Mes besoins</h3>
            <span className="w-[50px] bg-primary-300 rounded h-1"></span>
            <div className="text-xxs flex flex-wrap my-2 w-full gap-8">
              {userNeed !== undefined && userNeed.length === 0 ? (
                  <p className="text-xs p-2 bg-gray-100 rounded w-full mt-2">Vous n'avez pas de besoins pour l'instant.</p>
                ) : (
                  userNeed.map((need) => <Need key={need.id} need={need} userId={need.user.id}/>)
              )}
            </div>
          </div>
        )}
        {pathname.split("/")[2] === "suivis" && (
          <div className="flex flex-col items-start justify-center w-full">
            <div className="text-xxs flex flex-wrap w-full">
              <UserMenuSocial />
              {pathname.split("/")[3] === "abonnes" && (
                <div className="flex flex-col items-start justify-center w-full">
                  <div className="text-xxs flex flex-wrap w-full">
                    <SocialUser tab="abonnes" userId={CURRENT_USER}/>
                  </div>
                </div>
              )}
              {pathname.split("/")[3] === "abonnements" && (
                <div className="flex flex-col items-start justify-center w-full">
                  <div className="text-xxs flex flex-wrap w-full">
                    <SocialUser tab="abonnements" userId={CURRENT_USER}/>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        {pathname.split("/")[2] === "listes" && (
          <div className="flex flex-col items-start justify-center w-full mt-2">
            <h3 className="text-sm pb-1">Mes listes</h3>
            <span className="w-[50px] bg-primary-300 rounded h-1"></span>
            <div className="text-xxs flex flex-wrap my-2 w-full">
              <UserLists userId={CURRENT_USER}/>
            </div>
          </div>
        )}
        {pathname.split("/")[2] === "actualites" && (
          <div className={`flex flex-col ${userFeed && userFeed.length > 0 ? 'gap-4' : ''} items-start justify-center w-full mt-2`}>
            <h3 className="text-sm pb-1">Ils ont peut-être besoin de vous!</h3>
            <span className="w-[50px] bg-primary-300 rounded h-1"></span>
            <div className="text-xxs flex flex-wrap my-2 w-full gap-8">
              {userFeed !== undefined && userFeed.length === 0 ? (
                <p className="text-xs p-2 bg-gray-100 rounded w-full mt-2">Personne n'a besoin de votre aide pour l'instant.</p>
              ) : (
                userFeed.map((need) => <Need key={need.id} need={need} userId={need.user.id}/>)
              )}
            </div>
          </div>
        )}
      </div>
      <div >
        <AddNeed></AddNeed>
      </div>
    </div>
  );
}
