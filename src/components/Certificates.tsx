import { Award, ExternalLink } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "Database Management System 1",
      issuer: "Infosys",
      link: "https://www.linkedin.com/in/kavya-gupta-8a4301290/recent-activity/all/",
    },
    {
      title: "Database Management System 2",
      issuer: "Infosys",
      link: "https://www.linkedin.com/in/kavya-gupta-8a4301290/recent-activity/all/",
    },
    {
      title: "Generative AI",
      issuer: "LinkedIn",
      link: "https://lnkd.in/d6hegcXs",
    },
    {
      title: "Aws Cloud Practioner Essentials",
      issuer: "Amazon Web Services",
      link: "https://lnkd.in/d6hegcXs",
    },
    {
      title: "SQL Badge",
      issuer: "Leetcode",
      link: "https://leetcode.com/medal/?showImg=0&id=8982998&isLevel=false",
    },
  ];

  return (
    <section
      id="certificates"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Certificates
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-slate-800/50 rounded-2xl p-6 backdrop-blur-sm border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 bg-linear-to-br from-cyan-500 to-blue-600 rounded-lg group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-shadow duration-300">
                  <Award size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-cyan-400 text-sm">{cert.issuer}</p>
                </div>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
