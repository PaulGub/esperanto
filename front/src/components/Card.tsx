import { cardProps } from "../utils/types";

export default function Card({ user }: cardProps) {
  return (
    <article className="mx-auto rounded-lg">
      <div className="flex items-center w-full">
        <div>
          <div className="grid grid-cols-6 grid-rows-2 gap-2 items-center mr-2">
            {user?.tags?.map((tag, index) => {
              return index < 12 ? (
                <span
                  className="w-full h-fit border border-solid border-slate-500 bg-green-300 p-0.5 rounded text-xxs line-clamp-1"
                  key={tag.name + index + tag.id}
                >
                  {tag.name}
                </span>
              ) : (
                ""
              );
            })}
          </div>

          <h2 className="text-xl mt-2">
            {user.firstname} {user.lastname}
          </h2>
          <p>{user.description}</p>
        </div>
        <div className="flex items-center justify-center !w-fit ">
          <img
            src={user.profilePicture}
            alt=""
            className="!max-w-[150px] w-[150px] rounded-full"
          />
        </div>
      </div>
      <footer>
        <button className="w-24 hover:bg-primary">Voir plus</button>
      </footer>
    </article>
  );
}
