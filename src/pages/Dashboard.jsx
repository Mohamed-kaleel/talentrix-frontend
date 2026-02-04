import { useState } from "react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("students");

  // ✅ SINGLE SOURCE OF DATA
  const students = [
    { name: "Mohamed", dept: "CSE", company: "TCS" },
    { name: "Ahamed", dept: "IT", company: "Infosys" },
    { name: "Rahul", dept: "ECE", company: "Wipro" },
    { name: "Sam", dept: "EEE", company: "Hexaware" },
    { name: "Riyan", dept: "CSE", company: "QMax" },
    { name: "Khaleel", dept: "IT", company: "Zoho" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 animate-fadeIn">
      {/* Top Bar */}
      <div className="bg-white shadow px-6 py-4">
        <h1 className="text-xl font-bold text-indigo-600">
          Talentrix Dashboard
        </h1>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 px-6 mt-6">
        <Tab title="Students" active={activeTab === "students"} onClick={() => setActiveTab("students")} />
        <Tab title="Companies" active={activeTab === "companies"} onClick={() => setActiveTab("companies")} />
        <Tab title="Placements" active={activeTab === "placements"} onClick={() => setActiveTab("placements")} />
      </div>

      {/* Content */}
      <div className="bg-white m-6 p-6 rounded shadow animate-slideUp">
        {activeTab === "students" && <Students students={students} />}
        {activeTab === "companies" && <Companies />}
        {activeTab === "placements" && <Placements students={students} />}
      </div>
    </div>
  );
}

/* ---------- Components ---------- */

function Tab({ title, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded font-medium transition transform hover:-translate-y-1 ${
        active
          ? "bg-indigo-600 text-white shadow"
          : "bg-gray-200 hover:bg-gray-300"
      }`}
    >
      {title}
    </button>
  );
}

function Students({ students }) {
  return (
    <div className="animate-fadeIn">
      <h2 className="text-2xl font-bold mb-4">Students</h2>
      <ul className="space-y-2">
        {students.map((s, i) => (
          <li key={i} className="hover:translate-x-1 transition">
            👨‍🎓 {s.name} – {s.dept}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Companies() {
  return (
    <div className="animate-fadeIn">
      <h2 className="text-2xl font-bold mb-4">Companies</h2>
      <ul className="space-y-2">
        <li>🏢 TCS</li>
        <li>🏢 Infosys</li>
        <li>🏢 Wipro</li>
        <li>🏢 Hexaware</li>
        <li>🏢 Zoho</li>
      </ul>
    </div>
  );
}

function Placements({ students }) {
  return (
    <div className="animate-fadeIn">
      <h2 className="text-2xl font-bold mb-4">Placements</h2>
      <ul className="space-y-2">
        {students.map((s, i) => (
          <li key={i}>
            ✔️ {s.name} → {s.company}
          </li>
        ))}
      </ul>
    </div>
  );
}
