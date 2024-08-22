import { createBrowserRouter } from "react-router-dom";
//import Home from "../pages/Home.jsx";
import { lazy } from "react";
const Home = lazy(() => import("../pages/Home.jsx"));
//import Add from "../pages/Add.jsx";
const Add = lazy(() => import("../pages/Add.jsx"));
//import Edit from "../pages/Edit.jsx";
const Edit = lazy(() => import("../pages/Edit.jsx"));
//import Login from "../pages/Login.jsx";
const Login = lazy(() => import("../pages/Login.jsx"));
//import Register from "../pages/Register.jsx";
const Register = lazy(() => import("../pages/Register.jsx"));
import NotAllowed from "../pages/NotAllowed.jsx";
import Layout from "../Components/Layout";
import AdminLayout from "../Components/AdminLayout";
import ModOrAdminPage from "../pages/ModOrAdminPage.jsx";
import UserPage from "../pages/UserPage.jsx";
import AdminPage from "../pages/AdminPage.jsx";
//import UserProfile from "../pages/UserProfile.jsx";
const UserProfile = lazy(() => import("../pages/UserProfile.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "add",
        element: (
          <AdminPage>
            <Add />
          </AdminPage>
        ),
      },
      {
        path: "edit/:id",
        element: (
          <ModOrAdminPage>
            <Edit />
          </ModOrAdminPage>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "userprofile",
        element: (
          <UserPage>
            <UserProfile />
          </UserPage>
        ),
      },
      {
        path: "notallowed",
        element: <NotAllowed />,
      },
    ],
  },
  {
    path: "/dashboard/",
    element: <AdminLayout />,
    children: [
      {
        path: "user",
        element: <div>Dashboard</div>,
      },
    ],
  },
]);

export default router;
