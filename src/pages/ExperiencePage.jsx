import React from "react";
import { motion } from "framer-motion";
import {
  ClockIcon,
  CheckCircle2Icon,
  HeartIcon,
  UtensilsIcon,
} from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Food Service Professional",
    duration: "3+ Years Experience",
    icon: UtensilsIcon,
    responsibilities: [
      "Delivering excellent customer service in fast-paced environments",
      "Food preparation and maintaining quality standards",
      "Team collaboration during busy hours",
      "Following food safety and hygiene rules",
    ],
  },
  {
    id: 2,
    title: "Long-Term Care (LTC) Support",
    duration: "1+ Year Experience",
    icon: HeartIcon,
    responsibilities: [
      "Helping residents with daily activities",
      "Maintaining a clean and safe environment",
      "Communicating with healthcare staff",
      "Showing empathy and problem-solving skills",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const ExperienceSection = () => {
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
          <span className="text-xs font-semibold uppercase tracking-[0.3em]">Career</span>
          <div className="w-8 h-[1px] bg-accent" />
        </motion.div>
        
        <motion.h2
          className="text-5xl md:text-6xl font-serif italic text-dark tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Work <span className="not-italic font-bold">Experience</span>
        </motion.h2>
      </div>

      {/* Experience Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            variants={itemVariants}
            className="group block p-12 bg-white hover:bg-black transition-all duration-500 shadow-sm hover:shadow-2xl relative border-t border-gray-100 overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 blur-3xl" />
            
            <div className="relative z-10 space-y-8">
              <div className="flex justify-between items-start">
                <div className="p-4 bg-accent/10 text-accent group-hover:bg-accent group-hover:text-black transition-colors duration-500 rounded-none">
                  <exp.icon size={28} strokeWidth={1.5} />
                </div>
                <div className="flex items-center text-xs font-bold uppercase tracking-widest text-muted group-hover:text-accent/80">
                  <ClockIcon size={14} className="mr-2" />
                  {exp.duration}
                </div>
              </div>

              <h3 className="text-3xl md:text-4xl font-serif italic font-bold text-dark group-hover:text-white leading-tight">
                {exp.title}
              </h3>

              <ul className="space-y-4">
                {exp.responsibilities.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-accent mt-2 mr-4 flex-shrink-0" />
                    <span className="text-muted group-hover:text-gray-400 font-light leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="pt-6">
                <div className="w-12 h-[2px] bg-accent group-hover:w-full transition-all duration-700" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ExperienceSection;