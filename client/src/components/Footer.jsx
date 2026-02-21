import React from "react";
import { IoMdCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 bottom-0">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            <img src="/Images/Footer Logo.png"  class="w-34" alt="" />
          </h2>
          <p className="mt-4 text-sm leading-relaxed">
            We help students build high-quality academic projects with
            professional guidance, documentation support, and deployment
            assistance — all at affordable pricing.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Final Year Projects</li>
            <li>Mini Projects</li>
            <li>Project Documentation</li>
            <li>IEEE Papers & PPT</li>
            <li>Bug Fixing & Improvements</li>
            <li>Deployment Support</li>
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Technologies
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Python / AI / ML</li>
            <li>Java / Backend</li>
            <li>Web Development</li>
            <li>React & Node.js</li>
            <li>MongoDB / SQL</li>
            <li>Machine Learning</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Contact Us
          </h3>
                <ul className="space-y-3 text-sm">
        <li className="flex items-center gap-3">
          <IoCallOutline className="text-lg" />
          <span>+91 94823 084644</span>
        </li>

        <li className="flex items-center gap-3">
          <FaWhatsapp className="text-lg" />
          <span>WhatsApp Support Available</span>
        </li>

        <li className="flex items-center gap-3">
          <FaMapLocationDot className="text-lg" />
          <span>Serving Students Across India</span>
        </li>
      </ul>


          <a
            href="https://wa.me/9194823084644"
            className="inline-block mt-4 bg-green-500 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-green-600 transition"
          >
       WhatsApp Enquiry
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Shiksha Source. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
