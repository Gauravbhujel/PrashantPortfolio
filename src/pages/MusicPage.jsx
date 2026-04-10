import React from "react";
import { motion } from "framer-motion";
import {
  MusicIcon,
  PlayCircleIcon,
  Mic2Icon,
  HeadphonesIcon,
} from "lucide-react";

const MusicSection = () => {
  return (
    <div className="w-full py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-6">
            Freelance Musician
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6" />
          <p className="text-gray-500 max-w-2xl mx-auto text-lg pt-2 leading-relaxed">
            Expressing creativity and connecting with audiences through the<br className="hidden md:block"/> universal language of music.
          </p>
        </motion.div>

        {/* Black Card */}
        <motion.div 
          className="w-full bg-black rounded-3xl p-10 md:p-16 relative overflow-hidden mb-20 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* huge background music icon */}
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 text-white/5 pointer-events-none select-none">
            <MusicIcon className="w-[400px] h-[400px] md:w-[500px] md:h-[500px]" strokeWidth={2} />
          </div>

          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
              <HeadphonesIcon className="text-accent" size={32} />
              <h3 className="text-3xl font-bold text-white">My Musical Journey</h3>
            </div>
            <div className="space-y-6 text-gray-300 font-light text-lg leading-relaxed">
              <p>
                Music is more than just a hobby; it's a profound passion that complements my
                professional life. As a freelance musician, I've developed discipline, creativity, and the
                ability to perform under pressure—skills that translate seamlessly into the business world.
              </p>
              <p>
                Whether I'm writing original compositions or performing live, I strive to create memorable
                experiences that resonate with listeners.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="w-full grid md:grid-cols-2 gap-16">
          
          {/* Left: Live Performances */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Mic2Icon className="text-accent" size={24} />
              <h4 className="text-2xl font-bold text-black">Live Performances</h4>
            </div>
            
            <div className="space-y-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex gap-5 items-start">
                  <div className="w-16 h-16 bg-[#F4F4F4] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MusicIcon size={24} className="text-gray-400" />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-black text-sm">Acoustic Session Vol. {item}</h5>
                    <p className="text-gray-500 text-xs mt-1 mb-2">Local Venue • Kingston, ON</p>
                    <p className="text-gray-500 text-sm leading-relaxed pr-4">
                      An intimate evening of original songs and selected covers,
                      focusing on acoustic arrangements.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Media Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <PlayCircleIcon className="text-accent" size={24} />
              <h4 className="text-2xl font-bold text-black">Media Gallery</h4>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="aspect-[4/3] bg-[#8B929A] rounded-xl flex items-center justify-center hover:bg-gray-500 transition-colors cursor-pointer group">
                   <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                     <PlayCircleIcon size={24} className="text-black" />
                   </div>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 italic text-sm mt-6">
              Video and audio samples coming soon.
            </p>
          </motion.div>

        </div>

      </div>
    </div>
  );
};

export default MusicSection;
