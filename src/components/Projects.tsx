import { Bot, Gamepad2, MessageSquare, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Virtual Assistant",
      description:
        "Built an AI virtual assistant using the MERN stack integrated with Google Gemini API for natural and interactive conversations. Added features like checking weather, date and time, doing calculations, playing music on Spotify, and searching YouTube.",
      techStack: [
        "TailwindCSS",
        "JavaScript",
        "React",
        "MongoDB",
        "Node.js",
        "Open-API",
        "JWT",
        "Express.js",
      ],
      icon: Bot,
      link: "https://ai-virtual-assistant-zim2.vercel.app",
    },
    {
      title: "Real-Time Chat App",
      description:
        "A MERN stack real-time chat application using Socket.IO for instant messaging.",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "MongoDB",
        "Node.js",
        "Socket.IO",
        "Express",
        "JWT",
      ],
      icon: MessageSquare,
      link: null,
    },
    {
      title: "Whack-A-Mole Game",
      description:
        "An interactive Whack-a-Mole game built using vanilla JavaScript, HTML, and CSS.",
      techStack: ["HTML", "CSS", "JavaScript"],
      icon: Gamepad2,
      link: "https://mole-game-rosy.vercel.app",
    },
    {
      title: "ShakeScape",
      description:
        "Designed a modern and user-friendly UI/UX for a shakes brand website.",
      techStack: ["Figma"],
      icon: Gamepad2,
      link: "https://www.figma.com/proto/WSgLuFRgKKqLtXAyyxtiTR/Rebuilt-Zenguard-HQ",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <div
                key={index}
                className="bg-slate-800/50 rounded-2xl p-6 backdrop-blur-sm border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-linear-to-br from-cyan-500 to-blue-600 rounded-lg group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-shadow duration-300"
                      >
                        <Icon size={28} />
                      </a>
                    ) : (
                      <div className="p-3 bg-linear-to-br from-cyan-500 to-blue-600 rounded-lg">
                        <Icon size={28} />
                      </div>
                    )}

                    <h3 className="text-2xl font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink
                        className="text-cyan-400 hover:text-white transition-colors"
                        size={20}
                      />
                    </a>
                  )}
                </div>

                <p className="text-gray-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-900/70 text-cyan-400 rounded-lg text-sm border border-slate-700 hover:border-cyan-500/50 transition-colors duration-300"
                    >
                      {tech}
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

export default Projects;
