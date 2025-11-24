import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import axios from "axios";
import UserName from "../components/UserInfo";
import Notification from "../components/Notification";
import Loading from "../components/Loading";

const ProfilePage = () => {
  const api = import.meta.env.VITE_API_URL;
  const [user, setUser] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
    if (!user) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
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
      setIsUpdate(false);
    } catch (error) {
      setMessage(error.message);
    }
  };
  const handleChange = async (e) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    formData.append("userId", user.id);
    try {
      setIsLoading(true);
      const res = await axios.post(`${api}/api/image/upload/${id}`, formData);
      console.log(res.data);
      setMessage("Profile Image Updated Successfully");
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) return <Loading />;

  return (
    <main className="bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col dark:text-white">
      <Notification message={message} />
      <button
        onClick={() => {
          navigate("/");
        }}
        className="absolute top-8 left-8 border-2 rounded-full md:p-2 p-0.5 hover:opacity-50"
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <UserName token={token} id={id} onUserFetched={handleUserFetched} />
      <section className="flex mx-auto items-center flex-col">
        <img
          className="rounded-full object-cover w-35 h-35 md:w-40 md:h-40 mt-5 border-6 border-gray-400"
          src={user.image}
          alt="profile image"
        />
        <label className="relative left-25 bottom-5 cursor-pointer">
          <FontAwesomeIcon icon={faPenToSquare} />
          <input onChange={handleChange} className="hidden" type="file" />
        </label>
        <h1 className="text-3xl font-bold">
          Hello, <span className="text-orange-500">{user.username}</span>
        </h1>
      </section>
      <main className="mt-7 flex flex-col md:flex-row md:justify-around">
        <section
          className={`${
            !isUpdate
              ? "opacity-100 md:scale-105"
              : "hidden md:block md:opacity-15 cursor-not-allowed"
          } mx-auto p-5 pt-0 border-2 border-gray-700 w-5/6 md:w-2/6 rounded-3xl`}
        >
          <h1 className="text-center text-4xl font-semibold my-2">User Info</h1>
          <main className="space-y-5">
            <h1 className="md:text-xl flex flex-col md:flex-row">
              UserName:
              <span className="md:ml-2 text-orange-500">{user.username}</span>
            </h1>
            <h1 className="md:text-xl flex flex-col md:flex-row">
              Email:
              <span className="text-orange-500 md:ml-2">{user.email}</span>
            </h1>
            <h1 className="md:text-xl flex flex-col md:flex-row">
              Gender:{" "}
              <span className="text-orange-500 md:ml-2">{user.gender}</span>
            </h1>
            <h1 className="md:text-xl flex flex-col md:flex-row">
              Age: <span className="text-orange-500 md:ml-2">{user.age}</span>
            </h1>
            <h1 className="md:text-xl flex flex-col md:flex-row">
              Country:{" "}
              <span className="text-orange-500 md:ml-2">{user.country}</span>
            </h1>
            <button
              disabled={!isUpdate ? false : true}
              onClick={() => {
                setIsUpdate(true);
              }}
              className="disabled:cursor-not-allowed bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 cursor-pointer shadow-lg mr-5"
            >
              Update Profile
            </button>
            <button
              disabled={!isUpdate ? false : true}
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("id");
                setToken("");
                setId("");
                navigate("/");
              }}
              className="disabled:cursor-not-allowed bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 cursor-pointer shadow-lg"
            >
              Logout
            </button>
          </main>
        </section>
        <section
          className={`${
            isUpdate
              ? "opacity-100 md:scale-105"
              : "hidden md:inline-block md:opacity-15 cursor-not-allowed"
          } mx-auto p-5 pt-0 border-2 border-gray-700 w-5/6 md:w-2/6 rounded-3xl`}
        >
          <h1 className="text-center text-4xl font-semibold my-2">
            Change Info
          </h1>
          <form onSubmit={handleSubmit} className="space-y-5">
            <label className="md:text-lg flex flex-col md:flex-row">
              <input
                className="border-gray-700 border-2 rounded-3xl px-2 py-1 focus:border-gray-400  outline-none disabled:border-none disabled:cursor-not-allowed"
                disabled={isUpdate ? false : true}
                value={formData.username}
                placeholder="UserName"
                type="text"
                name="username"
                onChange={handleInputChange}
              />
            </label>
            <label className="md:text-xl flex flex-col md:flex-row">
              <input
                className="border-gray-700 border-2 rounded-3xl px-2 py-1 focus:border-gray-400  outline-none disabled:border-none disabled:cursor-not-allowed"
                disabled={isUpdate ? false : true}
                name="email"
                value={formData.email}
                placeholder="Email"
                type="email"
                onChange={handleInputChange}
              />
            </label>
            <label className="md:text-xl flex disabled:cursor-not-allowed">
              Male
              <input
                disabled={isUpdate ? false : true}
                onChange={handleInputChange}
                value="male"
                type="radio"
                name="gender"
                className="mr-3 disabled:cursor-not-allowed"
              />
              Female
              <input
                className="disabled:cursor-not-allowed"
                disabled={isUpdate ? false : true}
                onChange={handleInputChange}
                value="female"
                type="radio"
                name="gender"
              />
            </label>
            <label className="md:text-xl flex flex-col md:flex-row">
              <input
                className="disabled:cursor-not-allowed border-gray-700 border-2 rounded-3xl px-2 py-1 focus:border-gray-400  outline-none disabled:border-none"
                disabled={isUpdate ? false : true}
                onChange={handleInputChange}
                value={formData.age}
                type="number"
                name="age"
                placeholder="Age"
              />
            </label>
            <label className="md:text-xl flex flex-col md:flex-row">
              <select
                className="border-gray-700 border-2 rounded-md px-2 py-1 focus:border-gray-400  outline-none disabled:border-none focus:bg-gray-950 disabled:cursor-not-allowed"
                disabled={isUpdate ? false : true}
                name="country"
                defaultValue={"Uzbekistan"}
                value={formData.country}
                onChange={handleInputChange}
              >
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Russia">Russia</option>
                <option value="United States">United States</option>
              </select>
            </label>
            <button
              disabled={isUpdate ? false : true}
              onClick={() => {
                setIsUpdate(false);
              }}
              className="disabled:cursor-not-allowed mr-5 bg-orange-500 text-whit px-3 py-1 rounded hover:bg-orange-600 cursor-pointer shadow-lg text-white"
            >
              Cancel
            </button>
            <button
              disabled={isUpdate ? false : true}
              type="submit"
              className="disabled:cursor-not-allowed bg-orange-500 text-whit px-3 py-1 rounded hover:bg-orange-600 cursor-pointer shadow-lg text-white"
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
