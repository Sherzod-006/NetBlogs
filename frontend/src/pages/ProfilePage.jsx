import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import axios from "axios";
import UserName from "../components/UserInfo";
import Notification from "../components/Notification";

const ProfilePage = () => {
  const api = import.meta.env.VITE_API_URL;
  const [user, setUser] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [id, setId] = useState(localStorage.getItem("id"));
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    gender: "",
    age: 0,
    country: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    document.title = token ? `profile | ${user.username}` : `Error`;
  }, [user, token]);

  const handleUserFetched = (userData) => {
    setUser(userData);
  };
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        !formData.username ||
        !formData.email ||
        !formData.age ||
        !formData.gender ||
        !formData.country
      ) {
        setMessage("All fields are required.");
        return;
      }
      const response = await axios.put(`${api}/api/users/${id}`, formData);
      setMessage(response.data.message);
      setFormData({
        username: "",
        email: "",
        gender: "",
        age: "",
        country: "",
      });
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <main className="bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col dark:text-white">
      <Notification message={message} />
      <button
        onClick={() => {
          navigate("/");
        }}
        className="absolute top-8 left-8 border-2 rounded-full p-2 hover:opacity-50"
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <UserName token={token} id={id} onUserFetched={handleUserFetched} />
      <section className="flex mx-auto items-center flex-col">
        <img
          className="rounded-full w-35 md:w-45 mt-5 border-6 border-gray-400"
          src={user.image}
          alt="profile image"
        />
        <label className="relative left-25 bottom-5 cursor-pointer">
          <FontAwesomeIcon icon={faPenToSquare} />
          <input className="hidden" type="file" />
        </label>
        <h1 className="text-3xl font-bold">
          Hello, <span className="text-orange-500">{user.username}</span>
        </h1>
      </section>
      <main className="mt-10 flex flex-col md:flex-row md:justify-around">
        <section className="mx-auto p-5 pt-0 border-2 border-gray-700 w-5/6 md:w-2/6 rounded-3xl">
          <h1 className="text-center text-4xl font-semibold my-2">User Info</h1>
          <main className="space-y-5">
            <h1 className="md:text-xl flex flex-col md:flex-row">
              UserName:
              <span className="text-orange-500">Sherzodjon</span>
              <input className="hidden" type="text" placeholder="Email" />
            </h1>
            <h1 className="md:text-xl flex flex-col md:flex-row">
              Email:
              <span className="text-orange-500">
                sherzodsobirovv1@gmail.com
              </span>
              <input className="hidden" type="text" placeholder="Email" />
            </h1>
            <h1 className="md:text-xl flex flex-col md:flex-row">
              Gender: <span className="text-orange-500">Male</span>
              <div className="hidden">
                <input type="radio" name="gender" /> Male
                <input type="radio" name="gender" /> Female
              </div>
            </h1>
            <h1 className="md:text-xl flex flex-col md:flex-row">
              Age: <span className="text-orange-500">19</span>
            </h1>
            <h1 className="md:text-xl flex flex-col md:flex-row">
              Country: <span className="text-orange-500">Uzbekistan</span>
            </h1>
            <button className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 cursor-pointer shadow-lg mr-5">
              Update Profile
            </button>
            <button
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("id");
                setToken("");
                setId("");
                navigate("/");
              }}
              className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 cursor-pointer shadow-lg"
            >
              Logout
            </button>
          </main>
        </section>
        <section className="mx-auto p-5 pt-0 border-2 border-gray-700 w-5/6 md:w-2/6 rounded-3xl">
          <h1 className="text-center text-4xl font-semibold my-2">
            Change Info
          </h1>
          <form onSubmit={handleSubmit} className="space-y-5">
            <label className="md:text-xl flex flex-col md:flex-row">
              <input
                value={formData.username}
                placeholder="UserName"
                type="text"
                name="username"
                onChange={handleInputChange}
              />
            </label>
            <label className="md:text-xl flex flex-col md:flex-row">
              <input
                name="email"
                value={formData.email}
                placeholder="Email"
                type="email"
                onChange={handleInputChange}
              />
            </label>
            <label className="md:text-xl flex">
              Male
              <input
                onChange={handleInputChange}
                value="male"
                type="radio"
                name="gender"
                className="mr-3"
              />
              Female
              <input
                onChange={handleInputChange}
                value="female"
                type="radio"
                name="gender"
              />
            </label>
            <label className="md:text-xl flex flex-col md:flex-row">
              <input
                onChange={handleInputChange}
                value={formData.age}
                type="number"
                name="age"
                placeholder="Age"
              />
            </label>
            <label className="md:text-xl flex flex-col md:flex-row">
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
              >
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Russia">Russia</option>
                <option value="United States">United States</option>
              </select>
            </label>
            <button
              type="submit"
              className="bg-orange-500 text-whit px-3 py-1 rounded hover:bg-orange-600 cursor-pointer shadow-lg"
            >
              Save
            </button>
          </form>
        </section>
      </main>
    </main>
  );
};

export default ProfilePage;
