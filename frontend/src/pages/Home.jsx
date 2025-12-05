import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  React.useEffect(() => {
    const motivationList = [
      "Discipline is the bridge between goals and success.",
      "Train hard, stay humble, and trust the process.",
      "Your body can stand almost anything. It’s your mind you have to convince.",
      "Push yourself because no one else is going to do it for you.",
      "Don’t stop when you’re tired. Stop when you’re done."
    ];

    function randomMotivation() {
      const text = document.getElementById("motivation-text");
      if (!text) return;
      const random = motivationList[Math.floor(Math.random() * motivationList.length)];
      text.innerText = `"${random}"`;
    }

    randomMotivation();

    document.querySelectorAll(".dash-card").forEach((el, i) => {
      setTimeout(() => {
        el.classList.remove("opacity-0", "translate-y-4");
      }, i * 150);
    });
  }, []);

  return (
    <div className="relative min-h-screen text-white font-poppins overflow-x-hidden">
      <Navbar />

      {/* Background + overlay */}
      <div className="absolute inset-0 bg-[url('/background.png')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-3xl mx-auto pt-10 px-5 space-y-5">
        <div className="text-center">
          <h1 className="text-3xl font-bold uppercase tracking-wide">Member Dashboard</h1>
          <p className="text-gray-300 mt-2">Selamat datang di Roger Sumatera Fitness Center 💪</p>
        </div>

        {/* PROFILE CARD */}
        <div className="dash-card opacity-0 translate-y-4 transition-all duration-500 bg-black/40 border border-red-500/40 rounded-2xl flex items-center gap-5 p-5 backdrop-blur-md shadow-lg">
          <img src="/src/assets/foto.jpg" className="w-24 h-24 rounded-full border-2 border-red-500 object-cover" />
          <div>
            <h2 className="text-xl font-semibold" id="member-name">Muaz Alfattah Fadhani</h2>
            <p id="member-email" className="text-gray-300">Email: muazalfattah@gmail.com</p>
            <p className="text-gray-400">Member Sejak: Jan 2025</p>
          </div>
        </div>

        {/* PACKAGE CARD */}
        <div className="dash-card opacity-0 translate-y-4 transition-all duration-500 bg-black/40 border-l-4 border-red-500 rounded-xl p-5 backdrop-blur-md shadow-lg">
          <h3 className="text-lg">Paket Aktif: <span id="member-package" className="text-red-400 font-semibold">Premium Membership</span></h3>
          <p className="text-gray-300 mt-1">Full Access + Personal Trainer + Coach + Class</p>
          <p className="text-gray-300">Berlaku sampai: <span id="member-expiry" className="text-red-400">25 Desember 2025</span></p>
        </div>

        {/* MOTIVATION */}
        <div id="motivation-text" className="dash-card opacity-0 translate-y-4 transition-all duration-500 text-center text-lg italic p-5 bg-black/40 border border-red-500/50 rounded-xl backdrop-blur-md">
          "Discipline is the bridge between goals and success."
        </div>
        
      </div>

      <Footer />
    </div>
    
  );
}
