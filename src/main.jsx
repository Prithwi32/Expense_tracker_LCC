import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Dashboard from "./components/Dashboard/Dashboard";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import Login from "./components/Login/Login";
import Categories from "./components/Categories/Categories";
import Budget from "./components/Budget/Budget.jsx";
import Transactions from "./components/Transactions/Transactions.jsx";
import Profile from "./components/Profile/Profile.jsx";

const appRouter = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/budget",
        element: <Budget />,
      },
      {
        path: "/transactions",
        element: <Transactions />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <WelcomePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
