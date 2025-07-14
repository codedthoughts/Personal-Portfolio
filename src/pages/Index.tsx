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
        {/* User Profile */}
        <div className="absolute top-4 right-4 z-10">
          <UserProfile />
        </div>

        {/* Visitor Counter */}
        <div className="absolute bottom-20 right-4 z-10">
          <VisitorCounter count={visitorCount} />
        </div>


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
