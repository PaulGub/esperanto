import Feed from "./Feed";
import ProfilCard from "../components/ProfilCard";
import Suggestions from "./Suggestions";

export default function Profil() {
  return (
    <div className="grid grid-cols-5 gap-2 px-28 pt-2 w-full col-span-3 mt-14">
      <ProfilCard />
      <Feed />
      <Suggestions />
    </div>
  );
}
