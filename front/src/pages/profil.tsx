import Feed from "../components/Feed";
import ProfilCard from "../components/ProfilCard";

export default function Profil() {
  return (
    <div className="grid grid-cols-5 gap-2 pl-4 pt-2 w-full col-span-3">
      <ProfilCard />
      <Feed />
      <div>right</div>
    </div>
  );
}
