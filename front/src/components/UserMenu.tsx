import {Dispatch, SetStateAction } from "react";

export default function UserMenu({setDisplay}: {setDisplay: Dispatch<SetStateAction<string>>}) {

  return (
    <div className="flex flex-col items-center justify-start bg-white border border-solid rounded-lg relative mb-2">
        <div className="w-full flex-row flex">
          <button className="text-xs border-none py-1 hover:bg-primary hover:text-white" onClick={()=>setDisplay("feed")}>Actualités</button>
          <button className="text-xs border-none py-1 hover:bg-primary hover:text-white" onClick={()=>setDisplay("besoins")}>Mes besoins</button>
          <button className="text-xs border-none py-1 hover:bg-primary hover:text-white" onClick={()=>setDisplay("suivis")}>Profils suivis</button>
          <button className="text-xs border-none py-1 hover:bg-primary hover:text-white" onClick={()=>setDisplay("listes")}>Mes listes</button>
        </div>
    </div>
  );
}
