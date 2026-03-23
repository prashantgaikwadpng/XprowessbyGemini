// src/components/home/Stats.jsx
import React from 'react';
import { motion } from 'framer-motion';

const statsData = [
  { value: '150+', label: 'Digital Products Launched' },
  { value: '99.9%', label: 'Infrastructure Uptime' },
  { value: '50M+', label: 'Rows of Data Processed Daily' },
  { value: '45+', label: 'Global Enterprise Partners' }
];

const Stats = () => {
  return (
    <div className="py-24 relative overflow-hidden border-y border-white/5 bg-darkBg/50 backdrop-blur-xl">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-neonCyan/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {statsData.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 hover:from-neonCyan hover:to-neonPurple transition-all cursor-default">
                {stat.value}
              </h3>
              <p className="text-sm md:text-base text-gray-400 font-medium tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
