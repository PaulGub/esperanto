import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="px-4 col-span-3">
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
      </ul>
    </nav>
  );
}
