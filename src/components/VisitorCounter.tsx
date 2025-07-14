import { Eye } from "lucide-react";
import { useState } from "react";

interface VisitorCounterProps {
  count: number;
}

const VisitorCounter = ({ count }: VisitorCounterProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className="glass-morphism p-3 rounded-full cursor-pointer transition-all duration-200 hover:scale-110">
        <Eye className="w-5 h-5 text-white" />
      </div>
      
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-black/80 text-white text-sm rounded-lg opacity-0 animate-fade-in whitespace-nowrap">
          <div className="text-center">
            <div className="font-semibold">{count.toLocaleString()}</div>
            <div className="text-xs text-white/70">Visitors</div>
          </div>
          {/* Arrow */}
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black/80"></div>
        </div>
      )}
    </div>
  );
};

export default VisitorCounter;