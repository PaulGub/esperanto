import erick from "../assets/erick-fuentes.jpg";
import background from "../assets/background.jpg";

export default function ProfilCard() {
  return (
    <div className="flex flex-col items-center justify-center bg-white border border-solid">
      <div className="w-full">
        <img src={background} alt="" className="h-12 w-full" />
      </div>
      <div className="flex flex-col items-center justify-start w-full px-4">
        <div className="flex flex-col items-center justify-center">
          <img
            src={erick}
            alt=""
            className="rounded-full w-24 h-24 border-4 border-solid border-white -mt-10"
          />
          <h2>Erick Fuentes</h2>
          <p className="text-xs text-slate-500">Chirurgien</p>
          <a href="#" className="text-xs text-primary hover:underline">
            Modifier
          </a>
        </div>
        <div className="flex flex-col items-start justify-center w-full">
          <h3 className="text-sm">Mes tags</h3>
          <span className="w-1/4 bg-primary-300 rounded h-1"></span>
          <div className="text-xxs flex flex-wrap my-2">
            <span className="bg-primary-100 rounded py-0.5 px-1 m-0.5">
              Chirurgie
            </span>
            <span className="bg-primary-100 rounded py-0.5 px-1 m-0.5">
              Médecine
            </span>
            <span className="bg-primary-100 rounded py-0.5 px-1 m-0.5">
              Santé
            </span>
            <span className="bg-primary-100 rounded py-0.5 px-1 m-0.5">
              Opérations
            </span>
            <span className="bg-primary-100 rounded py-0.5 px-1 m-0.5">
              Médical
            </span>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center w-full">
          <h3 className="text-sm">Description</h3>
          <span className="w-1/4 bg-primary-300 rounded h-1"></span>
          <p className="text-xxs mt-2 text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
            nisi libero nihil eveniet. Dolorum labore facere similique cumque
            accusantium iusto reiciendis. Reprehenderit enim neque quaerat
            corrupti maiores eum impedit consectetur.
          </p>
        </div>
      </div>
      <a href="#" className="text-xs text-primary my-2 hover:underline">
        Voir le profil complet
      </a>
    </div>
  );
}
