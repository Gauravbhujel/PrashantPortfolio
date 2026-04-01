import React from "react";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <span className="font-bold text-xl tracking-wider uppercase">
            Prashant<span className="text-orange-500">.</span>
          </span>
          <p className="text-gray-400 text-sm mt-2">
            © {currentYear} Prashant Ghale. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="text-gray-400 hover:text-orange-500">
            <LinkedinIcon size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-orange-500">
            <GithubIcon size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-orange-500">
            <InstagramIcon size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-orange-500">
            <TwitterIcon size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
