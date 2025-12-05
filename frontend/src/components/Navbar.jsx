import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    end
    className={({ isActive }) =>
      `relative font-medium transition ${
        isActive
          ? "text-red-500 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-red-500"
          : "text-white hover:text-red-400"
      }`
    }
  >
    {children}
  </NavLink>
);

export default function Navbar() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    window.location.href = "/login";
  };

  return (
    <header className="w-full bg-black/90 border-b-2 border-red-600 shadow-lg shadow-red-500/20 px-6 py-4 flex justify-between items-center">
      
      {/* ===== LOGO & TAGLINE ===== */}
      <div className="flex items-center gap-3">
        <img
          src="/src/assets/logotext.png"
          alt="Roger Sumatera Logo"
          className="w-32 object-contain"
        />
        <p className="text-red-500 font-extrabold tracking-wide hidden sm:block">
          One Team, One Power, One Roger Sumatera.
        </p>
      </div>

      {/* ===== MENU + LOGOUT ===== */}
      <div className="flex items-center gap-6">

        {/* NAV MENU */}
        <nav className="hidden md:flex items-center gap-6">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/membership">Membership</NavItem>
          <NavItem to="/progress">Boost</NavItem>
          <NavItem to="/jadwal">Schedule</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </nav>

        {/* LOGOUT BUTTON */}
        <button
          onClick={handleLogout}
          className="
            bg-red-600 hover:bg-red-700 
            text-white font-semibold uppercase tracking-wide
            px-4 py-2 rounded-lg
            transition shadow-lg shadow-red-500/30
            hover:-translate-y-[2px]
            min-w-[90px]
          "
        >
          Logout
        </button>
      </div>
    </header>
  );
}
