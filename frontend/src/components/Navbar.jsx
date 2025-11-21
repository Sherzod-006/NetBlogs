import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faUser,
  faBars,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import DropDown from "./DropDown";
import DropDownLang from "./DropDownLang";
import Notification from "./Notification";
import UserName from "./UserInfo";

function Navbar() {
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
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [id, setId] = useState(localStorage.getItem("id"));
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenB, setIsOpenB] = useState(false);

  const handleUserFetched = (userData) => {
    setUser(userData);
  };

  useEffect(() => {
    document.title = token ? `NEtBlogss | ${user.username}` : `NEtBlogs`;
  }, [user, token]);

  return (
    <header className="sticky top-1 md:top-3 dark:bg-gray-700 bg-white text-black dark:text-white p-2 md:p-3 m-1 md:m-3 rounded-lg shadow-lg flex justify-between items-center z-50">
      <UserName token={token} id={id} onUserFetched={handleUserFetched} />
      <Notification
        message={token ? `Welcome ${user.username}` : `Welcome to NetNews!`}
      />
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
        <button
          onClick={() => {
            setIsOpenB(!isOpenB);
          }}
          className="cursor-pointer"
        >
          {" "}
          <FontAwesomeIcon icon={faGlobe} />
        </button>
        <DropDownLang
          isOpen={isOpenB}
          handleBarClose={() => {
            setIsOpenB(false);
          }}
          Body={LanguageConfig}
        />
        <button
          onClick={() => {
            navigate("/login");
          }}
          className={`${
            token ? "hidden!" : "block"
          } hidden md:block bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 cursor-pointer shadow-lg`}
        >
          {" "}
          <FontAwesomeIcon icon={faUser} /> Login
        </button>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("id");
            setToken("");
            setId("");
            navigate("/");
          }}
          className={` ${
            token ? "" : "hidden!"
          } hidden md:block bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 cursor-pointer shadow-lg`}
        >
          {" "}
          <FontAwesomeIcon icon={faRightFromBracket} /> Logout
        </button>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="md:hidden cursor-pointer"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <DropDown
          isOpen={isOpen}
          handleBarClose={() => {
            setIsOpen(false);
          }}
          Body={NavConfig}
          token={token}
          setToken={setToken}
        />
        <Link to="/profile">
          <img
            src={user.image}
            alt="image"
            width={32}
            className={`${
              token ? "" : "hidden!"
            } rounded-full border-2 dark:border-0`}
          />
        </Link>
      </section>
    </header>
  );
}

export default Navbar;
