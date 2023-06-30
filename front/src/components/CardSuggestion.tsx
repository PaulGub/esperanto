import { globalUserProps } from "../utils/types";

export default function CardSuggestion({ user }: { user: globalUserProps }) {
  return (
    <div className="flex items-center bg-base p-2 mb-2 rounded-lg">
      <img
        src={user?.profilePicture}
        alt=""
        className="w-10 h-10 rounded-full border-2 border-white border-solid "
      />
      <div className="ml-2 flex flex-col items-start">
        <p className="text-[14px] line-clamp-1">
          {user.firstname} {user.lastname}
        </p>
        <p className="text-xxs text-slate-500 line-clamp-1">
          {user.professionalStatus}
        </p>
        <a
          href={`/user/${user.id}`}
          className="text-[12px] text-primary hover:underline"
        >
          Voir le profil
        </a>
      </div>
    </div>
  );
}
