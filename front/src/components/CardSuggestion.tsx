import { userProps } from "../utils/types";

export default function CardSuggestion({ user }: { user: userProps }) {
  return (
    <div className="flex items-center bg-base p-2 mb-2">
      <img
        src={user.avatar}
        alt=""
        className="w-10 h-10 rounded-full border-2 border-white border-solid "
      />
      <div className="ml-2">
        <p className="text-[14px] line-clamp-1">
          {user.firstName} {user.lastName}
        </p>
        <p className="text-xxs text-slate-500 line-clamp-1">
          {user.speciality}
        </p>
        <a href="#" className="text-[12px] text-primary hover:underline">
          Voir le profil
        </a>
      </div>
    </div>
  );
}
