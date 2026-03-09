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
            <a href="https://www.linkedin.com/company/111507010/admin/dashboard/" className="hover:text-white transition">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/shikshasource?igsh=ZmJ4eDVvdHY1OXpk" className="hover:text-white transition">
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/9482384644"
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
              <Link to="/LogIn" className="hover:text-white transition">
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
              <span>+91 94823 84644</span>
            </li>

            <li className="flex items-center gap-3">
              <FaMapLocationDot className="text-base text-gray-300" />
              <span>Serving Students Across India</span>
            </li>
          </ul>

          <a
            href="https://wa.me/919482384644"
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