import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const EducationWindow = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "ABC University",
      location: "New Delhi, India",
      duration: "2021 - 2025",
      gpa: "8.5/10.0",
      highlights: [
        "Relevant Coursework: Data Structures, Algorithms, Database Systems, Computer Networks",
        "Member of Programming Club and Technical Society",
        "Participated in multiple hackathons and coding competitions"
      ]
    },
    {
      degree: "Higher Secondary Certificate (12th)",
      institution: "XYZ School",
      location: "Delhi, India", 
      duration: "2019 - 2021",
      gpa: "92.5%",
      highlights: [
        "Science Stream with Computer Science",
        "School Topper in Computer Science",
        "Led the school's technical team"
      ]
    }
  ];

  const achievements = [
    {
      title: "Dean's List",
      description: "Achieved Dean's List for academic excellence (Top 5%)",
      year: "2023"
    },
    {
      title: "Hackathon Winner",
      description: "1st Place in Inter-University Hackathon",
      year: "2023"
    },
    {
      title: "Coding Competition",
      description: "Top 10 in National Level Programming Contest",
      year: "2022"
    }
  ];

  return (
    <div className="h-full overflow-y-auto p-8 bg-gradient-to-br from-white/5 to-white/10">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Education</h1>
          <p className="text-white/80 text-lg">Academic background and achievements</p>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="glass-morphism p-6 rounded-lg">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-8 h-8 text-purple-400" />
                  <div>
                    <h2 className="text-xl font-semibold text-white">{edu.degree}</h2>
                    <p className="text-white/80 text-lg">{edu.institution}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-white/70 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <span className="inline-block bg-gradient-to-r from-purple-400 to-pink-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                  GPA: {edu.gpa}
                </span>
              </div>

              <div>
                <h3 className="text-white font-medium mb-2">Highlights:</h3>
                <ul className="space-y-1 text-white/80">
                  {edu.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-morphism p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
            <Award className="w-6 h-6 text-yellow-400" />
            Academic Achievements
          </h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/5 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-medium">{achievement.title}</h3>
                  <span className="text-yellow-400 text-sm">{achievement.year}</span>
                </div>
                <p className="text-white/70 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationWindow;