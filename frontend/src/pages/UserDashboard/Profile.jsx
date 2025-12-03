import { User, Mail, Phone, Calendar, MapPin, Edit2, QrCode } from 'lucide-react';
import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Anderson',
    email: 'john.anderson@email.com',
    phone: '+1 (555) 123-4567',
    joinDate: 'October 1, 2025',
    location: 'New York, NY',
    goals: 'Build muscle and increase strength',
    membershipType: 'Premium',
    emergencyContact: 'Jane Anderson - (555) 987-6543',
    memberId: 'GYM-2025-10234'
  });

  const [editedProfile, setEditedProfile] = useState(profile);

  const handleSave = () => {
    setProfile(editedProfile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedProfile(profile);
    setIsEditing(false);
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 style={{ color: '#ffffff' }}>Profile</h2>
          <p style={{ color: '#9CA3AF' }}>View and edit your personal information</p>
        </div>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg transition-opacity hover:opacity-90"
            style={{
              backgroundColor: '#ff1f1f',
              color: '#ffffff'
            }}
          >
            <Edit2 size={18} />
            Edit Profile
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="p-6 rounded-lg flex flex-col items-center" style={{ backgroundColor: '#252525' }}>
          <div
            className="w-32 h-32 rounded-full flex items-center justify-center mb-4"
            style={{ backgroundColor: '#1a1a1a' }}
          >
            <User size={64} style={{ color: '#ff1f1f' }} />
          </div>
          <h3 style={{ color: '#ffffff' }}>{profile.name}</h3>
          <p className="mt-1" style={{ color: '#9CA3AF' }}>{profile.membershipType} Member</p>
          <div
            className="mt-4 px-4 py-2 rounded-lg"
            style={{ backgroundColor: '#1a1a1a', color: '#ff1f1f' }}
          >
            Member since {profile.joinDate}
          </div>
          
          <button
            onClick={() => setShowQRCode(!showQRCode)}
            className="mt-4 flex items-center gap-2 px-4 py-2 rounded-lg transition-opacity hover:opacity-90"
            style={{
              backgroundColor: '#ff1f1f',
              color: '#ffffff'
            }}
          >
            <QrCode size={18} />
            {showQRCode ? 'Hide QR Code' : 'Generate QR Code'}
          </button>
          
          {showQRCode && (
            <div className="mt-4 p-4 rounded-lg" style={{ backgroundColor: '#ffffff' }}>
              <QRCodeSVG
                value={JSON.stringify({
                  memberId: profile.memberId,
                  name: profile.name,
                  membershipType: profile.membershipType
                })}
                size={180}
                level="H"
                includeMargin={true}
              />
              <p className="text-center mt-2" style={{ color: '#1a1a1a' }}>
                {profile.memberId}
              </p>
            </div>
          )}
        </div>

        <div className="lg:col-span-2 p-6 rounded-lg" style={{ backgroundColor: '#252525' }}>
          <h3 className="mb-6" style={{ color: '#ffffff' }}>Personal Information</h3>
          
          <div className="space-y-4">
            <div>
              <label className="flex items-center gap-2 mb-2" style={{ color: '#9CA3AF' }}>
                <User size={18} />
                Full Name
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={editedProfile.name}
                  onChange={(e) => setEditedProfile({ ...editedProfile, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg"
                  style={{
                    backgroundColor: '#1a1a1a',
                    color: '#ffffff',
                    border: '1px solid #252525'
                  }}
                />
              ) : (
                <p style={{ color: '#ffffff' }}>{profile.name}</p>
              )}
            </div>

            <div>
              <label className="flex items-center gap-2 mb-2" style={{ color: '#9CA3AF' }}>
                <Mail size={18} />
                Email
              </label>
              {isEditing ? (
                <input
                  type="email"
                  value={editedProfile.email}
                  onChange={(e) => setEditedProfile({ ...editedProfile, email: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg"
                  style={{
                    backgroundColor: '#1a1a1a',
                    color: '#ffffff',
                    border: '1px solid #252525'
                  }}
                />
              ) : (
                <p style={{ color: '#ffffff' }}>{profile.email}</p>
              )}
            </div>

            <div>
              <label className="flex items-center gap-2 mb-2" style={{ color: '#9CA3AF' }}>
                <Phone size={18} />
                Phone
              </label>
              {isEditing ? (
                <input
                  type="tel"
                  value={editedProfile.phone}
                  onChange={(e) => setEditedProfile({ ...editedProfile, phone: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg"
                  style={{
                    backgroundColor: '#1a1a1a',
                    color: '#ffffff',
                    border: '1px solid #252525'
                  }}
                />
              ) : (
                <p style={{ color: '#ffffff' }}>{profile.phone}</p>
              )}
            </div>

            <div>
              <label className="flex items-center gap-2 mb-2" style={{ color: '#9CA3AF' }}>
                <MapPin size={18} />
                Location
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={editedProfile.location}
                  onChange={(e) => setEditedProfile({ ...editedProfile, location: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg"
                  style={{
                    backgroundColor: '#1a1a1a',
                    color: '#ffffff',
                    border: '1px solid #252525'
                  }}
                />
              ) : (
                <p style={{ color: '#ffffff' }}>{profile.location}</p>
              )}
            </div>

            <div>
              <label className="flex items-center gap-2 mb-2" style={{ color: '#9CA3AF' }}>
                <Calendar size={18} />
                Fitness Goals
              </label>
              {isEditing ? (
                <textarea
                  value={editedProfile.goals}
                  onChange={(e) => setEditedProfile({ ...editedProfile, goals: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg"
                  rows={3}
                  style={{
                    backgroundColor: '#1a1a1a',
                    color: '#ffffff',
                    border: '1px solid #252525'
                  }}
                />
              ) : (
                <p style={{ color: '#ffffff' }}>{profile.goals}</p>
              )}
            </div>

            <div>
              <label className="flex items-center gap-2 mb-2" style={{ color: '#9CA3AF' }}>
                <Phone size={18} />
                Emergency Contact
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={editedProfile.emergencyContact}
                  onChange={(e) => setEditedProfile({ ...editedProfile, emergencyContact: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg"
                  style={{
                    backgroundColor: '#1a1a1a',
                    color: '#ffffff',
                    border: '1px solid #252525'
                  }}
                />
              ) : (
                <p style={{ color: '#ffffff' }}>{profile.emergencyContact}</p>
              )}
            </div>

            {isEditing && (
              <div className="flex gap-4 pt-4">
                <button
                  onClick={handleSave}
                  className="flex-1 py-2 rounded-lg transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: '#ff1f1f',
                    color: '#ffffff'
                  }}
                >
                  Save Changes
                </button>
                <button
                  onClick={handleCancel}
                  className="flex-1 py-2 rounded-lg transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: '#1a1a1a',
                    color: '#ffffff',
                    border: '1px solid #252525'
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