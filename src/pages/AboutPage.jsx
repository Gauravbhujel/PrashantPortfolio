import React from "react";
import { motion } from "framer-motion";
import {
  MapPinIcon,
  GraduationCapIcon,
  BriefcaseIcon,
  MusicIcon,
  ArrowRightIcon,
} from "lucide-react";

// Inline scroll helper
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

const AboutSection = () => {
  return (
    <div className="w-full bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        
        {/* Left Column: Image with Offset Background */}
        <motion.div 
          className="lg:col-span-5 relative flex justify-center lg:justify-start pt-8 pb-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full max-w-sm aspect-[3/4]">
            {/* The gold offset background box from the photo */}
            <div className="absolute top-4 left-4 w-full h-full bg-accent -z-10 rounded-lg shadow-xl" />
            
            <img
              src="https://cdn.magicpatterns.com/uploads/jbRz2J2c4sTvXoFiSTM4NV/pasted-image.jpg"
              alt="Prashant Ghale"
              className="w-full h-full object-cover rounded-lg shadow-xl grayscale"
            />
          </div>
        </motion.div>

        {/* Right Column: Content */}
        <motion.div 
          className="lg:col-span-7 flex flex-col space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h5 className="text-accent font-bold uppercase tracking-widest mb-2 text-sm">HELLO, I'M</h5>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-black leading-tight tracking-tighter">
              Prashant Ghale
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-medium mt-4">
              Business Professional & Freelance Musician
            </p>
            <div className="w-24 h-1 bg-accent mt-8 mb-10" />
          </div>

          <p className="text-gray-600 text-lg leading-relaxed font-normal max-w-2xl">
            I am a dedicated Nepalese professional based in Kingston, Ontario. With a strong 
            foundation in business and a passion for creative expression through music, I 
            bring a unique blend of analytical thinking and artistic creativity to everything I do.
          </p>

          {/* 2x2 Info Grid with Circular Icons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 pt-6 pb-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPinIcon size={18} className="text-white" />
              </div>
              <div>
                <h6 className="font-bold text-black text-sm">Location</h6>
                <p className="text-gray-500 text-sm">Kingston, ON, Canada</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                <GraduationCapIcon size={18} className="text-white" />
              </div>
              <div>
                <h6 className="font-bold text-black text-sm">Education</h6>
                <p className="text-gray-500 text-sm">Business Diploma (3.91 GPA)</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                <BriefcaseIcon size={18} className="text-white" />
              </div>
              <div>
                <h6 className="font-bold text-black text-sm">Experience</h6>
                <p className="text-gray-500 text-sm">Food Service & LTC Support</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                <MusicIcon size={18} className="text-white" />
              </div>
              <div>
                <h6 className="font-bold text-black text-sm">Passion</h6>
                <p className="text-gray-500 text-sm">Freelance Musician</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-10">
            <button
              onClick={() => scrollToSection("contact")}
              className="flex items-center px-8 py-4 bg-black text-white font-semibold text-sm rounded-lg hover:bg-gray-900 transition-all duration-300"
            >
              Get In Touch
              <ArrowRightIcon className="ml-3" size={18} />
            </button>

            <button
              onClick={() => scrollToSection("experience")}
              className="px-8 py-4 border-2 border-gray-300 bg-white text-black font-semibold text-sm rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-sm"
            >
              View Experience
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
