import React from "react";  
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
     
      <Link to="/" className="text-2xl font-bold">
        MyBrand
      </Link>
      {/* Links */}
      <div className="flex gap-6 text-lg">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/project"
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300"
          }
        >
          Project
        </NavLink>

        <NavLink
          to="/agence"
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300"
          }
        >
          Agence
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
