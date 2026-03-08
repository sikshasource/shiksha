import React, {useState} from 'react'







const CustomProject = () => {


  const [loading, setLoading] = useState(false);

   const [formData, setFormData] = useState({
    name: "",
    domain: "",
    budget: "",
    description: "",
  });



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
      const response = await fetch("https://shiksha-l2iu.onrender.com/api/custom-project", {
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
    
        <section id="custom-project" className="py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-widest text-blue-700 mb-3">
                Custom Solutions
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Need a Custom Academic Project?
              </h2>

              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Share your requirements and our team will design a structured,
                industry-aligned academic solution tailored to your syllabus.
              </p>
            </div>

            {/* Content Grid */}
            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-10 md:p-14 grid md:grid-cols-2 gap-14">
              {/* LEFT SIDE */}
              <div className="flex flex-col justify-center space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-6">
                    Why Choose a Custom Project?
                  </h3>

                  <ul className="space-y-4 text-gray-600 text-sm leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 w-2 h-2 rounded-full bg-slate-900"></span>
                      Fully tailored solution aligned with your academic
                      syllabus
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 w-2 h-2 rounded-full bg-slate-900"></span>
                      Complete documentation including IEEE paper and
                      presentation
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 w-2 h-2 rounded-full bg-slate-900"></span>
                      Structured explanation and viva preparation support
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 w-2 h-2 rounded-full bg-slate-900"></span>
                      Deployment and live demonstration assistance
                    </li>
                  </ul>
                </div>

                {/* Subtle Response Note */}
                <div className="border border-gray-200 rounded-xl p-6 bg-slate-50">
                  <h4 className="font-bold text-slate-900">
                    Quick Response Commitment
                  </h4>
                  <p className="text-sm text-gray-600 mt-2">
                    Our team typically responds within 24 hours with a roadmap,
                    technical scope, and pricing estimate.
                  </p>
                </div>
              </div>

              {/* RIGHT SIDE FORM */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm  mb-2 text-gray-700 font-bold ">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm  mb-2 text-gray-700 font-bold">
                    Project Domain
                  </label>
                  <select
                    name="domain"
                    value={formData.domain}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition"
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
                  <label className="block text-sm  mb-2 text-gray-700 font-bold">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition"
                  >
                    <option>Select Budget</option>
                    <option>₹2,000 - ₹4,000</option>
                    <option>₹4,000 - ₹6,000</option>
                    <option>₹6,000 - ₹10,000</option>
                    <option>₹10,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm  mb-2 text-gray-700 font-bold">
                    Project Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Describe your project idea and requirements"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-slate-900 text-white py-3 rounded-lg hover:bg-slate-800 transition duration-300"
                >
                  {loading ? "Submitting..." : "Request Custom Project"}
                </button>
              </form>
            </div>
          </div>
        </section>
        </>
  )
}
export default CustomProject;




