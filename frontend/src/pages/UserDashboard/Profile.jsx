import {
  User,
  Mail,
  Phone,
  Calendar,
  Edit2,
  QrCode,
  UserCircle,
} from "lucide-react";
import { useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import axios from "axios";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);

  const [profile, setProfile] = useState({
    username: "",
    full_name: "",
    email: "",
    phone: "",
    goal: "",
    id: "", // backend returns "id"
  });

  const [editedProfile, setEditedProfile] = useState(profile);

  // 🔥 Fetch user profile from backend
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get("http://localhost:3000/api/edit_profile", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const user = res.data.user;

        setProfile(user);
        setEditedProfile(user);
      } catch (err) {
        console.error("Failed to load profile:", err);
      }
    };

    fetchProfile();
  }, []);

  // 💾 Save edits
  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.put(
        "http://localhost:3000/api/edit_profile",
        editedProfile,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const updated = res.data.user;

      setProfile(updated);
      setEditedProfile(updated);
      setIsEditing(false);
    } catch (err) {
      console.error("Failed to update profile:", err);
    }
  };

  const handleCancel = () => {
    setEditedProfile(profile);
    setIsEditing(false);
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 style={{ color: "#ffffff" }}>Profile</h2>
          <p style={{ color: "#9CA3AF" }}>
            View and edit your personal information
          </p>
        </div>

        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:opacity-90"
            style={{ backgroundColor: "#ff1f1f", color: "#ffffff" }}
          >
            <Edit2 size={18} />
            Edit Profile
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT PANEL */}
        <div
          className="p-6 rounded-lg flex flex-col items-center"
          style={{ backgroundColor: "#252525" }}
        >
          <div
            className="w-32 h-32 rounded-full flex items-center justify-center mb-4"
            style={{ backgroundColor: "#1a1a1a" }}
          >
            <UserCircle size={72} style={{ color: "#ff1f1f" }} />
          </div>

          <h3 style={{ color: "#ffffff" }}>{profile.full_name}</h3>
          <p className="mt-1" style={{ color: "#9CA3AF" }}>
            @{profile.username}
          </p>

          <button
            onClick={() => setShowQRCode(!showQRCode)}
            className="mt-4 flex items-center gap-2 px-4 py-2 rounded-lg hover:opacity-90"
            style={{ backgroundColor: "#ff1f1f", color: "#ffffff" }}
          >
            <QrCode size={18} />
            {showQRCode ? "Hide QR Code" : "Generate QR Code"}
          </button>

          {showQRCode && (
            <div
              className="mt-4 p-4 rounded-lg"
              style={{ backgroundColor: "#ffffff" }}
            >
              <QRCodeSVG
                value={JSON.stringify({
                  id: profile.id,
                  full_name: profile.full_name,
                  username: profile.username,
                })}
                size={180}
                level="H"
              />
              <p className="text-center mt-2" style={{ color: "#1a1a1a" }}>
                ID: {profile.id}
              </p>
            </div>
          )}
        </div>

        {/* RIGHT PANEL */}
        <div
          className="lg:col-span-2 p-6 rounded-lg min-h-screen"
          style={{ backgroundColor: "#252525" }}
        >
          <h3 className="mb-6" style={{ color: "#ffffff" }}>
            Personal Information
          </h3>

          <div className="space-y-4">
            {/* Reusable input fields */}
            {[ 
              { label: "Username", icon: User, key: "username" },
              { label: "Full Name", icon: User, key: "full_name" },
              { label: "Email", icon: Mail, key: "email" },
              { label: "Phone", icon: Phone, key: "phone" },
            ].map(({ label, icon: Icon, key }) => (
              <div key={key}>
                <label
                  className="flex items-center gap-2 mb-2"
                  style={{ color: "#9CA3AF" }}
                >
                  <Icon size={18} />
                  {label}
                </label>

                {isEditing ? (
                  <input
                    type="text"
                    placeholder={`Enter your ${label.toLowerCase()}`}
                    value={editedProfile[key] || ""}
                    onChange={(e) =>
                      setEditedProfile({
                        ...editedProfile,
                        [key]: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 rounded-lg"
                    style={{
                      backgroundColor: "#1a1a1a",
                      color: "#ffffff",
                      border: "1px solid #252525",
                    }}
                  />
                ) : (
                  <p style={{ color: "#ffffff" }}>{profile[key]}</p>
                )}
              </div>
            ))}

            {/* GOALS */}
            <div>
              <label
                className="flex items-center gap-2 mb-2"
                style={{ color: "#9CA3AF" }}
              >
                <Calendar size={18} />
                Fitness Goals
              </label>

              {isEditing ? (
                <textarea
                  placeholder="Describe your fitness goals"
                  value={editedProfile.goal || ""}
                  onChange={(e) =>
                    setEditedProfile({ ...editedProfile, goal: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg"
                  rows={3}
                  style={{
                    backgroundColor: "#1a1a1a",
                    color: "#ffffff",
                    border: "1px solid #252525",
                  }}
                />
              ) : (
                <p style={{ color: "#ffffff" }}>{profile.goal}</p>
              )}
            </div>

            {/* SAVE / CANCEL */}
            {isEditing && (
              <div className="flex gap-4 pt-4">
                <button
                  onClick={handleSave}
                  className="flex-1 py-2 rounded-lg hover:opacity-90"
                  style={{ backgroundColor: "#ff1f1f", color: "#ffffff" }}
                >
                  Save Changes
                </button>

                <button
                  onClick={handleCancel}
                  className="flex-1 py-2 rounded-lg hover:opacity-90"
                  style={{
                    backgroundColor: "#1a1a1a",
                    color: "#ffffff",
                    border: "1px solid #252525",
                  }}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
