import { materialProps } from "../utils/types/data";

export default function Material({ material }: { material: materialProps }) {
    console.log(material)
  return (
    <div className="p-4 bg-slate-50 rounded-lg w-full mt-2">
      <div className="flex flex-col items-start justify-center w-full mb-2 bg-gray-100 p-2 rounded">
        <h3 className="text-sm pb-1">Nom du matériel :</h3>
        <div className="bg-white p-2 w-full rounded mt-2">{material?.name}</div>
      </div>
      <div className="flex flex-col items-start justify-center w-full mt-5 mb-2 bg-gray-100 p-2 rounded">
        <h3 className="text-sm pb-1">Description du matériel :</h3>
        <div className="bg-white p-2 w-full rounded mt-2">
          {material?.description}
        </div>
      </div>
      <div className="flex flex-col items-start justify-center w-full mt-5 mb-2 bg-gray-100 p-2 rounded">
        <h3 className="text-sm pb-1">Image du matériel :</h3>
        <div className="bg-white p-2 w-full rounded mt-2">
          <img src={material?.resourceImage}/>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center w-full mt-5 mb-2 bg-gray-100 p-2 rounded">
        <h3 className="text-sm pb-1">Ressource du matériel :</h3>
        <div className="bg-white p-2 w-full rounded mt-2">
          <a href={material?.resourceLink}>Voir</a>
        </div>
      </div>
    </div>
  );
}
