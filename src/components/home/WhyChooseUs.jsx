// src/components/home/WhyChooseUs.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Zap, Cpu, Award } from 'lucide-react';

const reasons = [
  { icon: ShieldAlert, title: 'Unbreakable Security', desc: 'Zero-trust architecture protecting your most critical data.' },
  { icon: Zap, title: 'Extreme Performance', desc: 'Sub-second load times utilizing Edge computing and global CDNs.' },
  { icon: Cpu, title: 'AI-Powered Core', desc: 'Machine learning algorithms embedded deeply into our software solutions.' },
  { icon: Award, title: 'Elite Talent', desc: 'Your projects are engineered by top 1% global engineering talent.' }
];

const WhyChooseUs = () => {
  return (
    <div className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Why Industry Leaders <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-neonPurple">Choose Us</span>
          </motion.h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">We don't just write code. We architect scalable masterpieces that dominate markets.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-pink-500/50 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-darkBg to-white/10 border border-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="text-pink-500 w-8 h-8 group-hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
