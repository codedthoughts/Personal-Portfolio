import Icon from "./Icon";

interface TaskbarProps {
  onOpenWindow: (windowType: string) => void;
  activeWindow: string | null;
}

const Taskbar = ({ onOpenWindow, activeWindow }: TaskbarProps) => {
  const taskbarItems = [
    { 
      icon: "Vector",
      label: "GitHub", 
      action: () => onOpenWindow("github"),
      windowType: "github"
    },
    { 
      icon: "Leetcode",
      label: "LeetCode", 
      action: () => window.open("https://leetcode.com/codedthoughts", "_blank"),
      external: true 
    },
    { 
      icon: "Geeks for geeks",
      label: "Geeks for Geeks", 
      action: () => window.open("https://www.geeksforgeeks.org", "_blank"),
      external: true 
    },
    { 
      icon: "Linkedin",
      label: "LinkedIn", 
      action: () => window.open("https://linkedin.com/in/sarthak-jejurkar", "_blank"),
      external: true 
    },
    { 
      icon: "Resume",
      label: "Resume", 
      action: () => onOpenWindow("resume"),
      windowType: "resume"
    },
    { 
      icon: "Projects",
      label: "Projects", 
      action: () => onOpenWindow("projects"),
      windowType: "projects"
    },
  ];

  return (
    <div className="fixed bottom-7 left-0 right-0 h-14 flex items-center justify-center p-2 z-40">
      <div className="glass-morphism rounded-2xl px-4 py-3 flex items-center gap-6">
        {taskbarItems.map((item, index) => {
          const isActive = activeWindow === item.windowType;
          
          return (
            <>
              {index === 4 && (
                <div className="h-8 w-px bg-white/20 mx-4" />
              )}
              <button
                key={item.label}
                onClick={item.action}
                className={`taskbar-item w-12 h-12 p-2 relative group ${
                  isActive ? 'bg-white/20 scale-110' : ''
                }`}
                title={item.label}
              >
              <Icon name={item.icon} size={28} />
              
              {/* Active indicator */}
              {isActive && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
              )}
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                {item.label}
              </div>
            </button>
          </>);
        })}
      </div>
    </div>
  );
};

export default Taskbar;