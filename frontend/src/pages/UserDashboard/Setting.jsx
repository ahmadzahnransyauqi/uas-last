import { Lock, AlertTriangle, Bell, Shield } from 'lucide-react';
import { useState } from 'react';

export default function Settings() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    classReminders: true,
    workoutTips: false
  });

  const handleResetPassword = () => {
    if (newPassword === confirmPassword && newPassword.length > 0) {
      // Handle password reset
      alert('Password reset successful!');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } else {
      alert('Passwords do not match or are empty');
    }
  };

  const handleCloseAccount = () => {
    if (showDeleteConfirm) {
      // Handle account deletion
      alert('Account deletion initiated. This action cannot be undone.');
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h2 style={{ color: '#ffffff' }}>Settings</h2>
        <p style={{ color: '#9CA3AF' }}>Manage your account preferences and security</p>
      </div>

      <div className="space-y-6">
        {/* Reset Password Section */}
        <div className="p-6 rounded-lg" style={{ backgroundColor: '#252525' }}>
          <div className="flex items-center gap-2 mb-4">
            <Lock size={24} style={{ color: '#ff1f1f' }} />
            <h3 style={{ color: '#ffffff' }}>Reset Password</h3>
          </div>
          
          <div className="space-y-4 max-w-md">
            <div>
              <label className="block mb-2" style={{ color: '#9CA3AF' }}>
                Current Password
              </label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg"
                style={{
                  backgroundColor: '#1a1a1a',
                  color: '#ffffff',
                  border: '1px solid #252525'
                }}
                placeholder="Enter current password"
              />
            </div>

            <div>
              <label className="block mb-2" style={{ color: '#9CA3AF' }}>
                New Password
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg"
                style={{
                  backgroundColor: '#1a1a1a',
                  color: '#ffffff',
                  border: '1px solid #252525'
                }}
                placeholder="Enter new password"
              />
            </div>

            <div>
              <label className="block mb-2" style={{ color: '#9CA3AF' }}>
                Confirm New Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg"
                style={{
                  backgroundColor: '#1a1a1a',
                  color: '#ffffff',
                  border: '1px solid #252525'
                }}
                placeholder="Confirm new password"
              />
            </div>

            <button
              onClick={handleResetPassword}
              className="px-6 py-2 rounded-lg transition-opacity hover:opacity-90"
              style={{
                backgroundColor: '#ff1f1f',
                color: '#ffffff'
              }}
            >
              Update Password
            </button>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="p-6 rounded-lg" style={{ backgroundColor: '#252525' }}>
          <div className="flex items-center gap-2 mb-4">
            <Bell size={24} style={{ color: '#ff1f1f' }} />
            <h3 style={{ color: '#ffffff' }}>Notification Preferences</h3>
          </div>
          
          <div className="space-y-3">
            <label className="flex items-center justify-between cursor-pointer">
              <span style={{ color: '#9CA3AF' }}>Email Notifications</span>
              <input
                type="checkbox"
                checked={notifications.email}
                onChange={(e) => setNotifications({ ...notifications, email: e.target.checked })}
                className="w-5 h-5 rounded"
                style={{ accentColor: '#ff1f1f' }}
              />
            </label>
            
            <label className="flex items-center justify-between cursor-pointer">
              <span style={{ color: '#9CA3AF' }}>Push Notifications</span>
              <input
                type="checkbox"
                checked={notifications.push}
                onChange={(e) => setNotifications({ ...notifications, push: e.target.checked })}
                className="w-5 h-5 rounded"
                style={{ accentColor: '#ff1f1f' }}
              />
            </label>
            
            <label className="flex items-center justify-between cursor-pointer">
              <span style={{ color: '#9CA3AF' }}>Class Reminders</span>
              <input
                type="checkbox"
                checked={notifications.classReminders}
                onChange={(e) => setNotifications({ ...notifications, classReminders: e.target.checked })}
                className="w-5 h-5 rounded"
                style={{ accentColor: '#ff1f1f' }}
              />
            </label>
            
            <label className="flex items-center justify-between cursor-pointer">
              <span style={{ color: '#9CA3AF' }}>Workout Tips</span>
              <input
                type="checkbox"
                checked={notifications.workoutTips}
                onChange={(e) => setNotifications({ ...notifications, workoutTips: e.target.checked })}
                className="w-5 h-5 rounded"
                style={{ accentColor: '#ff1f1f' }}
              />
            </label>
          </div>
        </div>

        {/* Privacy & Security */}
        <div className="p-6 rounded-lg" style={{ backgroundColor: '#252525' }}>
          <div className="flex items-center gap-2 mb-4">
            <Shield size={24} style={{ color: '#ff1f1f' }} />
            <h3 style={{ color: '#ffffff' }}>Privacy & Security</h3>
          </div>
          
          <div className="space-y-3">
            <button
              onClick={() => alert('Privacy settings updated successfully!')}
              className="w-full text-left px-4 py-3 rounded-lg transition-colors hover:opacity-80"
              style={{
                backgroundColor: '#1a1a1a',
                color: '#ffffff'
              }}
            >
              Manage Privacy Settings
            </button>
            
            <button
              onClick={() => alert('Two-factor authentication enabled!')}
              className="w-full text-left px-4 py-3 rounded-lg transition-colors hover:opacity-80"
              style={{
                backgroundColor: '#1a1a1a',
                color: '#ffffff'
              }}
            >
              Enable Two-Factor Authentication
            </button>
            
            <button
              onClick={() => alert('Login history displayed!')}
              className="w-full text-left px-4 py-3 rounded-lg transition-colors hover:opacity-80"
              style={{
                backgroundColor: '#1a1a1a',
                color: '#ffffff'
              }}
            >
              View Login History
            </button>
          </div>
        </div>

        {/* Close Account Section */}
        <div className="p-6 rounded-lg border" style={{ backgroundColor: '#252525', borderColor: '#ff1f1f' }}>
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle size={24} style={{ color: '#ff1f1f' }} />
            <h3 style={{ color: '#ff1f1f' }}>Danger Zone</h3>
          </div>
          
          <p className="mb-4" style={{ color: '#9CA3AF' }}>
            Once you delete your account, there is no going back. Please be certain.
          </p>

          {!showDeleteConfirm ? (
            <button
              onClick={() => setShowDeleteConfirm(true)}
              className="px-6 py-2 rounded-lg transition-opacity hover:opacity-90"
              style={{
                backgroundColor: '#ff1f1f',
                color: '#ffffff'
              }}
            >
              Close Account
            </button>
          ) : (
            <div className="space-y-3">
              <div
                className="p-4 rounded-lg"
                style={{ backgroundColor: '#1a1a1a' }}
              >
                <p style={{ color: '#ffffff' }}>Are you absolutely sure you want to close your account?</p>
                <p className="mt-2" style={{ color: '#9CA3AF' }}>
                  This action cannot be undone. All your data will be permanently deleted.
                </p>
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={handleCloseAccount}
                  className="px-6 py-2 rounded-lg transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: '#ff1f1f',
                    color: '#ffffff'
                  }}
                >
                  Yes, Delete My Account
                </button>
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="px-6 py-2 rounded-lg transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: '#1a1a1a',
                    color: '#ffffff',
                    border: '1px solid #252525'
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