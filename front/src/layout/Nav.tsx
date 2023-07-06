import { Link, NavLink } from "react-router-dom";
import profil from "../assets/profile.svg";
import { useState } from "react";
import Logo from "../components/Logo";

export default function Nav() {
  const [open, setOpen] = useState(false);

  // const submit = useSubmit();
  return (
    <nav className="px-4 top-0 left-0 bg-white fixed w-full z-50">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "bg-primary text-white" : ""
            }
          >
            {/* <strong>Esperanto</strong> */}
            <Logo/>
          </NavLink>
        </li>
      </ul>
      <nav className="flex items-center gap-4">
        {/* <ul>
          <li className="mx-1">
            <Form
              method="POST"
              onSubmit={(e) => {
                e.preventDefault();
                submit(e.currentTarget, {
                  method: "post",
                  action: "/search",
                });
                        }}
                        className="m-0"
            >
              <input
                type="search"
                name="search"
                id="search"
                className="!h-10"
                placeholder="Rechercher..."
              />
            </Form>
          </li>
        </ul> */}
        <div onMouseLeave={() => setOpen(false)} className="relative">
          <div onMouseOver={() => setOpen(true)} className="">
            <NavLink
              to="/search/professionnels"
              className={({ isActive }) =>
                isActive
                  ? "bg-primary text-white flex items-center"
                  : "flex items-center"
              }
            >
              Professionnels
              <svg
                className="w-4 h-4 ml-2"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </NavLink>
          </div>
          <ul
            className={`absolute right-0 w-40 py-2 mt-2 rounded-lg shadow-xl bg-white ${
              open ? "block" : "hidden"
            }`}
          >
            <li className="mx-1 w-full">
              <NavLink
                to="/search/professionnels/chercheur"
                className={({ isActive }) =>
                  isActive ? "bg-primary text-white w-full" : "w-full"
                }
              >
                Chercheurs
              </NavLink>
            </li>
            <li className="mx-1 w-full">
              <NavLink
                to="/search/professionnels/industriel"
                className={({ isActive }) =>
                  isActive ? "bg-primary text-white w-full" : "w-full"
                }
              >
                Industriels
              </NavLink>
            </li>
            <li className="mx-1 w-full">
              <NavLink
                to="/search/professionnels/sante"
                className={({ isActive }) =>
                  isActive ? "bg-primary text-white w-full" : "w-full"
                }
              >
                Santé
              </NavLink>
            </li>
          </ul>
        </div>
        <ul>
          <li className="mx-1">
            <NavLink
              to="/search/materiels"
              className={({ isActive }) =>
                isActive ? "bg-primary text-white" : ""
              }
            >
              Matériels
            </NavLink>
          </li>
          <li className="mx-1">
            <NavLink
              to="/search/infrastructures"
              className={({ isActive }) =>
                isActive ? "bg-primary text-white" : ""
              }
            >
              Infrastructures
            </NavLink>
          </li>
          <li>
            <Link to="/">
              <img src={profil} alt="" className="w-4" />
            </Link>
          </li>
        </ul>
      </nav>
    </nav>
  );
}
