import { NavLink } from "react-router-dom";

export default function UserSocialList() {
  return (
    <div className="flex flex-col items-center justify-start bg-white border border-solid rounded-lg relative w-full mt-2">
      <div className="w-full flex-row flex">
      <NavLink
          to={"/feed/listes/utilisateurs"}
          className={({ isActive }) =>
            isActive
              ? "w-full text-center bg-primary text-white rounded-s-lg rounded-s-lg text-xs flex justify-center items-center p-1"
              : "w-full text-center hover:bg-primary hover:text-white hover:rounded-s-lg rounded-s-lg text-xs flex justify-center items-center p-1"
          }
        >
          Utilisateurs
        </NavLink>
        <NavLink
          to={"/feed/listes/materiels"}
          className={({ isActive }) =>
            isActive
              ? "w-full text-center bg-primary text-white text-xs flex justify-center items-center p-1"
              : "w-full text-center hover:bg-primary hover:text-white text-xs flex justify-center items-center p-1"
          }
        >
          Matériels
        </NavLink>
        <NavLink
          to={"/feed/listes/besoins"}
          className={({ isActive }) =>
            isActive
              ? "w-full text-center bg-primary text-white rounded-r-lg rounded-r-lg text-xs flex justify-center items-center p-1"
              : "w-full text-center hover:bg-primary hover:text-white hover:rounded-r-lg rounded-r-lg text-xs flex justify-center items-center p-1"
          }
        >
          Besoins
        </NavLink>
      </div>
    </div>
  );
}
