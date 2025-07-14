import { useState } from "react";
import TopBar from "@/components/TopBar";
import WindowManager from "@/components/WindowManager";
import Taskbar from "@/components/Taskbar";
import VisitorCounter from "@/components/VisitorCounter";
import UserProfile from "@/components/UserProfile";

const Index = () => {
  const [activeWindow, setActiveWindow] = useState<string | null>(null);
  const [visitorCount] = useState(Math.floor(Math.random() * 1000) + 500);

  const openWindow = (windowType: string) => {
    setActiveWindow(windowType);
  };

  const closeWindow = () => {
    setActiveWindow(null);
  };

  return (
    <div className="h-screen w-full relative overflow-hidden">
      {/* Top Bar */}
      <TopBar onOpenWindow={openWindow} />
      
      {/* Main Content Area */}
      <div className="flex-1 relative h-full">
        {/* Visitor Counter and User Profile */}
        <div className="absolute top-4 right-4 flex items-center gap-4 z-10">
          <VisitorCounter count={visitorCount} />
          <UserProfile />
        </div>

        {/* Welcome Content - shown when no window is open */}
        {!activeWindow && (
          <div className="h-full flex items-center justify-center p-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="mb-8">
                <h1 className="text-6xl font-bold mb-6 text-white">
                  Welcome to My Portfolio
                </h1>
                <div className="text-2xl text-white/80 mb-4">
                  <span className="typewriter">
                    I'm a Full Stack Developer
                  </span>
                </div>
                <div className="text-2xl text-white/80 mb-4">
                  <span className="typewriter" style={{ animationDelay: "4s" }}>
                    Backend Developer
                  </span>
                </div>
                <div className="text-2xl text-white/80 mb-8">
                  <span className="typewriter" style={{ animationDelay: "8s" }}>
                    Turning Ideas Into Reality
                  </span>
                </div>
              </div>
              
              <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto fade-in">
                Passionate engineering student with expertise in full-stack development, 
                problem-solving, and creating innovative solutions. I specialize in backend 
                technologies and love building applications that make a difference.
              </p>
            </div>
          </div>
        )}

        {/* Window Manager */}
        <WindowManager 
          activeWindow={activeWindow} 
          onClose={closeWindow}
        />
      </div>

      {/* Taskbar */}
      <Taskbar onOpenWindow={openWindow} activeWindow={activeWindow} />
    </div>
  );
};

export default Index;
