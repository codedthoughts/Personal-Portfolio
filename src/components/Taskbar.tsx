import { Github, Code, FileText, FolderOpen, User, Award, GraduationCap, Briefcase } from "lucide-react";

interface TaskbarProps {
  onOpenWindow: (windowType: string) => void;
  activeWindow: string | null;
}

const Taskbar = ({ onOpenWindow, activeWindow }: TaskbarProps) => {
  const taskbarItems = [
    { 
      icon: Github, 
      label: "GitHub", 
      action: () => window.open("https://github.com", "_blank"),
      external: true 
    },
    { 
      icon: Code, 
      label: "LeetCode", 
      action: () => window.open("https://leetcode.com", "_blank"),
      external: true 
    },
    { 
      icon: User, 
      label: "About", 
      action: () => onOpenWindow("about"),
      windowType: "about"
    },
    { 
      icon: Award, 
      label: "Skills", 
      action: () => onOpenWindow("skills"),
      windowType: "skills"
    },
    { 
      icon: GraduationCap, 
      label: "Education", 
      action: () => onOpenWindow("education"),
      windowType: "education"
    },
    { 
      icon: Briefcase, 
      label: "Experience", 
      action: () => onOpenWindow("experience"),
      windowType: "experience"
    },
    { 
      icon: FileText, 
      label: "Resume", 
      action: () => onOpenWindow("resume"),
      windowType: "resume"
    },
    { 
      icon: FolderOpen, 
      label: "Projects", 
      action: () => onOpenWindow("projects"),
      windowType: "projects"
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 flex items-center justify-center p-2 z-40">
      <div className="glass-morphism rounded-2xl px-4 py-2 flex items-center gap-2">
        {taskbarItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeWindow === item.windowType;
          
          return (
            <button
              key={item.label}
              onClick={item.action}
              className={`taskbar-item p-3 relative group ${
                isActive ? 'bg-white/20 scale-110' : ''
              }`}
              title={item.label}
            >
              <Icon className="w-6 h-6 text-white" />
              
              {/* Active indicator */}
              {isActive && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
              )}
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                {item.label}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Taskbar;