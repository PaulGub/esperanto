import { useEffect, useState } from "react";
import { needProps } from "../utils/types/data";
import CardSuggestionVariant from "../components/CardSuggestionVariant";
import { getUsersByTagNeed } from "./apolloClient/Queries";
import { CURRENT_USER } from "./loggedUser/userLoged";

export default function Need({ need, userId }: { need: needProps, userId: number }) {
  const [needSuggestions, setNeedSuggestions] = useState<needProps[]>([]);
  const NEED_ID = need.id;

  useEffect(() => {
    getUsersByTagNeed(userId, NEED_ID)
      .then((needData) => {
        setNeedSuggestions(needData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="p-4 bg-gray-100 rounded-lg w-full mt-2">
      {CURRENT_USER != userId ? (
        <div className="flex flex-col items-start justify-center w-full mb-2 bg-primary-100 p-5 rounded mb-4">
          <div className="flex w-full">
            <div className='w-1/6 mr-2'>
              <img
                src={need?.user?.profilePicture ?? "/public/profile.jpg"}
                alt=""
                className="rounded-full w-16 h-16 border-4 border-solid border-white"
              />          
            </div>
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center justify-between w-full">
                <div>
                  <p>
                    {need?.user?.firstname} {need?.user?.lastname}
                  </p>
                  <a
                    href={`/user/${need?.user?.id}`}
                    className="text-[12px] text-primary hover:underline"
                  >
                    Voir le profil
                  </a>
                </div>
              <div>
                <a className="text-xs bg-primary pt-1 pb-1 pr-2 pl-2 hover:bg-white hover:text-primary border border-primary ml-1 rounded-lg text-white" href={`mailto:${need?.user?.email}`}>Contacter</a>                 
              </div>
              </div>
            </div>
          </div>
        </div>
      ):""}
      <div className="flex items-start gap-4 mt-5">
        <div className="flex flex-col items-start justify-center w-full mb-2 bg-primary-300 p-2 rounded">
          <h3 className="text-sm pb-1">Titre du besoin :</h3>
          <div className="bg-white p-2 w-full rounded mt-2">{need?.title}</div>
        </div>
        <div className="flex flex-col items-start justify-center w-full mb-2 bg-primary-300 p-2 rounded">
          <h3 className="text-sm pb-1">Description du besoin :</h3>
          <div className="bg-white p-2 w-full rounded mt-2">
            {need?.description}
          </div>
        </div>
      </div>
      <div className="flex items-start gap-4 mt-2">
        <div className="flex flex-col items-start justify-center w-full mb-2 bg-primary-300 p-2 rounded">
          <h3 className="text-sm pb-1">Tags du besoin :</h3>
          <div className="w-full rounded mt-2 p-2 bg-white">
            {need?.tags?.map((tag) => (
              <span
                key={tag.id}
                className="bg-primary-100 rounded py-0.5 px-1 m-0.5"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start justify-center w-full mb-2 bg-primary-300 p-2 rounded">
          <h3 className="text-sm pb-1">Valeur du besoin :</h3>
          <div className="bg-white p-2 w-full rounded mt-2">
            <p className="underline text-xs">{need?.type} : </p>
            <p className="text-xs">{need?.infrastructure}</p>
            {need?.professionals.map((needed) => (
              <p className="text-xs" key={needed.id}> {needed.name}</p>
            ))}
            {need?.materials.map((needed) => (
              <p className="text-xs" key={needed.id}> {needed.name}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center w-full mt-5 mb-2 mb-2 p-2">
        {CURRENT_USER != userId ? (
          <h3 className="text-sm pb-1">Ils peuvent peut-être aider :</h3>
        ) : (
          <h3 className="text-sm pb-1">Profils associés au besoin :</h3>
        )}
        <div className="suggestions grid grid-cols-4 gap-2 mt-2">
          {needSuggestions?.map((user) => (
            <CardSuggestionVariant user={user} key={user.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
