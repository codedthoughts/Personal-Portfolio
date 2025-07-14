import { User, Mail, Instagram } from "lucide-react";
import { useState } from "react";

const UserProfile = () => {
  const [showProfile, setShowProfile] = useState(false);

  const userInfo = {
    name: "John Doe",
    email: "john.doe@example.com",
    instagram: "@johndoe_dev",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowProfile(!showProfile)}
        className="glass-morphism p-3 rounded-full cursor-pointer transition-all duration-200 hover:scale-110"
      >
        <User className="w-5 h-5 text-white" />
      </button>
      
      {/* Profile Dropdown */}
      {showProfile && (
        <div className="absolute top-full right-0 mt-2 w-64 glass-morphism rounded-lg p-4 animate-fade-in">
          <div className="flex items-center gap-3 mb-4">
            <img
              src={userInfo.avatar}
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
            />
            <div>
              <h3 className="text-white font-semibold">{userInfo.name}</h3>
              <p className="text-white/70 text-sm">Full Stack Developer</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <Mail className="w-4 h-4" />
              <span>{userInfo.email}</span>
            </div>
            
            <button
              onClick={() => window.open(`https://instagram.com/${userInfo.instagram.slice(1)}`, "_blank")}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm w-full"
            >
              <Instagram className="w-4 h-4" />
              <span>{userInfo.instagram}</span>
            </button>
          </div>
        </div>
      )}
      
      {/* Backdrop to close profile */}
      {showProfile && (
        <div 
          className="fixed inset-0 z-[-1]" 
          onClick={() => setShowProfile(false)}
        />
      )}
    </div>
  );
};

export default UserProfile;