import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Home, Building2, Map, MapPinned, Edit2, Save } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import toast from 'react-hot-toast';

const Profile = () => {
  const { isDarkMode } = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const [userProfile, setUserProfile] = useState(() => {
    const savedProfile = localStorage.getItem('userProfile');
    return savedProfile ? JSON.parse(savedProfile) : {
      fullName: 'John Doe',
      email: 'john@example.com',
      phone: '+91 9876543210',
      address: {
        street: '123 Main Street',
        city: 'Mumbai',
        state: 'Maharashtra',
        pincode: '400001'
      }
    };
  });

  const handleEditToggle = () => {
    if (isEditing) {
      // If we're canceling edit mode, revert changes by reloading from localStorage
      const savedProfile = localStorage.getItem('userProfile');
      if (savedProfile) {
        setUserProfile(JSON.parse(savedProfile));
      }
    }
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setUserProfile(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setUserProfile(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleUpdateProfile = () => {
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
    setIsEditing(false);
    toast.success('Profile updated successfully!');
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-200`}>
      <div className="container mx-auto px-4 py-8">
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-xl overflow-hidden`}>
          {/* Header Section */}
          <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} px-8 py-6`}>
            <div className="flex justify-between items-center">
              <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Profile Details
              </h2>
              <div className="flex gap-4">
                {isEditing && (
                  <button
                    onClick={handleUpdateProfile}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                      isDarkMode ? 'bg-green-500 hover:bg-green-600' : 'bg-green-600 hover:bg-green-700'
                    } text-white transition-colors duration-200`}
                  >
                    <Save size={16} />
                    <span>Save Changes</span>
                  </button>
                )}
                <button
                  onClick={handleEditToggle}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                    isEditing
                      ? `${isDarkMode ? 'bg-red-500 hover:bg-red-600' : 'bg-red-600 hover:bg-red-700'} text-white`
                      : `${isDarkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} text-white`
                  } transition-colors duration-200`}
                >
                  {isEditing ? (
                    <>
                      <span>Cancel</span>
                    </>
                  ) : (
                    <>
                      <Edit2 size={16} />
                      <span>Edit Profile</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Basic Information */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'} mb-2`}>
                    <div className="flex items-center gap-2">
                      <User size={14} className="text-blue-500" />
                      Full Name
                    </div>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={userProfile.fullName}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } ${
                      isEditing 
                        ? 'focus:border-blue-500 focus:ring-2 focus:ring-blue-200' 
                        : ''
                    } transition-all duration-200`}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'} mb-2`}>
                    <div className="flex items-center gap-2">
                      <Mail size={14} className="text-blue-500" />
                      Email Address
                    </div>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={userProfile.email}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } ${
                      isEditing 
                        ? 'focus:border-blue-500 focus:ring-2 focus:ring-blue-200' 
                        : ''
                    } transition-all duration-200`}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'} mb-2`}>
                    <div className="flex items-center gap-2">
                      <Phone size={14} className="text-blue-500" />
                      Phone Number
                    </div>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={userProfile.phone}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } ${
                      isEditing 
                        ? 'focus:border-blue-500 focus:ring-2 focus:ring-blue-200' 
                        : ''
                    } transition-all duration-200`}
                  />
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div className={`mt-8 pt-8 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <h3 className={`text-lg font-semibold mb-6 flex items-center gap-2 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>
                <MapPin size={18} className="text-blue-500" />
                Address Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'} mb-2`}>
                    <div className="flex items-center gap-2">
                      <Home size={14} className="text-blue-500" />
                      Street Address
                    </div>
                  </label>
                  <input
                    type="text"
                    name="address.street"
                    value={userProfile.address.street}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } ${
                      isEditing 
                        ? 'focus:border-blue-500 focus:ring-2 focus:ring-blue-200' 
                        : ''
                    } transition-all duration-200`}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'} mb-2`}>
                    <div className="flex items-center gap-2">
                      <Building2 size={14} className="text-blue-500" />
                      City
                    </div>
                  </label>
                  <input
                    type="text"
                    name="address.city"
                    value={userProfile.address.city}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } ${
                      isEditing 
                        ? 'focus:border-blue-500 focus:ring-2 focus:ring-blue-200' 
                        : ''
                    } transition-all duration-200`}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'} mb-2`}>
                    <div className="flex items-center gap-2">
                      <Map size={14} className="text-blue-500" />
                      State
                    </div>
                  </label>
                  <input
                    type="text"
                    name="address.state"
                    value={userProfile.address.state}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } ${
                      isEditing 
                        ? 'focus:border-blue-500 focus:ring-2 focus:ring-blue-200' 
                        : ''
                    } transition-all duration-200`}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'} mb-2`}>
                    <div className="flex items-center gap-2">
                      <MapPinned size={14} className="text-blue-500" />
                      Pincode
                    </div>
                  </label>
                  <input
                    type="text"
                    name="address.pincode"
                    value={userProfile.address.pincode}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } ${
                      isEditing 
                        ? 'focus:border-blue-500 focus:ring-2 focus:ring-blue-200' 
                        : ''
                    } transition-all duration-200`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;