import { Code, Database, Globe, Server, Smartphone, GitBranch } from "lucide-react";

const SkillsWindow = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: [
        { name: "React.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Next.js", level: 80 },
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 85 },
        { name: "Python", level: 82 },
        { name: "Java", level: 80 },
        { name: "REST APIs", level: 90 },
        { name: "GraphQL", level: 75 },
      ]
    },
    {
      title: "Database & Cloud",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Redis", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Docker", level: 78 },
        { name: "Firebase", level: 82 },
      ]
    },
    {
      title: "Tools & Others",
      icon: GitBranch,
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 88 },
        { name: "Linux", level: 75 },
        { name: "Jest", level: 70 },
        { name: "Webpack", level: 65 },
      ]
    }
  ];

  return (
    <div className="h-full overflow-y-auto p-8 bg-gradient-to-br from-white/5 to-white/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Technical Skills</h1>
          <p className="text-white/80 text-lg">My expertise across different technologies</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.title} className="glass-morphism p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Icon className="w-6 h-6 text-white" />
                  <h2 className="text-xl font-semibold text-white">{category.title}</h2>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white/90">{skill.name}</span>
                        <span className="text-white/70 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 glass-morphism p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Certifications & Achievements</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
              <Code className="w-5 h-5 text-purple-400" />
              <div>
                <p className="text-white font-medium">React Developer Certification</p>
                <p className="text-white/70 text-sm">Meta - 2023</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
              <Database className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-white font-medium">MongoDB Certified Developer</p>
                <p className="text-white/70 text-sm">MongoDB Inc. - 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsWindow;