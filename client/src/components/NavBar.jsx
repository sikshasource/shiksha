// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const NavBar = () => {
//   const [open, setOpen] = useState(false);
//   const navigate = useNavigate();
//   const { user, userToken, logout } = useAuth();

//   return (
//     <nav className="flex items-center justify-between px-16 py-4 fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-md border-b border-white/20 shadow-lg">

//       {/* Logo */}
//       <h1
//         onClick={() => navigate("/")}
//         className="text-2xl font-bold cursor-pointer"
//       >
//        <img src="/Images/Header_Logo.png" class="w-44 h-xs " alt="" />
//       </h1>

//       <div className="flex gap-6 items-center">

//         <Link to="/" className="text-sm hover:text-blue-600">
//           Home
//         </Link>

//         {/* Dropdown */}
//         <div className="relative">
//           <button
//             onClick={() => setOpen(!open)}
//             className="text-sm hover:text-blue-600"
//           >
//             Select By ▾
//           </button>

//           {open && (
//             <div className="absolute right-0 mt-3 w-48 rounded-xl bg-white shadow-lg overflow-hidden">
//               <ul className="text-sm text-gray-700">

//                 <li
//                   onClick={() => navigate("/by-domain")}
//                   className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
//                 >
//                   By Domain
//                 </li>

//                 <li
//                   onClick={() => navigate("/by-degree")}
//                   className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
//                 >
//                   By Degree
//                 </li>

//                 <li
//                   onClick={() => navigate("/by-technology")}
//                   className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
//                 >
//                   By Technology
//                 </li>

//               </ul>
//             </div>
//           )}
//         </div>

//         <Link to="/aboutus" className="text-sm hover:text-blue-600">
//           About Us
//         </Link>

//         {!userToken ? (
//           <>
//             <Link to="/signin" className="text-sm hover:text-blue-600">
//               Sign In
//             </Link>

//             <Link
//               to="/signup"
//               className="text-sm bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700"
//             >
//               Sign Up
//             </Link>
//           </>
//         ) : (
//           <>
//             <span className="text-sm">
//               Welcome {user?.firstName || user?.name || "User"}
//             </span>

//             <button
//               onClick={logout}
//               className="text-sm text-red-500"
//             >
//               Logout
//             </button>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default NavBar;





import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const navigate = useNavigate();
  const { user, userToken, logout } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="cursor-pointer"
        >
          <img
            src="Images/Header_Logo.png"
            alt="Logo"
            className="w-36 h-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          <Link to="/" className="text-sm hover:text-blue-700 transition">
            Home
          </Link>

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="text-sm hover:text-blue-700 transition"
            >
              Select By ▾
            </button>

            {open && (
              <div className="absolute right-0 mt-3 w-52 bg-white border rounded-lg shadow-md">
                <ul className="text-sm text-gray-700">

                  <li
                    onClick={() => {
                      navigate("/by-domain");
                      setOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    By Domain
                  </li>

                  <li
                    onClick={() => {
                      navigate("/by-degree");
                      setOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    By Degree
                  </li>

                  <li
                    onClick={() => {
                      navigate("/by-technology");
                      setOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    By Technology
                  </li>

                </ul>
              </div>
            )}
          </div>

          <Link to="/aboutus" className="text-sm hover:text-blue-700 transition">
            About Us
          </Link>

          {!userToken ? (
            <>
              <Link to="/signin" className="text-sm hover:text-blue-700 transition">
                Sign In
              </Link>

              <Link
                to="/signup"
                className="text-sm bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-slate-800 transition"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <span className="text-sm text-gray-600">
                Welcome {user?.firstName || user?.name || "User"}
              </span>

              <button
                onClick={logout}
                className="text-sm text-red-600 hover:text-red-700 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <div className="px-6 py-4 flex flex-col gap-4 text-sm">

            <Link
              to="/"
              onClick={() => setMobileMenu(false)}
              className="hover:text-blue-700"
            >
              Home
            </Link>

            <button
              onClick={() => setOpen(!open)}
              className="text-left hover:text-blue-700"
            >
              Select By ▾
            </button>

            {open && (
              <div className="pl-4 flex flex-col gap-2 text-gray-600">
                <span
                  onClick={() => {
                    navigate("/by-domain");
                    setMobileMenu(false);
                  }}
                  className="cursor-pointer"
                >
                  By Domain
                </span>

                <span
                  onClick={() => {
                    navigate("/by-degree");
                    setMobileMenu(false);
                  }}
                  className="cursor-pointer"
                >
                  By Degree
                </span>

                <span
                  onClick={() => {
                    navigate("/by-technology");
                    setMobileMenu(false);
                  }}
                  className="cursor-pointer"
                >
                  By Technology
                </span>
              </div>
            )}

            <Link
              to="/aboutus"
              onClick={() => setMobileMenu(false)}
              className="hover:text-blue-700"
            >
              About Us
            </Link>

            {!userToken ? (
              <>
                <Link
                  to="/signin"
                  onClick={() => setMobileMenu(false)}
                  className="hover:text-blue-700"
                >
                  Sign In
                </Link>

                <Link
                  to="/signup"
                  onClick={() => setMobileMenu(false)}
                  className="bg-slate-900 text-white px-4 py-2 rounded-md text-center"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <span className="text-gray-600">
                  Welcome {user?.firstName || user?.name || "User"}
                </span>

                <button
                  onClick={() => {
                    logout();
                    setMobileMenu(false);
                  }}
                  className="text-red-600 text-left"
                >
                  Logout
                </button>
              </>
            )}

          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;