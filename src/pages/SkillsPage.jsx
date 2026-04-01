import React from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const SkillsPage = () => {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Professional Skills
          </motion.h1>

          <motion.div
            className="w-24 h-1 bg-orange-500 mx-auto"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 96 }}
            transition={{ delay: 0.2 }}
          />

          <motion.p
            className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            A mix of interpersonal and practical skills gained through
            real-world experience.
          </motion.p>
        </div>

        {/* Skills Bars */}
        <motion.div
          className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {skills.map((skill, index) => (
              <motion.div key={skill.name} variants={itemVariants}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-orange-500 font-medium">
                    {skill.level}%
                  </span>
                </div>

                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-black"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{
                      duration: 1,
                      delay: 0.5 + index * 0.1,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills Cards */}
        <motion.div
          className="mt-16 grid sm:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="bg-gray-50 p-6 rounded-xl text-center hover:bg-gray-100 transition">
            <h3 className="font-bold text-xl mb-2">Adaptable</h3>
            <p className="text-gray-600 text-sm">
              Quickly adjusts to new situations and challenges.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl text-center hover:bg-gray-100 transition">
            <h3 className="font-bold text-xl mb-2">Detail-Oriented</h3>
            <p className="text-gray-600 text-sm">
              Focused on quality and accuracy in all tasks.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl text-center hover:bg-gray-100 transition">
            <h3 className="font-bold text-xl mb-2">Empathetic</h3>
            <p className="text-gray-600 text-sm">
              Understands and supports people effectively.
            </p>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default SkillsPage;
