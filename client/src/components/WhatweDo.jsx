import React, { useEffect, useRef, useState } from "react";
import { Code, FileText, Shield } from "lucide-react";
const WhatweDo = ({
  services = [
    {
      title: "Project Development",
      desc: "Industry-aligned academic projects.",
      icon: Code,
    },
    {
      title: "IEEE Documentation",
      desc: "Complete research paper.",
      icon: FileText,
    },
    {
      title: "Cyber Security Solutions",
      desc: "Secure and tested implementations.",
      icon: Shield,
    },
  ],
}) =>  {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Trigger animation when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

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
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className={`
                  bg-white border border-gray-100 rounded-xl p-8 text-left
                  transform transition-all duration-700 ease-out
                  ${visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}
                  hover:shadow-xl hover:-translate-y-2
                `}
                style={{
                  transitionDelay: `${index * 120}ms`,
                }}
              >
                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center rounded-md bg-blue-50 mb-4 transition duration-300">
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
  );
};

export default WhatweDo;