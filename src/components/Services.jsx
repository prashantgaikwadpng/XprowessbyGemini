import React from 'react';
import { motion } from 'framer-motion';
import { Database, Laptop, Landmark, BrainCircuit, Sparkles, ShoppingCart } from 'lucide-react';

const services = [
  {
    title: 'End-to-End BI & Data Warehousing',
    description: 'Scalable data architectures on Azure, Snowflake, and AWS.',
    icon: <Database className="w-8 h-8 text-neonCyan" />,
  },
  {
    title: 'Web & App Development',
    description: 'Modern, high-performance web applications and mobile experiences.',
    icon: <Laptop className="w-8 h-8 text-neonPurple" />,
  },
  {
    title: 'Fintech Solutions',
    description: 'Secure, compliant, and robust software for the financial sector.',
    icon: <Landmark className="w-8 h-8 text-neonCyan" />,
  },
  {
    title: 'AI, ML & Predictive Analysis',
    description: 'Intelligent algorithms to forecast trends and optimize operations.',
    icon: <BrainCircuit className="w-8 h-8 text-neonPurple" />,
  },
  {
    title: 'Generative AI Development',
    description: 'Cutting-edge LLM integrations and custom Gen AI models.',
    icon: <Sparkles className="w-8 h-8 text-neonCyan" />,
  },
  {
    title: 'E-commerce Development',
    description: 'Highly converting, lightning-fast digital storefronts.',
    icon: <ShoppingCart className="w-8 h-8 text-neonPurple" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Services = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto relative z-10" id="services">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Core <span className="text-gradient">Services</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Delivering next-level engineering solutions across the full stack.
        </p>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className="glass p-8 group relative overflow-hidden flex flex-col items-start hover:border-neonCyan hover:shadow-[0_0_20px_rgba(0,247,255,0.2)] transition-all duration-300"
          >
            {/* Subtle background glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-neonCyan/10 to-neonPurple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="mb-6 p-4 rounded-xl bg-darkBg border border-glassBorder inline-block relative z-10 group-hover:border-neonCyan transition-colors duration-300">
              {service.icon}
            </div>
            
            <h3 className="text-2xl font-semibold text-white mb-3 relative z-10">
              {service.title}
            </h3>
            
            <p className="text-gray-400 leading-relaxed relative z-10 group-hover:text-gray-300 transition-colors duration-300">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
