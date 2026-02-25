import SignIn from "./SignIn";
import SignUp from "./SignUp";
import AboutUs from "./AboutUs";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import React, { useState } from "react";

export default function Homepage() {
  const testimonials = [
    {
      name: "Rahul S",
      role: "Final Year Engineering Student",
      review:
        "Shiksha Source helped me complete my project with confidence. The explanation & support were excellent and pricing was affordable.",
      avatar: "https://i.pravatar.cc/100?img=12",
    },
    {
      name: "Ananya M",
      role: "BCA Student",
      review:
        "The mentorship was very friendly and clear. I understood my project completely and my viva went smoothly.",
      avatar: "https://i.pravatar.cc/100?img=32",
    },
    {
      name: "Karthik R",
      role: "MCA Student",
      review:
        "Professional quality work with proper documentation. They supported me till final submission without any hesitation.",
      avatar: "https://i.pravatar.cc/100?img=56",
    },
  ];

  const [index, setIndex] = useState(0);

  const prevTestimonial = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const { name, role, review, avatar } = testimonials[index];

  const [formData, setFormData] = useState({
    name: "",
    domain: "",
    budget: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/api/custom-project", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Request submitted successfully!");
        setFormData({
          name: "",
          domain: "",
          budget: "",
          description: "",
        });
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      alert("Server error");
    }

    setLoading(false);
  };

  return (
    <>
      {/* Tailwind CDN */}
      <script src="https://cdn.tailwindcss.com"></script>

      {/* Custom Styles */}
      <style>{`
        body { font-family: "Inter", sans-serif; }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll {
          animation: scroll 18s linear infinite;
        }

        @keyframes lineReveal {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-line {
  display: inline-block;
  opacity: 0;
  animation: lineReveal 0.8s ease forwards;
}

.delay-1 { animation-delay: 0.2s; }
.delay-2 { animation-delay: 0.5s; }
.delay-3 { animation-delay: 0.8s; }



@keyframes typing {
  from { width: 0 }
  to { width: 75% }
}

@keyframes blink {
  50% { border-color: transparent }
}

.typewriter {
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid #2563eb;
  width: 0;
  animation:
    typing 4s steps(60, end) forwards,
    blink 0.8s step-end infinite;
}

      `}</style>

      <div className="bg-white text-gray-900 overflow-x-hidden">
        <NavBar />

        {/* ================= HERO ================= */}
        <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <div className="space-y-6">
              <p className="text-xs sm:text-sm tracking-widest text-blue-700 uppercase">
                Affordable • Reliable • Student Focused
              </p>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Industry-Ready College Projects
                <span className="block text-blue-700 mt-2">
                  Built Professionally. Delivered Affordably.
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
                We design and develop academic projects that meet real-world
                standards — complete with documentation, explanation support,
                and deployment guidance.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-slate-900 text-white px-6 py-3 rounded-md hover:bg-slate-800 transition">
                  Explore Projects
                </button>

                <button className="border border-slate-900 px-6 py-3 rounded-md hover:bg-slate-100 transition">
                  Request Custom Project
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE PLACEHOLDER */}
            <div className="flex justify-center md:justify-end">
              <img
                src="/Images/Hero_Image.png"
                alt="Hero Illustration"
                className="w-72 sm:w-80 md:w-[420px] lg:w-[480px] object-contain"
              />
            </div>
          </div>
        </section>

        {/* ================= STATS ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Section Heading */}
            <p className="text-xs uppercase tracking-widest text-blue-700 mb-3">
              Trust & Credibility
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Trusted by Students Across Multiple Institutions
            </h2>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We’ve successfully delivered high-quality academic solutions with
              consistent guidance, professional standards, and reliable support.
            </p>

            {/* Stats Grid */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-10">
              {[
                ["20+", "Projects Delivered"],
                ["50+", "Students Guided"],
                ["6+", "Colleges Served"],
                ["100%", "Client Satisfaction"],
              ].map(([value, label]) => (
                <div key={label} className="space-y-2">
                  <h3 className="text-4xl font-bold text-slate-900">{value}</h3>
                  <p className="text-sm text-gray-600 tracking-wide">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= WHAT WE DO ================= */}
      <section className="py-20 bg-slate-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

    {/* Section Label */}
    <p className="text-xs uppercase tracking-widest text-blue-700 mb-3">
      Our Services
    </p>

    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
      Comprehensive Academic Project Solutions
    </h2>

    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
      End-to-end support covering development, documentation,
      mentorship, and deployment — aligned with academic standards.
    </p>

    {/* Services Grid */}
    <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

      {[
        ["Project Development", "Final year and mini projects built with real-world implementation standards."],
        ["Documentation & IEEE Papers", "Complete reports, research papers, PPT preparation, and viva guidance."],
        ["Technical Mentorship", "Clear explanation and complete understanding of your project architecture."],
        ["Project Ideation", "Innovative, customized concepts tailored to your academic requirements."],
        ["Enhancement & Debugging", "Optimization, restructuring, and issue resolution for existing projects."],
        ["Deployment Assistance", "Hosting setup, environment configuration, and live presentation support."],
      ].map(([title, desc]) => (
        <div
          key={title}
          className="bg-white border border-gray-100 rounded-xl p-8 text-left hover:shadow-lg transition duration-300"
        >
          <h3 className="text-lg font-semibold text-slate-900">
            {title}
          </h3>
          <p className="mt-3 text-sm text-gray-600 leading-relaxed">
            {desc}
          </p>
        </div>
      ))}

    </div>

    {/* Disclaimer */}
    <p className="mt-12 text-xs text-gray-500 max-w-4xl mx-auto leading-relaxed">
      <span className="font-medium text-gray-600">Note:</span> Service scope,
      timelines, and pricing vary based on academic requirements,
      complexity, and customization level. Each project is evaluated
      individually to ensure appropriate guidance and delivery.
    </p>

  </div>
</section>

        {/* ================= WHY CHOOSE US ================= */}
        <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

    {/* Section Label */}
    <p className="text-xs uppercase tracking-widest text-blue-700 mb-3">
      Our Advantage
    </p>

    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
      Why Students Trust Shiksha Source
    </h2>

    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
      We combine technical expertise, structured mentorship, and reliable
      execution to ensure academic success with confidence.
    </p>

    {/* Feature Grid */}
    <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

      {[
        [
          "Professional Execution",
          "Projects developed with structured architecture and real-world standards."
        ],
        [
          "Transparent Pricing",
          "Clear cost structure tailored to academic scope and complexity."
        ],
        [
          "Guided Understanding",
          "Step-by-step explanation to ensure full conceptual clarity."
        ],
        [
          "Dedicated Support",
          "Continuous assistance until final submission and evaluation."
        ],
        [
          "Timely Delivery",
          "Committed schedules aligned with academic deadlines."
        ],
        [
          "Proven Track Record",
          "Consistent positive outcomes across multiple institutions."
        ],
      ].map(([title, desc]) => (
        <div
          key={title}
          className="bg-slate-50 border border-gray-100 rounded-xl p-8 text-left hover:shadow-lg transition duration-300"
        >
          <h3 className="text-lg font-semibold text-slate-900">
            {title}
          </h3>
          <p className="mt-3 text-sm text-gray-600 leading-relaxed">
            {desc}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>

        {/* ================= COLLEGES SCROLL ================= */}
        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-extrabold mb-10">
              Colleges We Served
            </h2>

            <div className="overflow-hidden relative">
              <div className="flex gap-16 animate-scroll whitespace-nowrap">
                {[
                  "./college_Logos/image_314.png",
                  "./college_Logos/image_315.png",
                  "./college_Logos/image_316.png",
                  "./college_Logos/image_317.png",
                  "./college_Logos/image_318.png",
                  "./college_Logos/image_325.png",
                  "./college_Logos/image_314.png",
                  "./college_Logos/image_315.png",
                  "./college_Logos/image_316.png",
                  "./college_Logos/image_317.png",
                ].map((img, i) => (
                  <img
                    key={i}
                    src={`/Images/${img}`}
                    className="w-28 inline-block object-contain"
                    alt="College"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= TECHNOLOGIES ================= */}
        <section className="py-20 bg-slate-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

    {/* Section Label */}
    <p className="text-xs uppercase tracking-widest text-blue-700 mb-3">
      Technology Stack
    </p>

    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
      Technologies & Domains We Work With
    </h2>

    <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
      Industry-relevant tools and frameworks used to build scalable,
      modern, and academically aligned solutions.
    </p>

    {/* Grid */}
    <div className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

      {[
        ["python", "Python", "AI • ML • Data Science"],
        ["java", "Java", "Backend • Desktop"],
        ["javascript", "JavaScript", "Frontend • Web Apps"],
        ["mysql", "SQL / DBMS", "Database Systems"],
        ["react", "React", "Modern UI Development"],
        ["nodejs", "Node.js", "API & Server Development"],
        ["mongodb", "MongoDB", "Cloud Databases"],
        ["tensorflow", "Machine Learning", "Prediction Models"],
      ].map(([icon, title, desc]) => (
        <div
          key={title}
          className="bg-white border border-gray-100 rounded-xl p-8 text-center hover:shadow-lg transition duration-300"
        >
          {/* Icon Container */}
          <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-lg bg-slate-100">
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`}
              alt={title}
              className="w-8 h-8"
            />
          </div>

          <h3 className="text-lg font-semibold text-slate-900">
            {title}
          </h3>

          <p className="mt-2 text-sm text-gray-600">
            {desc}
          </p>
        </div>
      ))}

    </div>

    <p className="mt-12 text-sm text-gray-500">
      Additional technologies are supported based on project scope and academic requirements.
    </p>

  </div>
</section>

        <section className="py-24 bg-slate-50">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

    {/* Section Label */}
    <p className="text-xs uppercase tracking-widest text-blue-700 mb-3">
      Testimonials
    </p>

    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
      Student Success Stories
    </h2>

    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
      Real feedback from students who successfully completed their academic
      projects with our structured guidance.
    </p>

    {/* Testimonial Card */}
    <div className="relative mt-16 bg-white border border-gray-100 rounded-xl p-10 max-w-3xl mx-auto shadow-sm">

      {/* Quote */}
      <p className="text-gray-700 text-lg leading-relaxed">
        <span className="text-4xl text-blue-600 font-serif mr-2">“</span>
        {review}
        <span className="text-4xl text-blue-600 font-serif ml-2">”</span>
      </p>

      {/* User Info */}
      <div className="flex items-center justify-center mt-8 gap-4">
        <img
          src={avatar}
          alt={name}
          className="w-14 h-14 rounded-full object-cover border border-gray-200"
        />
        <div className="text-left">
          <h4 className="font-semibold text-slate-900">
            {name}
          </h4>
          <p className="text-sm text-gray-500">
            {role}
          </p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevTestimonial}
        className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-gray-100 transition"
        aria-label="Previous testimonial"
      >
        ←
      </button>

      <button
        onClick={nextTestimonial}
        className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-gray-100 transition"
        aria-label="Next testimonial"
      >
        →
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-10">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition ${
              i === index ? "bg-slate-900" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>

    </div>

  </div>
</section>

        {/* ================= CUSTOM PROJECT REQUEST ================= */}
        <section className="py-24 bg-slate-50">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center mb-16">
      <p className="text-xs uppercase tracking-widest text-blue-700 mb-3">
        Custom Solutions
      </p>

      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
        Need a Custom Academic Project?
      </h2>

      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Share your requirements and our team will design a structured,
        industry-aligned academic solution tailored to your syllabus.
      </p>
    </div>

    {/* Content Grid */}
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-10 md:p-14 grid md:grid-cols-2 gap-14">

      {/* LEFT SIDE */}
      <div className="flex flex-col justify-center space-y-8">

        <div>
          <h3 className="text-xl font-semibold text-slate-900 mb-6">
            Why Choose a Custom Project?
          </h3>

          <ul className="space-y-4 text-gray-600 text-sm leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-slate-900"></span>
              Fully tailored solution aligned with your academic syllabus
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-slate-900"></span>
              Complete documentation including IEEE paper and presentation
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-slate-900"></span>
              Structured explanation and viva preparation support
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-slate-900"></span>
              Deployment and live demonstration assistance
            </li>
          </ul>
        </div>

        {/* Subtle Response Note */}
        <div className="border border-gray-200 rounded-xl p-6 bg-slate-50">
          <h4 className="font-bold text-slate-900">
            Quick Response Commitment
          </h4>
          <p className="text-sm text-gray-600 mt-2">
            Our team typically responds within 24 hours with a roadmap,
            technical scope, and pricing estimate.
          </p>
        </div>

      </div>

      {/* RIGHT SIDE FORM */}
      <form onSubmit={handleSubmit} className="space-y-6">

        <div>
          <label className="block text-sm  mb-2 text-gray-700 font-bold ">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition"
          />
        </div>

        <div>
          <label className="block text-sm  mb-2 text-gray-700 font-bold">
            Project Domain
          </label>
          <select
            name="domain"
            value={formData.domain}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition"
          >
            <option>Select Domain</option>
            <option>Artificial Intelligence</option>
            <option>Web Development</option>
            <option>Cyber Security</option>
            <option>Mobile Application</option>
            <option>Cloud Computing</option>
          </select>
        </div>

        <div>
          <label className="block text-sm  mb-2 text-gray-700 font-bold">
            Budget Range
          </label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition"
          >
            <option>Select Budget</option>
            <option>₹2,000 - ₹4,000</option>
            <option>₹4,000 - ₹6,000</option>
            <option>₹6,000 - ₹10,000</option>
            <option>₹10,000+</option>
          </select>
        </div>

        <div>
          <label className="block text-sm  mb-2 text-gray-700 font-bold">
            Project Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            placeholder="Describe your project idea and requirements"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-slate-900 text-white py-3 rounded-lg hover:bg-slate-800 transition duration-300"
        >
          {loading ? "Submitting..." : "Request Custom Project"}
        </button>

      </form>

    </div>

  </div>
</section>
      </div>

      <Footer />
    </>
  );
}
