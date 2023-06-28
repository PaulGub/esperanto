import Card from "../components/Card";
import Sidebar from "../layout/Sidebar";
import { userProps } from "../utils/types";

export default function search({ users }: { users: userProps[] }) {
  return (
    <>
      <Sidebar />
      <div className="col-span-2 p-4 mt-14 ml-72 border border-solid w-full ">
        <input
          type="search"
          className=" bg-white "
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
