import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx"
import Add from "../pages/Add.jsx"
import Edit from "../pages/Edit.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add",
    element: <Add />,
  },
  {
    path: "/edit/:id",
    element: <Edit />,
  }
]);

export default router;
