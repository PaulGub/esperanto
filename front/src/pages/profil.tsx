import ProfilFeed from "../components/ProfilFeed";
import UserMenu from "../components/UserMenu";
import ProfilCard from "../components/ProfilCard";
import Suggestions from "../components/Suggestions";
import AddButton from "../components/AddButton";

export default function Profil() {
  const current = 1;
  return (
    <div className="grid grid-cols-5 gap-4 px-28 pt-2 mt-20 w-full">
      <ProfilCard />
      <div className="col-span-3">
        <UserMenu />
        <ProfilFeed />
      </div>
      <Suggestions userId={current ? +current : 0} />
      <AddButton/>
    </div>
  );
}
