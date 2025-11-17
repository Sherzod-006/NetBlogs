import { Link, useNavigate } from "react-router-dom";

const DropDown = ({ isOpen, handleBarClose, Body, token, setToken }) => {
  const navigate = useNavigate();

  return (
    <section
      onMouseLeave={handleBarClose}
      className={`fixed top-15 right-1 md:top-20 bg-white shadow-lg dark:bg-gray-700 p-2 rounded-lg ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <ul className="flex flex-col space-y-3">
        {Body.map((item) => (
          <li key={item.name}>
            <Link to={item.path} className="hover:underline">
              {item.name}
            </Link>
          </li>
        ))}
        <li>
          <button
            onClick={() => {
              navigate("/login");
            }}
            className={`${
              token ? "hidden" : "block"
            } bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 cursor-pointer shadow-lg`}
          >
            Login
          </button>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              setToken("");
              navigate("/");
            }}
            className={` ${
              token ? "" : "hidden"
            } bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 cursor-pointer shadow-lg`}
          >
            Logout
          </button>
        </li>
      </ul>
    </section>
  );
};

export default DropDown;
