import Card from "../components/Card";
import Sidebar from "../layout/Sidebar";
import { userProps } from "../utils/types";

export default function search({ users }: { users: userProps[] }) {
  return (
    <>
      <Sidebar />
      <div className="col-span-2 p-4 ">
        <input
          type="search"
          className="!mb-3"
          placeholder="Rechercher un profil..."
        />
        <div className="h-96 overflow-auto px-12 -mt-3 w-full">
          {users.map((user) => (
            <Card user={user} key={user.firstName + user.lastName} />
          ))}
        </div>
      </div>
    </>
  );
}
