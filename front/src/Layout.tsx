import { Outlet } from "react-router-dom";
import Nav from "./layout/Nav";

function App() {
  return (
    <main className="container grid grid-cols-3 no-scrollbar">
      <Nav />
      <Outlet />
    </main>
  );
}

export default App;
