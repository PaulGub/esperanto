import { useState, useEffect } from "react";
import { userProps } from "../utils/types";
import { getUser } from "../client/client";

const userId = "1";

export default function ProfilCard() {
  const [user, setUser] = useState<userProps>();

  useEffect(() => {
    getUser(userId)
      .then((userData) => {
        setUser(userData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  
  return (
    <div className="flex flex-col items-center justify-start bg-white border border-solid rounded-lg">
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
            {user?.professionalStatus ?? ""}
          </p>
          <a href="#" className="text-xs text-primary hover:underline">
            Modifier
          </a>
        </div>
        <div className="flex flex-col items-start justify-center w-full mt-2">
          <h3 className="text-sm pb-1">Mes tags</h3>
          <span className="w-1/4 bg-primary-300 rounded h-1"></span>
          <div className="text-xxs flex flex-wrap my-2">
            {user?.tags?.map((tag) => (
              <span
                key={tag.id}
                className="bg-primary-100 rounded py-0.5 px-1 m-0.5"
              >
                {tag.name}
              </span>
            ))}
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
