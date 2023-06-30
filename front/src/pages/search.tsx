import { useActionData } from "react-router-dom";
import Card from "../components/Card";
import Sidebar from "../layout/Sidebar";
import users from "../utils/data/users";
import { useEffect, useState } from "react";
import { fi } from "@faker-js/faker";

enum ROLES {
  HEALTH_ACTOR = "Acteur de la santé",
  RESEARCHER = "Chercheur",
  INDUSTRIAL = "Industriel",
}

export default function Search() {
  const [noResult, setNoResult] = useState(false);
  const actionData = useActionData();
  console.log(actionData);
  function normalizeString(input: string): string {
    input ? input : (input = " ");
    return input
      .normalize("NFD") // Décompose les caractères accentués en base et accents séparés
      .replace(/[\u0300-\u036f]/g, "") // Supprime les caractères d'accent
      .replace(/[^\w\s]/gi, "") // Supprime les caractères spéciaux
      .toLowerCase(); // Convertit en minuscules
  }
  const filteredUsers = users.filter(
    (user) =>
      normalizeString(user.firstName).includes(
        normalizeString(actionData as string)
      ) ||
      normalizeString(user.lastName).includes(
        normalizeString(actionData as string)
      ) ||
      normalizeString(user.description)
        .split(" ")
        .includes(normalizeString(actionData as string)) ||
      normalizeString(user.tag).includes(normalizeString(actionData as string))
  );

  console.log(filteredUsers);

  useEffect(() => {
    filteredUsers.length === 0 ? setNoResult(true) : setNoResult(false);
  }, [filteredUsers]);

  const [activeMenu, setActiveMenu] = useState(ROLES.HEALTH_ACTOR);

  return (
    <>
      <Sidebar />
      <div className="mt-16 ml-64">
        <div className="flex">
          <div className={`flex-1 bg-white py-4 flex items-center justify-center cursor-pointer ${
              activeMenu === ROLES.HEALTH_ACTOR ? "border-b-4 border-blue-500" : ""
            }`}
            onClick={() => setActiveMenu(ROLES.HEALTH_ACTOR)}>Santé
          </div>
          <div className={`flex-1 bg-white py-4 flex items-center justify-center cursor-pointer ${
              activeMenu === ROLES.INDUSTRIAL ? "border-b-4 border-blue-500" : ""
            }`}
            onClick={() => setActiveMenu(ROLES.INDUSTRIAL)}>Industriel
          </div>
          <div className={`flex-1 bg-white py-4 flex items-center justify-center cursor-pointer ${
              activeMenu === ROLES.RESEARCHER ? "border-b-4 border-blue-500" : ""
            }`}
            onClick={() => setActiveMenu(ROLES.RESEARCHER)}>Chercheur
          </div>
        </div>
        <div className="p-4">
          <input
            type="search"
            className=" bg-white !m-0"
            placeholder="Rechercher un profil..."
          />
          <div className=" px-12 mt-24 w-full">
            {noResult && <h2 className="text-2xl text-center">Aucun résultat</h2>}
            {filteredUsers.length !== 0
              ? filteredUsers.map((user) => <Card user={user} key={user.id} />)
              : users.map((user) => <Card user={user} key={user.id} />)}
          </div>
        </div>
      </div>
    </>
  );
}
