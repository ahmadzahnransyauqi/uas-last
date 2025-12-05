import { Lock, AlertTriangle } from "lucide-react";
import { useState } from "react";
import axios from "axios";

export default function Settings() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const token = localStorage.getItem("token"); // Get JWT from localStorage

  const handleResetPassword = async () => {
    if (newPassword !== confirmPassword || newPassword.length === 0) {
      return alert("Passwords do not match or are empty");
    }

    try {
      const res = await axios.post(
        "/api/user/reset&delete/reset-password",
        {
          currentPassword,
          newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // or wherever your JWT is
          },
        }
      );

      if (res.data.success) {
        alert("Password reset successful!");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || "Failed to reset password");
    }
  };

  const handleCloseAccount = async () => {
    if (!showDeleteConfirm) return;
    try {
      const res = await axios.delete("/api/user/reset&delete", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.data.success) {
        alert("Account deleted successfully.");
        localStorage.removeItem("token"); // remove JWT
        window.location.href = "/"; // redirect to homepage or login
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || "Failed to delete account");
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h2 style={{ color: "#ffffff" }}>Settings</h2>
        <p style={{ color: "#9CA3AF" }}>
          Manage your account preferences and security
        </p>
      </div>

      <div className="space-y-6">
        {/* Reset Password Section */}
        <div className="p-6 rounded-lg" style={{ backgroundColor: "#252525" }}>
          <div className="flex items-center gap-2 mb-4">
            <Lock size={24} style={{ color: "#ff1f1f" }} />
            <h3 style={{ color: "#ffffff" }}>Reset Password</h3>
          </div>

          <div className="space-y-4 max-w-md">
            <div>
              <label className="block mb-2" style={{ color: "#9CA3AF" }}>
                Current Password
              </label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg"
                style={{
                  backgroundColor: "#1a1a1a",
                  color: "#ffffff",
                  border: "1px solid #252525",
                }}
                placeholder="Enter current password"
              />
            </div>

            <div>
              <label className="block mb-2" style={{ color: "#9CA3AF" }}>
                New Password
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg"
                style={{
                  backgroundColor: "#1a1a1a",
                  color: "#ffffff",
                  border: "1px solid #252525",
                }}
                placeholder="Enter new password"
              />
            </div>

            <div>
              <label className="block mb-2" style={{ color: "#9CA3AF" }}>
                Confirm New Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg"
                style={{
                  backgroundColor: "#1a1a1a",
                  color: "#ffffff",
                  border: "1px solid #252525",
                }}
                placeholder="Confirm new password"
              />
            </div>

            <button
              onClick={handleResetPassword}
              className="px-6 py-2 rounded-lg transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#ff1f1f", color: "#ffffff" }}
            >
              Update Password
            </button>
          </div>
        </div>

        {/* Close Account Section */}
        <div
          className="p-6 rounded-lg border"
          style={{ backgroundColor: "#252525", borderColor: "#ff1f1f" }}
        >
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle size={24} style={{ color: "#ff1f1f" }} />
            <h3 style={{ color: "#ff1f1f" }}>Danger Zone</h3>
          </div>

          <p className="mb-4" style={{ color: "#9CA3AF" }}>
            Once you delete your account, there is no going back. Please be
            certain.
          </p>

          {!showDeleteConfirm ? (
            <button
              onClick={() => setShowDeleteConfirm(true)}
              className="px-6 py-2 rounded-lg transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#ff1f1f", color: "#ffffff" }}
            >
              Close Account
            </button>
          ) : (
            <div className="space-y-3">
              <div
                className="p-4 rounded-lg"
                style={{ backgroundColor: "#1a1a1a" }}
              >
                <p style={{ color: "#ffffff" }}>
                  Are you absolutely sure you want to close your account?
                </p>
                <p className="mt-2" style={{ color: "#9CA3AF" }}>
                  This action cannot be undone. All your data will be
                  permanently deleted.
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleCloseAccount}
                  className="px-6 py-2 rounded-lg transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#ff1f1f", color: "#ffffff" }}
                >
                  Yes, Delete My Account
                </button>
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="px-6 py-2 rounded-lg transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: "#1a1a1a",
                    color: "#ffffff",
                    border: "1px solid #252525",
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
