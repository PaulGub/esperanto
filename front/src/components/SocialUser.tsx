import { useEffect, useState } from "react";
import { needProps } from "../utils/types/data";
import CardSuggestionVariant from "../components/CardSuggestionVariant";

export default function SocialUser({ tab, userId }: { tab: string, userId: number }) {
  const [needSuggestions, setNeedSuggestions] = useState<needProps[]>([]);
  
  return (
    <div className="flex flex-col items-start justify-center w-full">
        {/* <h3 className="text-sm pb-1">
            {tab === 'abonnes' ? "Abonnés" : "Abonnements"}
        </h3> */}
        <div className="suggestions grid grid-cols-4 gap-2 mt-2">
          {needSuggestions?.map((user) => (
            <CardSuggestionVariant user={user} key={user.id} />
          ))}
        </div>
      </div>
  );
}
