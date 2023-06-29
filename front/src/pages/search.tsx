import Card from "../components/Card";
import Sidebar from "../layout/Sidebar";
import { userProps } from "../utils/types";

export default function search({ users }: { users: userProps[] }) {
  return (
    <>
      <Sidebar />
      <div className="p-4 mt-14 ml-64">
        <input
          type="search"
          className=" bg-white !m-0"
          placeholder="Rechercher un profil..."
        />
        <div className=" px-12 mt-24 w-full">
          {users.map((user) => (
            <Card user={user} key={user.firstName + user.lastName} />
          ))}
        </div>
      </div>
    </>
  );
}
