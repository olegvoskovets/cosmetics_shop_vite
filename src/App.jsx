import Layout from "./Components/Layout/Layout";
import Contacts from "./pages/ContactsPage/ContactsPage";
import Home from "./pages/HomePage/HomePage";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/cosmetics_shop_vite/",
      element: <Layout />,
      children: [
        {
          path: "/cosmetics_shop_vite/",
          element: <Home />,
        },
        {
          path: "contacts",
          element: <Contacts />,
        },

        {
          path: "*",
          element: <div>Помилка</div>,
        },
      ],
    },
    // {
    //   path: "/login",
    //   element: <Login />,
    // },
    // {
    //   path: "/register",
    //   element: <Register />,
    // },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
