import AddButton from "../components/AddButton";
import ProfilUser from "../components/ProfilUser";
import Suggestions from "../components/Suggestions";
import { useParams } from "react-router-dom";

export default function User() {
    const { id } = useParams();
    const current = 1;
    const title = "Profils similaires";
    return (
        <div className="grid grid-cols-5 gap-4 px-20 pt-2 w-full">
            <Suggestions userId={id ? +id : 0} title={title} />
            <ProfilUser userId={id?+id:0}/>
            <Suggestions userId={current?+current:0}/>
            <AddButton/>
        </div>
    );
}
