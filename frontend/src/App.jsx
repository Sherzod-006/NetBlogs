//IMPORTING RRD
import { RouterProvider } from "react-router-dom";

//IMPORTING ROUTES
import { routes } from "./routes/MainRoot.jsx";

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
