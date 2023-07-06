import { createRoot } from "react-dom/client";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import App from "./Layout.tsx";
import "./index.css";
import Search from "./pages/search.tsx";
import Profil from "./pages/profil.tsx";
import User from "./pages/user.tsx";
import Register from "./pages/Register.tsx";
import Login from "./pages/Login.tsx";

function isAuthenticated() {
  const userId = localStorage.getItem('userId'); // Récupérez l'ID de l'utilisateur à partir du local storage
  const userEmail = localStorage.getItem('userEmail'); // Récupérez l'e-mail de l'utilisateur à partir du local storage

  // Vérifiez si l'utilisateur est connecté en fonction des valeurs récupérées du local storage
  return userId && userEmail;
}

const root = createRoot(
  document.getElementById("root") as Element | DocumentFragment
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />}>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route index
          element={
            isAuthenticated() ? <Navigate to={"feed/actualites"} /> : <Navigate to="/login" />
          }
        ></Route>
        <Route path="feed"
          element={
            isAuthenticated() ? <Profil /> : <Navigate to="/login" />
          }
        >
          <Route path="actualites" element={<Profil />} />
          <Route path="besoins" element={<Profil />} />
          <Route path="suivis" element={<Profil />} >
            <Route path="abonnes" element={<Profil />} />
            <Route path="abonnements" element={<Profil />} />
          </Route>
          <Route path="listes" element={<Profil />}>
            <Route path="utilisateurs" element={<Profil />} />
            <Route path="materiels" element={<Profil />} />
            <Route path="besoins" element={<Profil />} />
          </Route>
        </Route>
        <Route path="search" element={<Search />}>
          <Route path="professionnels" element={<Search />}>
            <Route path="sante" element={<Search />} />
            <Route path="chercheur" element={<Search />} />
            <Route path="industriel" element={<Search />} />
          </Route>
          <Route path="materiels" element={<Search />}>
            <Route path="sante" element={<Search />} />
            <Route path="chercheur" element={<Search />} />
            <Route path="industriel" element={<Search />} />
          </Route>
          <Route path="infrastructures" element={<Search />}>
            <Route path="sante" element={<Search />} />
            <Route path="chercheur" element={<Search />} />
            <Route path="industriel" element={<Search />} />
          </Route>
        </Route>
        <Route path="user/:id"
          element={
            isAuthenticated() ? <User /> : <Navigate to="/login" />
          }
        />
      </Route>
    </Route>
  )
);

root.render(
  <>
    <RouterProvider router={router} />
  </>
);
