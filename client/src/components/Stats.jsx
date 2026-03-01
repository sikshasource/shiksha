import React, { useEffect, useRef, useState } from "react";

const StatsSection = () => {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  const stats = [
    { value: 20, suffix: "+", label: "Projects Delivered" },
    { value: 50, suffix: "+", label: "Students Guided" },
    { value: 6, suffix: "+", label: "Colleges Served" },
    { value: 100, suffix: "%", label: "Client Satisfaction" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 1));

  // 👇 Detect when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  // 👇 Count animation
  useEffect(() => {
    if (!startCount) return;

    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setCounts((prev) => {
          const updated = [...prev];
          if (updated[index] < stat.value) {
            updated[index] += Math.ceil(stat.value / 40); // speed control
          } else {
            updated[index] = stat.value;
          }
          return updated;
        });
      }, 40);
    });

    return () => intervals.forEach(clearInterval);
  }, [startCount]);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <div key={stat.label} className="space-y-2">
              <h3 className="text-4xl font-bold text-slate-900">
                {counts[index]}
                {stat.suffix}
              </h3>
              <p className="text-sm text-gray-600 tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;