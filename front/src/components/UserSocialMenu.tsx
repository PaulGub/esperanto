import { NavLink } from "react-router-dom";

export default function UserSocialMenu() {
  return (
    <div className="flex flex-col items-center justify-start bg-white border border-solid rounded-lg relative mb-2 w-full">
      <div className="w-full flex-row flex">
        <NavLink
          to={"/feed/suivis/abonnements"}
          className={({ isActive }) =>
            isActive
              ? "w-full text-center bg-primary text-white rounded-s-lg rounded-s-lg text-xs flex justify-center items-center p-1"
              : "w-full text-center hover:bg-primary hover:text-white hover:rounded-s-lg rounded-s-lg text-xs flex justify-center items-center p-1"
          }
        >
          Mes abonnements
        </NavLink>
        <NavLink
          to={"/feed/suivis/abonnes"}
          className={({ isActive }) =>
            isActive
              ? "w-full text-center bg-primary text-white rounded-r-lg rounded-r-lg text-xs flex justify-center items-center p-1"
              : "w-full text-center hover:bg-primary hover:text-white hover:rounded-r-lg rounded-r-lg text-xs flex justify-center items-center p-1"
          }
        >
          Mes abonnés
        </NavLink>
      </div>
    </div>
  );
}
