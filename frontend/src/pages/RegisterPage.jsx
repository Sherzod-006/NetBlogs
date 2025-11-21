import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Notification from "../components/Notification";

const RegisterPage = () => {
  const navigate = useNavigate();
  const api = import.meta.env.VITE_API_URL;

  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!formData.username || !formData.email || !formData.password) {
        setMessage("All fields are required.");
        return;
      }
      const response = await axios.post(`${api}/api/auth/register`, formData);
      setMessage(response.data.message);
      setFormData({ username: "", email: "", password: "" });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <main className="bg-gray-100 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <section className="bg-white dark:bg-gray-700 shadow-2xl rounded-lg p-8 w-full max-w-xs md:max-w-md flex flex-col justify-center text-black dark:text-white">
        <Notification message={message} />
        <h1 className="font-bold text-3xl">Register</h1>
        <form onSubmit={handleSubmit} className="w-full flex flex-col mt-4">
          <label htmlFor="username" className="font-semibold mb-2">
            Username
          </label>
          <input
            type="text"
            placeholder="Username"
            id="username"
            className="outline-none border border-gray-300 dark:border-gray-600 rounded-lg p-2 mb-4"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          <label htmlFor="email" className="font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            className="outline-none border border-gray-300 dark:border-gray-600 rounded-lg p-2 mb-4"
            value={formData.email}
            onChange={handleInputChange}
          />
          <label htmlFor="password" className="font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            className="outline-none border border-gray-300 dark:border-gray-600 rounded-lg p-2 mb-4"
            value={formData.password}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </section>
    </main>
  );
};

export default RegisterPage;
