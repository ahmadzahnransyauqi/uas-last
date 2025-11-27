import { useState } from "react";
import axios from "axios";

// Tambahkan props onRegister dan onBack
export default function Login({ onRegister, onBack }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [roleUI, setRoleUI] = useState("member"); 

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/auth/login", {
        username,
        password,
      });

      const userData = res.data.user;
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(userData));

      alert(`Login Berhasil sebagai ${userData.role}!`);
      window.location.reload(); 
      
    } catch (err) {
      alert(err.response?.data?.error || "Gagal Login.");
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
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Login</h2>

        {/* Toggle User/Admin */}
        <div className="flex bg-gray-100 rounded-full p-1 mb-6">
          <button 
            type="button"
            onClick={() => setRoleUI("member")}
            className={`flex-1 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
              roleUI === "member" ? "bg-blue-600 text-white shadow" : "text-gray-500"
            }`}
          >
            User
          </button>
          <button 
            type="button" 
            onClick={() => setRoleUI("admin")}
            className={`flex-1 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
              roleUI === "admin" ? "bg-blue-600 text-white shadow" : "text-gray-500"
            }`}
          >
            Admin
          </button>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
              <label className="font-semibold text-sm text-gray-600">Username</label>
              <input 
                type="text" 
                placeholder="Masukkan username" 
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                required 
              />
          </div>

          <div className="flex flex-col gap-1">
              <label className="font-semibold text-sm text-gray-600">Password</label>
              <input 
                type="password" 
                placeholder="Masukkan password" 
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
          </div>

          <button 
            type="submit" 
            className="bg-blue-600 text-white p-3 rounded-lg font-bold text-lg hover:bg-blue-700 transition shadow-lg mt-2"
          >
            Login sebagai {roleUI === 'admin' ? 'Admin' : 'User'}
          </button>
        </form>

        {/* Link Daftar */}
        <div className="text-center mt-6 text-sm text-gray-500">
          <p>Belum punya akun? <span onClick={onRegister} className="text-blue-600 font-bold cursor-pointer hover:underline">Daftar disini</span></p>
        </div>
      </div>
    </div>
  );
}