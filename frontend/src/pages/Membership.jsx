import React from "react";
import Navbar from "../components/Navbar"; // sesuaikan path
import Footer from "../components/Footer"; // sesuaikan path

export default function Membership() {
  return (
    <div className="relative min-h-screen font-poppins text-white overflow-x-hidden">

      {/* Navbar */}
      <Navbar />

      {/* Background + overlay */}
      <div className="absolute inset-0 bg-[url('/background.png')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Konten utama */}
      <main className="relative z-10 w-full max-w-7xl mx-auto mt-16 px-4 text-center">

        <h1 className="text-4xl font-bold mb-12 tracking-widest uppercase">
          Membership Plans
        </h1>

        {/* Grid container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">

          {/* Basic Plan */}
          <div className="bg-black/40 backdrop-blur-md border border-gray-600/50 rounded-xl p-8 w-72 flex flex-col shadow-lg hover:-translate-y-2 hover:shadow-red-500/40 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">Basic</h3>
            <p className="text-lg font-semibold mb-6">Rp 150.000 / bulan</p>
            <ul className="text-left mb-6 flex-grow">
              <li className="mb-3 flex items-center">
                <span className="text-red-500 font-bold mr-2">✓</span>Regular gym access
              </li>
              <li className="mb-3 flex items-center">
                <span className="text-red-500 font-bold mr-2">✓</span>1x trainer consultation
              </li>
              <li className="mb-3 flex items-center">
                <span className="text-red-500 font-bold mr-2">✓</span>Access to public locker
              </li>
            </ul>
          </div>

          {/* Premium Plan */}
          <div className="bg-red-600 text-white border-2 border-red-600 rounded-xl p-8 w-72 flex flex-col shadow-xl scale-105 hover:scale-110 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">Premium</h3>
            <p className="text-lg font-semibold mb-6">Rp 300.000 / bulan</p>
            <ul className="text-left mb-6 flex-grow">
              <li className="mb-3 flex items-center"><span className="font-bold mr-2">✓</span>Full gym access</li>
              <li className="mb-3 flex items-center"><span className="font-bold mr-2">✓</span>4x personal trainer sessions</li>
              <li className="mb-3 flex items-center"><span className="font-bold mr-2">✓</span>Access to group classes</li>
              <li className="mb-3 flex items-center"><span className="font-bold mr-2">✓</span>Private locker</li>
            </ul>
          </div>

          {/* Elite Plan */}
          <div className="bg-black/40 backdrop-blur-md border border-gray-600/50 rounded-xl p-8 w-72 flex flex-col shadow-lg hover:-translate-y-2 hover:shadow-red-500/40 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">Elite</h3>
            <p className="text-lg font-semibold mb-6">Rp 500.000 / bulan</p>
            <ul className="text-left mb-6 flex-grow">
              <li className="mb-3 flex items-center"><span className="text-red-500 font-bold mr-2">✓</span>24-hour access</li>
              <li className="mb-3 flex items-center"><span className="text-red-500 font-bold mr-2">✓</span>8x personal trainer sessions</li>
              <li className="mb-3 flex items-center"><span className="text-red-500 font-bold mr-2">✓</span>Monthly body assesment</li>
              <li className="mb-3 flex items-center"><span className="text-red-500 font-bold mr-2">✓</span>Free merchandise</li>
            </ul>
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
