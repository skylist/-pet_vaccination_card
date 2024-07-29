import { createBrowserRouter, RouterProvider } from "react-router-dom";

import React from "react";
import { LoginPage } from "pages/login";
import { RegisterPage } from "pages/register";
import { HomePage } from "pages/home";

const routesProvider = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
]);

export const RoutesProvider: React.FC = () => {
  return <RouterProvider router={routesProvider} />;
};
