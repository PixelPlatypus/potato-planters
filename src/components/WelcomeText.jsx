import React from "react";

import { Link } from "react-router-dom";

function WelcomeText() {
  return (
    <div className="absolute top-1/3 left-1/4 text-center">
      <h1 className="text-7xl mb-10 text-white">
        Welcome to{" "}
        <span className="text-red-400 font-bold animate-pulse hover:text-red-500">
          Roast-3369
        </span>
      </h1>

      <Link
        to="/explore"
        className="btn inline-block text-2xl mr-4 bg-white text-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition-all transform-gpu duration-300 ease-in"
      >
        Explore
      </Link>

      <Link
        to="/research"
        className="btn inline-block text-2xl bg-white text-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition-all transform-gpu duration-300 ease-in"
      >
        Read Our Research
      </Link>
    </div>
  );
}

export default WelcomeText;
