import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/log.svg";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      
      {/* Logo */}
      <div className="flex items-center gap-2 mb-6">
        <img src={Logo} alt="logo" className="h-10 w-10 p-2 items-center justify-center rounded-xl bg-blue-500" />
        <h2 className="text-2xl font-medium text-black">Vital+Flow</h2>
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-5xl font-semibold text-gray-900 leading-tight max-w-2xl py-4">
        Oops, the page you are looking, doesn't exist!!
      </h1>

      {/* Button */}
      <Link
        to="/"
        className="mt-8 inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition-all duration-300"
      >
        Back to Home
      </Link>
      
    </div>
  );
};

export default NotFound;