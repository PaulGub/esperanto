import { Outlet } from "react-router-dom";
import Nav from "./layout/Nav";

function App() {
  return (
    <main className=" bg-base relative">
      <Nav />
      <Outlet />
    </main>
  );
}

export default App;
