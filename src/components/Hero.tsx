import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const platformRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(platformRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        scale: 0.8,
      })
        .from(
          imageRef.current,
          {
            scale: 0,
            opacity: 0,
            duration: 1,
            ease: "back.out(1.7)",
          },
          "-=0.6",
        )
        .from(
          titleRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5",
        )
        .from(
          subtitleRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.4",
        )
        .from(
          ctaRef.current?.children || [],
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
          },
          "-=0.3",
        );
      gsap.to(imageRef.current, {
        rotateY: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });

      if (heroRef.current) {
        heroRef.current.addEventListener("mousemove", (e) => {
          const { clientX, clientY } = e;
          const { innerWidth, innerHeight } = window;
          const xPos = (clientX / innerWidth - 0.5) * 20;
          const yPos = (clientY / innerHeight - 0.5) * 20;

          gsap.to(platformRef.current, {
            rotateY: xPos,
            rotateX: -yPos,
            duration: 0.5,
            ease: "power2.out",
          });
        });
      }
    }, heroRef);
    const typeEffect = () => {
      const phrases = [
        "Building scalable applications",
        "Crafting elegant solutions",
        "Turning ideas into reality",
        "Engineering the future",
      ];
      let phraseIndex = 0;
      let charIndex = 0;
      let isDeleting = false;

      const type = () => {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
          charIndex--;
        } else {
          charIndex++;
        }

        if (subtitleRef.current) {
          subtitleRef.current.textContent = currentPhrase.substring(
            0,
            charIndex,
          );
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentPhrase.length) {
          typeSpeed = 2000;
          isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          typeSpeed = 500;
        }
        setTimeout(type, typeSpeed);
      };

      type();
    };

    setTimeout(typeEffect, 2000);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4">
            Hello, I'm
            <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-cyan-600 bg-clip-text text-transparent">
              Kavya Gupta
            </span>
          </h1>

          <h1
            ref={titleRef}
            className="text-1xl md:text-2xl font-bold text-gradient leading-tight relative top-2"
          >
            Software Engineer | Full-Stack Developer | UI/UX Designer | Problem
            Solver
          </h1>
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-cyan-400 font-light h-8 relative top-2"
          >
            Building scalable applications
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="tel:+918787060911"
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all duration-300 hover:scale-105"
          >
            <Phone size={20} />
            <span>+91-8787060911</span>
          </a>
          <a
            href="mailto:kavyagupta21004@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all duration-300 hover:scale-105"
          >
            <Mail size={20} />
            <span>Email</span>
          </a>
          <div className="flex items-center gap-2 px-6 py-3 bg-slate-800 rounded-lg">
            <MapPin size={20} />
            <span>Kanpur, India</span>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/kavyaGupta21"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-linear-to-br from-cyan-500 to-blue-600 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/kavya-gupta-8a4301290/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-linear-to-br from-cyan-500 to-blue-600 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
        </div>

        <div className="mt-12 animate-bounce">
          <button
            onClick={() => {
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
          >
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
