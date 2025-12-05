import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar"; // sesuaikan path
import Footer from "../components/Footer"; // sesuaikan path

export default function Progress() {
  // ==== RANDOM TIPS ====
  const tipsList = [
    "Fokus pada form, bukan seberapa berat beban.",
    "Lakukan pemanasan minimal 5 menit sebelum latihan.",
    "Progressive overload cukup 2.5–5% per minggu.",
    "Jangan abaikan tidur, recovery adalah kunci otot berkembang.",
    "Hidrasi minimal 2–3 botol air saat latihan.",
    "Latihan compound 70%, isolasi 30% untuk hasil maksimal.",
    "Catat latihan untuk mengetahui perkembanganmu.",
    "Latihan sampai gagal tidak wajib—cukup mendekati gagal."
  ];

  const [tip, setTip] = useState("");

  useEffect(() => {
    setTip(tipsList[Math.floor(Math.random() * tipsList.length)]);
  }, []);

  return (
    <div className="relative min-h-screen font-poppins text-white overflow-x-hidden">

      {/* Navbar */}
      <Navbar />

      {/* Background + overlay */}
      <div className="absolute inset-0 bg-[url('/background.png')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Konten utama */}
      <main className="relative z-10 w-full max-w-5xl mx-auto mt-16 p-5">

        <h1 className="text-4xl font-bold uppercase tracking-widest text-center mb-2">
          Boost
        </h1>

        <p className="text-lg text-gray-300 text-center mb-10">
          Body & mind status, tips latihan, checklist harian, dan rekomendasi agar latihanmu optimal.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">

          {/* === CARD 1: BODY & MIND STATUS === */}
          <div className="bg-black/40 backdrop-blur-md border border-gray-600/50 rounded-xl p-6 shadow-lg hover:-translate-y-1 transition">
            <h4 className="text-red-500 text-xl font-semibold mb-3">
              Body & Mind Status
            </h4>

            <ul className="text-gray-300 text-base space-y-2">
              <li>⭐ <span className="font-semibold">Energi hari ini:</span> ⭐⭐⭐⭐</li>
              <li>⭐ <span className="font-semibold">Mood latihan:</span> Mantap</li>
              <li>⭐ <span className="font-semibold">Fokus:</span> Tinggi</li>
            </ul>
          </div>

          {/* === CARD 2: RANDOM TIPS LATIHAN === */}
          <div className="bg-black/40 backdrop-blur-md border border-gray-600/50 rounded-xl p-6 shadow-lg hover:-translate-y-1 transition">
            <h4 className="text-red-500 text-xl font-semibold mb-3">
              Tips Latihan Hari Ini
            </h4>
            <p className="text-lg text-white italic">“{tip}”</p>
          </div>

          {/* === CARD 3: CHECKLIST HARIAN === */}
          <div className="bg-black/40 backdrop-blur-md border border-gray-600/50 rounded-xl p-6 shadow-lg hover:-translate-y-1 transition">
            <h4 className="text-red-500 text-xl font-semibold mb-4">
              Checklist Harian
            </h4>

            <div className="space-y-3 text-gray-300 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-red-600" /> Pemanasan 5 menit
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-red-600" /> Latihan Compound
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-red-600" /> Latihan Isolasi
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-red-600" /> Pendinginan
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-red-600" /> Minum 2–3 botol air
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-red-600" /> Foto Progress
              </label>
            </div>
          </div>

          {/* === CARD 4: SARAN OPTIMAL === */}
          <div className="bg-black/40 backdrop-blur-md border border-gray-600/50 rounded-xl p-6 shadow-lg hover:-translate-y-1 transition">
            <h4 className="text-red-500 text-xl font-semibold mb-3">
              Saran Agar Latihan Optimal
            </h4>

            <ul className="text-gray-300 text-sm space-y-2">
              <li>• Latihan 3–4x per minggu ideal untuk pemula–menengah.</li>
              <li>• Tingkatkan beban 2.5–5% per minggu.</li>
              <li>• Pastikan tidur 7–9 jam untuk recovery.</li>
              <li>• Asupan protein: ±1.6–2.2g per kg berat badan.</li>
              <li>• Recovery otot: beri jeda 48–72 jam per group otot.</li>
              <li>• Jangan lupa stretching sebelum dan sesudah latihan.</li>
            </ul>
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
