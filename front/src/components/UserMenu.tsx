import { NavLink } from "react-router-dom";

export default function UserMenu() {
  return (
    <div className="flex flex-col items-center justify-start bg-white border border-solid rounded-lg relative mb-2">
      <div className="w-full flex-row flex">
        <NavLink
          to={"/feed/actualites"}
          className={({ isActive }) =>
            isActive
              ? "w-full text-center bg-primary text-white rounded-s-lg rounded-s-lg text-xs flex justify-center items-center p-1"
              : "w-full text-center hover:bg-primary hover:text-white hover:rounded-s-lg rounded-s-lg text-xs flex justify-center items-center p-1"
          }
        >
          Actualités
        </NavLink>
        <NavLink
          to={"/feed/besoins"}
          className={({ isActive }) =>
            isActive
              ? "w-full text-center bg-primary text-white text-xs flex justify-center items-center p-1"
              : "w-full text-center hover:bg-primary hover:text-white text-xs flex justify-center items-center p-1"
          }
        >
          Mes besoins
        </NavLink>
        <NavLink
          to={"/feed/suivis"}
          className={({ isActive }) =>
            isActive
              ? "w-full text-center bg-primary text-white text-xs flex justify-center items-center p-1"
              : "w-full text-center hover:bg-primary hover:text-white text-xs flex justify-center items-center p-1"
          }
        >
          Profils suivis
        </NavLink>
        <NavLink
          to={"/feed/listes"}
          className={({ isActive }) =>
            isActive
              ? "w-full text-center bg-primary text-white rounded-r-lg rounded-r-lg text-xs flex justify-center items-center p-1"
              : "w-full text-center hover:bg-primary hover:text-white hover:rounded-r-lg rounded-r-lg text-xs flex justify-center items-center p-1"
          }
        >
          Mes listes
        </NavLink>
      </div>
    </div>
  );
}
