import SignIn from "./SignIn"
import SignUp from "./SignUp"
import AboutUs from "./AboutUs"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

import React,{useState} from "react";





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
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const { name, role, review, avatar } = testimonials[index];


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

      <div className="bg-gray-50 text-gray-800">

      <NavBar/>
        {/* ================= HERO ================= */}
        <section className="bg-gradient-to-r from-blue-600/10 to-purple-600/10">
          <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

            <div>
              <p className="text-sm text-blue-600 font-semibold tracking-wide">
                AFFORDABLE • RELIABLE • STUDENT FRIENDLY
              </p>

            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mt-2">
  <span className="block animate-line delay-1">
    We Build College Projects
  </span>

  <span className="text-blue-600 block animate-line delay-2">
    Professionally
  </span>

  <span className="text-blue-600 block animate-line delay-3">
    & Affordably
  </span>
</h2>


              {/* <p className="mt-4 text-gray-700 leading-relaxed">
                We help students develop high-quality academic projects with
                real-world standards, professional guidance, documentation
                support and deployment assistance. Perfect for engineering &
                degree students.
              </p> */}

              <p className="mt-4 text-gray-700 leading-relaxed typewriter max-w-xl">
  We build industry-ready college projects with expert guidance,<br/>
  clear documentation, and deployment support.
</p>

            </div>

            <div className="flex justify-center md:justify-end">
              <img
                src="./Images/Hero Image.png"
                className="w-[320px] md:w-[450px] rounded-2xl object-contain"
                alt="Hero"
              />
            </div>

          </div>
        </section>

        {/* ================= STATS ================= */}
        <section className="py-16 bg-white">
          <h2 className="max-w-7xl mx-auto text-center px-6 text-3xl font-bold">
            Trusted By Students & Institutions
          </h2>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-10 text-white mt-6">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-6">
              {[
                ["20+", "Projects Delivered"],
                ["50+", "Students Helped"],
                ["6+", "Colleges Worked With"],
                ["100%", "Student Satisfaction"],
              ].map(([value, label]) => (
                <div key={label}>
                  <h3 className="text-3xl font-bold">{value}</h3>
                  <p className="opacity-90">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= WHAT WE DO ================= */}
        <section className="py-16 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-6 text-center">

            <h2 className="text-3xl font-extrabold">What We Do</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Complete academic project support from idea to execution.
            </p>

            <div className="grid gap-6 mt-12 sm:grid-cols-2 md:grid-cols-3">
              {[
                ["💻", "Project Development", "Final year & mini projects with real-world standards."],
                ["📄", "Documentation Support", "IEEE Papers, Reports, PPT & Viva Preparation."],
                ["🎯", "Mentorship", "Complete understanding & explanation support."],
                ["🚀", "Project Ideas & Guidance", "Unique & innovative concepts for every domain."],
                ["🛠️", "Bug Fixing & Improvements", "We fix & polish your existing projects."],
                ["🌐", "Deployment Support", "Hosting, setup & live presentation help."],
              ].map(([icon, title, desc]) => (
                <div key={title} className="bg-white rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 transition p-6">
                  <div className="w-12 h-12 bg-blue-100 grid place-items-center rounded-xl text-xl">
                    {icon}
                  </div>
                  <h3 className="mt-4 font-semibold text-lg">{title}</h3>
                  <p className="text-gray-500 text-sm mt-2">{desc}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-600 mt-6 text-xs max-w-4xl mx-auto leading-relaxed">
              <strong>Disclaimer:</strong> Services, timelines, cost structure, and project features may vary depending on college regulations, student expectations, domain complexity, and customization level. Pricing is flexible and adjusted case-to-case.
            </p>

          </div>
        </section>


              {/* ================= WHY CHOOSE US ================= */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-6 text-center">

    <h2 className="text-3xl font-extrabold">
      Why Choose Us?
    </h2>

    <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
      Designed especially for students — quality, clarity & affordability.
    </p>

    <div className="grid gap-6 mt-12 sm:grid-cols-2 md:grid-cols-3">

      {[
        ["🌟", "Professional Quality", "Industry-level execution guaranteed."],
        ["💰", "Affordable Pricing", "Budget-friendly & transparent."],
        ["🧑‍🏫", "Proper Guidance", "We make you understand everything."],
        ["🤝", "Friendly Support", "We stay with you till submission."],
        ["⚡", "On-Time Delivery", "Fast & reliable completion."],
        ["✔️", "Trusted by Students", "Strong reputation & results."],
      ].map(([icon, title, desc]) => (
        <div
          key={title}
          className="bg-gray-50 rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 transition p-6"
        >
          <div className="w-12 h-12 bg-blue-100 rounded-xl grid place-items-center text-xl">
            {icon}
          </div>
          <h3 className="mt-4 font-semibold text-lg">
            {title}
          </h3>
          <p className="text-gray-500 text-sm mt-2">
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
                  "./college Logos/image 314.png",
                  "./college Logos/image 315.png",
                  "./college Logos/image 316.png",
                  "./college Logos/image 317.png",
                  "./college Logos/image 318.png",
                  "./college Logos/image 325.png",
                  "./college Logos/image 314.png",
                  "./college Logos/image 315.png",
                  "./college Logos/image 316.png",
                  "./college Logos/image 317.png",
                ].map((img, i) => (
                  <img
                    key={i}
                    src={`/images/${img}`}
                    className="w-28 inline-block object-contain"
                    alt="College"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>




                {/* ================= TECHNOLOGIES ================= */}
<section className="py-16 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10">
  <div className="max-w-7xl mx-auto px-6 text-center">

    <h2 className="text-3xl font-extrabold">
      Technologies & Domains We Work With
    </h2>

    <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
      We develop projects using latest programming technologies across multiple
      real-world domains to ensure industry-relevant solutions.
    </p>

    <div className="grid gap-6 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

      {[
        ["python", "Python", "AI • ML • Data Science"],
        ["java", "Java", "Desktop • Backend"],
        ["javascript", "JavaScript", "Frontend • Web Apps"],
        ["mysql", "SQL / DBMS", "Database • Analytics"],
        ["react", "React", "Modern UI"],
        ["nodejs", "Node JS", "Backend • APIs"],
        ["mongodb", "MongoDB", "Cloud Database"],
        ["tensorflow", "Machine Learning", "Prediction Models"],
      ].map(([icon, title, desc]) => (
        <div
          key={title}
          className="bg-white/90 backdrop-blur rounded-2xl shadow hover:shadow-xl p-6"
        >
          <img
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`}
            className="w-10 mx-auto"
            alt={title}
          />
          <h3 className="mt-3 font-semibold">{title}</h3>
          <p className="text-gray-500 text-sm">{desc}</p>
        </div>
      ))}

    </div>

    <p className="text-gray-600 mt-6 text-sm">
      We also support many other technologies based on college requirements and project needs.
    </p>

  </div>
</section>



 
  
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-extrabold mb-12">
          Student Success Stories
        </h2>

        <div className="relative bg-gray-50 rounded-2xl shadow-lg p-10 max-w-3xl mx-auto">

          {/* Quote */}
          <p className="text-gray-700 text-lg leading-relaxed italic">
            “{review}”
          </p>

          {/* Avatar + Info */}
          <div className="flex items-center justify-center mt-6 gap-4">
            <img
              src={avatar}
              alt={name}
              className="w-12 h-12 rounded-full object-cover border"
            />
            <div className="text-left">
              <h4 className="font-semibold">{name}</h4>
              <p className="text-sm text-gray-500">{role}</p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow hover:bg-gray-100 transition text-xl"
            aria-label="Previous testimonial"
          >
            ←
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow hover:bg-gray-100 transition text-xl"
            aria-label="Next testimonial"
          >
            →
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`w-2.5 h-2.5 rounded-full ${
                  i === index ? "bg-blue-600" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>

     </div>

      <Footer/>
    </>
  );
}
