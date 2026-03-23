// src/components/home/Testimonials.jsx
import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  { name: 'Sarah Jenkins', role: 'CTO, TechNova', text: 'Xprowess transformed our legacy monolith into a blazing fast microservices architecture. Unbelievable precision.' },
  { name: 'Michael Chen', role: 'VP Data, InsightCorp', text: 'The BI dashboards they digitized for us uncovered $2M in hidden revenue streams in the first quarter alone.' },
  { name: 'Elena Rostova', role: 'Founder, NextGen Web', text: 'Their web development team is top-tier. The React/Next.js stack they implemented handles our 5M monthly visitors flawlessly.' }
];

const Testimonials = () => {
  return (
    <div className="py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-neonPurple/10 blur-[150px] pointer-events-none rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white">
          Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPurple to-pink-500">Visionaries</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-darkBg/80 p-8 rounded-3xl border border-white/10 relative group hover:border-neonPurple transition-colors"
            >
              <div className="text-5xl text-neonPurple/40 absolute top-4 left-6 font-serif group-hover:text-neonPurple/80 transition-colors">"</div>
              <p className="text-gray-300 text-lg relative z-10 mb-8 mt-6 italic">
                {rev.text}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-neonPurple to-pink-500 flex items-center justify-center text-white font-bold text-xl uppercase shadow-lg">
                  {rev.name[0]}
                </div>
                <div>
                  <h4 className="text-white font-bold tracking-wide">{rev.name}</h4>
                  <p className="text-gray-500 text-sm">{rev.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
