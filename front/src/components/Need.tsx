import { needProps } from "../utils/types/data";

export default function Need({ need }: { need: needProps }) {
  return (
    <div className="p-2 my-2 bg-base rounded-lg">
      <h2 className="uppercase">{need.title} - by [NOM DU BOUGRE]</h2>
      <span className="block w-full h-2 bg-primary-100 rounded-full my-2"></span>
      <textarea
        className="bg-base"
        rows={5}
        value={need.description}
        readOnly
      >
        {need.description}
      </textarea>
    </div>
  );
}
