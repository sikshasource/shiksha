import React from "react";
import { GraduationCap, Users, Target, CheckCircle } from "lucide-react";
import NavBar from "../components/NavBar"



const AboutUs = () => {
  return (
    <>
        <NavBar/>
    <div className="pt-24 bg-gray-50 text-gray-800">

      {/* ===== HERO ===== */}
      <section className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            About <span className="text-blue-600">Shiksha Source</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            Empowering students with professionally built academic projects,
            real-world exposure, and complete guidance  from idea to submission.
          </p>
        </div>
      </section>

      {/* ===== WHO WE ARE ===== */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Shiksha Source is a student-focused project development platform
              dedicated to helping engineering and degree students successfully
              complete their academic projects with confidence.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We believe that a project should not just be submitted, but
              understood. That’s why we focus on explanation, mentorship, and
              real-world implementation rather than just code delivery.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-blue-600 mt-1" />
                <span>Final Year & Mini Projects (Engineering & Degree)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-blue-600 mt-1" />
                <span>Industry-level project architecture</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-blue-600 mt-1" />
                <span>Complete documentation & viva support</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-blue-600 mt-1" />
                <span>Affordable & transparent pricing</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* ===== OUR MISSION ===== */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">

          <div className="bg-gray-50 p-8 rounded-2xl shadow">
            <Target className="mx-auto text-blue-600 h-10 w-10 mb-4" />
            <h3 className="font-semibold text-xl mb-2">Our Mission</h3>
            <p className="text-gray-600 text-sm">
              To help students learn practically and submit projects with
              confidence and clarity.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow">
            <GraduationCap className="mx-auto text-blue-600 h-10 w-10 mb-4" />
            <h3 className="font-semibold text-xl mb-2">Student-First Approach</h3>
            <p className="text-gray-600 text-sm">
              We prioritize understanding, explanation, and mentoring over
              just delivering code.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow">
            <Users className="mx-auto text-blue-600 h-10 w-10 mb-4" />
            <h3 className="font-semibold text-xl mb-2">Trusted Support</h3>
            <p className="text-gray-600 text-sm">
              We stay with you till project submission, demo, and viva.
            </p>
          </div>

        </div>
      </section>

      {/* ===== WHY STUDENTS TRUST US ===== */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">
            Why Students Trust Us
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 text-left">

            <div className="bg-white rounded-xl p-6 shadow">
              <h4 className="font-semibold mb-2">
                ✔ Professional & Ethical Work
              </h4>
              <p className="text-gray-600 text-sm">
                We follow academic ethics and ensure originality in every
                project.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h4 className="font-semibold mb-2">
                ✔ Clear Explanation & Training
              </h4>
              <p className="text-gray-600 text-sm">
                Students receive complete understanding of the project logic
                and flow.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h4 className="font-semibold mb-2">
                ✔ Flexible Pricing
              </h4>
              <p className="text-gray-600 text-sm">
                Pricing is adjusted based on domain, complexity, and college
                requirements.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h4 className="font-semibold mb-2">
                ✔ End-to-End Support
              </h4>
              <p className="text-gray-600 text-sm">
                From topic selection to deployment and presentation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-blue-600 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Build Your Project With Confidence
        </h2>
        <p className="mb-6">
          Let us help you learn, build, and succeed in your academic journey.
        </p>
        <a
          href="https://wa.me/9194823084644"
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
        >
          Contact Us on WhatsApp
        </a>
      </section>


    </div>
    </>
  );
};

export default AboutUs;
