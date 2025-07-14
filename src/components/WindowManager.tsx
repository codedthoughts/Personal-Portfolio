import { useEffect, useState } from "react";
import { X } from "lucide-react";
import AboutWindow from "./windows/AboutWindow";
import SkillsWindow from "./windows/SkillsWindow";
import EducationWindow from "./windows/EducationWindow";
import ExperienceWindow from "./windows/ExperienceWindow";
import ResumeWindow from "./windows/ResumeWindow";
import ProjectsWindow from "./windows/ProjectsWindow";

interface WindowManagerProps {
  activeWindow: string | null;
  onClose: () => void;
}

const WindowManager = ({ activeWindow, onClose }: WindowManagerProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (activeWindow) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [activeWindow]);

  if (!activeWindow) return null;

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 200);
  };

  const renderWindowContent = () => {
    switch (activeWindow) {
      case "about":
        return <AboutWindow />;
      case "skills":
        return <SkillsWindow />;
      case "education":
        return <EducationWindow />;
      case "experience":
        return <ExperienceWindow />;
      case "resume":
        return <ResumeWindow />;
      case "projects":
        return <ProjectsWindow />;
      default:
        return <div className="p-8 text-center">Content not found</div>;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Window */}
      <div 
        className={`window-frame w-full max-w-4xl h-5/6 flex flex-col relative transform transition-all duration-300 ${
          isVisible ? 'animate-window-in' : 'animate-window-out'
        }`}
      >
        {/* Window Header */}
        <div className="window-controls bg-white/5 border-b border-white/10 flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="window-control close" onClick={handleClose}></div>
            <div className="window-control minimize"></div>
            <div className="window-control maximize"></div>
          </div>
          
          <div className="text-white/90 font-medium text-sm capitalize">
            {activeWindow?.replace(/([A-Z])/g, ' $1').trim()}
          </div>
          
          <button
            onClick={handleClose}
            className="text-white/60 hover:text-white transition-colors p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Window Content */}
        <div className="flex-1 overflow-hidden">
          {renderWindowContent()}
        </div>
      </div>
    </div>
  );
};

export default WindowManager;