import React from "react";
import Explore from "./pages/Explore";
import Landing from "./pages/Landing";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Route, Routes, useLocation } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
// ...

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
  const  location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={400}>
        <Routes location={location}>
          <Route path="/explore" element={<Explore />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default App;
