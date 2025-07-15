import { Download, FileText, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

const ResumeWindow = () => {
  const [isLoading, setIsLoading] = useState(true);
  // Import the PDF file using Vite's import.meta.glob
  const pdfUrl = new URL('@/assets/Sarthak\'s Resume.pdf', import.meta.url).href;

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Sarthak_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-white/5 to-white/10">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <FileText className="w-6 h-6 text-white" />
          <h2 className="text-white font-semibold">Resume</h2>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg transition-colors text-sm"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </button>
        </div>
      </div>

      {/* PDF Viewer Area */}
      <div className="flex-1 relative">
        {isLoading ? (
          <div className="h-full flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin w-8 h-8 border-2 border-white/30 border-t-white rounded-full mx-auto mb-4"></div>
              <p className="text-white/70">Loading resume...</p>
            </div>
          </div>
        ) : (
          <div className="h-full overflow-auto p-4 bg-black/5">
            <iframe 
              src={pdfUrl} 
              title="Resume PDF" 
              className="w-full h-full"
              style={{ border: 'none' }}
            />
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-white/10 text-center">
        <p className="text-white/70 text-sm">
          This is a preview of the resume. Click download to get the PDF version.
        </p>
      </div>
    </div>
  );
};

export default ResumeWindow;