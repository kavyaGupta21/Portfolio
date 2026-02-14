import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import meImage from "../assets/me.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const diagramRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(diagramRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
      });
      gsap.from(contentRef.current?.children || [], {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
      });
      const nodes = diagramRef.current?.querySelectorAll(".node");
      if (nodes) {
        gsap.to(nodes, {
          y: "+=20",
          duration: 2,
          stagger: 0.1,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.to(diagramRef.current, {
          rotateY: 360,
          duration: 20,
          repeat: -1,
          ease: "none",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-32 overflow-hidden"
    >
      <div className="absolute inset-0 grid-background opacity-30" />
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-gradient mb-20">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto ">
          <div
            ref={diagramRef}
            className="relative h-96 flex items-center justify-center"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 bg-linear-to-r from-purple-600/10 to-blue-600/10 blur-3xl" />

            <div className="relative w-full h-full flex items-center justify-center">
              <div
                className="absolute w-96 h-96 border-2 border-b-blue-400 rounded-full animate-spin"
                style={{
                  animationDuration: "10s",
                  animationDirection: "reverse",
                }}
              />
              <div className="absolute w-96 h-96  glassmorphism   rounded-full flex items-center justify-center overflow-hidden ">
                <img
                  ref={imgRef}
                  src={meImage}
                  alt="About me"
                  className="w-full h-full object-cover rounded-full border-2  border-b-fuchsia-700 "
                />
              </div>
            </div>
          </div>
          <div ref={contentRef} className="space-y-6">
            <h1 className="text-3xl font-bold text-white mb-4">
              Turning ideas into polished digital experiences with passion and
              precision.
            </h1>
            <br />
            <p className="text-gray-300 ">
              I’m a curious and detail-oriented Computer Science student who
              enjoys solving problems through technology. I like exploring how
              design and development come together to create intuitive digital
              experiences.
              <br />
              From building full-stack projects to experimenting with AI-driven
              ideas, I focus on writing clean code and continuously improving my
              skills. I believe good products are built at the intersection of
              logic, creativity, and user empathy, and I strive to reflect that
              in everything I create.
            </p>
            <br />
            <div className="flex justify-center">
              <button className="w-44 h-12 justify-center inline-block bg-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:bg-purple-400 transform transition-transform duration-300">
                <a
                  href="https://drive.google.com/file/d/1E7wGXjfqLSwtFvM5kF3Kn8xNYt_xMaRz/view?usp=sharing"
                  download
                >
                  Download Resume
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
