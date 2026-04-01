import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  MapPinIcon,
  GraduationCapIcon,
  BriefcaseIcon,
  MusicIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";

const AboutPage = () => {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-orange-500 translate-x-4 translate-y-4 rounded-lg"></div>

              <img
                src="https://cdn.magicpatterns.com/uploads/jbRz2J2c4sTvXoFiSTM4NV/pasted-image.jpg"
                alt="Prashant Ghale"
                className="relative z-10 w-full h-full object-cover rounded-lg shadow-xl grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div>
              <h2 className="text-orange-500 font-semibold uppercase mb-2">
                Hello, I'm
              </h2>

              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                Prashant Ghale
              </h1>

              <p className="text-xl md:text-2xl text-gray-600">
                Business Professional & Freelance Musician
              </p>
            </div>

            <div className="w-20 h-1 bg-orange-500"></div>

            <p className="text-lg text-gray-700 leading-relaxed">
              I am a dedicated Nepalese professional with a strong foundation in
              business and a passion for music. I combine analytical thinking
              with creativity to deliver meaningful results.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-3">
                <div className="p-2 bg-black text-white rounded-md">
                  <MapPinIcon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-gray-600">Kingston, Canada</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="p-2 bg-black text-white rounded-md">
                  <GraduationCapIcon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">Education</h3>
                  <p className="text-gray-600">Business Diploma</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="p-2 bg-black text-white rounded-md">
                  <BriefcaseIcon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">Experience</h3>
                  <p className="text-gray-600">Food Service & Support</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="p-2 bg-black text-white rounded-md">
                  <MusicIcon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">Passion</h3>
                  <p className="text-gray-600">Music</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="pt-6 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="flex items-center px-8 py-3 bg-black text-white rounded-md hover:bg-orange-500 transition"
              >
                Get In Touch
                <ArrowRightIcon className="ml-2" size={20} />
              </Link>

              <Link
                to="/experience"
                className="px-8 py-3 border-2 border-black rounded-md hover:bg-black hover:text-white transition"
              >
                View Experience
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default AboutPage;
