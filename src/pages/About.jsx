// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target, Zap, Users, Brain, HeartPulse, Sparkles, Fingerprint } from 'lucide-react';

const timeline = [
  { year: '2018', title: 'The Genesis', desc: 'Founded by a group of ex-FAANG engineers to revolutionize local IT infrastructure.' },
  { year: '2020', title: 'Digital Transformation', desc: 'Pivoted to enterprise-level Web Development and Business Intelligence.' },
  { year: '2022', title: 'Global Scale', desc: 'Deployed cross-continental software solutions serving millions of daily requests.' },
  { year: '2025', title: 'AI Era', desc: 'Deeply integrated AI predictability models across our entire suite of software products.' },
  { year: '2026+', title: 'The Future', desc: 'Leading the charge into quantum computing integrations and autonomous code generation.' }
];

const values = [
  { icon: Sparkles, title: 'Uncompromising Excellence', desc: 'We do not ship until the product is an absolute masterpiece of engineering and design.' },
  { icon: Fingerprint, title: 'Absolute Integrity', desc: '100% transparency in our codebases, architecture, and billing.' },
  { icon: Brain, title: 'Relentless Innovation', desc: 'We adopt tomorrow\'s technologies today, giving you an unfair market advantage.' }
];

const team = [
  { name: 'Dr. John Matrix', role: 'Chief Engineering Officer', exper: 'Ex-Google Cloud Architect' },
  { name: 'Sarah Chen', role: 'Head of BI Analytics', exper: 'Data Scientist, MIT' },
  { name: 'Marcus Vance', role: 'Lead Web Architect', exper: 'Next.js & React Expert' },
];

const About = () => {
  return (
    <div className="pt-32 pb-20 overflow-hidden">
      
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 mb-32 relative text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-neonCyan/10 blur-[150px] mix-blend-screen rounded-full pointer-events-none -z-10"></div>
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-br from-white via-neonCyan to-neonPurple"
        >
          Architects of the<br/>Digital Tomorrow.
        </motion.h1>
        <p className="text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Xprowess combines extreme engineering rigor with breathtaking design. Our mission is to make the impossible, scalable.
        </p>
      </div>

      {/* Core Values */}
      <div className="bg-darkBg/50 border-y border-white/5 py-32 backdrop-blur-3xl relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-neonCyan mx-auto rounded-full shadow-[0_0_10px_rgba(0,255,255,0.8)]"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((val, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:-translate-y-4 hover:border-neonCyan hover:shadow-[0_20px_40px_-10px_rgba(0,255,255,0.2)] transition-all duration-500 group"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/20 flex items-center justify-center mb-8 group-hover:bg-neonCyan/20 transition-colors">
                  <val.icon className="w-10 h-10 text-white group-hover:text-neonCyan transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{val.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Journey Timeline */}
      <div className="py-32 max-w-5xl mx-auto px-6 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-neonPurple/10 blur-[150px] rounded-full"></div>
        <div className="text-center mb-24">
          <h2 className="text-5xl font-bold text-white mb-6">The Journey</h2>
          <p className="text-xl text-gray-400">From a small room of hackers to a global tech empire.</p>
        </div>

        <div className="space-y-16 relative before:absolute before:inset-0 before:ml-[1.15rem] md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-neonCyan before:via-neonPurple before:to-pink-500">
          {timeline.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-darkBg bg-neonCyan text-white shadow-[0_0_15px_rgba(0,255,255,0.8)] absolute left-0 md:left-1/2 -md:translate-x-1/2 md:-ml-5 group-hover:scale-125 transition-transform z-10"></div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl group-hover:border-neonCyan transition-all">
                <span className="text-neonCyan font-black text-2xl mb-2 block">{item.year}</span>
                <h4 className="text-2xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-gray-400 text-lg">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Leadership Team Placeholder */}
      <div className="bg-black/60 py-32 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 text-white">
            <h2 className="text-5xl font-bold mb-4">Elite Leadership</h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">Led by veterans of the technology industry.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-darkBg border border-white/10 rounded-3xl p-8 text-center group hover:border-pink-500 transition-all"
              >
                <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-white/10 to-white/5 mb-8 border border-white/20 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500">
                  <div className="absolute inset-0 flex items-center justify-center text-4xl text-white/30 font-bold">
                    [IMG]
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-pink-500 font-medium tracking-wide uppercase text-sm mb-4">{member.role}</p>
                <p className="text-gray-500 italic">{member.exper}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
