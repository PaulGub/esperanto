import { ApolloClient, InMemoryCache } from "@apollo/client";
import { USER } from "./gql/GetUserById";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { userProps } from "../utils/types";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});
const userId = "1";

export default function ProfilCard() {
  const [user, setUser] = useState<userProps>();
  const [showAllTags, setShowAllTags] = useState(false);

  useEffect(() => {
    client
      .query({
        query: USER,
        variables: {
          userId: userId,
        },
      })
      .then((result) => {
        setUser(result.data.userById);
      })
      .catch((error) => {
        console.error(error);
      });
    }, []);
  const userProfessionalStatus = user?.healthActor?.professional?.name || user?.professionalStatus || "";
  return (
    <div className="flex flex-col items-center justify-start bg-white border border-solid rounded-lg relative">
      <div className="w-full">
        <img src={user?.profileBanner} alt="" className="h-[100px] w-full rounded-t-lg" />
      </div>
      <div className="flex flex-col items-center justify-start w-full px-4">
        <div className="flex flex-col items-center justify-center">
          <img
            src={user?.profilePicture}
            alt=""
            className="rounded-full w-24 h-24 border-4 border-solid border-white -mt-10"
          />
          <h2>
            {user?.firstname ?? ""} {user?.lastname ?? ""}
          </h2>
          <p className="text-xs text-slate-500">
            {userProfessionalStatus}
          </p>
          <a href="#" className="text-xs text-primary hover:underline mt-[3px]">
            Modifier
          </a>
        </div>
        {/* <div className="w-full mt-2 border">
          <button className="text-xs border-none py-1 hover:bg-primary hover:text-white" onClick={()=>setDisplay("feed")}>Actualités</button>
          <button className="text-xs border-none py-1 hover:bg-primary hover:text-white" onClick={()=>setDisplay("besoins")}>Mes besoins</button>
          <button className="text-xs border-none py-1 hover:bg-primary hover:text-white" onClick={()=>setDisplay("suivis")}>Profils suivis</button>
          <button className="text-xs border-none py-1 hover:bg-primary hover:text-white" onClick={()=>setDisplay("listes")}>Mes listes</button>
        </div> */}
        <div className="flex flex-col items-start justify-center w-full mt-2">
          <h3 className="text-sm pb-1">Mes tags</h3>
          <span className="w-1/4 bg-primary-300 rounded h-1"></span>
           <div className="text-xxs flex flex-wrap my-2">
              {user?.tags?.slice(0, showAllTags ? undefined : 5).map((tag) => (
                <span key={tag.id} className="bg-primary-100 rounded py-0.5 px-1 m-0.5">
                  {tag.name}
                </span>
              ))}
            {!showAllTags && user?.tags?.length > 5 && (
              <span
                className="text-xs text-primary hover:underline py-0.5 px-1 m-0.5 cursor-pointer"
                onClick={() => setShowAllTags(true)}
              >
                Voir plus
              </span>
            )}
            </div>
        </div>
        <div className="flex flex-col items-start justify-center w-full">
          <h3 className="text-sm pb-1">Description</h3>
          <span className="w-1/4 bg-primary-300 rounded h-1 mb-2"></span>
          <p className="text-xxs line-clamp-5 w-full">{user?.description}</p>
        </div>
      </div>
        <a
          href="#"
          className="text-xs text-primary my-2 hover:underline m-2 mb-2"
        >
          Voir le profil complet
        </a>
    </div>
  );
}
