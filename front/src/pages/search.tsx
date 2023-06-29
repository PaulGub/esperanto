import { useActionData } from "react-router-dom";
import Card from "../components/Card";
import Sidebar from "../layout/Sidebar";
import users from "../utils/data/users";

export default function Search() {
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
      normalizeString(user.tag).includes(normalizeString(actionData as string))
  );
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
          {filteredUsers.length !== 0 ? (
            filteredUsers.map((user) => (
              <Card user={user} key={user.firstname + user.lastname} />
            ))
          ) : (
            <>
              <h2 className="text-2xl text-center">Aucun résultat</h2>
              {users.map((user) => (
                <Card user={user} key={user.firstname + user.lastname} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}
