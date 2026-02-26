// import React, { useState } from "react";
// import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// export default function ByDegree() {
//   const { userToken } = useAuth();
//   const navigate = useNavigate();

//   const [degree, setDegree] = useState("");
//   const [semester, setSemester] = useState("");

//   const projects = [
//     {
//       id: 1,
//       title: "AI Chatbot System",
//       degree: "B.Tech",
//       semester: "8",
//       description: "Machine Learning powered chatbot with NLP integration.",
//       price: "₹4,999",
//     },
//     {
//       id: 2,
//       title: "E-Commerce Website",
//       degree: "BCA",
//       semester: "6",
//       description: "Full stack MERN based e-commerce platform.",
//       price: "₹3,499",
//     },
//     {
//       id: 3,
//       title: "Hospital Management System",
//       degree: "MCA",
//       semester: "4",
//       description: "Database-driven hospital automation system.",
//       price: "₹5,999",
//     },
//   ];

//   const filteredProjects = projects.filter(
//     (project) =>
//       (!degree || project.degree === degree) &&
//       (!semester || project.semester === semester)
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
//             Browse Projects By Degree
//           </h1>

//           {/* FILTER SECTION */}
//           <div className="bg-white shadow-md rounded-xl p-6 grid md:grid-cols-2 gap-6">

//             {/* Degree Dropdown */}
//             <div>
//               <label className="block text-sm font-medium mb-2">
//                 Select Degree Level
//               </label>
//               <select
//                 value={degree}
//                 onChange={(e) => setDegree(e.target.value)}
//                 className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
//               >
//                 <option value="">All Degrees</option>
//                 <option value="B.Tech">B.Tech</option>
//                 <option value="BCA">BCA</option>
//                 <option value="MCA">MCA</option>
//                 <option value="MBA">MBA</option>
//               </select>
//             </div>

//             {/* Semester Dropdown */}
//             <div>
//               <label className="block text-sm font-medium mb-2">
//                 Select Semester
//               </label>
//               <select
//                 value={semester}
//                 onChange={(e) => setSemester(e.target.value)}
//                 className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
//               >
//                 <option value="">All Semesters</option>
//                 <option value="1">Sem 1</option>
//                 <option value="2">Sem 2</option>
//                 <option value="3">Sem 3</option>
//                 <option value="4">Sem 4</option>
//                 <option value="5">Sem 5</option>
//                 <option value="6">Sem 6</option>
//                 <option value="7">Sem 7</option>
//                 <option value="8">Sem 8</option>
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
//                     {project.degree} • Semester {project.semester}
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

export default function ByDegree() {
  const { userToken } = useAuth();
  const navigate = useNavigate();

  const [degree, setDegree] = useState("");
  const [semester, setSemester] = useState("");

  const projects = [
    {
      id: 1,
      title: "AI Chatbot System",
      degree: "B.Tech",
      semester: "8",
      description:
        "Machine learning powered chatbot with NLP integration and real-time response engine.",
      price: "₹4,999",
    },
    {
      id: 2,
      title: "E-Commerce Website",
      degree: "BCA",
      semester: "6",
      description:
        "Full stack MERN-based e-commerce platform with authentication and payment integration.",
      price: "₹3,499",
    },
    {
      id: 3,
      title: "Hospital Management System",
      degree: "MCA",
      semester: "4",
      description:
        "Structured database-driven hospital automation and reporting system.",
      price: "₹5,999",
    },
  ];

  const filteredProjects = projects.filter(
    (project) =>
      (!degree || project.degree === degree) &&
      (!semester || project.semester === semester)
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
              Academic Catalogue
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Browse Projects By Degree
            </h1>

            <p className="max-w-2xl mx-auto text-gray-300">
              Discover structured academic projects categorized by degree level
              and semester. Choose solutions aligned with your curriculum and
              academic objectives.
            </p>
          </div>
        </section>

        {/* ===== FILTER SECTION ===== */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">

            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8 grid md:grid-cols-2 gap-8">

              {/* Degree Filter */}
              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-700">
                  Select Degree Level
                </label>

                <select
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition"
                >
                  <option value="">All Degrees</option>
                  <option value="B.Tech">B.Tech</option>
                  <option value="BCA">BCA</option>
                  <option value="MCA">MCA</option>
                  <option value="MBA">MBA</option>
                </select>
              </div>

              {/* Semester Filter */}
              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-700">
                  Select Semester
                </label>

                <select
                  value={semester}
                  onChange={(e) => setSemester(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition"
                >
                  <option value="">All Semesters</option>
                  {[1,2,3,4,5,6,7,8].map((sem) => (
                    <option key={sem} value={sem}>
                      Semester {sem}
                    </option>
                  ))}
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
                      {project.degree} • Semester {project.semester}
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