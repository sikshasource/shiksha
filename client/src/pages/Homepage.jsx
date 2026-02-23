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
    const response = await fetch("https://your-backend-url.com/api/custom-project", {
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

      <div className="bg-gray-50 text-gray-800 overflow-x-hidden">

      <NavBar/>
        {/* ================= HERO ================= */}
       <section className="bg-gradient-to-r from-blue-600/10 to-purple-600/10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            <div>
              <p className="text-sm text-blue-600 font-semibold tracking-wide">
                AFFORDABLE • RELIABLE • STUDENT FRIENDLY
              </p>

           <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
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

              <p className="mt-4 text-gray-700 leading-relaxed typewriter max-w-xl">
  We build industry-ready college projects with expert guidance,<br/>
  clear documentation, and deployment support.
</p>

            </div>

            <div className="flex justify-center md:justify-end">
              <img
                src="./Images/Hero_Image.png"
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

        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 py-12 text-white mt-8 shadow-lg">
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



            {/* ================= CUSTOM PROJECT REQUEST ================= */}
<section className="py-24 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
  <div className="max-w-6xl mx-auto px-6">

    <div className="text-center mb-16">
      <h2 className="text-4xl tracking-tight">
        Need a Custom Project?
      </h2>
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
        Tell us your idea or requirements. Our experts will design a
        professional academic project tailored exactly for you.
      </p>
    </div>

    <div className="bg-white shadow-2xl rounded-3xl p-12 grid md:grid-cols-2 gap-12 border border-gray-100">

      {/* LEFT SIDE INFO */}
      <div className="flex flex-col justify-center space-y-8">

        <div>
          <h3 className="text-2xl mb-4">
            Why Choose Custom?
          </h3>

          <ul className="space-y-4 text-gray-600">
            <li className="flex items-center gap-3">
              <span className="text-green-500">✔</span>
              Unique project tailored to your syllabus
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-500">✔</span>
              IEEE paper & documentation included
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-500">✔</span>
              Full explanation & viva support
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-500">✔</span>
              Deployment & hosting guidance
            </li>
          </ul>
        </div>

        <div className="bg-indigo-600 text-white rounded-2xl p-6 shadow-lg">
          <h4 className="text-lg">
            Fast Response Guaranteed
          </h4>
          <p className="text-sm opacity-90 mt-2 leading-relaxed">
            We usually respond within 24 hours with project roadmap & quotation.
          </p>
        </div>

      </div>

      {/* RIGHT SIDE FORM */}
   <form onSubmit={handleSubmit} className="space-y-6">

        <div>
          <label className="block text-sm mb-2">
            Your Name
          </label>
          <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Enter your name"
  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
/>
        </div>

        <div>
          <label className="block text-sm mb-2">
            Project Domain
          </label>
       <select
  name="domain"
  value={formData.domain}
  onChange={handleChange}
  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
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
          <label className="block text-sm mb-2">
            Budget Range
          </label>
        <select
  name="budget"
  value={formData.budget}
  onChange={handleChange}
  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
>
            <option>Select Budget</option>
            <option>₹2,000 - ₹4,000</option>
            <option>₹4,000 - ₹6,000</option>
            <option>₹6,000 - ₹10,000</option>
            <option>₹10,000+</option>
          </select>
        </div>

        <div>
          <label className="block text-sm mb-2">
            Describe Your Requirement
          </label>
       <textarea
  name="description"
  value={formData.description}
  onChange={handleChange}
  rows="4"
  placeholder="Explain your project idea..."
  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition resize-none"
/>
        </div>

   <button
  type="submit"
  disabled={loading}
  className="w-full bg-slate-900 text-white py-3 rounded-xl hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-2xl"
>
  {loading ? "Submitting..." : "Request Custom Project"}
</button>
        

      </form>

    </div>
  </div>
</section>

     </div>

      <Footer/>
    </>
  );
}
