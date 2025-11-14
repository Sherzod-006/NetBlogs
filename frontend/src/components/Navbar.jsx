import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faUser,
  faBars,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, axios } from "react";
import DropDown from "./DropDown";
import DropDownLang from "./DropDownLang";
import Notification from "./Notification";

const Navbar = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenB, setIsOpenB] = useState(false);
  const id = localStorage.getItem("id");

  const NavConfig = [
    { name: "Home", path: "/" },
    { name: "Add", path: "/add" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const LanguageConfig = [
    { name: "Uzbek", value: "uz" },
    { name: "Russian", value: "ru" },
    { name: "English", value: "en" },
  ];

  const handleNavigation = () => {
    navigate("/login");
  };

  const handleDeleteToken = () => {
    localStorage.removeItem("id");
    navigate("/");
  };

  const handleBar = () => {
    setIsOpen(!isOpen);
  };
  const handleBarB = () => {
    setIsOpenB(!isOpenB);
  };

  const handleBarClose = () => {
    setIsOpen(false);
  };

  const handleBarCloseB = () => {
    setIsOpenB(false);
  };

  useEffect(() => {
    const getProfile = async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get("/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(res.data);
    };
    getProfile();
  });
  return (
    <header className="sticky top-1 md:top-3 dark:bg-gray-700 bg-white text-black dark:text-white p-2 md:p-3 m-1 md:m-3 rounded-lg shadow-lg flex justify-between items-center z-50">
      <Notification message={id ? `Welcome ${id}` : `Welcome to NetNews!`} />
      <Link to="/" className="text-3xl font-bold">
        NetBlogs
      </Link>
      <nav className="hidden md:block">
        <ul className="flex space-x-4">
          {NavConfig.map((item) => (
            <li key={item.name}>
              <Link to={item.path} className="hover:underline">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <section className="flex space-x-4 items-center">
        <button onClick={handleBarB} className="cursor-pointer">
          {" "}
          <FontAwesomeIcon icon={faGlobe} />
        </button>
        <DropDownLang
          isOpen={isOpenB}
          handleBarClose={handleBarCloseB}
          Body={LanguageConfig}
        />
        <button
          onClick={handleNavigation}
          className={`${
            id ? "hidden" : "block"
          } bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 cursor-pointer shadow-lg`}
        >
          {" "}
          <FontAwesomeIcon icon={faUser} /> Login
        </button>
        <button
          onClick={handleDeleteToken}
          className={` ${
            id ? "" : "hidden"
          } bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 cursor-pointer shadow-lg`}
        >
          {" "}
          <FontAwesomeIcon icon={faRightFromBracket} /> Logout
        </button>
        <button onClick={handleBar} className="md:hidden cursor-pointer">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <DropDown
          isOpen={isOpen}
          handleBarClose={handleBarClose}
          Body={NavConfig}
        />
      </section>
    </header>
  );
};

export default Navbar;
