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
      description: "Machine learning model for stock forecasting using LSTM.",
      price: "₹6,999",
    },
    {
      id: 2,
      title: "Online Voting System",
      domain: "Web Development",
      level: "Intermediate",
      description: "Secure MERN stack voting platform.",
      price: "₹3,999",
    },
    {
      id: 3,
      title: "Network Intrusion Detection",
      domain: "Cyber Security",
      level: "Advanced",
      description: "Real-time intrusion detection using ML algorithms.",
      price: "₹7,499",
    },
    {
      id: 4,
      title: "Student Management System",
      domain: "Database Systems",
      level: "Beginner",
      description: "CRUD based academic database system.",
      price: "₹2,499",
    },
  ];

  const filteredProjects = projects.filter(
    (project) =>
      (!domain || project.domain === domain) &&
      (!level || project.level === level)
  );

  const handleViewProject = () => {
    if (!userToken) {
      navigate("/signin");
    } else {
      alert("Project details page coming soon 🚀");
    }
  };

  return (
    <>
      <NavBar />

      <div className="min-h-screen bg-gray-50 pt-28 pb-16 px-6">
        <div className="max-w-6xl mx-auto">

          <h1 className="text-4xl font-bold text-center mb-10">
            Browse Projects By Domain
          </h1>

          {/* FILTER SECTION */}
          <div className="bg-white shadow-md rounded-xl p-6 grid md:grid-cols-2 gap-6">

            {/* Domain Dropdown */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Select Domain
              </label>
              <select
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Domains</option>
                <option value="Artificial Intelligence">Artificial Intelligence</option>
                <option value="Web Development">Web Development</option>
                <option value="Cyber Security">Cyber Security</option>
                <option value="Database Systems">Database Systems</option>
              </select>
            </div>

            {/* Level Dropdown */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Project Level
              </label>
              <select
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>

          </div>

          {/* PROJECT CARDS */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">

            {filteredProjects.length === 0 ? (
              <p className="col-span-3 text-center text-gray-500">
                No projects found for selected filters.
              </p>
            ) : (
              filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-xl shadow hover:shadow-xl transition p-6"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-500 mb-2">
                    {project.domain} • {project.level}
                  </p>

                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <span className="font-bold text-blue-600">
                      {project.price}
                    </span>

                    <button
                      onClick={handleViewProject}
                      className="bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700 transition"
                    >
                      View
                    </button>
                  </div>
                </div>
              ))
            )}

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}
