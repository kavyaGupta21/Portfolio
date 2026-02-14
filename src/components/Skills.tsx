import { Code, Layers, Database, Users, BookOpen } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Java", "HTML", "CSS", "JavaScript", "SQL", "C"],
    },
    {
      title: "Frameworks/Libraries",
      icon: Layers,
      skills: [
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "TailwindCSS",
        "Mongoose",
      ],
    },
    {
      title: "Databases/Tools",
      icon: Database,
      skills: ["MongoDB", "Firebase", "Git", "GitHub", "Postman"],
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: [
        "Communication",
        "Teamwork",
        "Time Management",
        "Quick Learning",
        "Adaptability",
        "Creative",
      ],
    },
    {
      title: "CS Fundamentals",
      icon: BookOpen,
      skills: ["DSA", "DBMS", "OOP"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 rounded-2xl p-6 backdrop-blur-sm border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-linear-to-br from-cyan-500 to-blue-600 rounded-lg">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-slate-900/70 text-cyan-400 rounded-lg text-sm border border-slate-700 hover:border-cyan-500/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
