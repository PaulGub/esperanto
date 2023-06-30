import ProfilFeed from "../components/ProfilFeed";
import ProfilCard from "../components/ProfilCard";
import Suggestions from "../components/Suggestions";

export default function Profil() {
  const current = 1
  return (
    <div className="grid grid-cols-5 gap-4 px-28 pt-2 mt-20 w-full">
      <ProfilCard />
      <ProfilFeed />
      <Suggestions userId={current?+current:0}/>
    </div>
  );
}
