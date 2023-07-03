import { useLocation } from "react-router-dom";
import { USERS_BY_NEED } from "./gql/GetUsersByTagNeed";
import Need from "./Need";

export default function ProfilFeed() {
  const pathname = useLocation().pathname;

  return (
    <div className="bg-white p-4 rounded-lg">
      {pathname.split("/")[2] === "besoins" && (
        <div className="flex flex-col items-start justify-center w-full mt-2">
          <h3 className="text-sm pb-1">Mes besoins</h3>
          <span className="w-[50px] bg-primary-300 rounded h-1"></span>
          <div className="text-xxs flex flex-wrap my-2">
            <Need need={USERS_BY_NEED} />
          </div>
        </div>
      )}
      {pathname.split("/")[2] === "suivis" && (
        <div className="flex flex-col items-start justify-center w-full mt-2">
          <h3 className="text-sm pb-1">Mes profils suivis</h3>
          <span className="w-[50px] bg-primary-300 rounded h-1"></span>
          <div className="text-xxs flex flex-wrap my-2"></div>
        </div>
      )}
      {pathname.split("/")[2] === "listes" && (
        <div className="flex flex-col items-start justify-center w-full mt-2">
          <h3 className="text-sm pb-1">Mes listes</h3>
          <span className="w-[50px] bg-primary-300 rounded h-1"></span>
          <div className="text-xxs flex flex-wrap my-2"></div>
        </div>
      )}
      {pathname.split("/")[2] === "actualites" && (
        <div className="flex flex-col items-start justify-center w-full mt-2">
          <h3 className="text-sm pb-1">Ils ont peut-être besoin de vous!</h3>
          <span className="w-[50px] bg-primary-300 rounded h-1"></span>
          <div className="text-xxs flex flex-wrap my-2"></div>
        </div>
      )}
    </div>
  );
}
