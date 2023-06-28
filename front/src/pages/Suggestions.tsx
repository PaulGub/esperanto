import CardSuggestion from "../components/CardSuggestion";

export default function Suggestions() {
  return (
    <div className="bg-white p-2">
      <div>
        <h2 className="mb-4">Profil suggérés</h2>
        <CardSuggestion />
      </div>
    </div>
  );
}
