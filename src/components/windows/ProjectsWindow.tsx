import { ExternalLink, Github, Play, Calendar, Code, Star } from "lucide-react";
import { useState } from "react";

const ProjectsWindow = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with modern UI, secure payment integration, and admin dashboard. Features include user authentication, shopping cart, order management, and real-time inventory tracking.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React.js", "Node.js", "MongoDB", "Stripe API", "JWT", "Tailwind CSS"],
      features: [
        "User authentication and authorization",
        "Shopping cart and wishlist functionality", 
        "Secure payment processing with Stripe",
        "Admin dashboard for inventory management",
        "Real-time order tracking",
        "Responsive design for all devices"
      ],
      githubUrl: "https://github.com/johndoe/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.vercel.app",
      status: "Completed",
      date: "Dec 2023"
    },
    {
      title: "Task Management API",
      description: "RESTful API built with Express.js featuring real-time collaboration, file uploads, and advanced filtering. Includes comprehensive documentation and testing suite.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["Node.js", "Express.js", "PostgreSQL", "Socket.io", "JWT", "Multer"],
      features: [
        "RESTful API with full CRUD operations",
        "Real-time updates using WebSockets",
        "File upload and management",
        "Advanced filtering and pagination",
        "Comprehensive API documentation",
        "Unit and integration testing"
      ],
      githubUrl: "https://github.com/johndoe/task-api",
      liveUrl: "https://task-api-docs.herokuapp.com",
      status: "Completed", 
      date: "Oct 2023"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with beautiful UI, location services, and detailed forecasts. Features interactive maps and weather alerts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["React.js", "TypeScript", "OpenWeather API", "Leaflet.js", "Chart.js"],
      features: [
        "Current weather and 7-day forecast",
        "Location-based weather detection",
        "Interactive weather maps", 
        "Weather alerts and notifications",
        "Beautiful data visualizations",
        "Offline support with caching"
      ],
      githubUrl: "https://github.com/johndoe/weather-dashboard",
      liveUrl: "https://weather-app-react.netlify.app",
      status: "Completed",
      date: "Sep 2023"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization, automated reporting, and multi-platform integration.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Chart.js", "Tailwind CSS"],
      features: [
        "Multi-platform social media integration",
        "Real-time analytics and insights",
        "Automated report generation",
        "Custom dashboard creation",
        "Team collaboration features",
        "Export data in multiple formats"
      ],
      githubUrl: "https://github.com/johndoe/social-dashboard",
      liveUrl: "https://social-dashboard-demo.vercel.app",
      status: "In Progress",
      date: "Jan 2024"
    },
    {
      title: "Chat Application",
      description: "Real-time messaging application with group chats, file sharing, and end-to-end encryption. Built with modern web technologies.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop",
      technologies: ["React.js", "Socket.io", "Node.js", "MongoDB", "Cloudinary", "JWT"],
      features: [
        "Real-time messaging with Socket.io",
        "Group chat functionality",
        "File and image sharing",
        "Message encryption",
        "User presence indicators", 
        "Message search and history"
      ],
      githubUrl: "https://github.com/johndoe/chat-app",
      liveUrl: "https://realtime-chat-demo.herokuapp.com",
      status: "Completed",
      date: "Aug 2023"
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[currentProject];

  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-white/5 to-white/10">
      {/* Header */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">My Projects</h1>
            <p className="text-white/70">
              Project {currentProject + 1} of {projects.length}
            </p>
          </div>
          
          {/* Navigation */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevProject}
              className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
              disabled={currentProject === 0}
            >
              ←
            </button>
            <button
              onClick={nextProject}
              className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
              disabled={currentProject === projects.length - 1}
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-4xl mx-auto">
          {/* Project Image */}
          <div className="mb-6">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          {/* Project Info */}
          <div className="glass-morphism p-6 rounded-lg mb-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                <div className="flex items-center gap-4 text-white/70 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{project.date}</span>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs ${
                    project.status === 'Completed' 
                      ? 'bg-green-500/20 text-green-400 border border-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-400'
                  }`}>
                    {project.status}
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.open(project.githubUrl, "_blank")}
                  className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Code
                </button>
                <button
                  onClick={() => window.open(project.liveUrl, "_blank")}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <Play className="w-4 h-4" />
                  Live Demo
                </button>
              </div>
            </div>

            <p className="text-white/80 leading-relaxed mb-6">{project.description}</p>

            {/* Technologies */}
            <div className="mb-6">
              <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                <Code className="w-5 h-5" />
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                <Star className="w-5 h-5" />
                Key Features
              </h3>
              <div className="grid md:grid-cols-2 gap-2">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2 text-white/80">
                    <span className="text-purple-400 mt-1">•</span>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Project Navigation Dots */}
          <div className="flex justify-center gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentProject 
                    ? 'bg-purple-400' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsWindow;