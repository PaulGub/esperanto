import { needProps } from "../utils/types/data";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

export default function Need({ need }: { need: needProps }) {
  return (
    <div className="p-4 bg-base rounded-lg">
      {/* <h2 className="uppercase">{need.title} - by [NOM DU BOUGRE]</h2>
      <span className="block w-full h-2 bg-primary-100 rounded-full my-2"></span>
      <textarea
        className="bg-base"
        rows={5}
        value={need.description}
        readOnly
      >
        {need.description}
      </textarea> */}
    </div>
  );
}
