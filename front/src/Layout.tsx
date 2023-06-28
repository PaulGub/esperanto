import { Outlet } from "react-router-dom";
import Nav from "./layout/Nav";
import Sidebar from "./layout/Sidebar";

function App() {
  return (
    <main className="container grid grid-cols-3 no-scrollbar">
      <Nav />
      <Sidebar />
      <Outlet />
    </main>
  );
}

export default App;
