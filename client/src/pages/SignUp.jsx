// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function SignUp() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     dob: "",
//     mobile: "",
//     password: "",
//   });

//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (
//       !formData.firstName ||
//       !formData.lastName ||
//       !formData.email ||
//       !formData.dob ||
//       !formData.mobile ||
//       !formData.password
//     ) {
//       setError("All fields are required");
//       return;
//     }

//     try {
//       setLoading(true);

//       const res = await fetch("http://localhost:8000/api/auth/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.message);
//       }

//       login(data.token);

//       navigate("/Homepage"); // redirect after signup

//     } catch (err) {
//       setError(err.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        
//         <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
//           Create Account
//         </h2>

//         {error && (
//           <div className="mb-4 p-3 text-sm text-red-600 bg-red-100 rounded">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-4">

//           <div className="flex gap-3">
//             <input
//               type="text"
//               name="firstName"
//               placeholder="First Name"
//               onChange={handleChange}
//               className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="text"
//               name="lastName"
//               placeholder="Last Name"
//               onChange={handleChange}
//               className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <input
//             type="date"
//             name="dob"
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <input
//             type="text"
//             name="mobile"
//             placeholder="Mobile Number"
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 disabled:opacity-50"
//           >
//             {loading ? "Creating account..." : "Sign Up"}
//           </button>
//         </form>

//         <p className="mt-6 text-sm text-center text-gray-600">
//           Already have an account?{" "}
//           <button
//             onClick={() => navigate("/SignIn")}
//             className="text-blue-600 hover:underline font-medium"
//           >
//             Sign In
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }







import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Mail, Calendar, Phone, Lock } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function SignUp() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    mobile: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.dob ||
      !formData.mobile ||
      !formData.password
    ) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:8000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      login(data.token);
      navigate("/");

    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">

      {/* LEFT PANEL */}
      <div className="hidden md:flex w-1/2 bg-black items-center justify-center">
        <h1 className="text-6xl font-serif text-white">
          Shiksha <span className="text-blue-600">Source</span>
        </h1>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md px-8">

          <h2 className="text-3xl font-serif text-center mb-8">
            Sign Up
          </h2>

          {error && (
            <p className="text-red-500 text-sm text-center mb-4">
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* First Name */}
            <div>
              <label className="block text-sm mb-2">First Name</label>
              <div className="relative">
                <input
                  type="text"
                  name="firstName"
                  placeholder="enter firstName"
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-md pr-10 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <User className="absolute right-3 top-3.5 w-5 h-5 text-black" />
              </div>
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm mb-2">Last Name</label>
              <div className="relative">
                <input
                  type="text"
                  name="lastName"
                  placeholder="enter last name"
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-md pr-10 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <User className="absolute right-3 top-3.5 w-5 h-5 text-black" />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm mb-2">E-mail</label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="enter your e-mail"
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-md pr-10 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <Mail className="absolute right-3 top-3.5 w-5 h-5 text-black" />
              </div>
            </div>

            {/* DOB */}
            <div>
              <label className="block text-sm mb-2">Date Of Birth</label>
              <div className="relative">
                <input
                  type="date"
                  name="dob"
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-md pr-10 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <Calendar className="absolute right-3 top-3.5 w-5 h-5 text-black" />
              </div>
            </div>

            {/* Mobile */}
            <div>
              <label className="block text-sm mb-2">Mobile No</label>
              <div className="relative">
                <input
                  type="text"
                  name="mobile"
                  placeholder="Enter Your No"
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-md pr-10 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <Phone className="absolute right-3 top-3.5 w-5 h-5 text-black" />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm mb-2">Password</label>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  placeholder="enter password"
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-md pr-10 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <Lock className="absolute right-3 top-3.5 w-5 h-5 text-black" />
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              {loading ? "Creating..." : "Continue"}
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}
