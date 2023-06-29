import { createRoot } from "react-dom/client";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import App from "./Layout.tsx";
import "./index.css";
import Search from "./pages/Search.tsx";
import Profil from "./pages/Profil.tsx";

const root = createRoot(
  document.getElementById("root") as Element | DocumentFragment
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />}>
        <Route index element={<Profil />} />
        <Route
          path="search"
          element={<Search />}
          action={async ({ request }) => {
            const formData = await request.formData();
            return formData ? formData.get("search") : "";
          }}
        >
          <Route path="sante" element={<Search />} />
          <Route path="chercheur" element={<Search />} />
          <Route path="industriel" element={<Search />} />
        </Route>
      </Route>
    </Route>
  )
);

root.render(
  <>
    <RouterProvider router={router} />
  </>
);
