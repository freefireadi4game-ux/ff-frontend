import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);
