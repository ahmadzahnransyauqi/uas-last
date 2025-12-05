import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

// --- IMPORT COMPONENT ASLI ---
import Footer from "../../component/footer";
import Header from "../../component/header";
import InputField from "/src/component/input-slot.jsx"; 

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  // State untuk Role (Default: member)
  const [selectedRole, setSelectedRole] = useState("member"); 
  
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Kirim Username, Password, DAN Role ke Backend
      const res = await axios.post("http://localhost:3000/api/auth/login", {
        username,
        password,
        role: selectedRole // <--- Penting: Kirim role yang dipilih
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert(`Login Berhasil sebagai ${selectedRole.toUpperCase()}!`);
      window.location.href = "/dashboard"; 
      
    } catch (err) {
      // Menampilkan pesan error spesifik (misal: "Akun tidak ditemukan di akses Admin")
      alert(err.response?.data?.error || "Gagal Login. Cek Username/Password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      
      {/* Form Container */}
      <div 
        className="
          mx-auto 
          mt-16 md:mt-24 
          max-w-xs sm:max-w-md 
          w-full 
          p-6 md:p-10 
          bg-[#444444] 
          text-white 
          rounded-xl 
          shadow-2xl 
          mb-20
        "
      >
        
        {/* Header Teks */}
        <h2 className="text-3xl font-extrabold text-center mb-1">Login</h2>
        <h3 className="text-sm text-center mb-6 text-gray-300">
          Don't have an account?{" "}
          <Link to="/register" className="text-[#ff1f1f] hover:text-[#ff6161] font-semibold transition-colors">
            Sign Up
          </Link>
        </h3>

        {/* --- TOMBOL PILIH ROLE (BARU) --- */}
        <div className="flex bg-[#333] rounded-lg p-1 mb-6 border border-gray-600">
            <button 
                type="button"
                onClick={() => setSelectedRole("member")}
                className={`flex-1 py-2 rounded-md font-bold text-sm transition-all duration-300 ${
                    selectedRole === "member" 
                    ? "bg-[#ff1f1f] text-white shadow-md" 
                    : "text-gray-400 hover:text-white"
                }`}
            >
                USER
            </button>
            <button 
                type="button"
                onClick={() => setSelectedRole("admin")}
                className={`flex-1 py-2 rounded-md font-bold text-sm transition-all duration-300 ${
                    selectedRole === "admin" 
                    ? "bg-[#ff1f1f] text-white shadow-md" 
                    : "text-gray-400 hover:text-white"
                }`}
            >
                ADMIN
            </button>
        </div>
        
        {/* Input Fields */}
        <form className="space-y-6" onSubmit={handleLogin}>
          
          {/* InputField Component dengan Props */}
          <InputField 
            label="Username" 
            type="text" 
            placeholder={`Enter ${selectedRole} username`}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          
          <InputField
            label="Password"
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          {/* Options */}
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center">
              <input
                className="mr-2 h-4 w-4 text-[#ff1f1f] border-gray-300 rounded focus:ring-[#ff1f1f] cursor-pointer accent-[#ff1f1f]"
                type="checkbox"
                id="dontforget"
              />
              <label htmlFor="dontforget" className="cursor-pointer text-gray-300">Remember Me</label>
            </div>
            
            <Link to="/forgotpassword" className="hover:text-[#ff6161] text-[#ff1f1f] transition-colors font-medium text-xs sm:text-sm">
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className={`
                w-full 
                text-lg 
                font-bold 
                text-white 
                bg-[#ff1f1f] 
                hover:bg-[#d41b1b] 
                py-3 
                rounded-lg 
                shadow-md 
                transition-colors
                ${loading ? 'opacity-70 cursor-not-allowed' : ''}
              `}
            >
              {loading ? "Checking..." : `Login as ${selectedRole.toUpperCase()}`}
            </button>
          </div>
        </form>
      </div>
      
      <Footer />
    </>
  );
}