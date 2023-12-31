import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main.jsx";
import Home from "./page/Home.jsx";
import AddNew from "./page/AddNew";
import EditCandy from "./page/EditCandy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/candies"),
      },
      {
        path: "/add-new",
        element: <AddNew></AddNew>,
      },
      {
        path: "/update-candy/:id",
        element: <EditCandy></EditCandy>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/update-candy/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
