//IMPORTING RRD
import { Outlet } from "react-router-dom";

//IMPORTING COMPONENTS
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <main className="dark:bg-gray-900 bg-gray-100 min-h-900 flex flex-col">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </main>
  );
};

export default RootLayout;
