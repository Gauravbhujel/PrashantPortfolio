import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "Customer Service", level: 95 },
  { name: "Communication", level: 90 },
  { name: "Teamwork", level: 95 },
  { name: "Problem Solving", level: 85 },
  { name: "Food Safety", level: 100 },
  { name: "Music Performance", level: 90 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const SkillsSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
      {/* Heading */}
      <div className="text-center mb-20">
        <motion.div 
          className="flex items-center gap-4 justify-center text-accent/80 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="w-8 h-[1px] bg-accent" />
          <span className="text-xs font-semibold uppercase tracking-[0.3em]">Capabilities</span>
          <div className="w-8 h-[1px] bg-accent" />
        </motion.div>
        
        <motion.h2
          className="text-5xl md:text-6xl font-serif italic text-dark tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Professional <span className="not-italic font-bold">Skills</span>
        </motion.h2>
      </div>

      {/* Skills Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          className="space-y-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div key={skill.name} variants={itemVariants}>
              <div className="flex justify-between items-end mb-3">
                <span className="text-sm font-bold uppercase tracking-widest text-dark">{skill.name}</span>
                <span className="text-accent font-serif italic text-lg">
                  {skill.level}%
                </span>
              </div>

              <div className="h-[2px] bg-gray-100 relative overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-accent"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.5,
                    ease: "power2.out",
                    delay: 0.2 + index * 0.1,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-light p-10 space-y-4 border-l-2 border-accent/20">
            <h3 className="font-serif italic text-3xl">Adaptable</h3>
            <p className="text-muted leading-relaxed font-light">
              Quickly adjusts to new situations and challenges in high-pressure environments.
            </p>
          </div>

          <div className="bg-dark p-10 space-y-4 text-white">
            <h3 className="font-serif italic text-3xl text-accent">Detail-Oriented</h3>
            <p className="text-gray-400 leading-relaxed font-light">
              Focused on quality and accuracy, ensuring every task meets highest professional standards.
            </p>
          </div>

          <div className="bg-accent p-10 space-y-4 text-black md:col-span-2">
            <h3 className="font-serif italic text-4xl font-bold italic tracking-tighter">Empathetic Leadership</h3>
            <p className="text-black/80 text-lg leading-relaxed font-medium">
              A deep commitment to supporting others, fostering positive team dynamics, and understanding diverse perspectives to drive better results.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsSection;
