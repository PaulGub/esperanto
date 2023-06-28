import erick from "../assets/erick-fuentes.jpg";

export default function CardSuggestion() {
  return (
    <div className="flex items-center bg-base p-2">
      <img
        src={erick}
        alt=""
        className="w-10 h-10 rounded-full border-2 border-white border-solid"
      />
      <div className="ml-2">
        <p className="text-xs">Erick Fuentes</p>
        <p className="text-xxs text-slate-500">Chirurgien</p>
        <a href="#" className="text-xxs text-primary hover:underline">
          Voir le profil
        </a>
      </div>
    </div>
  );
}
