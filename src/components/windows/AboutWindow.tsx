const AboutWindow = () => {
  return (
    <div className="h-full overflow-y-auto p-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-6 text-white">
            Welcome to My Portfolio
          </h1>
          <div className="text-2xl text-white/90 mb-4">
            <span className="typewriter">
              I'm a Full Stack Developer
            </span>
          </div>
          <div className="text-2xl text-white/90 mb-4">
            <span className="typewriter" style={{ animationDelay: "4s" }}>
              Backend Developer
            </span>
          </div>
          <div className="text-2xl text-white/90 mb-8">
            <span className="typewriter" style={{ animationDelay: "8s" }}>
              Turning Ideas Into Reality
            </span>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
          <h2 className="text-3xl font-semibold mb-6 text-white">
            About Me
          </h2>
          <p className="text-lg text-white/80 leading-relaxed mb-6">
            Passionate engineering student with expertise in full-stack development, 
            problem-solving, and creating innovative solutions. I specialize in backend 
            technologies and love building applications that make a difference.
          </p>
          <p className="text-lg text-white/80 leading-relaxed">
            Currently pursuing my engineering degree while actively seeking opportunities 
            as an SDE 1 or Backend Developer. I thrive on challenges and enjoy learning 
            new technologies to solve complex problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold mb-4 text-white">
              What I Do
            </h3>
            <ul className="space-y-2 text-white/80">
              <li>• Full Stack Web Development</li>
              <li>• Backend API Design & Development</li>
              <li>• Database Architecture & Optimization</li>
              <li>• Problem Solving on LeetCode</li>
              <li>• Open Source Contributions</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold mb-4 text-white">
              My Goals
            </h3>
            <ul className="space-y-2 text-white/80">
              <li>• Land an SDE 1 position</li>
              <li>• Contribute to meaningful projects</li>
              <li>• Continuous learning & growth</li>
              <li>• Build scalable applications</li>
              <li>• Make an impact through code</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWindow;