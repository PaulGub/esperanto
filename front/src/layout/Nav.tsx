import { Link, NavLink, useNavigate } from "react-router-dom";
import profil from "../assets/profile.svg";
import { useState } from "react";
import Logo from "../components/Logo";

export default function Nav() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  function isAuthenticated() {
    const userId = localStorage.getItem('userId'); // Récupérez l'ID de l'utilisateur à partir du local storage
    const userEmail = localStorage.getItem('userEmail'); // Récupérez l'e-mail de l'utilisateur à partir du local storage
  
    // Vérifiez si l'utilisateur est connecté en fonction des valeurs récupérées du local storage
    return userId && userEmail;
  }

  function removeSession() {
    localStorage.removeItem('userId');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userFirstname');
    navigate("/login");
    window.location.reload();
  }

  // const submit = useSubmit();
  return (
    <div className="flex flex-col top-0 left-0 fixed z-50 w-full">
      <div className="flex justify-end items-center bg-gray-200 h-6">
        {isAuthenticated() ? (
          <div className="flex gap-2 text-[14px] pr-8">
            <span className="cursor-pointer">Bonjour {localStorage.getItem('userFirstname')} !</span>
            <span className="cursor-pointer">|</span>
            <span className="cursor-pointer" onClick={() => removeSession()}>Se deconnecter</span>
          </div>
        ) : (
          <div className="flex gap-2 text-[14px] pr-8">
            <span className="cursor-pointer">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "bg-primary text-white" : ""
                }
              >Se connecter</NavLink>
            </span>
            <span className="cursor-pointer">|</span>
            <span className="cursor-pointer">
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive ? "bg-primary text-white" : ""
                }
              >S'enregistrer</NavLink>
            </span>
          </div>
        )}
      </div>
      <nav className="px-4 top-0 left-0 bg-white">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "bg-primary text-white" : ""
              }
            >
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
    </div>
  );
}
