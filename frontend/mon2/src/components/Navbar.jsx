import React, { useState } from "react";
import { CiLogin } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  // Simulate login state (replace with real auth logic in production)
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    // Optionally redirect or refresh
  };

  return (
    <nav className="h-14 w-full fixed top-0 left-0 z-50 bg-white shadow-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex justify-between items-center h-full px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src="/vite.svg" alt="Logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-[#7747ff] tracking-tight">
            ASPhones
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-[#7747ff] font-medium transition-colors"
          >
            Home
          </Link>
          {!isLoggedIn ? (
            <Link
              to="/auth-signup"
              className="flex items-center gap-2 text-gray-700 hover:text-[#7747ff] font-medium transition-colors px-4 py-1.5 rounded hover:bg-[#f3f0ff]"
              onClick={() => localStorage.setItem("isLoggedIn", "true")}
            >
              <span>Sign Up</span>
              <CiLogin className="h-5 w-5" />
            </Link>
          ) : (
            <div className="flex items-center gap-4">
              <FaUserCircle className="h-7 w-7 text-[#7747ff]" title="Profile" />
              <button
                onClick={handleLogout}
                className="text-gray-700 hover:text-red-600 font-medium transition-colors px-4 py-1.5 rounded hover:bg-red-50 border border-red-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export const NavbarSpacer = () => <div className="h-14 w-full" />;

export default Navbar;
