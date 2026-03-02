import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectGallerySlider() {
  const [current, setCurrent] = useState(0);

  const projects = [
    {
      id: 1,
      title: "AI Based Disease Prediction System",
      student: "Rahul S",
      description:
        "Machine learning based health prediction system with real-time diagnosis interface and evaluation metrics.",
      images: [
        "/images/project1-1.png",
        "/images/project1-2.png",
        "/images/project1-3.png",
      ],
    },
    {
      id: 2,
      title: "MERN Stack E-Commerce Platform",
      student: "Ananya M",
      description:
        "Full-stack e-commerce application with admin dashboard, cart system and secure authentication.",
      images: [
        "/images/project2-1.png",
        "/images/project2-2.png",
        "/images/project2-3.png",
      ],
    },
    {
      id: 3,
      title: "Android Smart Attendance App",
      student: "Karthik R",
      description:
        "Mobile attendance tracking system with admin panel and centralized database.",
      images: [
        "/images/project3-1.png",
        "/images/project3-2.png",
        "/images/project3-3.png",
      ],
    },
  ];

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [projects.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-blue-600 mb-3">
            Student Projects
          </p>
          <h2 className="text-4xl font-bold text-slate-900">
            Real Projects Delivered Successfully
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Each project is built professionally and explained clearly to
            ensure students succeed in viva and final submission.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">

          {/* Slide Content */}
          <div className="bg-white rounded-2xl shadow-xl p-10 grid md:grid-cols-2 gap-12 items-center transition-all duration-700">

            {/* Images */}
            <div className="grid grid-cols-2 gap-4">
              {projects[current].images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="project"
                  className="rounded-xl object-cover h-40 w-full hover:scale-105 transition duration-300"
                />
              ))}
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                {projects[current].title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {projects[current].description}
              </p>

              <div className="inline-block bg-slate-100 px-4 py-2 rounded-lg text-sm font-medium text-slate-700">
                Developed for:{" "}
                <span className="font-semibold">
                  {projects[current].student}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full hover:bg-gray-100 transition"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full hover:bg-gray-100 transition"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {projects.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  current === index
                    ? "bg-blue-600"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}