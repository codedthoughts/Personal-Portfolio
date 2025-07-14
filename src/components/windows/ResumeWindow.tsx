import { Download, FileText, ExternalLink } from "lucide-react";
import { useState } from "react";

const ResumeWindow = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate PDF loading
  setTimeout(() => setIsLoading(false), 1000);

  const handleDownload = () => {
    // In a real app, this would download the actual PDF
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual PDF URL
    link.download = 'John_Doe_Resume.pdf';
    link.click();
  };

  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-white/5 to-white/10">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <FileText className="w-6 h-6 text-white" />
          <h2 className="text-white font-semibold">Resume - John Doe</h2>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg transition-colors text-sm"
          >
            <Download className="w-4 h-4" />
            Download PDF
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
          <div className="h-full overflow-auto p-4">
            {/* Resume Content - This would normally be an embedded PDF */}
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
              
              {/* Resume Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 text-center">
                <h1 className="text-4xl font-bold mb-2">JOHN DOE</h1>
                <p className="text-xl mb-4">Full Stack Developer | Backend Engineer</p>
                <div className="flex justify-center items-center gap-6 text-sm">
                  <span>📧 john.doe@example.com</span>
                  <span>📱 +91 12345 67890</span>
                  <span>📍 New Delhi, India</span>
                </div>
              </div>

              {/* Resume Body */}
              <div className="p-8 space-y-6 text-gray-800">
                
                {/* Professional Summary */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-500 pb-2 mb-4">PROFESSIONAL SUMMARY</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Passionate Computer Science Engineering student with strong foundation in full-stack development 
                    and backend technologies. Experienced in building scalable web applications using modern frameworks 
                    and tools. Seeking opportunities to contribute to innovative projects as an SDE or Backend Developer.
                  </p>
                </section>

                {/* Technical Skills */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-500 pb-2 mb-4">TECHNICAL SKILLS</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Programming Languages</h3>
                      <p className="text-gray-700">JavaScript, TypeScript, Python, Java, C++</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Frontend Technologies</h3>
                      <p className="text-gray-700">React.js, Next.js, HTML5, CSS3, Tailwind CSS</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Backend Technologies</h3>
                      <p className="text-gray-700">Node.js, Express.js, REST APIs, GraphQL</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Databases & Tools</h3>
                      <p className="text-gray-700">MongoDB, PostgreSQL, Git, Docker, AWS</p>
                    </div>
                  </div>
                </section>

                {/* Education */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-500 pb-2 mb-4">EDUCATION</h2>
                  <div className="mb-3">
                    <h3 className="font-semibold text-gray-800">Bachelor of Technology in Computer Science</h3>
                    <p className="text-gray-700">ABC University, New Delhi | 2021-2025 | CGPA: 8.5/10.0</p>
                  </div>
                </section>

                {/* Experience */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-500 pb-2 mb-4">EXPERIENCE</h2>
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-800">Frontend Developer Intern</h3>
                    <p className="text-gray-600 text-sm">TechCorp Solutions | June 2023 - August 2023</p>
                    <ul className="mt-2 text-gray-700 list-disc list-inside space-y-1">
                      <li>Developed responsive web applications using React.js and TypeScript</li>
                      <li>Collaborated with UX team to implement pixel-perfect designs</li>
                      <li>Optimized application performance resulting in 40% faster load times</li>
                    </ul>
                  </div>
                </section>

                {/* Projects */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-500 pb-2 mb-4">KEY PROJECTS</h2>
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-gray-800">E-Commerce Platform</h3>
                      <p className="text-gray-700 text-sm">Full-stack e-commerce solution with payment integration • React.js, Node.js, MongoDB</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Task Management API</h3>
                      <p className="text-gray-700 text-sm">RESTful API with authentication and real-time updates • Express.js, Socket.io, PostgreSQL</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Weather Dashboard</h3>
                      <p className="text-gray-700 text-sm">Real-time weather application with location services • React.js, API Integration</p>
                    </div>
                  </div>
                </section>

                {/* Achievements */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-500 pb-2 mb-4">ACHIEVEMENTS</h2>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 1st Place in Inter-University Hackathon (2023)</li>
                    <li>• Dean's List for Academic Excellence (2023)</li>
                    <li>• 500+ problems solved on LeetCode</li>
                    <li>• Contributed to 3 open-source projects with 100+ GitHub stars</li>
                  </ul>
                </section>

              </div>
            </div>
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