import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { user, userToken, logout } = useAuth();

  return (
    <nav className="flex items-center justify-between px-16 py-4 fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-md border-b border-white/20 shadow-lg">

      {/* Logo */}
      <h1
        onClick={() => navigate("/")}
        className="text-2xl font-bold cursor-pointer"
      >
       <img src="/Images/Header_Logo.png" class="w-44 h-xs " alt="" />
      </h1>

      <div className="flex gap-6 items-center">

        <Link to="/" className="text-sm hover:text-blue-600">
          Home.
        </Link>

        {/* Dropdown */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="text-sm hover:text-blue-600"
          >
            Select By ▾
          </button>

          {open && (
            <div className="absolute right-0 mt-3 w-48 rounded-xl bg-white shadow-lg overflow-hidden">
              <ul className="text-sm text-gray-700">

                <li
                  onClick={() => navigate("/by-domain")}
                  className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
                >
                  By Domain
                </li>

                <li
                  onClick={() => navigate("/by-degree")}
                  className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
                >
                  By Degree
                </li>

                <li
                  onClick={() => navigate("/by-technology")}
                  className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
                >
                  By Technology
                </li>

              </ul>
            </div>
          )}
        </div>

        <Link to="/aboutus" className="text-sm hover:text-blue-600">
          About Us
        </Link>

        {!userToken ? (
          <>
            <Link to="/signin" className="text-sm hover:text-blue-600">
              Sign In
            </Link>

            <Link
              to="/signup"
              className="text-sm bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700"
            >
              Sign Up
            </Link>
          </>
        ) : (
          <>
            <span className="text-sm">
              Welcome {user?.firstName || user?.name || "User"}
            </span>

            <button
              onClick={logout}
              className="text-sm text-red-500"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
