import filters from "../assets/filters.svg";
import trash from "../assets/trash.svg";
import arrow from "../assets/arrow.svg";
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useReducer,
  useState,
} from "react";
import Filter from "../components/Filter";
import { TAGS } from "../components/gql/GetAllTags";
import { ApolloClientCall } from "../components/apolloClient/ApolloClient";
import Loader from "../components/Loader";

export default function Sidebar({
  setFilters,
  tagsCount,
}: {
  setFilters: Dispatch<SetStateAction<string[]>>;
  tagsCount: { [index: string]: number };
}) {
  const initialState = {
    props: {
      rotate90: false,
    },
  };
  const [state, dispatch] = useReducer(
    (prev: any, next: any) => ({ ...prev, ...next }),
    initialState
  );

  const [tags, setTags] = useState<{ name: string; id: number }[]>([]);
  useEffect(() => {
    ApolloClientCall.query({
      query: TAGS,
    })
      .then((result) => {
        setTags(result.data.tags);
        result.data.tags.forEach((tag: { id: number; name: string }) =>
          dispatch({ [tag.name]: false })
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  useEffect(() => {
    const selectedFilters = Object.keys(state).map((key, index) =>
      key !== "props" ? (Object.values(state)[index] === true ? key : "") : ""
    );
    setFilters(selectedFilters.filter((item) => item !== ""));
  }, [state]);
  return (
    <form className="p-4 w-60 h-full bg-white fixed -mt-3 overflow-scroll">
      <h2 className="flex items-center mb-4">
        <img src={filters} alt="" className="!w-4 mr-4" />
        Filtres
      </h2>
      <div className=" border-y border-y-solid border-y-primary">
        <label htmlFor="reset" className="flex items-center cursor-pointer">
          <img src={trash} alt="" className="!w-4 mr-4" />
          Effacer les filtres
        </label>
        <input
          type="reset"
          name="reset"
          id="reset"
          hidden
          onClick={() => tags.map((tag) => dispatch({ [tag.name]: false }))}
        />
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
          {tagsCount ? (
            Object.keys(tagsCount).map((tag, index) => (
              <Filter
                rotate={state.props.rotate90}
                info={{
                  id: tags[index].id,
                  name: tag,
                  count: Object.values(tagsCount)[index],
                }}
                state={state}
                dispatch={dispatch}
                key={tag}
              />
            ))
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </form>
  );
}
