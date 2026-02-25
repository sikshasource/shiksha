// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const NavBar = () => {
//   const [open, setOpen] = useState(false);
//   const [mobileMenu, setMobileMenu] = useState(false);

//   const navigate = useNavigate();
//   const { user, userToken, logout } = useAuth();

//   // 🔥 Clean Display Name Logic (Single Source of Truth)
//   const formatName = (name) =>
//     name.charAt(0).toUpperCase() + name.slice(1);

//   const displayName =
//     user?.firstName ||
//     user?.name ||
//     (user?.email
//       ? formatName(
//           user.email
//             .split("@")[0]
//             .replace(/[0-9]/g, "")      // remove numbers
//             .replace(/[._]/g, "")      // remove dots & underscores
//         )
//       : "User");

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

//         {/* Logo */}
//         <div onClick={() => navigate("/")} className="cursor-pointer">
//           <img
//             src="/Images/Header_Logo.png"
//             alt="Logo"
//             className="w-36 h-auto object-contain"
//           />
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-8">

//           <Link to="/" className="text-sm hover:text-blue-700 transition">
//             Home
//           </Link>

//           {/* Dropdown */}
//           <div className="relative">
//             <button
//               onClick={() => setOpen(!open)}
//               className="text-sm hover:text-blue-700 transition"
//             >
//               Select By ▾
//             </button>

//             {open && (
//               <div className="absolute right-0 mt-3 w-52 bg-white border rounded-lg shadow-md">
//                 <ul className="text-sm text-gray-700">
//                   <li
//                     onClick={() => {
//                       navigate("/by-domain");
//                       setOpen(false);
//                     }}
//                     className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                   >
//                     By Domain
//                   </li>

//                   <li
//                     onClick={() => {
//                       navigate("/by-degree");
//                       setOpen(false);
//                     }}
//                     className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                   >
//                     By Degree
//                   </li>

//                   <li
//                     onClick={() => {
//                       navigate("/by-technology");
//                       setOpen(false);
//                     }}
//                     className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                   >
//                     By Technology
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>

//           <Link to="/aboutus" className="text-sm hover:text-blue-700 transition">
//             About Us
//           </Link>

//           {!userToken ? (
//             <>
//               <Link to="/signin" className="text-sm hover:text-blue-700 transition">
//                 Sign In
//               </Link>

//               <Link
//                 to="/signup"
//                 className="text-sm bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-slate-800 transition"
//               >
//                 Sign Up
//               </Link>
//             </>
//           ) : (
//             <>
//               <span className="text-sm text-gray-600">
//                 Welcome {displayName}
//               </span>

//               <button
//                 onClick={logout}
//                 className="text-sm text-red-600 hover:text-red-700 transition"
//               >
//                 Logout
//               </button>
//             </>
//           )}
//         </div>

//         {/* Mobile Hamburger */}
//         <button
//           onClick={() => setMobileMenu(!mobileMenu)}
//           className="md:hidden text-2xl"
//         >
//           ☰
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenu && (
//         <div className="md:hidden bg-white border-t shadow-sm">
//           <div className="px-6 py-4 flex flex-col gap-4 text-sm">

//             <Link
//               to="/"
//               onClick={() => setMobileMenu(false)}
//               className="hover:text-blue-700"
//             >
//               Home
//             </Link>

//             <button
//               onClick={() => setOpen(!open)}
//               className="text-left hover:text-blue-700"
//             >
//               Select By ▾
//             </button>

//             {open && (
//               <div className="pl-4 flex flex-col gap-2 text-gray-600">
//                 <span
//                   onClick={() => {
//                     navigate("/by-domain");
//                     setMobileMenu(false);
//                   }}
//                   className="cursor-pointer"
//                 >
//                   By Domain
//                 </span>

//                 <span
//                   onClick={() => {
//                     navigate("/by-degree");
//                     setMobileMenu(false);
//                   }}
//                   className="cursor-pointer"
//                 >
//                   By Degree
//                 </span>

//                 <span
//                   onClick={() => {
//                     navigate("/by-technology");
//                     setMobileMenu(false);
//                   }}
//                   className="cursor-pointer"
//                 >
//                   By Technology
//                 </span>
//               </div>
//             )}

//             <Link
//               to="/aboutus"
//               onClick={() => setMobileMenu(false)}
//               className="hover:text-blue-700"
//             >
//               About Us
//             </Link>

//             {!userToken ? (
//               <>
//                 <Link
//                   to="/signin"
//                   onClick={() => setMobileMenu(false)}
//                   className="hover:text-blue-700"
//                 >
//                   Sign In
//                 </Link>

//                 <Link
//                   to="/signup"
//                   onClick={() => setMobileMenu(false)}
//                   className="bg-slate-900 text-white px-4 py-2 rounded-md text-center"
//                 >
//                   Sign Up
//                 </Link>
//               </>
//             ) : (
//               <>
//                 <span className="text-gray-600">
//                   Welcome {displayName}
//                 </span>

//                 <button
//                   onClick={() => {
//                     logout();
//                     setMobileMenu(false);
//                   }}
//                   className="text-red-600 text-left"
//                 >
//                   Logout
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default NavBar;




import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { user, userToken, logout } = useAuth();

  /* ---------------- Display Name Logic ---------------- */
  const formatName = (name) =>
    name.charAt(0).toUpperCase() + name.slice(1);

  const displayName =
    user?.firstName ||
    user?.name ||
    (user?.email
      ? formatName(
          user.email
            .split("@")[0]
            .replace(/[0-9]/g, "")
            .replace(/[._]/g, "")
        )
      : "User");

  /* ---------------- Close Dropdown on Outside Click ---------------- */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ---------------- Navigation Handler ---------------- */
  const handleNavigate = (path) => {
    navigate(path);
    setOpen(false);
    setMobileMenu(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <div
          onClick={() => handleNavigate("/")}
          className="cursor-pointer"
        >
          <img
            src="/Images/Header_Logo.png"
            alt="Shiksha Source Logo"
            className="w-36 object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm ">

          <Link to="/" className="hover:text-slate-900 transition">
            Home
          </Link>

          {/* Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="hover:text-slate-900 transition"
            >
              Select By
            </button>

            {open && (
              <div className="absolute right-0 mt-3 w-52 bg-white border border-gray-200 rounded-lg shadow-md py-2">
                <button
                  onClick={() => handleNavigate("/by-domain")}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50"
                >
                  By Domain
                </button>
                <button
                  onClick={() => handleNavigate("/by-degree")}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50"
                >
                  By Degree
                </button>
                <button
                  onClick={() => handleNavigate("/by-technology")}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50"
                >
                  By Technology
                </button>
              </div>
            )}
          </div>

          <Link to="/aboutus" className="hover:text-slate-900 transition">
            About Us
          </Link>

          {!userToken ? (
            <>
              <Link to="/signin" className="hover:text-slate-900 transition">
                Sign In
              </Link>

              <Link
                to="/signup"
                className="bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-slate-800 transition"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <span className="text-gray-600">
                Welcome <span className="text-slate-900 font-bold">{displayName}</span>
              </span>

              <button
                onClick={logout}
                className="text-red-600 hover:text-red-700 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-6 py-6 space-y-4 text-sm font-medium">

            <button onClick={() => handleNavigate("/")}>
              Home
            </button>

            <button onClick={() => handleNavigate("/by-domain")}>
              By Domain
            </button>

            <button onClick={() => handleNavigate("/by-degree")}>
              By Degree
            </button>

            <button onClick={() => handleNavigate("/by-technology")}>
              By Technology
            </button>

            <button onClick={() => handleNavigate("/aboutus")}>
              About Us
            </button>

            {!userToken ? (
              <>
                <button onClick={() => handleNavigate("/signin")}>
                  Sign In
                </button>

                <button
                  onClick={() => handleNavigate("/signup")}
                  className="bg-slate-900 text-white px-4 py-2 rounded-md w-full"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                <div className="text-gray-600">
                  Welcome <span className="text-slate-900 font-medium">{displayName}</span>
                </div>

                <button
                  onClick={() => {
                    logout();
                    setMobileMenu(false);
                  }}
                  className="text-red-600"
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