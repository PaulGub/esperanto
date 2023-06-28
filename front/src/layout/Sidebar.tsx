import filters from "../assets/filters.svg";
import trash from "../assets/trash.svg";
import arrow from "../assets/arrow.svg";
import { useReducer } from "react";
import { specialities } from "../utils/data/specialities";
import Filter from "../components/Filter";

export default function Sidebar() {
  const initialState = {
    props: {
      rotate90: false,
    },
  };
  const [state, dispatch] = useReducer(
    (prev: any, next: any) => ({ ...prev, ...next }),
    initialState
  );
  return (
    <form className="p-4 w-60 h-full">
      <h2 className="flex items-center mb-4">
        <img src={filters} alt="" className="!w-4 mr-4" />
        Filtres
      </h2>
      <div className=" border-y border-y-solid border-y-primary">
        <label htmlFor="reset" className="flex items-center cursor-pointer">
          <img src={trash} alt="" className="!w-4 mr-4" />
          Effacer les filtres
        </label>
        <input type="reset" name="reset" id="reset" hidden />
      </div>
      <div className="mt-4">
        <span
          className="flex items-center justify-between cursor-pointer"
          onClick={() =>
            dispatch({ props: { rotate90: !state.props.rotate90 } })
          }
        >
          Spécialités{" "}
          <img
            src={arrow}
            alt=""
            className={`w-2 transition ${
              state.props.rotate90 ? "-rotate-90" : ""
            }`}
          />
        </span>
        <div
          className={`${
            state.props.rotate90 ? "h-0" : "h-auto"
          } transition overflow-hidden`}
        >
          {specialities.map((speciality) => (
            <Filter
              rotate={state.props.rotate90}
              info={speciality}
              state={state}
              dispatch={dispatch}
              key={speciality.label}
            />
          ))}
        </div>
      </div>
    </form>
  );
}
