import { cardProps } from "../utils/types";

export default function Card({ user }: cardProps) {
  return (
    <article className="mx-auto">
      <div className="flex items-center w-full">
        <div>
          <p className="w-fit border border-solid border-slate-500 bg-green-300 p-1 rounded text-xs mb-4">
            {user.tag}
          </p>
          <h2 className="text-xl">
            {user.firstName} {user.lastName}
          </h2>
          <p>{user.description}</p>
        </div>
        <div>
          <img src={user.avatar} alt="" className="!w-52 rounded-full" />
        </div>
      </div>
      <footer>
        <button className="w-24 hover:bg-primary">Voir plus</button>
      </footer>
    </article>
  );
}
