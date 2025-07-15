import { User, Mail, Instagram, Phone } from "lucide-react";
import { useState } from "react";

const UserProfile = () => {
  const [showProfile, setShowProfile] = useState(false);

  // Import the avatar image
  const avatar = new URL('@/assets/Resume Passport Size Photo.png', import.meta.url).href;

  const userInfo = {
    name: "Sarthak Jejurkar",
    email: "jejurkarsarthak17@gmail.com",
    instagram: "@coded_thoughts",
    phone: "+91 7020291006",
    avatar: avatar
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
        <div className="absolute top-full right-0 mt-2 w-80 glass-morphism rounded-xl p-6 animate-fade-in shadow-lg border border-white/10 hover:border-white/20 transition-all duration-200">
          <div className="flex items-center gap-3 mb-4">
            <img
              src={userInfo.avatar}
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
            />
            <div>
              <h3 className="text-black font-semibold text-2xl">{userInfo.name}</h3>
              <p className="text-black/90 text-lg">Full Stack Developer</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-black text-lg">
              <Mail className="w-4 h-4" />
              <span>{userInfo.email}</span>
            </div>
            <div className="flex items-center gap-3 text-black text-lg">
              <Phone className="w-4 h-4" />
              <span>{userInfo.phone}</span>
            </div>

            <button
              onClick={() => window.open(`https://instagram.com/${userInfo.instagram.slice(1)}`, "_blank")}
              className="flex items-center gap-3 text-black transition-colors text-lg w-full hover:bg-white/10 rounded-md p-2"
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