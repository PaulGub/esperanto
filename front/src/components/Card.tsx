import { Link } from "react-router-dom";
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
                  className="w-full h-fit bg-primary-100 py-0.5 px-1 rounded text-xxs line-clamp-1"
                  key={tag.name + index + tag.id}
                >
                  {tag.name}
                </span>
              ) : (
                ""
              );
            })}
          </div>

          <h2 className="text-lg mt-2">
            {user.firstname} {user.lastname}
          </h2>
          <p className="text-sm">{user.description}</p>
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
        <Link
          to={`/user/${user.id}`}
          className="p-1 hover:bg-primary hover:text-white border-none"
        >
          Voir plus
        </Link>
      </footer>
    </article>
  );
}
