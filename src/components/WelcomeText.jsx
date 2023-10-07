import React from "react";

import { Link } from "react-router-dom";

function WelcomeText() {
  return (
    <div className="absolute top-1/3 left-1/4 text-center">
      <h1 className="text-7xl mb-10 text-white">Welcome to my planet</h1>

      <Link
        to="/explore"
        className="btn inline-block text-2xl mr-4 bg-white text-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition-all transform-gpu duration-300 ease-in"
      >
        Explore
      </Link>

      <Link
        to="/docs"
        className="btn inline-block text-2xl bg-white text-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition-all transform-gpu duration-300 ease-in"
      >
        See the docs
      </Link>
    </div>
  );
}

export default WelcomeText;
