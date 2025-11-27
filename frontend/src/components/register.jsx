import { useState } from "react";
import axios from "axios";

// Tambahkan props onLogin dan onBack
export default function Register({ onLogin, onBack }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/auth/register", {
        username: name, 
        password: password,
        role: "member"
      });

      alert("Register Berhasil! Silakan Login.");
      
      // Setelah sukses, langsung pindah ke halaman Login otomatis
      onLogin();

    } catch (error) {
      alert(error.response?.data?.error || "Gagal Registrasi");
    }
  };

  return (
    <div className="w-full max-w-md">
       {/* Tombol Back */}
       <button 
        onClick={onBack}
        className="mb-4 flex items-center text-gray-600 hover:text-black transition text-sm font-semibold"
      >
        &larr; Kembali ke Home
      </button>

      <div className="bg-white p-8 rounded-2xl shadow-xl w-full">
        <h3 className="font-bold text-3xl text-center mb-6 text-gray-800">Daftar Member</h3>
        
        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          
          <div>
            <label className="text-sm font-semibold text-gray-600">Username</label>
            <input 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none mt-1"
                type="text"
                placeholder="Username Anda" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-600">Email</label>
            <input 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none mt-1"
                type="email" 
                placeholder="Email aktif (Opsional)" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-600">Password</label>
            <input 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none mt-1"
                type="password" 
                placeholder="Buat Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required
            />
          </div>

          <button 
            type="submit" 
            className="bg-green-600 text-white p-3 rounded-lg font-bold hover:bg-green-700 transition shadow-lg mt-2"
          >
            Daftar Sekarang
          </button>
        </form>

        {/* Link Login */}
        <div className="text-center mt-6 text-sm text-gray-500">
            <p>Sudah punya akun? <span onClick={onLogin} className="text-green-600 font-bold cursor-pointer hover:underline">Login disini</span></p>
        </div>
      </div>
    </div>
  );
}