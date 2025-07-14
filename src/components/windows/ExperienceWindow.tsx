import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

const ExperienceWindow = () => {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "TechCorp Solutions",
      location: "Remote",
      duration: "Jun 2023 - Aug 2023",
      type: "Internship",
      description: "Worked on building responsive web applications using React.js and TypeScript.",
      responsibilities: [
        "Developed 3 major features for the company's main product using React.js",
        "Collaborated with UX team to implement pixel-perfect designs",
        "Optimized application performance resulting in 40% faster load times",
        "Participated in code reviews and followed agile development practices"
      ],
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Git"]
    },
    {
      title: "Full Stack Developer",
      company: "Personal Projects",
      location: "Self-Employed",
      duration: "Jan 2023 - Present",
      type: "Freelance",
      description: "Building various web applications and contributing to open-source projects.",
      responsibilities: [
        "Built 5+ full-stack web applications using MERN stack",
        "Contributed to 3 open-source projects with 100+ stars on GitHub",
        "Mentored 2 junior developers in web development fundamentals",
        "Maintained and deployed applications using modern DevOps practices"
      ],
      technologies: ["Node.js", "React.js", "MongoDB", "Express.js", "AWS"]
    }
  ];

  const volunteerWork = [
    {
      title: "Technical Lead",
      organization: "University Coding Club",
      duration: "Sep 2022 - Present",
      description: "Leading technical workshops and organizing coding competitions for 200+ students."
    },
    {
      title: "Open Source Contributor", 
      organization: "Various Projects",
      duration: "Jan 2022 - Present",
      description: "Contributing to open-source projects, focusing on React and Node.js ecosystems."
    }
  ];

  return (
    <div className="h-full overflow-y-auto p-8 bg-gradient-to-br from-white/5 to-white/10">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Experience</h1>
          <p className="text-white/80 text-lg">Professional and project experience</p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="glass-morphism p-6 rounded-lg">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-8 h-8 text-blue-400" />
                  <div>
                    <h2 className="text-xl font-semibold text-white">{exp.title}</h2>
                    <p className="text-white/80 text-lg">{exp.company}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-white/70 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <span className={`inline-block text-white px-3 py-1 rounded-full text-sm font-medium ${
                  exp.type === 'Internship' ? 'bg-green-500/20 border border-green-400' : 'bg-blue-500/20 border border-blue-400'
                }`}>
                  {exp.type}
                </span>
              </div>

              <p className="text-white/80 mb-4">{exp.description}</p>

              <div className="mb-4">
                <h3 className="text-white font-medium mb-2">Key Responsibilities:</h3>
                <ul className="space-y-1 text-white/80">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-white font-medium mb-2">Technologies Used:</h3>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-white/10 text-white px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-morphism p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-white mb-6">Volunteer Work & Leadership</h2>
          
          <div className="space-y-4">
            {volunteerWork.map((work, index) => (
              <div key={index} className="bg-white/5 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-medium">{work.title}</h3>
                  <span className="text-white/70 text-sm">{work.duration}</span>
                </div>
                <p className="text-purple-400 text-sm mb-2">{work.organization}</p>
                <p className="text-white/70 text-sm">{work.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-morphism p-6 rounded-lg text-center">
          <h2 className="text-xl font-semibold text-white mb-4">Looking for Opportunities</h2>
          <p className="text-white/80 mb-4">
            I'm actively seeking internship and entry-level positions as an SDE or Backend Developer.
            Open to remote work and willing to relocate.
          </p>
          <button 
            onClick={() => window.open("mailto:john.doe@example.com", "_blank")}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:scale-105 transition-transform"
          >
            <ExternalLink className="w-4 h-4" />
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceWindow;