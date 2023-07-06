import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { globalUserProps } from "../utils/types";
import { CURRENT_USER } from "./loggedUser/userLoged";
import { getUserById } from "./apolloClient/Queries";

export default function ProfilCard() {
  const [user, setUser] = useState<globalUserProps>();
  const [showAllTags, setShowAllTags] = useState(false);

  useEffect(() => {
    getUserById(CURRENT_USER)
      .then((userData) => {
        setUser(userData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const userProfessionalStatus = user?.healthActor?.professional?.name || user?.professionalStatus || "";

  return (
    <div className="flex flex-col items-center justify-start bg-white border border-solid rounded-lg relative h-fit">
      <div className="w-full">
        <img
          src={user?.profileBanner ?? "/public/background.jpg"}
          alt=""
          className="h-[100px] w-full rounded-t-lg"
        />
      </div>
      <div className="flex flex-col items-center justify-start w-full px-4">
        <div className="flex flex-col items-center justify-center">
          <img
            src={user?.profilePicture ?? "/public/profile.jpg"}
            alt=""
            className="rounded-full w-24 h-24 border-4 border-solid border-white -mt-10"
          />
          <h2>
            {user?.firstname ?? ""} {user?.lastname ?? ""}
          </h2>
          <p className="text-xs text-slate-500">{userProfessionalStatus}</p>
          <a href="#" className="text-xs text-primary hover:underline mt-[3px]">
            Modifier
          </a>
        </div>
        <div className="flex flex-col items-start justify-center w-full mt-2">
          <h3 className="text-sm pb-1">Mes tags</h3>
          <span className="w-1/4 bg-primary-300 rounded h-1"></span>
          <div className="text-xxs flex flex-wrap my-2">
            {user?.tags?.slice(0, showAllTags ? undefined : 5).map((tag) => (
              <span
                key={tag.id}
                className="bg-primary-100 rounded py-0.5 px-1 m-0.5"
              >
                {tag.name}
              </span>
            ))}
            {!showAllTags ? (
              user && user?.tags?.length > 5 ? (
                <span
                  className="text-xs text-primary hover:underline py-0.5 px-1 m-0.5 cursor-pointer"
                  onClick={() => setShowAllTags(true)}
                >
                  Voir plus
                </span>
              ) : (
                ""
              )
            ) : (
              ""
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
        href={`/user/${user?.id}`}
        className="text-xs text-primary my-2 hover:underline mt-5 mb-5"
      >
        Voir le profil complet
      </a>
    </div>
  );
}
