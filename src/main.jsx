import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Contacts from "./pages/Contacts/Contacts.jsx";

const router = createBrowserRouter([
  {
    path: "/cosmetics_shop_vite/",
    element: <App />,
    children: [
      {
        path: "/cosmetics_shop_vite/",
        element: <Home />,
      },
      {
        path: "/cosmetics_shop_vite/contacts",
        element: <Contacts />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
