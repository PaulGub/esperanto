import Card from "../components/Card";
import { USERS } from "../components/gql/GetAllUsers";
import Sidebar from "../layout/Sidebar";
import { useEffect, useState } from "react";
import { globalUserProps } from "../utils/types";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { NavLink, useLocation } from "react-router-dom";

type Tags = "healthActor" | "researcher" | "industrial" | "";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

export default function Search() {
  const location = useLocation();
  const pathname = location.pathname.split("/")[3];
  const tags = {
    sante: "healthActor",
    chercheur: "researcher",
    industriel: "industrial",
  };
  const tag = Object.values(tags)[Object.keys(tags).indexOf(pathname)] as Tags;
  const [noResult, setNoResult] = useState(false);
  const [users, setUsers] = useState<globalUserProps[]>([]);
  useEffect(() => {
    client
      .query({
        query: USERS,
      })
      .then((result) => {
        const filterdUsers =
          tag !== ""
            ? result.data.users.filter(
                (user: globalUserProps) => user[`${tag}`] !== null
              )
            : result.data.users;
        setUsers(filterdUsers);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [tag]);

  function normalizeString(input: string): string {
    input ? input : (input = " ");
    return input
      .normalize("NFD") // Décompose les caractères accentués en base et accents séparés
      .replace(/[\u0300-\u036f]/g, "") // Supprime les caractères d'accent
      .replace(/[^\w\s]/gi, "") // Supprime les caractères spéciaux
      .toLowerCase(); // Convertit en minuscules
  }

  const filteredUsers = (input: string) => {
    const filtered = users.filter(
      (user) =>
        normalizeString(user.firstname).includes(normalizeString(input)) ||
        normalizeString(user.lastname).includes(normalizeString(input)) ||
        normalizeString(user.description ? user.description : "")
          .split(" ")
          .includes(normalizeString(input))
    );
    console.log(filtered);
  };

  return (
    <>
      <Sidebar />
      <div className="mt-16 ml-64">
        <div className="flex">
          {["Santé", "Industriel", "Chercheur"].map((role) => (
            <NavLink
              className={({ isActive }) =>
                `flex-1 bg-white py-4 flex items-center justify-center cursor-pointer ${
                  isActive ? "border-b-4 border-blue-500" : ""
                }`
              }
              to={"professionnels/"+normalizeString(role)}
              replace={true}
              key={role}
            >
              {role}
            </NavLink>
          ))}
        </div>
        <div className="p-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              filteredUsers(e.currentTarget.search.value);
            }}
          >
            <input
              type="search"
              name="search"
              className=" bg-white !m-0"
              placeholder="Rechercher un profil..."
            />
          </form>
          <div className=" px-12 mt-24 w-full">
            {noResult && (
              <h2 className="text-2xl text-center">Aucun résultat</h2>
            )}
            {users.map((user) => (
              <Card user={user} key={user.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
