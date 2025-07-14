import { Eye } from "lucide-react";
import { useState } from "react";

interface VisitorCounterProps {
  count: number;
}

const VisitorCounter = ({ count }: VisitorCounterProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div 
      className="relative group w-12 h-12 glass-morphism rounded-full cursor-pointer transition-all duration-200 hover:scale-110"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      style={{ zIndex: 100 }}
    >
      <div className="flex items-center justify-center h-full">
        <Eye className="w-5 h-5 text-white" />
      </div>
      
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-2 px-4 py-3 bg-black/90 text-white text-base rounded-xl opacity-100 transition-all duration-200 whitespace-nowrap shadow-lg">
          <div className="text-center">
            <div className="font-semibold text-lg">{count.toLocaleString()}</div>
            <div className="text-sm text-white/80">Visitors</div>
          </div>
          {/* Arrow */}
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black/80"></div>
        </div>
      )}
    </div>
  );
};

export default VisitorCounter;