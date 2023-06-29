import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./Layout.tsx";
import "./index.css";
import Search from "./pages/Search.tsx";
import users from "./utils/data/users";
import Profil from "./pages/Profil.tsx";

const root = createRoot(
  document.getElementById("root") as Element | DocumentFragment
);

const sante = users.filter((user) => user.tag === "Santé");
const chercheur = users.filter((user) => user.tag === "Chercheur");
const industriel = users.filter((user) => user.tag === "Industriel");

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Search users={users} />} />
        <Route path="sante" element={<Search users={sante} />} />
        <Route path="chercheur" element={<Search users={chercheur} />} />
        <Route path="industriel" element={<Search users={industriel} />} />
        <Route path="profil" element={<Profil />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
