import { Link, NavLink } from "react-router-dom";
import profil from "../assets/profile.svg";

export default function Nav() {
  return (
    <nav className="px-4 top-0 left-0 bg-white fixed w-full">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "bg-primary text-white" : ""
            }
          >
            <strong>Esperanto</strong>
          </NavLink>
        </li>
      </ul>
      <ul>
        <li className="mx-1">
          <NavLink
            to="/sante"
            className={({ isActive }) =>
              isActive ? "bg-primary text-white" : ""
            }
          >
            Santé
          </NavLink>
        </li>
        <li className="mx-1">
          <NavLink
            to="/chercheur"
            className={({ isActive }) =>
              isActive ? "bg-primary text-white" : ""
            }
          >
            Chercheur
          </NavLink>
        </li>
        <li className="mx-1">
          <NavLink
            to="/industriel"
            className={({ isActive }) =>
              isActive ? "bg-primary text-white" : ""
            }
          >
            Industriel
          </NavLink>
        </li>
        <li>
          <Link to="/profil">
            <img src={profil} alt="" className="w-4" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
