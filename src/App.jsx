import React from "react";
import Explore from "./pages/Explore";
import Landing from "./pages/Landing";
import AudioPlayer from "./components/AudioPlayer";
import MusicBars from "./components/MusicBars";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/explore",
    element: <Explore />,
  },
]);

const App = () => {
  return (
    <div style={{ position: "relative" }}>
      <AudioPlayer />
      <MusicBars />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
