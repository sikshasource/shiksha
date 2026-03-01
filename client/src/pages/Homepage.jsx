import LogIn from "./LogIn";
import SignUp from "./SignUp";
import AboutUs from "./AboutUs";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Stats from "../components/Stats";
import WhatweDo from "../components/WhatweDo";
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
import CustomProject from "../components/CustomProject";
import { useEffect, useRef } from "react";

import React, { useState } from "react";

export default function Homepage() {
  const [index, setIndex] = useState(0);

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
       <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div className="space-y-6 animate-fadeUp">
      <p className="text-xs sm:text-sm tracking-widest text-blue-700 uppercase animate-slideUp delay-100">
        Affordable • Reliable • Student Focused
      </p>

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slideUp delay-200">
        Industry-Ready College Projects
        <span className="block text-blue-700 mt-2">
          Built Professionally. Delivered Affordably.
        </span>
      </h1>

      <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl animate-slideUp delay-300">
        We design and develop academic projects that meet real-world
        standards — complete with documentation, explanation support,
        and deployment guidance.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slideUp delay-500">
        <button className="bg-slate-900 text-white px-6 py-3 rounded-md hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          Explore Projects
        </button>

        <button
          onClick={() => {
            document
              .getElementById("custom-project")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="border border-slate-900 px-6 py-3 rounded-md hover:bg-slate-100 transition-all duration-300 hover:-translate-y-1"
        >
          Request Custom Project
        </button>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center md:justify-end animate-fadeIn delay-300">
      <img
        src="/Images/Hero_Image.png"
        alt="Hero Illustration"
        className="w-72 sm:w-80 md:w-[420px] lg:w-[480px] object-contain animate-float"
      />
    </div>
  </div>

  {/* Custom Animations */}
  <style>
    {`
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(40px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes slideUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-12px); }
        100% { transform: translateY(0px); }
      }

      .animate-fadeUp {
        animation: fadeUp 1s ease-out forwards;
      }

      .animate-slideUp {
        animation: slideUp 0.9s ease-out forwards;
      }

      .animate-fadeIn {
        animation: fadeIn 1.2s ease-out forwards;
      }

      .animate-float {
        animation: float 5s ease-in-out infinite;
      }

      .delay-100 { animation-delay: 0.1s; }
      .delay-200 { animation-delay: 0.2s; }
      .delay-300 { animation-delay: 0.3s; }
      .delay-500 { animation-delay: 0.5s; }
    `}
  </style>
</section>

        {/* This is the stats section */}
        <Stats />

        {/* ================= WHAT WE DO ================= */}
       <WhatweDo/>

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

        <CustomProject />
      </div>

      <Footer />
    </>
  );
}
