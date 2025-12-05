import React from "react";
import Navbar from "../components/Navbar"; // path ke Navbar
import Footer from "../components/Footer"; // path ke Footer

export default function Jadwal() {
  return (
    <div className="relative min-h-screen font-poppins text-white overflow-x-hidden">

      {/* Navbar */}
      <Navbar />

      {/* Background + overlay */}
      <div className="absolute inset-0 bg-[url('/background.png')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Konten Jadwal */}
      <main className="relative z-10 max-w-[1000px] mx-auto mt-20 px-5 text-center">

        {/* TITLE */}
        <h1 className="text-4xl font-bold uppercase tracking-widest mb-3">
          Jadwal Latihan
        </h1>

        <p className="text-gray-300 max-w-[600px] mx-auto mb-12">
          Berikut jadwal kegiatan untuk tiap layanan kami. Jadwal ini bersifat sementara
          dan dapat berubah sewaktu-waktu.
        </p>

        {/* GRID */}
        <div className="flex flex-wrap justify-center gap-6">

          {/* CARD */}
          <div className="w-[300px] bg-black/40 backdrop-blur-md border border-gray-600/40 rounded-xl p-6 shadow-lg shadow-black/40 transition-transform hover:-translate-y-1">
            <h3 className="text-red-500 text-xl font-semibold mb-3">
              Personal Training
            </h3>
            <hr className="border-red-500/30 mb-3" />
            <p><strong className="text-gray-300 inline-block w-[120px]">Senin - Jumat:</strong> 13.00 - 20.00</p>
            <p><strong className="text-gray-300 inline-block w-[120px]">Sabtu:</strong> 10.00 - 18.00</p>
            <p><strong className="text-gray-300 inline-block w-[120px]">Minggu:</strong> Libur</p>
          </div>

          <div className="w-[300px] bg-black/40 backdrop-blur-md border border-gray-600/40 rounded-xl p-6 shadow-lg shadow-black/40 transition-transform hover:-translate-y-1">
            <h3 className="text-red-500 text-xl font-semibold mb-3">
              Group Classes
            </h3>
            <hr className="border-red-500/30 mb-3" />
            <p><strong className="text-gray-300 inline-block w-[120px]">Senin - Kamis:</strong> 15.00 - 21.00</p>
            <p><strong className="text-gray-300 inline-block w-[120px]">Sabtu:</strong> 09.00 - 14.00</p>
            <p><strong className="text-gray-300 inline-block w-[120px]">Minggu:</strong> 10.00 - 13.00</p>
          </div>

          <div className="w-[300px] bg-black/40 backdrop-blur-md border border-gray-600/40 rounded-xl p-6 shadow-lg shadow-black/40 transition-transform hover:-translate-y-1">
            <h3 className="text-red-500 text-xl font-semibold mb-3">
              Nutrition Guidance
            </h3>
            <hr className="border-red-500/30 mb-3" />
            <p><strong className="text-gray-300 inline-block w-[120px]">Selasa - Jumat:</strong> 12.00 - 19.00</p>
            <p><strong className="text-gray-300 inline-block w-[120px]">Sabtu:</strong> 11.00 - 15.00</p>
            <p><strong className="text-gray-300 inline-block w-[120px]">Minggu:</strong> Libur</p>
          </div>

          <div className="w-[300px] bg-black/40 backdrop-blur-md border border-gray-600/40 rounded-xl p-6 shadow-lg shadow-black/40 transition-transform hover:-translate-y-1">
            <h3 className="text-red-500 text-xl font-semibold mb-3">
              Body Assessment
            </h3>
            <hr className="border-red-500/30 mb-3" />
            <p><strong className="text-gray-300 inline-block w-[120px]">Senin - Kamis:</strong> 14.00 - 20.00</p>
          </div>

          <div className="w-[300px] bg-black/40 backdrop-blur-md border border-gray-600/40 rounded-xl p-6 shadow-lg shadow-black/40 transition-transform hover:-translate-y-1">
            <h3 className="text-red-500 text-xl font-semibold mb-3">
              Martial Arts
            </h3>
            <hr className="border-red-500/30 mb-3" />
            <p><strong className="text-gray-300 inline-block w-[120px]">Selasa - Jumat:</strong> 17.00 - 21.00</p>
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
