import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ByDomain() {
  const { userToken } = useAuth();
  const navigate = useNavigate();

  const [domain, setDomain] = useState("");
  const [level, setLevel] = useState("");

  const projects = [
    {
      id: 1,
      title: "Stock Price Prediction System",
      domain: "Artificial Intelligence",
      level: "Advanced",
      description:
        "Machine learning based forecasting system using LSTM architecture.",
      price: "₹6,999",
    },
    {
      id: 2,
      title: "Online Voting System",
      domain: "Web Development",
      level: "Intermediate",
      description:
        "Secure MERN stack voting platform with authentication module.",
      price: "₹3,999",
    },
    {
      id: 3,
      title: "Network Intrusion Detection",
      domain: "Cyber Security",
      level: "Advanced",
      description:
        "Real-time intrusion detection system powered by ML algorithms.",
      price: "₹7,499",
    },
    {
      id: 4,
      title: "Student Management System",
      domain: "Database Systems",
      level: "Beginner",
      description:
        "Structured CRUD-based academic database management system.",
      price: "₹2,499",
    },
  ];

  const filteredProjects = projects.filter(
    (project) =>
      (!domain || project.domain === domain) &&
      (!level || project.level === level)
  );
const handleBuyProject = (project) => {
  if (!userToken) {
    navigate("/signin");
    return;
  }

  const phoneNumber = "9482384644"; // ✅ Replace with your WhatsApp number (country code included, no +)

  const message = `
Hello Shiksha Source 👋

I am interested in the following project:

📌 Project: ${project.title}
💻 Technology: ${project.technology}
📂 Type: ${project.type}
💰 Price: ${project.price}

Please share more details.
  `;

  const encodedMessage = encodeURIComponent(message);

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappURL, "_blank");
};

  return (
    <>
      <NavBar />

      <div className="pt-24 bg-gray-50">

        {/* ===== PAGE BANNER ===== */}
        <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-20 text-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-xs uppercase tracking-widest text-blue-400 mb-4">
              Project Catalogue
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Explore Projects By Domain
            </h1>

            <p className="max-w-2xl mx-auto text-gray-300">
              Browse structured academic projects categorized by domain and
              difficulty level. Select a project aligned with your academic
              requirements.
            </p>
          </div>
        </section>

        {/* ===== FILTER SECTION ===== */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">

            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8 grid md:grid-cols-2 gap-8">

              {/* Domain Filter */}
              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-700">
                  Select Domain
                </label>

                <select
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition"
                >
                  <option value="">All Domains</option>
                  <option value="Artificial Intelligence">
                    Artificial Intelligence
                  </option>
                  <option value="Web Development">
                    Web Development
                  </option>
                  <option value="Cyber Security">
                    Cyber Security
                  </option>
                  <option value="Database Systems">
                    Database Systems
                  </option>
                </select>
              </div>

              {/* Level Filter */}
              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-700">
                  Project Level
                </label>

                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition"
                >
                  <option value="">All Levels</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>

            </div>

            {/* ===== PROJECT GRID ===== */}
            <div className="grid md:grid-cols-3 gap-10 mt-16">

              {filteredProjects.length === 0 ? (
                <div className="col-span-3 text-center py-16 bg-white border border-gray-100 rounded-xl">
                  <p className="text-gray-500">
                    No projects found for selected filters.
                  </p>
                </div>
              ) : (
                filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition duration-300"
                  >
                    <h3 className="text-xl font-semibold mb-3 text-slate-900">
                      {project.title}
                    </h3>

                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-3">
                      {project.domain} • {project.level}
                    </p>

                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-900">
                        {project.price}
                      </span>

                     <button
  onClick={() => handleBuyProject(project)}
  className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition"
>
  Buy on WhatsApp
</button>
                    </div>
                  </div>
                ))
              )}

            </div>

          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}