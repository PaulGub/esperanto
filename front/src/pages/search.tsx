import { useActionData } from "react-router-dom";
import Card from "../components/Card";
import Sidebar from "../layout/Sidebar";
import users from "../utils/data/users";
import { useEffect, useState } from "react";
import { fi } from "@faker-js/faker";

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
  return (
    <>
      <Sidebar />
      <div className="p-4 mt-16 ml-64">
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
    </>
  );
}
