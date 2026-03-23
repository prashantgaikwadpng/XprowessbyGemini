// src/components/home/Process.jsx
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Discovery & Blueprint', desc: 'Deep dive into your business logic to architect the perfect scalable solution.' },
  { num: '02', title: 'Agile Development', desc: 'Rapid, iterative sprint cycles ensuring transparency and flawless code quality.' },
  { num: '03', title: 'QA & Security Protocol', desc: 'Rigorous penetration testing and automated QA to guarantee unbreakable deployments.' },
  { num: '04', title: 'Global Deployment', desc: 'Launch massive distributed systems with zero downtime and 100% reliability.' }
];

const Process = () => {
  return (
    <div className="py-32 bg-black/40 relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Our Automated <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonCyan to-green-400">Delivery Pipeline</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-neonCyan/20 via-neonCyan to-green-400/20 z-0"></div>

          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative z-10"
            >
              <div className="w-24 h-24 mx-auto bg-darkBg border-2 border-neonCyan rounded-full flex items-center justify-center text-3xl font-black text-neonCyan mb-8 shadow-[0_0_20px_rgba(0,255,255,0.4)]">
                {step.num}
              </div>
              <div className="text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-neonCyan hover:-translate-y-2 transition-all">
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
