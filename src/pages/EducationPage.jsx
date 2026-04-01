import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCapIcon,
  CalendarIcon,
  MapPinIcon,
  AwardIcon,
} from "lucide-react";
import PageTransition from "../components/PageTransition";

const EducationPage = () => {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Education
          </motion.h1>

          <motion.div
            className="w-24 h-1 bg-orange-500 mx-auto"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 96 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200"></div>

          {/* Timeline Item */}
          <motion.div
            className="relative flex flex-col md:flex-row items-center justify-between mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Left spacer */}
            <div className="hidden md:block w-5/12"></div>

            {/* Center Icon */}
            <div className="absolute left-0 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-black border-4 border-white shadow-md z-10">
              <GraduationCapIcon size={20} className="text-orange-500" />
            </div>

            {/* Content */}
            <div className="w-full pl-16 md:pl-0 md:w-5/12">
              <div className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition relative group">
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-orange-500 rounded-t-xl scale-x-0 group-hover:scale-x-100 origin-left transition-transform"></div>

                <h3 className="text-2xl font-bold mb-2">Diploma in Business</h3>

                <h4 className="text-lg text-orange-500 mb-4">
                  St. Lawrence College
                </h4>

                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPinIcon size={16} />
                    <span>Kingston, Canada</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <CalendarIcon size={16} />
                    <span>Graduated</span>
                  </div>

                  <div className="flex items-center gap-2 font-semibold text-black mt-4 pt-4 border-t">
                    <AwardIcon size={18} className="text-orange-500" />
                    <span>GPA: 3.91</span>
                  </div>
                </div>

                <p className="mt-4 text-gray-600">
                  Developed a strong foundation in business, management, and
                  strategic planning with consistent academic excellence.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default EducationPage;
