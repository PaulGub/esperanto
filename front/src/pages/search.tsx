import { USERS } from "../components/gql/GetAllUsers";
import Sidebar from "../layout/Sidebar";
import { useEffect, useState } from "react";
import { globalUserProps } from "../utils/types";
import { NavLink, useLocation } from "react-router-dom";
import Professionnels from "./subpages/professionnels";
import Materiels from "./subpages/materiels";
import Infrastructures from "./subpages/infrastructures";
import { ApolloClientCall } from "../components/apolloClient/ApolloClient";
import { HEALTH_ACTOR_SEARCH } from "../components/gql/HealthActorSearch";
import { INDUSTRIAL_SEARCH } from "../components/gql/IndustrialSearch";
import { RESEARCHER_SEARCH } from "../components/gql/ResearcherSearch";

type Tags = "healthActor" | "researcher" | "industrial" | "";

export default function Search() {
  const location = useLocation();
  const pathname = location.pathname;
  const tags = {
    sante: "healthActor",
    chercheur: "researcher",
    industriel: "industrial",
  };
  const queries = {
    healthActor: HEALTH_ACTOR_SEARCH,
    researcher: RESEARCHER_SEARCH,
    industrial: INDUSTRIAL_SEARCH,
    default: USERS,
  };
  const tag = Object.values(tags)[
    Object.keys(tags).indexOf(pathname.split("/")[3])
  ] as Tags;
  const [noResult, setNoResult] = useState(false);
  const [users, setUsers] = useState<globalUserProps[]>([]);
  const [allUsers, setAllUsers] = useState<globalUserProps[]>([]);
  const [input, setInput] = useState<string>("");
  const [filters, setFilters] = useState<string[]>([]);
  const [tagsCount, setTagsCount] = useState<{ [index: string]: number }>();
  useEffect(() => {
    ApolloClientCall.query({
      query: queries[tag ? tag : "default"],
      variables: {
        search: input,
      },
    })
      .then((result) => {
        console.log(result.data);
        switch (tag) {
          case "healthActor":
            setUsers(result.data.healthActorsBySearch.rows);
            setAllUsers(result.data.healthActorsBySearch.rows);
            setNoResult(result.data.healthActorsBySearch.count === 0);
            break;
          case "researcher":
            setUsers(result.data.researchersBySearch.rows);
            setAllUsers(result.data.researchersBySearch.rows);
            setNoResult(result.data.researchersBySearch.count === 0);
            break;
          case "industrial":
            setUsers(result.data.industrialsBySearch.rows);
            setAllUsers(result.data.industrialsBySearch.rows);
            setNoResult(result.data.industrialBySearch.count === 0);
            break;
          default:
            setUsers(result.data.users);
            setAllUsers(result.data.users);
            setNoResult(result.data.users.length === 0);
            break;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [input, tag]);

  useEffect(() => {
    if (filters.length !== 0) {
      const filtered: globalUserProps[] = [];
      const tempFilter = users.map((user) => {
        return user.tags
          .map((tag) => (filters.includes(tag.name) ? user : null))
          .filter((item) => item !== null);
      }) as globalUserProps[][];
      tempFilter
        .filter((item) => item.length !== 0)
        .forEach((item) => filtered.push(item[0]));
      filtered.length !== 0 ? setUsers(filtered) : setUsers(allUsers);
    } else {
      setUsers(allUsers);
    }
  }, [filters]);

  useEffect(() => {
    if (users.length !== 0) {
      const allTags: string[] = [];
      users.map((user) => user.tags.map((tag) => allTags.push(tag.name)));
      const tagsCountTemp: { [index: string]: number } = {};
      for (const num of allTags) {
        tagsCountTemp[num] = tagsCountTemp[num] ? tagsCountTemp[num] + 1 : 1;
      }
      setTagsCount(tagsCountTemp);
    }
  }, [users]);

  function normalizeString(input: string): string {
    input ? input : (input = " ");
    return input
      .normalize("NFD") // Décompose les caractères accentués en base et accents séparés
      .replace(/[\u0300-\u036f]/g, "") // Supprime les caractères d'accent
      .replace(/[^\w\s]/gi, "") // Supprime les caractères spéciaux
      .toLowerCase(); // Convertit en minuscules
  }

  return (
    <>
      <Sidebar
        setFilters={setFilters}
        tagsCount={
          tagsCount as {
            [index: string]: number;
          }
        }
      />
      <div className="mt-16 ml-64">
        <div className="flex">
          {["Santé", "Industriel", "Chercheur"].map((role) => (
            <NavLink
              className={({ isActive }) =>
                `flex-1 bg-white py-4 flex items-center justify-center cursor-pointer ${
                  isActive ? "border-b-4 border-blue-500" : ""
                }`
              }
              to={"professionnels/" + normalizeString(role)}
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
              setInput(e.currentTarget.search.value);
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
            {noResult ? (
              <h2 className="text-2xl text-center">Aucun résultat</h2>
            ) : pathname.split("/")[2] === "professionnels" ? (
              <Professionnels users={users} />
            ) : pathname.split("/")[2] === "materiels" ? (
              <Materiels />
            ) : pathname.split("/")[2] === "infrastructures" ? (
              <Infrastructures />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}
