import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="px-4 col-span-3">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "bg-red-300" : "")}
          >
            <strong>Esperanto</strong>
          </NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to="/sante" className={({ isActive }) => (isActive ? "bg-red-300" : "")}>Santé</NavLink>
        </li>
        <li>
          <NavLink to="/chercheur" className={({ isActive }) => (isActive ? "bg-red-300" : "")}>Chercheur</NavLink>
        </li>
        <li>
          <NavLink to="/industriel" className={({ isActive }) => (isActive ? "bg-red-300" : "")}>Industriel</NavLink>
        </li>
      </ul>
    </nav>
  );
}
