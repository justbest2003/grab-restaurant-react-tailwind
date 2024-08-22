import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import router from "./Router/Router.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import SuspenseContent from "./Components/SuspenseContent.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<SuspenseContent />}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </Suspense>
  </React.StrictMode>
);
