import React from "react";
import Explore from "./pages/Explore";
import Landing from "./pages/Landing";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Research from './pages/Research'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/explore",
    element: <Explore />,
  },
  {
    path: '/research',
    element: <Research />
  }
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
