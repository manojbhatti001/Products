import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, 
  MapPin, 
  Package, 
  CreditCard, 
  LogOut, 
  Edit2, 
  Save,
  ShoppingBag,
  Mail,
  Phone,
  Calendar,
  Clock,
  Home,
  Building2,
  Map,
  MapPinned
} from 'lucide-react';
import toast from 'react-hot-toast';

const Profile = () => {
  const navigate = useNavigate();
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

  const [purchaseHistory] = useState([
    {
      id: 'ORD001',
      date: '2024-01-15',
      product: 'WordPress Theme Bundle',
      amount: 2999,
      status: 'Completed',
      image: 'https://placehold.co/100x60'
    },
    {
      id: 'ORD002',
      date: '2024-01-10',
      product: 'JavaScript Course',
      amount: 1499,
      status: 'Completed',
      image: 'https://placehold.co/100x60'
    }
  ]);

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

  const handleLogout = () => {
    localStorage.removeItem('userProfile');
    localStorage.removeItem('token');
    navigate('/login');
    toast.success('Logged out successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50/50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl mb-8">
            <div className="px-8 py-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center mb-4 ring-4 ring-white/20">
                  <User size={40} className="text-white" />
                </div>
                <h1 className="text-3xl font-bold text-white mb-2">{userProfile.fullName}</h1>
                <p className="text-blue-100">{userProfile.email}</p>
              </div>
            </div>
          </div>

          {/* Main Form Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">Profile Details</h2>
                <button
                  onClick={() => isEditing ? handleUpdateProfile() : setIsEditing(true)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    isEditing 
                      ? 'bg-green-500 hover:bg-green-600 text-white'
                      : 'bg-blue-500 hover:bg-blue-600 text-white'
                  }`}
                >
                  {isEditing ? (
                    <>
                      <Save size={16} />
                      <span>Save Changes</span>
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

            <div className="p-8">
              {/* Basic Information */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
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
                      className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 ${
                        isEditing 
                          ? 'border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200' 
                          : 'bg-gray-50 border-gray-200'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
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
                      className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 ${
                        isEditing 
                          ? 'border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200' 
                          : 'bg-gray-50 border-gray-200'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
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
                      className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 ${
                        isEditing 
                          ? 'border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200' 
                          : 'bg-gray-50 border-gray-200'
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2 text-gray-800">
                  <MapPin size={18} className="text-blue-500" />
                  Address Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
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
                      className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 ${
                        isEditing 
                          ? 'border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200' 
                          : 'bg-gray-50 border-gray-200'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
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
                      className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 ${
                        isEditing 
                          ? 'border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200' 
                          : 'bg-gray-50 border-gray-200'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
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
                      className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 ${
                        isEditing 
                          ? 'border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200' 
                          : 'bg-gray-50 border-gray-200'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
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
                      className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 ${
                        isEditing 
                          ? 'border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200' 
                          : 'bg-gray-50 border-gray-200'
                      }`}
                    />
                  </div>
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