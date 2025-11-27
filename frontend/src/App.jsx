import { useEffect, useState } from 'react';
import LoginForm from './components/login';
import RegisterForm from './components/register'; // Pastikan nama import sesuai file Anda
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage';

function App() {
  const [user, setUser] = useState(null);
  
  // State navigasi: 'home' | 'login' | 'register'
  const [currentView, setCurrentView] = useState('home'); 

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setCurrentView('home'); 
  };

  // --- LOGIKA TAMPILAN ---
  
  // 1. Jika User Sudah Login -> Dashboard
  if (user) {
    return <Dashboard user={user} onLogout={handleLogout} />;
  }

  // 2. Jika Belum Login -> Cek View
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
        
      {/* TAMPILAN HOME */}
      {currentView === 'home' && (
        <LandingPage onNavigate={setCurrentView} />
      )}

      {/* TAMPILAN LOGIN */}
      {currentView === 'login' && (
        <div className="flex items-center justify-center min-h-screen p-4">
            <LoginForm 
                onRegister={() => setCurrentView('register')} // Fungsi pindah ke Register
                onBack={() => setCurrentView('home')}         // Fungsi kembali ke Home
            />
        </div>
      )}

      {/* TAMPILAN REGISTER */}
      {currentView === 'register' && (
        <div className="flex items-center justify-center min-h-screen p-4">
            <RegisterForm 
                onLogin={() => setCurrentView('login')}       // Fungsi pindah ke Login
                onBack={() => setCurrentView('home')}         // Fungsi kembali ke Home
            />
        </div>
      )}

    </div>
  );
}

export default App;