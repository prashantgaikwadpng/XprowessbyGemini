import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-glassBorder bg-darkBg pt-16 pb-8 px-6 mt-20 relative overflow-hidden">
      <div className="absolute top-0 right-1/2 translate-x-1/2 w-1/3 h-64 bg-neonPurple opacity-10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center relative z-10 gap-10">
        
        <div className="flex flex-col space-y-4 max-w-sm">
          <h2 className="text-3xl font-extrabold tracking-tight text-white">
            Xprowess<span className="text-neonCyan">.</span>
          </h2>
          <p className="text-gray-400 text-sm">
            Engineering the future of enterprise software and data ecosystems. High-performance, scalable, and intelligent solutions.
          </p>
        </div>

        <div className="flex flex-col space-y-4 text-sm text-gray-300">
          <a href="#" className="hover:text-neonCyan transition-colors flex items-center gap-3">
            <Mail className="w-4 h-4 text-neonCyan" /> contact@xprowess.com
          </a>
          <span className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-neonCyan" /> +1 (555) 123-4567
          </span>
          <span className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-neonCyan" /> 100 Innovation Drive, Tech City
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-glassBorder flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 relative z-10 gap-4">
        <p>&copy; {new Date().getFullYear()} Xprowess Inc. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
