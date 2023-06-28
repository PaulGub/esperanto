import Feed from "./Feed";
import ProfilCard from "../components/ProfilCard";
import Suggestions from "./Suggestions";

export default function Profil() {
  return (
    <div className="grid grid-cols-5 gap-4 px-28 pt-2 mt-24 w-full">
      <ProfilCard />
      <Feed />
      <Suggestions />
    </div>
  );
}
