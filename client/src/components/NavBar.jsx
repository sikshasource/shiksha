// import React, { useState, useEffect, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const NavBar = () => {
//   const [open, setOpen] = useState(false);
//   const [mobileMenu, setMobileMenu] = useState(false);

//   const dropdownRef = useRef(null);
//   const navigate = useNavigate();
//   const { user, userToken, logout } = useAuth();

//   /* ---------------- Display Name Logic ---------------- */
//   const formatName = (name) =>
//     name.charAt(0).toUpperCase() + name.slice(1);

//   const displayName =
//     user?.firstName ||
//     user?.name ||
//     (user?.email
//       ? formatName(
//           user.email
//             .split("@")[0]
//             .replace(/[0-9]/g, "")
//             .replace(/[._]/g, "")
//         )
//       : "User");

//   /* ---------------- Close Dropdown on Outside Click ---------------- */
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   /* ---------------- Navigation Handler ---------------- */
//   const handleNavigate = (path) => {
//     navigate(path);
//     setOpen(false);
//     setMobileMenu(false);
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

//         {/* Logo */}
//         <div
//           onClick={() => handleNavigate("/")}
//           className="cursor-pointer"
//         >
//           <img
//             src="/Images/Header_Logo.png"
//             alt="Shiksha Source Logo"
//             className="w-36 object-contain"
//           />
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-8 text-sm ">

//           <Link to="/" className="hover:text-slate-900 transition">
//             Home
//           </Link>

//           {/* Dropdown */}
//           <div className="relative" ref={dropdownRef}>
//             <button
//               onClick={() => setOpen(!open)}
//               className="hover:text-slate-900 transition"
//             >
//               Select By
//             </button>

//             {open && (
//               <div className="absolute right-0 mt-3 w-52 bg-white border border-gray-200 rounded-lg shadow-md py-2">
//                 <button
//                   onClick={() => handleNavigate("/by-domain")}
//                   className="w-full text-left px-4 py-2 hover:bg-gray-50"
//                 >
//                   By Domain
//                 </button>
//                 <button
//                   onClick={() => handleNavigate("/by-degree")}
//                   className="w-full text-left px-4 py-2 hover:bg-gray-50"
//                 >
//                   By Degree
//                 </button>
//                 <button
//                   onClick={() => handleNavigate("/by-technology")}
//                   className="w-full text-left px-4 py-2 hover:bg-gray-50"
//                 >
//                   By Technology
//                 </button>
//               </div>
//             )}
//           </div>

//           <Link to="/aboutus" className="hover:text-slate-900 transition">
//             About Us
//           </Link>

//           {!userToken ? (
//             <>
//               <Link to="/signin" className="hover:text-slate-900 transition">
//                 Sign In
//               </Link>

//               <Link
//                 to="/signup"
//                 className="bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-slate-800 transition"
//               >
//                 Sign Up
//               </Link>
//             </>
//           ) : (
//             <>
//               <span className="text-gray-600">
//                 Welcome <span className="text-slate-900 font-bold">{displayName}</span>
//               </span>

//               <button
//                 onClick={logout}
//                 className="text-red-600 hover:text-red-700 transition"
//               >
//                 Logout
//               </button>
//             </>
//           )}
//         </div>

//         {/* Mobile Toggle */}
//         <button
//           onClick={() => setMobileMenu(!mobileMenu)}
//           className="md:hidden text-2xl"
//         >
//           ☰
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenu && (
//         <div className="md:hidden bg-white border-t border-gray-100">
//           <div className="px-6 py-6 space-y-4 text-sm font-medium">

//             <button onClick={() => handleNavigate("/")}>
//               Home
//             </button>

//             <button onClick={() => handleNavigate("/by-domain")}>
//               By Domain
//             </button>

//             <button onClick={() => handleNavigate("/by-degree")}>
//               By Degree
//             </button>

//             <button onClick={() => handleNavigate("/by-technology")}>
//               By Technology
//             </button>

//             <button onClick={() => handleNavigate("/aboutus")}>
//               About Us
//             </button>

//             {!userToken ? (
//               <>
//                 <button onClick={() => handleNavigate("/signin")}>
//                   Sign In
//                 </button>

//                 <button
//                   onClick={() => handleNavigate("/signup")}
//                   className="bg-slate-900 text-white px-4 py-2 rounded-md w-full"
//                 >
//                   Sign Up
//                 </button>
//               </>
//             ) : (
//               <>
//                 <div className="text-gray-600">
//                   Welcome <span className="text-slate-900 font-medium">{displayName}</span>
//                 </div>

//                 <button
//                   onClick={() => {
//                     logout();
//                     setMobileMenu(false);
//                   }}
//                   className="text-red-600"
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
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ChevronDown, Menu, X } from "lucide-react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, userToken, logout } = useAuth();

  /* ---------- Scroll Background Effect ---------- */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------- Close Dropdown Outside Click ---------- */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ---------- Active Link Styling ---------- */
  const isActive = (path) => location.pathname === path;

  const activeClass = "text-blue-600 font-semibold";
  const normalClass = "text-gray-700 hover:text-blue-600 transition";

  /* ---------- Display Name ---------- */
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

  const handleNavigate = (path) => {
    navigate(path);
    setOpen(false);
    setMobileMenu(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

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

          <Link
            to="/"
            className={isActive("/") ? activeClass : normalClass}
          >
            Home
          </Link>

          {/* Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className={`flex items-center gap-1 ${
                open ? activeClass : normalClass
              }`}
            >
              Browse Projects
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>

            {open && (
              <div className="absolute right-0 mt-4 w-56 bg-white border border-gray-200 rounded-xl shadow-lg py-2 transition-all">
                <button
                  onClick={() => handleNavigate("/by-domain")}
                  className="w-full text-left px-5 py-2 hover:bg-gray-50"
                >
                  By Domain
                </button>
                <button
                  onClick={() => handleNavigate("/by-degree")}
                  className="w-full text-left px-5 py-2 hover:bg-gray-50"
                >
                  By Degree
                </button>
                <button
                  onClick={() => handleNavigate("/by-technology")}
                  className="w-full text-left px-5 py-2 hover:bg-gray-50"
                >
                  By Technology
                </button>
              </div>
            )}
          </div>

          <Link
            to="/aboutus"
            className={isActive("/aboutus") ? activeClass : normalClass}
          >
            About
          </Link>

          {!userToken ? (
            <>
              <Link
                to="/signin"
                className={isActive("/signin") ? activeClass : normalClass}
              >
                Sign In
              </Link>

              <Link
                to="/signup"
                className="bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-slate-800 transition"
              >
                Get Started
              </Link>
            </>
          ) : (
            <>
              <span className="text-gray-600">
                Hi,{" "}
                <span className="text-slate-900 font-semibold">
                  {displayName}
                </span>
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
          className="md:hidden"
        >
          {mobileMenu ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100">
          <div className="px-6 py-6 space-y-4 text-sm font-medium">

            <button onClick={() => handleNavigate("/")}>Home</button>
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
              About
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
                  Get Started
                </button>
              </>
            ) : (
              <>
                <div>
                  Hi,{" "}
                  <span className="font-semibold">{displayName}</span>
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