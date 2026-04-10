import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCapIcon,
  CalendarIcon,
  MapPinIcon,
  AwardIcon,
} from "lucide-react";

const EducationSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
      {/* Header */}
      <div className="text-center mb-20">
        <motion.div 
          className="flex items-center gap-4 justify-center text-accent/80 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="w-8 h-[1px] bg-accent" />
          <span className="text-xs font-semibold uppercase tracking-[0.3em]">Credentials</span>
          <div className="w-8 h-[1px] bg-accent" />
        </motion.div>
        
        <motion.h2
          className="text-5xl md:text-6xl font-serif italic text-dark tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Educational <span className="not-italic font-bold">Background</span>
        </motion.h2>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gray-100 hidden md:block" />

        {/* Timeline Item */}
        <motion.div
          className="relative flex flex-col md:flex-row items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Content Wrapper */}
          <div className="w-full max-w-4xl grid md:grid-cols-2 gap-12 items-center bg-white p-12 lg:p-20 shadow-2xl relative border border-gray-100">
            {/* Left Side: Institution Info */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest">
                <GraduationCapIcon size={14} />
                <span>Scholarship</span>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-serif italic leading-tight">
                Diploma in <span className="font-bold not-italic">Business</span>
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted">
                  <MapPinIcon size={18} className="text-accent" />
                  <span className="font-light tracking-wide text-lg">St. Lawrence College — Kingston, Canada</span>
                </div>
                <div className="flex items-center gap-3 text-muted">
                  <CalendarIcon size={18} className="text-accent" />
                  <span className="font-light tracking-wide text-lg text-dark font-medium">Graduated</span>
                </div>
              </div>
            </div>

            {/* Right Side: Achievements */}
            <div className="space-y-8 bg-dark p-12 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10 space-y-4 text-center">
                <h4 className="text-xs uppercase tracking-[0.4em] text-accent/80 font-bold mb-4">Academic Performance</h4>
                <div className="text-8xl md:text-9xl font-serif font-bold tracking-tighter text-accent leading-none">
                  3.91
                </div>
                <p className="text-sm font-medium tracking-widest uppercase opacity-70">GPA Excellence</p>
                
                <div className="flex items-center justify-center gap-3 pt-6 text-white border-t border-white/10 mt-8">
                  <AwardIcon size={24} className="text-accent" />
                  <span className="text-lg font-serif italic">Consistent Academic Distinction</span>
                </div>
              </div>
            </div>

            {/* Bottom Insight */}
            <div className="md:col-span-2 pt-12 border-t border-gray-100 mt-12">
              <p className="text-xl md:text-2xl text-muted font-light leading-relaxed text-center max-w-3xl mx-auto italic">
                "Developing a strong foundation in business management and strategic planning with a focus on collaborative excellence."
              </p>
            </div>
          </div>
          
          {/* Decorative center point */}
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-xl hidden md:block z-20" />
        </motion.div>
      </div>
    </div>
  );
};

export default EducationSection;
