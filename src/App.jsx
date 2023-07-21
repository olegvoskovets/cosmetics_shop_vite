import Example from "./Components/Example/Example";
import Layout from "./Components/Layout/Layout";
import AboutPage from "./pages/AboutPage/AboutPage";
import ActionPage from "./pages/ActionPage/ActionPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";

import DeliveryPage from "./pages/DeliveryPage/DeliveryPage";
import HomePage from "./pages/HomePage/HomePage";

import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/cosmetics_shop_vite/",
      element: <Layout />,
      children: [
        {
          path: "/cosmetics_shop_vite/",
          element: <HomePage />,
        },
        {
          path: "contacts",
          element: <ContactsPage />,
        },
        {
          path: "delivery",
          element: <DeliveryPage />,
        },
        {
          path: "action",
          element: <ActionPage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "blog",
          element: <BlogPage />,
        },
        {
          path: "*",
          element: <Navigate to="/cosmetics_shop_vite/" />,
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
      <Example>
        <RouterProvider router={router} />
      </Example>
    </>
  );
};

export default App;
