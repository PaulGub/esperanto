import CardSuggestion from "./CardSuggestion";
import users from "../utils/data/users";

export default function Suggestions() {
  return (
    <div className="bg-white p-2">
      <h2 className="mb-1">Profil suggérés</h2>
      <div className="max-h-96 overflow-auto small-scrollbar">
        {users.map((user) => (
          <CardSuggestion user={user} key={user.firstName + user.lastName} />
        ))}
      </div>
    </div>
  );
}
