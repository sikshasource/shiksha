// import React from "react";
// import { FaWhatsapp } from "react-icons/fa";
// import { FaMapLocationDot } from "react-icons/fa6";
// import { IoCallOutline } from "react-icons/io5";

// const Footer = () => {
//   return (
//     <footer className="bg-slate-900 text-gray-300">

//       {/* Main Footer */}
//       <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 sm:grid-cols-2 md:grid-cols-4">

//         {/* Brand */}
//         <div>
//           <img
//             src="/Images/footer-logo.png"
//             alt="Shiksha Source Logo"
//             className="w-40 mb-6 object-contain"
//           />

//           <p className="text-sm leading-relaxed text-gray-400">
//             We help students build high-quality academic projects with
//             professional guidance, structured documentation, and deployment
//             assistance at affordable pricing.
//           </p>
//         </div>

//         {/* Services */}
//         <div>
//           <h3 className="text-white text-lg mb-5">
//             Services
//           </h3>

//           <ul className="space-y-3 text-sm text-gray-400">
//             <li>Final Year Projects</li>
//             <li>Mini Projects</li>
//             <li>Project Documentation</li>
//             <li>IEEE Papers & PPT</li>
//             <li>Bug Fixing & Improvements</li>
//             <li>Deployment Support</li>
//           </ul>
//         </div>

//         {/* Technologies */}
//         <div>
//           <h3 className="text-white text-lg mb-5">
//             Technologies
//           </h3>

//           <ul className="space-y-3 text-sm text-gray-400">
//             <li>Python / AI / ML</li>
//             <li>Java / Backend</li>
//             <li>Web Development</li>
//             <li>React & Node.js</li>
//             <li>MongoDB / SQL</li>
//             <li>Machine Learning</li>
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h3 className="text-white text-lg mb-5">
//             Contact Us
//           </h3>

//           <ul className="space-y-4 text-sm text-gray-400">

//             <li className="flex items-center gap-3">
//               <IoCallOutline className="text-lg text-gray-300" />
//               <span>+91 94823 084644</span>
//             </li>

//             <li className="flex items-center gap-3">
//               <FaWhatsapp className="text-lg text-gray-300" />
//               <span>WhatsApp Support Available</span>
//             </li>

//             <li className="flex items-center gap-3">
//               <FaMapLocationDot className="text-lg text-gray-300" />
//               <span>Serving Students Across India</span>
//             </li>
//           </ul>

//           <a
//             href="https://wa.me/9194823084644"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block mt-6 bg-green-600 text-white px-5 py-2 rounded-md text-sm hover:bg-green-700 transition"
//           >
//             WhatsApp Enquiry
//           </a>
//         </div>

//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-slate-800 py-5 text-center text-sm text-gray-500">
//         © {new Date().getFullYear()} Shiksha Source. All rights reserved.
//       </div>

//     </footer>
//   );
// };

// export default Footer;




import React from "react";
import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-400">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid gap-14 sm:grid-cols-2 md:grid-cols-4">

        {/* Brand */}
        <div className="space-y-6">
          <img
            src="/Images/footer-logo.png"
            alt="Shiksha Source Logo"
            className="w-40 object-contain"
          />

          <p className="text-sm leading-relaxed">
            Structured academic project solutions with professional
            development, complete documentation, and guided mentorship.
          </p>

          <p className="text-xs text-gray-500">
            Built for students. Designed for academic success.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 pt-2">
            <a href="#" className="hover:text-white transition">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/9194823084644"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-6 tracking-wide">
            Services
          </h3>

          <ul className="space-y-3 text-sm">
            <li className="hover:text-white transition">Final Year Projects</li>
            <li className="hover:text-white transition">Mini Projects</li>
            <li className="hover:text-white transition">Documentation & IEEE Papers</li>
            <li className="hover:text-white transition">Viva Preparation</li>
            <li className="hover:text-white transition">Bug Fixing</li>
            <li className="hover:text-white transition">Deployment Assistance</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-6 tracking-wide">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/aboutus" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/signin" className="hover:text-white transition">
                Sign In
              </Link>
            </li>
            <li>
              <Link to="/signup" className="hover:text-white transition">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-6 tracking-wide">
            Contact
          </h3>

          <ul className="space-y-4 text-sm">

            <li className="flex items-center gap-3">
              <IoCallOutline className="text-base text-gray-300" />
              <span>+91 94823 084644</span>
            </li>

            <li className="flex items-center gap-3">
              <FaMapLocationDot className="text-base text-gray-300" />
              <span>Serving Students Across India</span>
            </li>
          </ul>

          <a
            href="https://wa.me/9194823084644"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-green-600 text-white px-5 py-2.5 rounded-lg text-sm hover:bg-green-700 transition"
          >
            Chat on WhatsApp
          </a>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-slate-800"></div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">

        <p>
          © {new Date().getFullYear()} Shiksha Source. All rights reserved.
        </p>

        <div className="flex gap-6 mt-3 sm:mt-0">
          <Link to="/privacy" className="hover:text-white transition">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-white transition">
            Terms of Service
          </Link>
        </div>

      </div>

    </footer>
  );
};

export default Footer;