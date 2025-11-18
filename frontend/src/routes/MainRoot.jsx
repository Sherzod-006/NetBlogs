//IMPORTING RRD
import { createBrowserRouter } from "react-router-dom";
//IMPORTING LAYOUTS
import RootLayout from "../layouts/RootLayout";
//IMPORTING PAGES
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ProfilePage from "../pages/ProfilePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/profile", element: <ProfilePage /> },
    ],
  },
  { path: "/register", element: <RegisterPage /> },
  { path: "/login", element: <LoginPage /> },
]);
