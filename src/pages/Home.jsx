import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center animate-fadeIn">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-6">
          Smart Placement Management Platform
        </h2>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
          A centralized platform to manage students, companies, placements,
          and training activities efficiently for colleges and institutions.
        </p>

        <Link
          to="/login"
          className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition duration-300"
        >
          Get Started 🚀
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <Feature
            title="Student Management"
            desc="Maintain complete student profiles, academic records, and placement status."
            icon="🎓"
          />
          <Feature
            title="Company Tracking"
            desc="Track recruiting companies, job roles, eligibility criteria, and results."
            icon="🏢"
          />
          <Feature
            title="Placement Analytics"
            desc="View placement statistics, reports, and insights to improve outcomes."
            icon="📊"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-gray-900 dark:to-gray-800 text-white py-8 mt-20">
  <div className="text-center animate-fadeUp">
    <p className="text-sm opacity-90">
      © 2026 PlacementHub
    </p>

    <p className="text-sm mt-1 font-medium">
      Designed & Developed by <span className="underline">Mohamed Kaleel</span>
    </p>

    {/* Social Icons */}
    <div className="flex justify-center gap-6 mt-4">
      <a
        href="https://github.com/Mohamed-kaleel"
        target="_blank"
        rel="noreferrer"
        className="hover:scale-110 transition"
      >
        🐙
      </a>

      <a
        href="https://www.linkedin.com/in/mohamed-kaleel-64b08930a"
        target="_blank"
        rel="noreferrer"
        className="hover:scale-110 transition"
      >
        💼
      </a>

      <a
        href="mohamedkaleel121@gmail.com"
        className="hover:scale-110 transition"
      >
        ✉️
      </a>
    </div>
  </div>
</footer>


    </div>
  );
}

function Feature({ title, desc, icon }) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-md hover:-translate-y-2 hover:shadow-xl transition duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
