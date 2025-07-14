const AboutWindow = () => {
  return (
    <div className="h-full overflow-y-auto p-8 bg-gradient-to-br from-white/5 to-white/10">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white/20 object-cover"
          />
          <h1 className="text-4xl font-bold text-white mb-2">John Doe</h1>
          <p className="text-xl text-white/80">Engineering Student & Aspiring SDE</p>
        </div>

        <div className="glass-morphism p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-white mb-4">About Me</h2>
          <div className="space-y-4 text-white/80">
            <p className="leading-relaxed">
              I'm a passionate engineering student with a strong foundation in computer science 
              and software development. Currently pursuing my degree while actively building 
              real-world projects and contributing to open-source communities.
            </p>
            <p className="leading-relaxed">
              My journey in technology started with curiosity about how applications work, 
              which led me to explore various programming languages and frameworks. I specialize 
              in full-stack development with a particular interest in backend technologies.
            </p>
            <p className="leading-relaxed">
              I'm actively seeking internship and entry-level opportunities as an SDE or 
              Backend Developer where I can contribute my skills and continue learning 
              from experienced professionals in the industry.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-morphism p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Core Values</h3>
            <ul className="space-y-2 text-white/80">
              <li>• Continuous Learning</li>
              <li>• Problem Solving</li>
              <li>• Clean Code Practices</li>
              <li>• Team Collaboration</li>
              <li>• Innovation & Creativity</li>
            </ul>
          </div>

          <div className="glass-morphism p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Interests</h3>
            <ul className="space-y-2 text-white/80">
              <li>• Backend Development</li>
              <li>• System Design</li>
              <li>• Competitive Programming</li>
              <li>• Open Source Contribution</li>
              <li>• AI/ML Technologies</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWindow;