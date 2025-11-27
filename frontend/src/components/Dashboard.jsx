import React from 'react';

const Dashboard = ({ user, onLogout }) => {
  // Data Mockup untuk simulasi (karena database kita belum punya tabel membership detail)
  const memberSince = "Jan 2025";
  const expiryDate = "25 Desember 2025";
  const packageName = user.role === 'admin' ? 'ADMIN ACCESS' : 'PREMIUM MEMBERSHIP';

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800 flex flex-col">
      
      {/* --- HEADER --- */}
      <header className="bg-black text-white p-4 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center font-bold text-xl text-white">
              R
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-wider text-red-500 uppercase">Roger Sumatera</h1>
              <p className="text-xs text-gray-400 italic">One Team, One Power, One Roger Sumatera.</p>
            </div>
          </div>

          {/* Nav Menu (Non-aktif untuk demo, hanya visual) */}
          <nav className="flex gap-4 text-sm font-semibold">
            <button className="hover:text-red-500 transition border-b-2 border-transparent hover:border-red-500">Home</button>
            <button className="hover:text-red-500 transition border-b-2 border-transparent hover:border-red-500">Membership</button>
            <button className="hover:text-red-500 transition border-b-2 border-transparent hover:border-red-500">Progress</button>
            <button className="hover:text-red-500 transition border-b-2 border-transparent hover:border-red-500">Jadwal</button>
          </nav>
        </div>
      </header>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-grow container mx-auto p-6 max-w-4xl">
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Member Dashboard</h1>
          <p className="text-gray-600 mt-1">Selamat datang di Roger Sumatera Fitness Center 💪</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* 1. Profile Card */}
          <div className="bg-white p-6 rounded-xl shadow-lg flex items-center gap-5 border-l-4 border-blue-500 transform hover:scale-105 transition duration-300">
            {/* Avatar Placeholder (Inisial Nama) */}
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-3xl font-bold text-gray-500">
              {user.username.charAt(0).toUpperCase()}
            </div>
            <div className="overflow-hidden">
              <h2 className="text-xl font-bold text-gray-800 uppercase">{user.username}</h2>
              <p className="text-sm text-gray-500 break-words">{user.email || 'Email belum diatur'}</p>
              <p className="text-xs text-blue-600 font-semibold mt-1 bg-blue-100 inline-block px-2 py-1 rounded">
                Member Sejak: {memberSince}
              </p>
            </div>
          </div>

          {/* 2. Package Card */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500 transform hover:scale-105 transition duration-300">
            <h3 className="text-gray-500 text-sm font-bold uppercase mb-1">Paket Aktif</h3>
            <p className="text-2xl font-bold text-red-600">{packageName}</p>
            <p className="text-sm text-gray-600 mt-2">✅ Akses: Gym + Sauna + PT</p>
            <p className="text-sm text-gray-600">📅 Berlaku sampai: <span className="font-bold">{expiryDate}</span></p>
          </div>

          {/* 3. Barcode Section (QR Code Mockup) */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-gray-800 text-center md:col-span-2 flex flex-col items-center">
            <h3 className="text-lg font-bold mb-3">Barcode Absen Digital</h3>
            
            {/* Mockup QR Code (Kotak Hitam) */}
            <div className="bg-white p-2 border-2 border-dashed border-gray-400 rounded-lg mb-3">
               <img 
                 src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${user.username}`} 
                 alt="Member QR Code" 
                 className="w-32 h-32"
               />
            </div>
            
            <p className="text-sm text-gray-500">Scan barcode ini di meja resepsionis untuk absen masuk.</p>
          </div>

          {/* 4. Motivation */}
          <div className="bg-gradient-to-r from-gray-800 to-black p-6 rounded-xl shadow-lg md:col-span-2 text-center text-white italic">
            “Discipline is the bridge between goals and success.”
          </div>

        </div>

        {/* Logout Button */}
        <div className="mt-8 text-center">
          <button 
            onClick={onLogout}
            className="bg-red-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-red-700 hover:shadow-xl transition transform active:scale-95"
          >
            Logout
          </button>
        </div>

      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-black text-gray-400 py-8 mt-12 border-t border-gray-800">
        <div className="container mx-auto text-center space-y-2">
            <div className="flex justify-center gap-6 mb-4 text-sm font-medium">
                <span>📍 Medan</span>
                <span>✉️ rogersumatera@gmail.com</span>
                <span>💬 +62 812-3456-7890</span>
            </div>
            <p className="text-xs">© 2025 Roger Sumatera Fitness Center. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
};

export default Dashboard;