import { Button } from "@/components/ui/button";

interface TopBarProps {
  onOpenWindow: (windowType: string) => void;
}

const TopBar = ({ onOpenWindow }: TopBarProps) => {
  const menuItems = [
    { label: "About", action: () => onOpenWindow("about") },
    { label: "Skills", action: () => onOpenWindow("skills") },
    { label: "Education", action: () => onOpenWindow("education") },
    { label: "Experience", action: () => onOpenWindow("experience") },
  ];

  return (
    <div className="h-14 glass-morphism border-b border-white/20 flex items-center justify-between px-6 relative z-50">
      {/* Left side - Portfolio title */}
      <div className="text-white/90 font-medium text-xl">
        Sarthak's Portfolio
      </div>

      {/* Center - Navigation Menu */}
      <div className="flex items-center gap-1">
        {menuItems.map((item) => (
          <Button
            key={item.label}
            variant="ghost"
            size="sm"
            onClick={item.action}
            className="text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 text-xl px-6 py-3 h-auto font-medium"
          >
            {item.label}
          </Button>
        ))}
      </div>

      {/* Right side - Window controls placeholder */}
      <div className="w-16"></div>
    </div>
  );
};

export default TopBar;