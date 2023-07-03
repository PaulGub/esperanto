import filters from "../assets/filters.svg";
import trash from "../assets/trash.svg";
import arrow from "../assets/arrow.svg";
import { useEffect, useReducer, useState } from "react";
import Filter from "../components/Filter";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { TAGS } from "../components/gql/GetAllTags";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

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
  const [tags, setTags] = useState<{ name: string; id: number }[]>([]);
  useEffect(() => {
    client
      .query({
        query: TAGS,
      })
      .then((result) => {
        console.log(result.data.tags);
        setTags(result.data.tags);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
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
          {tags.map((tag) => (
            <Filter
              rotate={state.props.rotate90}
              info={tag}
              state={state}
              dispatch={dispatch}
              key={tag.name}
            />
          ))}
        </div>
      </div>
    </form>
  );
}
