import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const api = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${api}/api/auth/login`, formData);
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.user.id);
        setFormData({ email: "", password: "" });
        navigate("/");
      }
    } catch (error) {
      setMessage("Invalid email or password.");
      console.log(error);
    }
  };

  return (
    <main className="bg-gray-100 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <section className="bg-white dark:bg-gray-700 shadow-2xl rounded-lg p-8 w-full max-w-xs md:max-w-md flex flex-col justify-center text-black dark:text-white">
        <h1 className="font-bold text-3xl">Login</h1>
        <form onSubmit={handleSubmit} className="w-full flex flex-col mt-4">
          <label htmlFor="email" className="font-semibold mb-2">
            Email
          </label>
          <input
            value={formData.email}
            onChange={handleChange}
            type="email"
            id="email"
            className="outline-none border border-gray-300 dark:border-gray-600 rounded-lg p-2 mb-4"
          />

          <label htmlFor="password" className="font-semibold mb-2">
            Password
          </label>
          <input
            value={formData.password}
            onChange={handleChange}
            type="password"
            id="password"
            className="outline-none border border-gray-300 dark:border-gray-600 rounded-lg p-2 mb-4"
          />
          <p className="text-red-500">{message}</p>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Register
          </a>
        </p>
      </section>
    </main>
  );
};

export default LoginPage;
