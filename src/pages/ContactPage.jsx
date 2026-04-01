import React from "react";
import { motion } from "framer-motion";
import {
  MapPinIcon,
  MailIcon,
  PhoneIcon,
  DownloadIcon,
  SendIcon,
} from "lucide-react";
import PageTransition from "../components/PageTransition";

const ContactPage = () => {
  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.h1>

          <motion.div
            className="w-24 h-1 bg-orange-500 mx-auto"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 96 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />

          <motion.p
            className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Interested in working together? Feel free to reach out.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-5 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-sm border">
              <h2 className="text-2xl font-bold mb-6">Contact Info</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="p-3 bg-gray-100 rounded-lg text-orange-500">
                    <MapPinIcon size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-600">Kingston, Canada</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-gray-100 rounded-lg text-orange-500">
                    <MailIcon size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a
                      href="mailto:prashant@example.com"
                      className="text-gray-600 hover:text-orange-500"
                    >
                      prashant@example.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-gray-100 rounded-lg text-orange-500">
                    <PhoneIcon size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <a
                      href="tel:+1234567890"
                      className="text-gray-600 hover:text-orange-500"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </div>

              {/* Resume Button */}
              <div className="mt-8 pt-6 border-t">
                <button className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-black text-white rounded-xl hover:bg-orange-500 transition">
                  <DownloadIcon size={20} />
                  Download Resume
                </button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <form
              className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border"
              onSubmit={(e) => e.preventDefault()}
            >
              <h2 className="text-2xl font-bold mb-6">Send Message</h2>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="px-4 py-3 rounded-lg border focus:ring-2 focus:ring-orange-500 outline-none"
                  />

                  <input
                    type="email"
                    placeholder="Your Email"
                    className="px-4 py-3 rounded-lg border focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-orange-500 outline-none"
                />

                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-orange-500 outline-none resize-none"
                />

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 text-black font-bold rounded-xl hover:bg-black hover:text-white transition w-full sm:w-auto"
                >
                  Send Message
                  <SendIcon size={20} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ContactPage;
