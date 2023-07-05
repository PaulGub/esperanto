import { NavLink } from "react-router-dom";

export default function AddButton() {
  return (
    <button className="fixed bottom-10 right-10 w-12 h-12 bg-primary rounded-full text-3xl flex items-center justify-center">
      <NavLink to="/feed/actualites#add-need" className="text-white text-3xl h-full w-full flex items-center justify-center -mt-1">
        +
      </NavLink>
    </button>
  );
}
