import ProfilFeed from "../components/ProfilFeed";
import ProfilCard from "../components/ProfilCard";
import Suggestions from "../components/Suggestions";

export default function Profil() {
  return (
    <div className="grid grid-cols-5 gap-4 px-28 pt-2 mt-20 w-full">
      <ProfilCard />
      <ProfilFeed />
      <Suggestions />
    </div>
  );
}
