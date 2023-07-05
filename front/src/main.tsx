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
import AccountCreation from "./pages/AccountCreation.tsx";

const root = createRoot(
  document.getElementById("root") as Element | DocumentFragment
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />}>
        <Route path="account" element={<AccountCreation />} />
        <Route index element={<Navigate to={"feed/actualites"} />} />
        <Route path="feed" element={<Profil />}>
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
        <Route path="user/:id" element={<User />} />
      </Route>
    </Route>
  )
);

root.render(
  <>
    <RouterProvider router={router} />
  </>
);
