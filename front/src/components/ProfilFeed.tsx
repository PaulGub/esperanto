import { ApolloClient, InMemoryCache } from "@apollo/client";
import { useEffect, useState } from "react";
import { needProps } from "../utils/types/data";
import Need from "./Need";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

export default function ProfilFeed() {
  const [needs, setNeeds] = useState<needProps[]>([
    {
      id: 1,
      title: "Need 1 - title",
      type: "Need 1 - type",
      description:
        "a description for need 1 which is very long and boring with a lot of text and stuff like that like lorem ipsum but not lorem ipsum because it is too mainstream so let replace that with something else like a lot of text and stuff like that like lorem ipsum but not lorem ipsum because it is too mainstream so let replace that with something else like a lot of text and stuff like that like lorem ipsum but not lorem ipsum because it is too mainstream so let replace that with something else like a lot of text and stuff like that like lorem ipsum but not lorem ipsum because it is too mainstream so let replace that with something else like a lot of text and stuff like that like lorem ipsum but not lorem ipsum because it is too mainstream so let replace that with something else like a lot of text and stuff like that like lorem ipsum but not lorem ipsum because it is too mainstream so let replace that with something else like a lot of text and stuff like that like lorem ipsum but not lorem ipsum because it is too mainstream so let replace that with something else like",
      infrastructure:
        "i don't know what is infrastructure thank you GitHub Copilot ahah it is too funny to write stuff like that and see what it does",
    },
    {
      id: 2,
      title: "Need 2 - title",
      type: "Need 2 - type",
      description:
        "a description for need 2 which is very long and boring with a lot of text and stuff like that like lorem ipsum but not lorem ipsum because it is too mainstream so let replace that with something else like a lot of text and stuff like that like lorem ipsum but not lorem ipsum because it is too mainstream so let replace that with something else like a lot of text and stuff like that like lorem ipsum but not lorem ipsum because it is too mainstream so let replace that with something else like a lot of text and stuff like that like lorem ipsum but not lorem ipsum because it is too mainstream so let replace that with something else like a lot of text and stuff like that like lorem ipsum but not lorem ipsum because it is too mainstream so let replace that with something else like a lot of text and stuff like that like lorem ipsum but not lorem ipsum because it is too mainstream so let replace that with something else like a lot of text and stuff like that like lorem ipsum but not lorem ipsum because it is too mainstream so let replace that with something else like",
      infrastructure:
        "i don't know what is infrastructure thank you GitHub Copilot ahah it is too funny to write stuff like that and see what it does",
    },
    {
      id: 3,
      title: "Need 3 - title",
      type: "Need 3 - type",
      description:
        "a description for need 3 which is very long and boring with a lot of text and stuff like that like lorem ipsum but not lorem ipsum because it is too mainstream so let replace that with something else like a lot of text and stuff like that like lorem ipsum but not lorem ipsum because it is too mainstream so let replace that with something else like a lot of text and stuff like that like lorem ipsum but not lorem ipsum because it is too mainstream so let replace that with something else like a lot of text and stuff like that like lorem ipsum but not lorem ipsum because it is too mainstream so let replace that with something else like a lot of text and stuff like that like lorem ipsum but not lorem ipsum because it is too mainstream so let replace that with something else like a lot of text and stuff like that like lorem ipsum but not lorem ipsum because it is too mainstream so let replace that with something else like a lot of text and stuff like that like lorem ipsum but not lorem ipsum because it is too mainstream so let replace that with something else like",
      infrastructure:
        "i don't know what is infrastructure thank you GitHub Copilot ahah it is too funny to write stuff like that and see what it does",
    },
  ]);
  // useEffect(() => {
  //   client
  //     .query({
  //       query: "",
  //       variables: {
  //         userId: "",
  //       },
  //     })
  //     .then((result) => {
  //       console.log(result.data.userById);
  //       setNeeds(result.data.userById);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);
  return (
    <>
      {needs.length !== 0 ? (
        <div className="col-span-3 bg-white p-4 rounded-lg">
          {needs.map((need) => (
            <Need need={need} key={need.id} />
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
