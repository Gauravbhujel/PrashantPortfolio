import React from "react";
import { motion } from "framer-motion";
import {
  MapPinIcon,
  MailIcon,
  PhoneIcon,
  DownloadIcon,
  SendIcon,
} from "lucide-react";

const ContactSection = () => {
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
          <span className="text-xs font-semibold uppercase tracking-[0.3em]">Connection</span>
          <div className="w-8 h-[1px] bg-accent" />
        </motion.div>
        
        <motion.h2
          className="text-5xl md:text-6xl font-serif italic text-dark tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In <span className="not-italic font-bold">Touch</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Contact Information */}
        <motion.div
          className="lg:col-span-5 space-y-12"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6">
            <h3 className="text-3xl font-serif italic tracking-tight">Let's <span className="font-bold border-b border-accent">Connect</span></h3>
            <p className="text-muted text-lg font-light leading-relaxed italic">
              "Open to new collaborations, opportunities, and conversations. Feel free to reach out."
            </p>
          </div>

          <div className="space-y-10">
            <div className="flex gap-8 items-start group">
              <div className="p-4 bg-light text-accent group-hover:bg-accent group-hover:text-black transition-colors duration-500">
                <MapPinIcon size={24} strokeWidth={1} />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-widest text-dark">Office Location</h4>
                <p className="text-lg font-serif italic text-muted">Kingston, Canada</p>
              </div>
            </div>

            <div className="flex gap-8 items-start group">
              <div className="p-4 bg-light text-accent group-hover:bg-accent group-hover:text-black transition-colors duration-500">
                <MailIcon size={24} strokeWidth={1} />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-widest text-dark">Email Reach</h4>
                <a 
                  href="mailto:prashant@example.com" 
                  className="text-lg font-serif italic text-muted hover:text-accent transition-colors"
                >
                  prashant@example.com
                </a>
              </div>
            </div>

            <div className="flex gap-8 items-start group">
              <div className="p-4 bg-light text-accent group-hover:bg-accent group-hover:text-black transition-colors duration-500">
                <PhoneIcon size={24} strokeWidth={1} />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-widest text-dark">Direct Call</h4>
                <p className="text-lg font-serif italic text-muted">+1 (234) 567-890</p>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col items-start gap-4">
            <button className="flex items-center gap-4 px-10 py-5 bg-black text-white font-bold uppercase text-[10px] tracking-[0.3em] group hover:bg-accent hover:text-black transition-all duration-300">
              <DownloadIcon size={16} />
              Download Full Resume
              <div className="w-4 h-[1px] bg-white group-hover:bg-black transition-all ml-4" />
            </button>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form 
            className="bg-white p-12 lg:p-16 space-y-10 shadow-2xl border border-gray-50 relative overflow-hidden"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-3xl -mr-12 -mt-12" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-accent">Full Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. John Smith" 
                  className="w-full bg-transparent border-b border-gray-200 py-4 focus:border-accent outline-none text-serif italic text-lg transition-all"
                />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-accent">Email Address</label>
                <input 
                  type="email" 
                  placeholder="e.g. john@example.com" 
                  className="w-full bg-transparent border-b border-gray-200 py-4 focus:border-accent outline-none text-serif italic text-lg transition-all"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-accent">Reason for Contact</label>
              <input 
                type="text" 
                placeholder="e.g. Business Inquiry / Project" 
                className="w-full bg-transparent border-b border-gray-200 py-4 focus:border-accent outline-none text-serif italic text-lg transition-all"
              />
            </div>

            <div className="space-y-4">
              <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-accent">Your Message</label>
              <textarea 
                rows={4} 
                placeholder="Write your message here..." 
                className="w-full bg-transparent border-b border-gray-200 py-4 focus:border-accent outline-none text-serif italic text-lg transition-all resize-none"
              />
            </div>

            <button className="w-full md:w-auto px-12 py-6 bg-accent text-black font-bold uppercase text-xs tracking-widest flex items-center justify-center gap-4 hover:bg-black hover:text-white transition-all duration-500">
              Deliver Message
              <SendIcon size={16} strokeWidth={1.5} />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;
