// import React, { useState } from "react";
// import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// export default function ByTechnology() {
//   const { userToken } = useAuth();
//   const navigate = useNavigate();

//   const [technology, setTechnology] = useState("");
//   const [projectType, setProjectType] = useState("");

//   const projects = [
//     {
//       id: 1,
//       title: "MERN Stack E-Commerce Platform",
//       technology: "MERN",
//       type: "Web Application",
//       description: "Complete full-stack e-commerce solution using MERN.",
//       price: "₹5,999",
//     },
//     {
//       id: 2,
//       title: "Machine Learning Prediction Model",
//       technology: "Python",
//       type: "AI/ML",
//       description: "Regression & classification ML system using scikit-learn.",
//       price: "₹6,499",
//     },
//     {
//       id: 3,
//       title: "Android Attendance App",
//       technology: "Java",
//       type: "Mobile Application",
//       description: "Android-based attendance tracking system.",
//       price: "₹4,499",
//     },
//     {
//       id: 4,
//       title: "Cloud Based File Storage",
//       technology: "Node.js",
//       type: "Cloud Application",
//       description: "Secure cloud storage system with authentication.",
//       price: "₹5,499",
//     },
//   ];

//   const filteredProjects = projects.filter(
//     (project) =>
//       (!technology || project.technology === technology) &&
//       (!projectType || project.type === projectType)
//   );

//   const handleViewProject = () => {
//     if (!userToken) {
//       navigate("/signin");
//     } else {
//       alert("Project details page coming soon 🚀");
//     }
//   };

//   return (
//     <>
//       <NavBar />

//       <div className="min-h-screen bg-gray-50 pt-28 pb-16 px-6">
//         <div className="max-w-6xl mx-auto">

//           <h1 className="text-4xl font-bold text-center mb-10">
//             Browse Projects By Technology
//           </h1>

//           {/* FILTER SECTION */}
//           <div className="bg-white shadow-md rounded-xl p-6 grid md:grid-cols-2 gap-6">

//             {/* Technology Dropdown */}
//             <div>
//               <label className="block text-sm font-medium mb-2">
//                 Select Technology
//               </label>
//               <select
//                 value={technology}
//                 onChange={(e) => setTechnology(e.target.value)}
//                 className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
//               >
//                 <option value="">All Technologies</option>
//                 <option value="MERN">MERN</option>
//                 <option value="Python">Python</option>
//                 <option value="Java">Java</option>
//                 <option value="Node.js">Node.js</option>
//               </select>
//             </div>

//             {/* Project Type Dropdown */}
//             <div>
//               <label className="block text-sm font-medium mb-2">
//                 Select Project Type
//               </label>
//               <select
//                 value={projectType}
//                 onChange={(e) => setProjectType(e.target.value)}
//                 className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
//               >
//                 <option value="">All Types</option>
//                 <option value="Web Application">Web Application</option>
//                 <option value="Mobile Application">Mobile Application</option>
//                 <option value="AI/ML">AI/ML</option>
//                 <option value="Cloud Application">Cloud Application</option>
//               </select>
//             </div>

//           </div>

//           {/* PROJECT CARDS */}
//           <div className="grid md:grid-cols-3 gap-8 mt-12">

//             {filteredProjects.length === 0 ? (
//               <p className="col-span-3 text-center text-gray-500">
//                 No projects found for selected filters.
//               </p>
//             ) : (
//               filteredProjects.map((project) => (
//                 <div
//                   key={project.id}
//                   className="bg-white rounded-xl shadow hover:shadow-xl transition p-6"
//                 >
//                   <h3 className="text-xl font-semibold mb-2">
//                     {project.title}
//                   </h3>

//                   <p className="text-sm text-gray-500 mb-2">
//                     {project.technology} • {project.type}
//                   </p>

//                   <p className="text-gray-600 text-sm mb-4">
//                     {project.description}
//                   </p>

//                   <div className="flex justify-between items-center">
//                     <span className="font-bold text-blue-600">
//                       {project.price}
//                     </span>

//                     <button
//                       onClick={handleViewProject}
//                       className="bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700 transition"
//                     >
//                       View
//                     </button>
//                   </div>
//                 </div>
//               ))
//             )}

//           </div>

//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }





import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ByTechnology() {
  const { userToken } = useAuth();
  const navigate = useNavigate();

  const [technology, setTechnology] = useState("");
  const [projectType, setProjectType] = useState("");

  const projects = [
    {
      id: 1,
      title: "MERN Stack E-Commerce Platform",
      technology: "MERN",
      type: "Web Application",
      description:
        "Full-stack e-commerce platform built using MongoDB, Express, React, and Node.js.",
      price: "₹5,999",
    },
    {
      id: 2,
      title: "Machine Learning Prediction Model",
      technology: "Python",
      type: "AI/ML",
      description:
        "Regression and classification model using scikit-learn with structured evaluation.",
      price: "₹6,499",
    },
    {
      id: 3,
      title: "Android Attendance App",
      technology: "Java",
      type: "Mobile Application",
      description:
        "Android-based attendance tracking system with authentication and admin panel.",
      price: "₹4,499",
    },
    {
      id: 4,
      title: "Cloud Based File Storage",
      technology: "Node.js",
      type: "Cloud Application",
      description:
        "Secure cloud storage system with authentication and file encryption.",
      price: "₹5,499",
    },
  ];

  const filteredProjects = projects.filter(
    (project) =>
      (!technology || project.technology === technology) &&
      (!projectType || project.type === projectType)
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

      <div className="pt-24 bg-gray-50">

        {/* ===== PAGE BANNER ===== */}
        <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-20 text-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-xs uppercase tracking-widest text-blue-400 mb-4">
              Technology Catalogue
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Browse Projects By Technology
            </h1>

            <p className="max-w-2xl mx-auto text-gray-300">
              Explore academic projects categorized by technology stack and
              application type. Choose solutions aligned with your learning goals.
            </p>
          </div>
        </section>

        {/* ===== FILTER SECTION ===== */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">

            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8 grid md:grid-cols-2 gap-8">

              {/* Technology Filter */}
              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-700">
                  Select Technology
                </label>

                <select
                  value={technology}
                  onChange={(e) => setTechnology(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition"
                >
                  <option value="">All Technologies</option>
                  <option value="MERN">MERN Stack</option>
                  <option value="Python">Python</option>
                  <option value="Java">Java</option>
                  <option value="Node.js">Node.js</option>
                </select>
              </div>

              {/* Project Type Filter */}
              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-700">
                  Select Project Type
                </label>

                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition"
                >
                  <option value="">All Types</option>
                  <option value="Web Application">Web Application</option>
                  <option value="Mobile Application">Mobile Application</option>
                  <option value="AI/ML">AI / ML</option>
                  <option value="Cloud Application">Cloud Application</option>
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
                      {project.technology} • {project.type}
                    </p>

                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-900">
                        {project.price}
                      </span>

                      <button
                        onClick={handleViewProject}
                        className="bg-slate-900 text-white px-5 py-2 rounded-md hover:bg-slate-800 transition"
                      >
                        View Details
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