import React from "react";
import Navbar from "../components/Navbar"; // sesuaikan path
import Footer from "../components/Footer"; // sesuaikan path

export default function Contact() {
  return (
    <div className="relative min-h-screen font-poppins text-white overflow-x-hidden">

      {/* Navbar */}
      <Navbar />

      {/* Background + overlay */}
      <div className="absolute inset-0 bg-[url('/background.png')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Konten utama */}
      <main className="relative z-10 max-w-3xl mx-auto mt-16 p-6 min-h-[70vh] grid gap-6">

        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold uppercase tracking-wide">Hubungi Kami</h1>
          <p className="text-gray-300 mt-2 text-sm">
            Punya pertanyaan atau kendala? Hubungi kami langsung atau isi form di bawah ini.
          </p>
        </div>

        {/* Quick Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="https://wa.me/6285163200785"
            target="_blank"
            rel="noreferrer"
            className="bg-black/40 backdrop-blur-md border border-red-500/50 rounded-xl p-6 transition hover:-translate-y-1 hover:bg-black/70"
          >
            <h4 className="text-red-500 text-xl font-semibold mb-2">💬 Chat via WhatsApp</h4>
            <p className="text-gray-300 text-sm">Respon cepat (Jam Kerja)</p>
          </a>

          <a
            href="mailto:muazalfattah@gmail.com"
            className="bg-black/40 backdrop-blur-md border border-red-500/50 rounded-xl p-6 transition hover:-translate-y-1 hover:bg-black/70"
          >
            <h4 className="text-red-500 text-xl font-semibold mb-2">✉️ Kirim Email</h4>
            <p className="text-gray-300 text-sm">Respon dalam 1x24 jam</p>
          </a>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
