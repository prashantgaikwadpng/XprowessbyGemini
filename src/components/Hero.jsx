import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden px-6 pt-20">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neonCyan opacity-20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-neonPurple opacity-20 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center z-10">
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Engineering the <br className="hidden md:block"/>
          <span className="text-gradient">Future of Data & Software</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-2xl text-gray-400 mb-10 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We provide end-to-end software development, intelligent data warehousing, and AI-driven solutions to power the next generation of enterprises.
        </motion.p>
        
        <motion.button
          className="px-8 py-4 text-lg font-bold text-white bg-darkBg border border-neonCyan rounded-full hover:bg-neonCyan hover:text-darkBg transition-all duration-300 animate-glow-pulse"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start a Project
        </motion.button>
      </div>

      {/* 3D Dashboard Placeholder */}
      <motion.div 
        className="mt-16 w-full max-w-5xl h-64 md:h-[500px] glass rounded-2xl flex items-center justify-center p-8 relative z-10 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,247,255,0.1)] to-[rgba(176,0,255,0.1)] opacity-50"></div>
        <div className="text-gray-300 text-xl md:text-2xl font-semibold z-10 border border-glassBorder px-6 py-3 rounded-lg bg-glassBg backdrop-blur-md">
          Futuristic 3D BI Dashboard Placeholder
        </div>
        
        {/* Decorative elements representing dashboard lines */}
        <div className="absolute bottom-10 left-10 w-32 h-32 border-l border-b border-neonCyan opacity-50"></div>
        <div className="absolute top-10 right-10 w-32 h-32 border-r border-t border-neonPurple opacity-50"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
