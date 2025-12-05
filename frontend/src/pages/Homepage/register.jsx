import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Footer from "../../component/footer";
import Header from "../../component/header";
import BeratCok from "../../assets/Berat_cok.webp";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password dan Konfirmasi tidak sama!");
      return;
    }

    setLoading(true);
    try {
      await axios.post("http://localhost:3000/api/auth/register", {
        username: name,
        email: email,
        password: password,
        role: "member"
      });

      alert("Berhasil register. Silakan login!");
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.error || "Gagal Registrasi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#2c2c2c] font-sans flex flex-col justify-between">
      <Header />

      {/* Main Container (UKURAN SEDANG / MEDIUM) */}
      <div className="flex-grow flex items-center justify-center p-4">
        <div
          className="
            w-full 
            max-w-4xl           /* <--- INI KUNCINYA: Ukuran Sedang (Pas) */
            bg-[#444444] 
            rounded-2xl         /* Sudut membulat biar rapi */
            shadow-2xl 
            flex 
            flex-col md:flex-row 
            overflow-hidden     /* Agar gambar tidak keluar dari sudut bulat */
          "
        >
          {/* === 1. Image Column (Kiri) === */}
          <div
            className="
              hidden md:block 
              w-1/2             /* Setengah lebar container */
              bg-cover bg-center
            "
            style={{ backgroundImage: `url(${BeratCok})`, minHeight: '500px' }}
            aria-hidden="true"
          ></div>

          {/* === 2. Form Column (Kanan) === */}
          <div className="w-full md:w-1/2 text-white p-8 md:p-10 flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold mb-2">Create Account</h2>
            <h3 className="text-sm mb-6 text-gray-300">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-[#ff1f1f] hover:text-[#ff6161] font-semibold transition-colors"
              >
                Log In
              </Link>
            </h3>

            <form className="space-y-4" onSubmit={handleRegister}>
              
              {/* Username */}
              <div>
                <label className="block text-sm text-gray-300 mb-1 font-semibold">Username</label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  className="w-full p-3 bg-[#333] border border-gray-600 rounded-lg focus:outline-none focus:border-[#ff1f1f] transition text-sm"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-gray-300 mb-1 font-semibold">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 bg-[#333] border border-gray-600 rounded-lg focus:outline-none focus:border-[#ff1f1f] transition text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm text-gray-300 mb-1 font-semibold">Password</label>
                <input
                  type="password"
                  placeholder="Create a password"
                  className="w-full p-3 bg-[#333] border border-gray-600 rounded-lg focus:outline-none focus:border-[#ff1f1f] transition text-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm text-gray-300 mb-1 font-semibold">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="w-full p-3 bg-[#333] border border-gray-600 rounded-lg focus:outline-none focus:border-[#ff1f1f] transition text-sm"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              {/* Terms */}
              <div className="pt-2 flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 cursor-pointer w-4 h-4 accent-[#ff1f1f]"
                  required
                />
                <label className="text-xs text-gray-300">
                  I Accept the{" "}
                  <Link to="/termscondition" className="text-[#ff1f1f] hover:underline">
                    Terms & Conditions
                  </Link>
                </label>
              </div>

              {/* Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className={`
                    w-full text-base font-bold text-white bg-[#ff1f1f]
                    hover:bg-[#d41b1b] py-3 rounded-lg shadow-md 
                    transition-all transform active:scale-95
                    ${loading ? "opacity-70 cursor-not-allowed" : ""}
                  `}
                >
                  {loading ? "Creating..." : "Create Account"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}