// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target, Zap, Users } from 'lucide-react';

const timeline = [
  { year: '2020', title: 'Inception', desc: 'Xprowess was born with a vision to digitize the future.' },
  { year: '2022', title: 'Global Reach', desc: 'Expanded our operations to serve clients worldwide with cutting-edge BI solutions.' },
  { year: '2024', title: 'AI Integration', desc: 'Pioneered AI-driven software architectures for enterprise businesses.' },
  { year: '2026', title: 'The Future', desc: 'Leading the charge in Web3, futuristic UI, and quantum-ready infrastructure.' }
];

const About = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      {/* Header section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neonCyan via-neonPurple to-pink-500 drop-shadow-[0_0_15px_rgba(0,255,255,0.3)]">
          Pioneering the Future
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          We are more than a development agency. We are architects of digital tomorrow, bridging the gap between imagination and reality.
        </p>
      </motion.div>

      {/* Mission / Vision Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-24">
        {[
          { title: "Our Mission", icon: Target, text: "To empower businesses with futuristic technology that drives exponential growth." },
          { title: "Our Vision", icon: Zap, text: "A connected universe where flawless software and intelligent insights merge." }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:border-neonCyan hover:shadow-[0_0_30px_-5px_rgba(0,255,255,0.3)] transition-all duration-500 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-neonCyan to-transparent opacity-20 blur-[50px] group-hover:opacity-40 transition-opacity"></div>
            <item.icon className="w-12 h-12 text-neonCyan mb-6" />
            <h3 className="text-3xl font-bold mb-4 text-white">{item.title}</h3>
            <p className="text-gray-400 text-lg leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Timeline Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">Our Journey</h2>
        <div className="relative border-l-2 border-neonPurple/30 pl-8 ml-4 md:ml-0 space-y-12">
          {timeline.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-darkBg border-[3px] border-neonPurple shadow-[0_0_10px_rgba(188,19,254,1)]"></div>
              <span className="text-neonPurple font-bold tracking-wider uppercase text-sm mb-1 block">{item.year}</span>
              <h4 className="text-2xl font-bold text-white mb-2">{item.title}</h4>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
