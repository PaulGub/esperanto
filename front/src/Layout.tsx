import { Outlet } from "react-router-dom";
import Nav from "./layout/Nav";
import Footer from "./layout/Footer"

function App() {
  return (
    <main className="mt-16 pt-12 bg-base relative">
      <Nav />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
