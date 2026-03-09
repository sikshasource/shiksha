import React from "react";
import { GraduationCap, Users, Target, CheckCircle } from "lucide-react";
import NavBar from "../components/NavBar";

const AboutUs = () => {
  return (
    <>
      <NavBar />

      <div className="pt-24 bg-gray-50 text-gray-800">

        {/* ===== HERO ===== */}
        <section className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-xs uppercase tracking-widest text-blue-700 mb-4">
              About Our Organization
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-blue-600">Shiksha Source</span>
            </h1>

            <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
              Shiksha Source is a student-focused academic support platform
              dedicated to delivering structured, industry-aligned project
              solutions with complete documentation, mentoring, and submission guidance.
            </p>
          </div>
        </section>

        {/* ===== WHO WE ARE ===== */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

            <div>
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                We support engineering and degree students in successfully
                completing academic projects that are not only technically sound,
                but also clearly understood.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Our approach focuses on structured architecture, proper
                documentation, and explanation-driven mentorship — ensuring
                students gain confidence in their project presentation and viva.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <ul className="space-y-5 text-sm text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 mt-1" size={18} />
                  Final Year & Mini Projects (Engineering & Degree)
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 mt-1" size={18} />
                  Industry-aligned project architecture
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 mt-1" size={18} />
                  Complete documentation & IEEE support
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 mt-1" size={18} />
                  Transparent & structured pricing model
                </li>
              </ul>
            </div>

          </div>
        </section>

        {/* ===== CORE VALUES ===== */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">

            <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100">
              <Target className="mx-auto text-blue-600 h-10 w-10 mb-5" />
              <h3 className="font-semibold text-xl mb-3">Our Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To empower students with practical learning experience
                through structured project development and guided explanation.
              </p>
            </div>

            <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100">
              <GraduationCap className="mx-auto text-blue-600 h-10 w-10 mb-5" />
              <h3 className="font-semibold text-xl mb-3">
                Academic Excellence
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We maintain academic integrity while delivering technically
                sound and well-documented solutions.
              </p>
            </div>

            <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100">
              <Users className="mx-auto text-blue-600 h-10 w-10 mb-5" />
              <h3 className="font-semibold text-xl mb-3">
                Student-Centric Support
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Continuous guidance from topic selection to final demo and viva.
              </p>
            </div>

          </div>
        </section>

        {/* ===== TRUST SECTION ===== */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-12">
              Why Students Choose Shiksha Source
            </h2>

            <div className="grid sm:grid-cols-2 gap-8 text-left">

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h4 className="font-semibold mb-3">
                  Professional & Ethical Standards
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Every project is developed with academic integrity,
                  structured planning, and originality.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h4 className="font-semibold mb-3">
                  Explanation-Driven Approach
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Students gain full clarity of logic, architecture,
                  and implementation.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h4 className="font-semibold mb-3">
                  Structured Delivery Process
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Clear roadmap, documentation, testing, and submission readiness.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h4 className="font-semibold mb-3">
                  Long-Term Academic Support
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Assistance through demo sessions, viva preparation,
                  and final presentation.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="bg-slate-900 py-16 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Start Your Academic Project Journey With Confidence
          </h2>

          <p className="mb-8 text-gray-300 max-w-2xl mx-auto">
            Connect with our team to discuss your requirements and receive a
            structured project roadmap tailored to your academic needs.
          </p>

          <a
            href="https://wa.me/91+ 9482384644"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-slate-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
          >
            Contact Us on WhatsApp
          </a>
        </section>

      </div>
    </>
  );
};

export default AboutUs;