import {
  Users,
  Activity,
  Apple,
  User,
  Settings,
  Home,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoimg from "../../assets/logotext.png";

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { id: "/user", label: "Dashboard", icon: Home },
    { id: "/user/bodyassessment", label: "Body Assessment", icon: Activity },
    { id: "/user/nutritionguidance", label: "Nutrition Guidance", icon: Apple },
    { id: "/user/groupclasses", label: "Group Classes", icon: Users },
    { id: "/user/profile", label: "Profile", icon: User },
    { id: "/user/settings", label: "Settings", icon: Settings },
  ];

  return (
    <aside className="w-64 shrink-0 p-6" style={{ backgroundColor: "#202020" }}>
      <div className="mb-8">
        <img src={logoimg} alt="Logo" />
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.id;

          return (
            <Link
              key={item.id}
              to={item.id}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors"
              style={{
                backgroundColor: isActive ? "#252525" : "transparent",
                color: isActive ? "#ff1f1f" : "#9CA3AF",
              }}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
