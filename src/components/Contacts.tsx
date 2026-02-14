// import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
// import { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Contact = () => {
//   const sectionRef = useRef<HTMLElement>(null);
//   const formRef = useRef<HTMLFormElement>(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(formRef.current, {
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 60%",
//         },
//         y: 50,
//         opacity: 0,
//         duration: 1,
//         ease: "power3.out",
//       });
//       const inputs = formRef.current?.querySelectorAll("input, textarea");
//       if (inputs) {
//         inputs.forEach((input) => {
//           input.addEventListener("focus", () => {
//             gsap.to(input, {
//               scale: 1.02,
//               duration: 0.2,
//             });
//           });
//           input.addEventListener("blur", () => {
//             gsap.to(input, {
//               scale: 1,
//               duration: 0.2,
//             });
//           });
//         });
//       }
//     }, sectionRef);
//     return () => ctx.revert();
//   }, []);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     setFormData({ name: "", email: "", message: "" });
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <section id="contact" className="p-2">
//       <h2 className="text-6xl font-bold mb-12 text-center">
//         <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//           Get In Touch
//         </span>
//       </h2>
//       <div className=" flex  sm:px-6 lg:px-8  gap-20">
//         <div className="w-160 py-20 px-4 mx-1 ">
//           <div className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
//             <p className="text-lg text-gray-300 text-center mb-8">
//               I'm always open to discussing new projects, creative ideas, or
//               opportunities to be part of your vision.
//             </p>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <a
//                 href="mailto:kavyagupta21004@gmail.com"
//                 className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-lg hover:bg-slate-900 transition-all duration-300 group"
//               >
//                 <div className="p-3 bg-linear-to-br from-cyan-500 to-blue-600 rounded-lg group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-shadow duration-300">
//                   <Mail size={24} />
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-400">Email</p>
//                   <p className="text-white break-all">
//                     kavyagupta21004@gmail.com
//                   </p>
//                 </div>
//               </a>
//               <a
//                 href="tel:+918787060911"
//                 className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-lg hover:bg-slate-900 transition-all duration-300 group"
//               >
//                 <div className="p-3 bg-linear-to-br from-cyan-500 to-blue-600 rounded-lg group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-shadow duration-300">
//                   <Phone size={24} />
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-400">Phone</p>
//                   <p className="text-white">+91-8787060911</p>
//                 </div>
//               </a>
//               <div className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-lg">
//                 <div className="p-3 bg-linear-to-br from-cyan-500 to-blue-600 rounded-lg">
//                   <MapPin size={24} />
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-400">Location</p>
//                   <p className="text-white">Kanpur, India</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-lg">
//                 <div className="flex gap-3">
//                   <a
//                     href="https://github.com/kavyaGupta21"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="p-3 bg-linear-to-br from-cyan-500 to-blue-600 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110"
//                   >
//                     <Github size={24} />
//                   </a>
//                   <a
//                     href="https://linkedin.com/in/kavya-gupta-8a4301290/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="p-3 bg-linear-to-br from-cyan-500 to-blue-600 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110"
//                   >
//                     <Linkedin size={24} />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <form
//           ref={formRef}
//           onSubmit={handleSubmit}
//           className="space-y-6  border border-b-cyan-900 bg-slate-800/50 rounded-3xl placeholder-gray-500  w-lg"
//         >
//           <div>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Your Name"
//               required
//               className="w-full px-6 py-4 glassmorphism  rounded-xl border border-b-cyan-950 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500 transition-all"
//             />
//           </div>
//           <div>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Your Email"
//               required
//               className="w-full px-6 py-4 glassmorphism border border-b-cyan-900 rounded-xl neon-border focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500 transition-all"
//             />
//           </div>
//           <div>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="Your Message"
//               required
//               rows={6}
//               className="w-full px-6 py-4 glassmorphism rounded-xl border border-b-cyan-900 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500 resize-none transition-all"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full px-8 py-4 bg-linear-to-r   from-blue-600 via-purple-600 to-cyan-600 rounded-xl font-bold text-lg hover:scale-105 transition-transform glow-blue flex items-center justify-center gap-3 group"
//           >
//             <span>Send Message</span>
//             <Send
//               size={20}
//               className="group-hover:translate-x-1 transition-transform"
//             />
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;
// import React from "react";
// import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Contact = () => {
//   const onSubmit = async (event: {
//     preventDefault: () => void;
//     target: HTMLFormElement | undefined;
//   }) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);

//     formData.append("access_key", "c91d65dd-c771-453f-a14a-a156ceeb04a7");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: json,
//     }).then((res) => res.json());
//     if (res.success) {
//       alert(res.message);
//     }
//   };
//   return (
//     <section id="contact" className="p-2">
//       <h2 className="text-6xl font-bold mb-12 text-center">
//         <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//           Get In Touch
//         </span>
//       </h2>

//       <div className="flex gap-20 sm:px-6 lg:px-8">
//         {/* LEFT CARD */}
//         <div className="w-160 py-20 px-4">
//           <div className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700">
//             <p className="text-lg text-gray-300 text-center mb-8">
//               I'm always open to discussing new projects, creative ideas, or
//               opportunities to be part of your vision.
//             </p>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //               <a
//                 href="mailto:kavyagupta21004@gmail.com"
//                 className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-lg hover:bg-slate-900 transition-all duration-300 group"
//               >
//                 <div className="p-3 bg-linear-to-br from-cyan-500 to-blue-600 rounded-lg group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-shadow duration-300">
//                   <Mail size={24} />
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-400">Email</p>
//                   <p className="text-white break-all">
//                     kavyagupta21004@gmail.com
//                   </p>
//                 </div>
//               </a>
//               <a
//                 href="tel:+918787060911"
//                 className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-lg hover:bg-slate-900 transition-all duration-300 group"
//               >
//                 <div className="p-3 bg-linear-to-br from-cyan-500 to-blue-600 rounded-lg group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-shadow duration-300">
//                   <Phone size={24} />
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-400">Phone</p>
//                   <p className="text-white">+91-8787060911</p>
//                 </div>
//               </a>
//               <div className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-lg">
//                 <div className="p-3 bg-linear-to-br from-cyan-500 to-blue-600 rounded-lg">
//                   <MapPin size={24} />
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-400">Location</p>
//                   <p className="text-white">Kanpur, India</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-lg">
//                 <div className="flex gap-3">
//                   <a
//                     href="https://github.com/kavyaGupta21"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="p-3 bg-linear-to-br from-cyan-500 to-blue-600 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110"
//                   >
//                     <Github size={24} />
//                   </a>
//                   <a
//                     href="https://linkedin.com/in/kavya-gupta-8a4301290/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="p-3 bg-linear-to-br from-cyan-500 to-blue-600 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110"
//                   >
//                     <Linkedin size={24} />
//                   </a>
//                 </div>
//               </div>
//           </div>
//         </div>

//         {/* FORM */}
//         <form
//           onSubmit={onSubmit}
//           className="space-y-6 bg-slate-800/50 rounded-3xl p-8 w-lg"
//         >
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             required
//             className="w-full px-6 py-4 rounded-xl text-white bg-slate-900"
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             required
//             className="w-full px-6 py-4 rounded-xl text-white bg-slate-900"
//           />

//           <textarea
//             name="message"
//             placeholder="Your Message"
//             rows={6}
//             required
//             className="w-full px-6 py-4 rounded-xl text-white bg-slate-900 resize-none"
//           />
//           <button
//             type="submit"
//             className="w-full px-8 py-4 bg-linear-to-r from-blue-600 to-cyan-600 rounded-xl text-white font-bold flex items-center justify-center gap-2 hover:scale-105 transition"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "c91d65dd-c771-453f-a14a-a156ceeb04a7");

    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      form.reset();
    }
  };

  return (
    <section id="contact" className="p-6">
      <h2 className="text-6xl font-bold mb-12 text-center">
        <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Get In Touch
        </span>
      </h2>

      <div className="flex flex-col lg:flex-row gap-20 max-w-7xl mx-auto">
        {/* LEFT CARD */}
        <div className="w-full lg:max-w-xl">
          <div className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700">
            <p className="text-lg text-gray-300 text-center mb-8">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="mailto:kavyagupta21004@gmail.com"
                className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-lg hover:bg-slate-900 transition-all duration-300 group"
              >
                <div className="p-3 bg-linear-to-br from-cyan-500 to-blue-600 rounded-lg group-hover:shadow-lg group-hover:shadow-cyan-500/50">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white break-all">
                    kavyagupta21004@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+918787060911"
                className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-lg hover:bg-slate-900 transition-all duration-300 group"
              >
                <div className="p-3 bg-linear-to-br from-cyan-500 to-blue-600 rounded-lg group-hover:shadow-lg group-hover:shadow-cyan-500/50">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-white">+91-8787060911</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-lg">
                <div className="p-3 bg-linear-to-br from-cyan-500 to-blue-600 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white">Kanpur, India</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-lg">
                <div className="flex gap-3">
                  <a
                    href="https://github.com/kavyaGupta21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-linear-to-br from-cyan-500 to-blue-600 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-110 transition"
                  >
                    <Github size={24} />
                  </a>

                  <a
                    href="https://linkedin.com/in/kavya-gupta-8a4301290/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-linear-to-br from-cyan-500 to-blue-600 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-110 transition"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={onSubmit}
          className="w-full lg:max-w-lg space-y-6 bg-slate-800/50 rounded-3xl p-8"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-6 py-4 rounded-xl text-white bg-slate-900"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-6 py-4 rounded-xl text-white bg-slate-900"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            required
            className="w-full px-6 py-4 rounded-xl text-white bg-slate-900 resize-none"
          />

          <button
            type="submit"
            className="w-full px-8 py-4 bg-linear-to-r from-blue-600 to-cyan-600 rounded-xl text-white font-bold hover:scale-105 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
