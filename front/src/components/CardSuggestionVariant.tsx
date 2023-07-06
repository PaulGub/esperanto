import { globalUserProps } from "../utils/types";

export default function CardSuggestionVariant({ user }: { user: globalUserProps }) {
  const userProfessionalStatus = user?.healthActor?.professional?.name || user?.professionalStatus || "";
  return (
    <div className="flex items-center bg-slate-50 mb-2 rounded-lg bg-white flex-col pb-2">
      <div className="w-full">
        <img src={user?.profileBanner ?? "/public/background.jpg"} alt="" className="h-[40px] w-full rounded-t-lg object-cover" />
      </div>
      <div className="flex flex-col items-center justify-between w-full px-4 -mt-6">
        <div className="flex justify-center w-full">
          <div className="flex flex-col items-center justify-center">
            <img
              src={user?.profilePicture ?? "/public/profile.jpg"}
              alt=""
              className="rounded-full w-10 h-10 border-2 border-solid border-white"
            />
            <div className="ml-2 flex flex-col items-center">
              <p className="text-[14px] line-clamp-1">
                {user.firstname} {user.lastname}
              </p>
              <p className="text-xxs text-slate-500 line-clamp-1">
                {userProfessionalStatus}
              </p>
              <a
                href={`/user/${user.id}`}
                className="text-[12px] text-primary hover:underline"
              >
                Voir le profil
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
