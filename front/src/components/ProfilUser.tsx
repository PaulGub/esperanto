import { useState, useEffect } from "react";
import { globalUserProps } from "../utils/types";
import { getUserById } from "./apolloClient/Queries";

export default function ProfilUser({ userId }: { userId: number }) {
  const [user, setUser] = useState<globalUserProps>();

  useEffect(() => {
    getUserById(userId)
      .then((userData) => {
        setUser(userData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const userProfessionalStatus = user?.healthActor?.professional?.name || user?.professionalStatus || "";
  
  return (
    <div className="flex flex-col items-center justify-start bg-white border border-solid rounded-lg col-span-3">
      <div className="w-full">
        <img src={user?.profileBanner} alt="" className="h-[200px] w-full rounded-t-lg object-cover" />
      </div>
      <div className="flex flex-col items-center justify-between w-full px-4">
        <div className="flex justify-between w-full">
          <div className="flex flex-col items-start justify-center ml-5 mr-5">
            <img
              src={user?.profilePicture}
              alt=""
              className="rounded-full w-24 h-24 border-4 border-solid border-white -mt-12"
            />
            <h2>
              {user?.firstname ?? ""} {user?.lastname ?? ""}
            </h2>
            <p className="text-xs text-slate-500">
              {user?.role ?? ""}
              
            </p>
            <p className="text-[12px] text-slate-500 bg-primary-300 p-[3px] text-white mt-1">
              {userProfessionalStatus}
            </p>
          </div>
          <div className="mt-2 ml-5 mr-5">
            <a className="text-xs bg-primary-300 pt-1 pb-1 pr-2 pl-2 hover:bg-white hover:text-primary-300 border border-primary-300 rounded-lg text-white" href={`tel:${user?.email}`}>Suivre</a>       
            <a className="text-xs bg-primary-300 pt-1 pb-1 pr-2 pl-2 hover:bg-white hover:text-primary-300 border border-primary-300 ml-1 rounded-lg text-white" href={`tel:${user?.phoneNumber}`}>Appeler</a>                 
            <a className="text-xs bg-primary-300 pt-1 pb-1 pr-2 pl-2 hover:bg-white hover:text-primary-300 border border-primary-300 ml-1 rounded-lg text-white" href='#'>Contacter</a>                 
          </div>
        </div>
        <div className="ml-5 mr-5 pt-5 pb-5">
          <div className="flex flex-col items-start justify-center w-full mt-2 border-t py-2">
            <h3 className="text-sm pb-1">Tags</h3>
            <span className="w-[50px] bg-primary-300 rounded h-1"></span>
            <div className="text-xxs flex flex-wrap mt-2">
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
          <div className="flex flex-col items-start justify-center w-full mt-2 border-t py-2">
            <h3 className="text-sm pb-1">Description</h3>
            <span className="w-[50px] bg-primary-300 rounded h-1 mb-2"></span>
            <p className="text-xxs line-clamp-5 w-full">{user?.description}</p>
          </div>

          <div className="flex flex-col items-start justify-center w-full mt-2 border-t py-2">
            <h3 className="text-sm pb-1">Statut</h3>
            <span className="w-[50px] bg-primary-300 rounded h-1 mb-2"></span>
            <div className="text-xxs line-clamp-5 w-full flex items-center flex-wrap">
            {user?.healthActor && (
                <>
                  <div>
                    <p className="text-xs line-clamp-5 w-full underline decoration-1">Type de service :</p>
                    <p className="text-xxs line-clamp-5 w-full">{user.healthActor.careServiceType}</p>
                  </div>
                  <div className="ml-4">
                    <p className="text-xs line-clamp-5 w-full underline decoration-1">Service :</p>
                    <p className="text-xxs line-clamp-5 w-full">{user.healthActor.supportServices}</p>
                  </div>
                </>
              )}
              {user?.researcher && (
                <>
                  <div>
                    <p className="text-xs line-clamp-5 w-full underline decoration-1">Type de service :</p>
                    <p className="text-xxs line-clamp-5 w-full">{user?.researcher?.researchUnitName}</p>
                  </div>
                  <div className="ml-4">
                    <p className="text-xs line-clamp-5 w-full underline decoration-1">Service :</p>
                    <p className="text-xxs line-clamp-5 w-full">{user.researcher?.researchArea}</p>
                  </div>
                </>
              )}
              {user?.industrial && (
                <>
                  <div>
                    <p className="text-xs line-clamp-5 w-full underline decoration-1">Secteur industriel :</p>
                    <p className="text-xxs line-clamp-5 w-full">{user.industrial.careSector}</p>
                  </div>
                </>
              )}
              <div className="ml-4">
                <p className="text-xs line-clamp-5 w-full underline decoration-1">Réseau :</p>
                <p className="text-xxs line-clamp-5 w-full">{user?.healthNetwork}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-center w-full mt-2 border-t py-2">
            <h3 className="text-sm pb-1">Expérience</h3>
            <span className="w-[50px] bg-primary-300 rounded h-1 mb-2"></span>
            <p className="text-xxs line-clamp-5 w-full">{user?.experiences}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
