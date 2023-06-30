import { ApolloClient, InMemoryCache } from "@apollo/client";
import { USER } from "./gql/GetUserById";
import { useState, useEffect } from "react";
import { userProps } from "../utils/types";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

export default function ProfilUser({ userId }: { userId: number }) {
  const [user, setUser] = useState<userProps>();
  useEffect(() => {
    client
      .query({
        query: USER,
        variables: {
          userId: userId,
        },
      })
      .then((result) => {
        console.log(result.data.userById);
        setUser(result.data.userById);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="flex flex-col items-center justify-start bg-white border border-solid rounded-lg col-span-3">
      <div className="w-full">
        <img src={user?.profileBanner} alt="" className="h-[200px] w-full rounded-t-lg" />
      </div>
      <div className="flex flex-col items-center justify-start w-full px-4">
        <div className="flex flex-col items-center justify-center">
          <img
            src={user?.profilePicture}
            alt=""
            className="rounded-full w-30 h-30 border-4 border-solid border-white -mt-12"
          />
          <h2>
            {user?.firstname ?? ""} {user?.lastname ?? ""}
          </h2>
          <p className="text-xs text-slate-500">
            {user?.professionalStatus ?? ""}
          </p>
          <div className="mt-1">
            <a className="text-xs bg-primary pt-1 pb-1 pr-2 pl-2 hover:bg-white hover:text-primary border border-primary rounded-lg text-white" href={`tel:${user?.email}`}>Contacter</a>       
            <a className="text-xs bg-primary pt-1 pb-1 pr-2 pl-2 hover:bg-white hover:text-primary border border-primary ml-1 rounded-lg text-white" href={`tel:${user?.phoneNumber}`}>Appeler</a>                 
          </div>
        </div>
        <div className="flex flex-col items-start justify-center w-full mt-2">
          <h3 className="text-sm pb-1">Tags</h3>
          <span className="w-[50px] bg-primary-300 rounded h-1"></span>
          <div className="text-xxs flex flex-wrap my-2">
            {user?.tags?.map((tag) => (
              <span
                key={tag.id}
                className="bg-primary-100 rounded py-0.5 px-1 m-0.5"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start justify-center w-full">
          <h3 className="text-sm pb-1">Statut</h3>
          <span className="w-[50px] bg-primary-300 rounded h-1 mb-2"></span>
          <p className="text-xxs line-clamp-5 w-full">{user?.description}</p>
        </div>
        <div className="flex flex-col items-start justify-center w-full mt-2">
          <h3 className="text-sm pb-1">Description</h3>
          <span className="w-[50px] bg-primary-300 rounded h-1 mb-2"></span>
          <p className="text-xxs line-clamp-5 w-full">{user?.description}</p>
        </div>
        <div className="flex flex-col items-start justify-center w-full mt-2">
          <h3 className="text-sm pb-1">Expérience</h3>
          <span className="w-[50px] bg-primary-300 rounded h-1 mb-2"></span>
          <p className="text-xxs line-clamp-5 w-full">{user?.experiences}</p>
        </div>
      </div>
    </div>
  );
}
