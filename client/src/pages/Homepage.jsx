import LogIn from "./LogIn";
import SignUp from "./SignUp";
import AboutUs from "./AboutUs";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import {
  Code2,
  FileText,
  Users,
  Lightbulb,
  Wrench,
  Rocket,
} from "lucide-react";
import {
  ShieldCheck,
  BadgeDollarSign,
  BookOpenCheck,
  Headphones,
  Clock,
  Trophy,
} from "lucide-react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import { useEffect, useRef } from "react";

import React, { useState } from "react";

export default function Homepage() {
  const [index, setIndex] = useState(0);

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

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.01 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Project Development",
      desc: "Final year and mini projects built with real-world implementation standards.",
      icon: Code2,
    },
    {
      title: "Documentation & IEEE Papers",
      desc: "Complete reports, research papers, PPT preparation, and viva guidance.",
      icon: FileText,
    },
    {
      title: "Technical Mentorship",
      desc: "Clear explanation and complete understanding of your project architecture.",
      icon: Users,
    },
    {
      title: "Project Ideation",
      desc: "Innovative, customized concepts tailored to your academic requirements.",
      icon: Lightbulb,
    },
    {
      title: "Enhancement & Debugging",
      desc: "Optimization, restructuring, and issue resolution for existing projects.",
      icon: Wrench,
    },
    {
      title: "Deployment Assistance",
      desc: "Hosting setup, environment configuration, and live presentation support.",
      icon: Rocket,
    },
  ];

  const features = [
    {
      title: "Professional Execution",
      desc: "Projects developed with structured architecture and real-world standards.",
      icon: ShieldCheck,
    },
    {
      title: "Transparent Pricing",
      desc: "Clear cost structure tailored to academic scope and complexity.",
      icon: BadgeDollarSign,
    },
    {
      title: "Guided Understanding",
      desc: "Step-by-step explanation to ensure full conceptual clarity.",
      icon: BookOpenCheck,
    },
    {
      title: "Dedicated Support",
      desc: "Continuous assistance until final submission and evaluation.",
      icon: Headphones,
    },
    {
      title: "Timely Delivery",
      desc: "Committed schedules aligned with academic deadlines.",
      icon: Clock,
    },
    {
      title: "Proven Track Record",
      desc: "Consistent positive outcomes across multiple institutions.",
      icon: Trophy,
    },
  ];

  const testimonials = [
    {
      review:
        "The project explanation was extremely clear. I was able to confidently present during my viva and scored excellent grades.",
      name: "Rahul Sharma",
      role: "Final Year CSE Student",
      avatar: "https://i.pravatar.cc/100?img=3",
    },
    {
      review:
        "Structured documentation and real-world architecture made my project stand out among others in my class.",
      name: "Priya Reddy",
      role: "Information Science Student",
      avatar: "https://i.pravatar.cc/100?img=5",
    },
    {
      review:
        "Support was continuous until submission. I truly understood the implementation instead of just submitting a project.",
      name: "Arjun Verma",
      role: "ECE Student",
      avatar: "https://i.pravatar.cc/100?img=8",
    },
  ];

  const categories = [
    {
      name: "Frontend",
      items: [
        ["react", "React", "Modern UI Development"],
        ["javascript", "JavaScript", "Interactive Web Apps"],
        ["html5", "HTML5", "Web Structure"],
        ["css3", "CSS3", "Responsive Styling"],
      ],
    },
    {
      name: "Backend",
      items: [
        ["nodejs", "Node.js", "API Development"],
        ["java", "Java", "Enterprise Backend"],
        ["python", "Python", "Backend & Automation"],
        ["express", "Express", "REST APIs"],
      ],
    },
    {
      name: "Database",
      items: [
        ["mysql", "MySQL", "Relational Database"],
        ["mongodb", "MongoDB", "Cloud Database"],
        ["postgresql", "PostgreSQL", "Advanced SQL"],
        ["firebase", "Firebase", "Realtime DB"],
      ],
    },
    {
      name: "AI / ML",
      items: [
        ["tensorflow", "TensorFlow", "Prediction Models"],
        ["pytorch", "PyTorch", "Deep Learning"],
        ["python", "Python", "ML & AI Backend"],
        ["anaconda", "Anaconda", "Data Environment"],
      ],
    },
  ];

  const changeCategory = (i) => {
    setFade(false);
    setTimeout(() => {
      setIndex(i);
      setFade(true);
    }, 200);
  };

  const current = categories[index] || categories[0];

  const [fade, setFade] = useState(true);

 
  const safeTestimonial = testimonials[index] || testimonials[0];

  const { review, name, role, avatar } = safeTestimonial;


   const nextTestimonial = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
      setFade(true);
    }, 200);
  };

  const prevTestimonial = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setFade(true);
    }, 200);
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
    html {
  scroll-behavior: smooth;
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

                <button
                  onClick={() => {
                    document
                      .getElementById("custom-project")
                      ?.scrollIntoView({ behaviour: "smooth" });
                  }}
                  className="border border-slate-900 px-6 py-3 rounded-md hover:bg-slate-100 transition"
                >
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
    <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 group">
      {services.map((service, index) => {
        const Icon = service.icon;

        return (
          <div
            key={service.title}
            className={`
              bg-white border border-gray-100 rounded-xl p-8 text-left
              transform md:translate-y-8 md:opacity-0
              md:group-hover:translate-y-0 md:group-hover:opacity-100
              opacity-100
              transition-all duration-500 ease-out
              hover:shadow-lg
            `}
            style={{
              transitionDelay: `${index * 150}ms`,
            }}
          >
            {/* Icon */}
            <div className="w-10 h-10 flex items-center justify-center rounded-md bg-blue-50 mb-4">
              <Icon className="w-5 h-5 text-blue-600" />
            </div>

            <h3 className="text-lg font-semibold text-slate-900">
              {service.title}
            </h3>

            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              {service.desc}
            </p>
          </div>
        );
      })}
    </div>

    {/* Disclaimer */}
    <p className="mt-12 text-xs text-gray-500 max-w-4xl mx-auto leading-relaxed">
      <span className="font-medium text-gray-600">Note:</span> Service
      scope, timelines, and pricing vary based on academic requirements,
      complexity, and customization level. Each project is evaluated
      individually to ensure appropriate guidance and delivery.
    </p>

  </div>
</section>

        {/* ================= WHY CHOOSE US ================= */}
        <section ref={sectionRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs uppercase tracking-widest text-blue-700 mb-3">
              Our Advantage
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Why Students Trust Shiksha Source
            </h2>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We combine technical expertise, structured mentorship, and
              reliable execution to ensure academic success with confidence.
            </p>

            {/* Feature Grid */}
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className={`
                  group bg-slate-50 border border-gray-100 rounded-xl p-8 text-left
                  transition-all duration-700 ease-out
                  hover:shadow-xl hover:-translate-y-2
                  ${
                    visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }
                `}
                    style={{
                      transitionDelay: `${index * 150}ms`,
                    }}
                  >
                    {/* Icon */}
                    <div
                      className="
                    w-12 h-12 flex items-center justify-center rounded-lg 
                    bg-blue-50 mb-5
                    transition-all duration-300
                    group-hover:bg-blue-600
                  "
                    >
                      <Icon
                        strokeWidth={1.8}
                        className="
                      w-6 h-6 text-blue-600
                      transition-all duration-300
                      group-hover:text-white
                      group-hover:scale-110
                    "
                      />
                    </div>

                    <h3 className="text-lg font-semibold text-slate-900">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                );
              })}
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
            {/* Label */}
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

            {/* Category Title */}
            <h3 className="mt-14 text-xl font-semibold text-slate-900">
              {current.name} Technologies
            </h3>

            {/* Grid */}
            <div
              className={`mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 transition-all duration-500 ${
                fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {current.items?.map(([icon, title, desc]) => (
                <div
                  key={title}
                  className="bg-white border border-gray-100 rounded-xl p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-lg bg-slate-100">
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`}
                      alt={title}
                      className="w-8 h-8"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "/Images/default-tech.svg";
                      }}
                    />
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-600">{desc}</p>
                </div>
              ))}
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-3 mt-12">
              {categories.map((_, i) => (
                <button
                  key={i}
                  onClick={() => changeCategory(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === index ? "bg-blue-600 scale-125" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <p className="mt-10 text-sm text-gray-500">
              Additional technologies are supported based on project scope and
              academic requirements.
            </p>
          </div>
        </section>

        {/* {Student Testimonial} */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Label */}
            <p className="text-xs uppercase tracking-widest text-blue-700 mb-3">
              Testimonials
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Student Success Stories
            </h2>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Real feedback from students who successfully completed their
              academic projects with our structured guidance.
            </p>

            {/* Card */}
            <div className="relative mt-16 bg-white border border-gray-100 rounded-2xl p-12 max-w-3xl mx-auto shadow-md transition-all duration-500">
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-blue-600 mx-auto mb-6 opacity-80" />

              {/* Review */}
              <p
                className={`text-gray-700 text-lg leading-relaxed transition-all duration-500 ${
                  fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                {review}
              </p>

              {/* User Info */}
              <div
                className={`flex items-center justify-center mt-10 gap-4 transition-all duration-500 ${
                  fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <img
                  src={avatar}
                  alt={name}
                  className="w-14 h-14 rounded-full object-cover border border-gray-200"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-slate-900">{name}</h4>
                  <p className="text-sm text-gray-500">{role}</p>
                </div>
              </div>

              {/* Arrows */}
              <button
                onClick={prevTestimonial}
                className="absolute -left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-gray-200 bg-white shadow-sm hover:bg-blue-600 hover:text-white transition flex items-center justify-center"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextTestimonial}
                className="absolute -right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-gray-200 bg-white shadow-sm hover:bg-blue-600 hover:text-white transition flex items-center justify-center"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex justify-center gap-3 mt-12">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      i === index ? "bg-blue-600 scale-125" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= CUSTOM PROJECT REQUEST ================= */}
        <section id="custom-project" className="py-24 bg-slate-50">
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
                      Fully tailored solution aligned with your academic
                      syllabus
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 w-2 h-2 rounded-full bg-slate-900"></span>
                      Complete documentation including IEEE paper and
                      presentation
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
