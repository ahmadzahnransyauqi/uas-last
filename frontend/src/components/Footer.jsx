import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black/90 border-t-2 border-red-600 mt-0 py-6 text-center text-gray-300 shadow-inner shadow-red-500/20">
      
      {/* INFO CONTACT */}
      <div className="flex flex-wrap justify-center gap-6 mb-3 text-sm font-medium">
        <p className="transition hover:text-red-500 hover:scale-105">
          📍 Jl. Merdeka No. 123, Medan
        </p>
        <p className="transition hover:text-red-500 hover:scale-105">
          ✉️ muazalfattah@gmail.com
        </p>
        <p className="transition hover:text-red-500 hover:scale-105">
          💬 +62 851-6320-0785
        </p>
        <p className="transition hover:text-red-500 hover:scale-105">
          📸 @rogersumatera.official
        </p>
      </div>

      {/* COPYRIGHT */}
      <p className="text-xs text-gray-500">
        © 2025 Roger Sumatera Fitness Center. All rights reserved.
      </p>
    </footer>
  );
}
