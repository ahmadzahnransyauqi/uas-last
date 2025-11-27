import React from "react";

const LandingPage = ({ onNavigate }) => {
  return (
    <div className="font-sans text-gray-800">
      
      {/* --- NAVBAR --- */}
      <nav className="flex justify-between items-center p-5 bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
        <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-red-600 tracking-wider">ROGER SUMATERA</span>
        </div>
        
        <div className="hidden md:flex gap-6">
            <a href="#about" className="hover:text-red-500 transition">About Us</a>
            <a href="#membership" className="hover:text-red-500 transition">Membership</a>
            <a href="#services" className="hover:text-red-500 transition">Services</a>
            <a href="#contact" className="hover:text-red-500 transition">Contact</a>
        </div>

        <div className="flex gap-3">
            <button 
                onClick={() => onNavigate('login')}
                className="px-4 py-2 border border-red-600 text-red-500 rounded hover:bg-red-600 hover:text-white transition font-bold"
            >
                Login
            </button>
            <button 
                onClick={() => onNavigate('register')}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition font-bold"
            >
                Sign Up
            </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="about" className="bg-gray-800 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Teach And Upgrade Your Body To Its <span className="text-red-600">MAXIMUM</span> Potential
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Roger Sumatera adalah pusat kebugaran modern yang berfokus pada peningkatan performa tubuh secara maksimal.
                Kami menyediakan pelatih profesional, fasilitas lengkap, dan komunitas positif.
            </p>
            <button 
                onClick={() => onNavigate('register')}
                className="px-8 py-4 bg-red-600 text-white text-lg font-bold rounded-full shadow-lg hover:bg-red-700 transition transform hover:scale-105"
            >
                Mulai Sekarang
            </button>
        </div>
      </section>

      {/* --- MEMBERSHIP SECTION --- */}
      <section id="membership" className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Membership Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="border border-gray-200 p-8 rounded-xl hover:shadow-2xl transition">
                <h3 className="text-xl font-bold mb-2">Basic</h3>
                <p className="text-2xl font-bold text-red-600 mb-4">Rp150.000 <span className="text-sm text-gray-500">/bulan</span></p>
                <ul className="space-y-2 mb-6 text-gray-600">
                    <li>✅ Akses gym reguler</li>
                    <li>✅ 1x konsultasi pelatih</li>
                    <li>✅ Locker umum</li>
                </ul>
                <button onClick={() => onNavigate('register')} className="w-full py-2 border border-gray-800 rounded font-bold hover:bg-gray-800 hover:text-white transition">Pilih Paket</button>
            </div>

            {/* Card 2 (Premium) */}
            <div className="border-2 border-red-600 bg-gray-50 p-8 rounded-xl shadow-xl transform scale-105">
                <div className="absolute top-0 right-0 bg-red-600 text-white text-xs px-2 py-1 rounded-bl-lg font-bold">POPULAR</div>
                <h3 className="text-xl font-bold mb-2">Premium</h3>
                <p className="text-2xl font-bold text-red-600 mb-4">Rp300.000 <span className="text-sm text-gray-500">/bulan</span></p>
                <ul className="space-y-2 mb-6 text-gray-600">
                    <li>✅ Akses gym penuh</li>
                    <li>✅ 4x sesi Personal Trainer</li>
                    <li>✅ Akses kelas group</li>
                    <li>✅ Locker pribadi</li>
                </ul>
                <button onClick={() => onNavigate('register')} className="w-full py-2 bg-red-600 text-white rounded font-bold hover:bg-red-700 transition">Pilih Paket</button>
            </div>

            {/* Card 3 */}
            <div className="border border-gray-200 p-8 rounded-xl hover:shadow-2xl transition">
                <h3 className="text-xl font-bold mb-2">Elite</h3>
                <p className="text-2xl font-bold text-red-600 mb-4">Rp500.000 <span className="text-sm text-gray-500">/bulan</span></p>
                <ul className="space-y-2 mb-6 text-gray-600">
                    <li>✅ Akses 24 jam</li>
                    <li>✅ 8x sesi Personal Trainer</li>
                    <li>✅ Body assessment bulanan</li>
                    <li>✅ Free Merchandise</li>
                </ul>
                <button onClick={() => onNavigate('register')} className="w-full py-2 border border-gray-800 rounded font-bold hover:bg-gray-800 hover:text-white transition">Pilih Paket</button>
            </div>
        </div>
      </section>

      {/* --- SERVICES (Grid Singkat) --- */}
      <section id="services" className="bg-gray-900 text-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <div className="bg-gray-800 p-6 rounded hover:bg-red-900 transition cursor-pointer">
                <h3 className="font-bold text-xl mb-2">💪 Personal Training</h3>
                <p className="text-sm text-gray-400">Latihan intensif dengan pelatih ahli.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded hover:bg-red-900 transition cursor-pointer">
                <h3 className="font-bold text-xl mb-2">🧘‍♀️ Group Classes</h3>
                <p className="text-sm text-gray-400">Zumba, Yoga, dan HIIT yang seru.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded hover:bg-red-900 transition cursor-pointer">
                <h3 className="font-bold text-xl mb-2">🥗 Nutrition</h3>
                <p className="text-sm text-gray-400">Panduan makan sehat sesuai target.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded hover:bg-red-900 transition cursor-pointer">
                <h3 className="font-bold text-xl mb-2">🥋 Martial Arts</h3>
                <p className="text-sm text-gray-400">Tingkatkan disiplin dan bela diri.</p>
            </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contact" className="bg-black text-gray-400 py-8 text-center">
        <p>Jl. Merdeka No. 123, Jakarta | +62 812-3456-7890</p>
        <p className="mt-2 text-sm">© 2025 Roger Sumatera Gym. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;