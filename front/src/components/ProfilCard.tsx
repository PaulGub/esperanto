import erick from "../assets/erick-fuentes.jpg";
import background from "../assets/background.jpg";
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { USER } from "./gql/GetUserById";
import { useState, useEffect } from 'react';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});
const userId = '1';

export default function ProfilCard() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    client
    .query({
      query: USER,
      variables: {
        userId: userId,
      },
    })
    .then((result) => {
      console.log(result.data.userById)
      setUser(result.data.userById);
    })
    .catch((error) => {
      console.error(error);
    });
  }, []);
  return (
    <div className="flex flex-col items-center justify-start bg-white border border-solid">
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
          <h2>{user?.firstname ?? ''} {user?.lastname ?? ''}</h2>
          <p className="text-xs text-slate-500">{user?.professionalStatus ?? ''}</p>
          <a href="#" className="text-xs text-primary hover:underline">
            Modifier
          </a>
        </div>
        <div className="flex flex-col items-start justify-center w-full mt-2">
          <h3 className="text-sm pb-1">Mes tags</h3>
          <span className="w-1/4 bg-primary-300 rounded h-1 mb-2"></span>
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
          <h3 className="text-sm pb-1">Description</h3>
          <span className="w-1/4 bg-primary-300 rounded h-1 mb-2"></span>
          <p className="text-xxs line-clamp-5 w-full">
            {user?.experiences}
          </p>
        </div>
      </div>
      <a href="#" className="text-xs text-primary my-2 hover:underline m-2 mb-2">
        Voir le profil complet
      </a>
    </div>
  );
}
