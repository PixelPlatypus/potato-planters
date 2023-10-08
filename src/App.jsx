import React from "react";
import Explore from "./pages/Explore";
import Landing from "./pages/Landing";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./index.css";
import { Route, Routes, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade">
        <Routes location={location}>
          <Route path="/explore" element={<Explore />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default App;
