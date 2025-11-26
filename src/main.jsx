import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Contact from "./Pages/Contact.jsx";
import About from "./Pages/About.jsx";
import Home from "./Pages/Home.jsx";
import RootLayout from "./Layouts/RootLayout.jsx";
import PlantDetails from "./Pages/PlantDetails.jsx"
import axios from "axios";
import LoadingSpinner from "./Components/LoadingSpinner.jsx";
import Cart from "./Pages/Cart.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index:true,
        element: <Home />,
        hydrateFallbackElement:<LoadingSpinner />,
        loader: () =>fetch("https://openapi.programming-hero.com/api/plants")
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        // element:<About />
        Component: About,
      },
      {
        path:'/plant-details/:id',
        Component: PlantDetails,
        loader:({ params }) =>
          axios(`https://openapi.programming-hero.com/api/plant/${params.id}`),
      },
      {
        path:'/cart',
        Component: Cart
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
