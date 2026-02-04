import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const linkClass = (path) =>
    `font-medium transition ${
      location.pathname === path
        ? "text-indigo-600 border-b-2 border-indigo-600"
        : "text-gray-700 hover:text-indigo-600"
    }`;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-indigo-600 tracking-wide">
          Talentrix
        </h1>

        {/* Links */}
        <div className="space-x-6">
          <Link to="/" className={linkClass("/")}>
            Home
          </Link>
          <Link to="/login" className={linkClass("/login")}>
            Login
          </Link>
          <Link to="/dashboard" className={linkClass("/dashboard")}>
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}
