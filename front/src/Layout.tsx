import { Outlet } from "react-router-dom";
import Nav from "./layout/Nav";
import Footer from "./layout/Footer"

function App() {
  return (
    <main className=" bg-base relative">
      <Nav />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
