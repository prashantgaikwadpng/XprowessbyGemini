// src/pages/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, LineChart, Cpu, Globe, Database, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesList = [
  { id: 'web-development', title: 'Web Development', icon: Globe, desc: 'Next-gen web applications built with modern frameworks, ensuring scalable and lightning-fast performance.', color: 'from-blue-500 to-neonCyan' },
  { id: 'bi-and-software', title: 'Business Intelligence', icon: LineChart, desc: 'Transform raw data into actionable insights with AI-driven dashboard digitization and analytics.', color: 'from-neonPurple to-pink-500' },
  { id: 'custom-software', title: 'Custom Software', icon: Code2, desc: 'Tailored software architectures designed to fit your unique enterprise ecosystem perfectly.', color: 'from-green-400 to-emerald-600' },
  { id: 'ai-development', title: 'AI Integration', icon: Cpu, desc: 'Embedding advanced machine learning models to automate workflows and enhance decision making.', color: 'from-orange-500 to-red-500' },
  { id: 'cloud-infrastructure', title: 'Cloud Infrastructure', icon: Database, desc: 'Robust cloud deployments ensuring 99.99% uptime and infinite horizontal scalability.', color: 'from-indigo-500 to-purple-600' },
  { id: 'mobile-apps', title: 'Mobile Applications', icon: Smartphone, desc: 'Futuristic mobile experiences for iOS and Android, focusing on intuitive UX/UI.', color: 'from-yellow-400 to-amber-600' }
];

const ServicesPage = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neonCyan to-neonPurple drop-shadow-[0_0_15px_rgba(188,19,254,0.3)]">
          Our Services
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          We deliver highly specialized, end-to-end technology solutions that catapult businesses into the next era.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesList.map((svc, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent overflow-hidden hover:from-white/30 transition-all duration-500 cursor-pointer"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${svc.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`} />
            <div className="relative h-full bg-darkBg/90 backdrop-blur-xl p-8 rounded-2xl border border-white/5 group-hover:border-white/20 transition-all z-10">
              <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${svc.color} text-white shadow-lg`}>
                <svc.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                {svc.title}
              </h3>
              <p className="text-gray-400 mb-6 line-clamp-3">
                {svc.desc}
              </p>
              <Link 
                to={`/services/${svc.id}`}
                className="inline-flex items-center text-sm font-bold text-white/70 group-hover:text-white transition-colors uppercase tracking-wider gap-2"
              >
                Explore <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
