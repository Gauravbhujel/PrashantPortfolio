import React from "react";
import { motion } from "framer-motion";
import {
  MusicIcon,
  PlayCircleIcon,
  Mic2Icon,
  HeadphonesIcon,
} from "lucide-react";
import PageTransition from "../components/PageTransition";

const MusicPage = () => {
  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Freelance Musician
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
            Expressing creativity and connecting with people through music.
          </motion.p>
        </div>

        {/* Passion Section */}
        <motion.div
          className="bg-black text-white rounded-2xl p-8 md:p-12 mb-16 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Background Icon */}
          <div className="absolute -right-20 -top-20 opacity-10">
            <MusicIcon className="w-96 h-96" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <HeadphonesIcon size={30} className="text-orange-500" />
              <h2 className="text-3xl font-bold">My Musical Journey</h2>
            </div>

            <p className="text-gray-300 mb-6">
              Music is not just a hobby—it’s a passion that builds creativity,
              discipline, and confidence. It helps me connect with people and
              express ideas beyond words.
            </p>

            <p className="text-gray-300">
              From performing live to creating original pieces, I aim to deliver
              meaningful experiences through sound.
            </p>
          </div>
        </motion.div>

        {/* Sections */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Performances */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Mic2Icon size={24} className="text-orange-500" />
              <h2 className="text-2xl font-bold">Live Performances</h2>
            </div>

            <div className="space-y-6">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex gap-4 p-4 rounded-xl hover:bg-white hover:shadow border transition"
                >
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                    <MusicIcon size={20} className="text-gray-400" />
                  </div>

                  <div>
                    <h3 className="font-bold">Acoustic Session Vol. {item}</h3>
                    <p className="text-sm text-gray-500">Kingston, Canada</p>
                    <p className="text-sm text-gray-600">
                      Live acoustic performance with original songs.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Media */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <PlayCircleIcon size={24} className="text-orange-500" />
              <h2 className="text-2xl font-bold">Media Gallery</h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="aspect-video bg-gray-200 rounded-xl relative group overflow-hidden cursor-pointer"
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition"></div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition">
                      <PlayCircleIcon size={20} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-500 mt-4 text-center italic">
              Media coming soon.
            </p>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default MusicPage;
