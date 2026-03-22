// src/pages/ServiceDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

const serviceData = {
  'web-development': {
    title: 'Web Development',
    subtitle: 'Lightning-fast, scalable digital experiences.',
    content: 'We engineer highly interactive web applications using React, Next.js, and modern tools. Our focus is on unbreakable security, seamless user experience, and aesthetic superiority.',
    features: ['Single Page Applications (SPA)', 'Progressive Web Apps (PWA)', 'E-commerce Platforms', 'High-performance SSR']
  },
  'bi-and-software': {
    title: 'Business Intelligence',
    subtitle: 'Seeing the unseen in your data.',
    content: 'We build dashboards that don\'t just show numbers, they tell a story. Leveraging advanced analytics, AI predictive models, and real-time data streaming.',
    features: ['Interactive Dashboards', 'Predictive Analytics', 'Data Warehousing', 'Real-time Processing']
  },
  // the rest can fallback to a generic message
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = serviceData[id] || {
    title: id.replace('-', ' ').toUpperCase(),
    subtitle: 'Advanced enterprise technology solutions.',
    content: 'Our tailored approach ensures that your infrastructure is future-proof, robust and blazingly fast.',
    features: ['Custom Integration', 'Enterprise Security', '24/7 Support', 'Scalable Architecture']
  };

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      <Link to="/services" className="inline-flex items-center text-gray-400 hover:text-neonCyan transition-colors mb-12 group">
        <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Services
      </Link>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neonCyan to-neonPurple">
            {service.title}
          </h1>
          <h2 className="text-2xl text-white mb-8">{service.subtitle}</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-12">
            {service.content}
          </p>

          <div className="space-y-4">
            {service.features.map((feat, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-neonCyan" size={24} />
                <span className="text-white text-lg">{feat}</span>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link to="/contact" className="px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:border-neonCyan hover:bg-neonCyan/10 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all font-bold text-white tracking-widest uppercase inline-block">
              Start Project
            </Link>
          </div>
        </motion.div>

        {/* Right side abstract graphic placeholder */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative h-[500px] rounded-3xl overflow-hidden group border border-white/10 bg-darkBg/50 backdrop-blur-xl flex items-center justify-center p-8"
        >
          {/* Abstract background blobs */}
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-neonCyan/20 blur-[100px] rounded-full mix-blend-screen transition-transform duration-1000 group-hover:scale-150"></div>
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-neonPurple/20 blur-[100px] rounded-full mix-blend-screen transition-transform duration-1000 group-hover:scale-150"></div>
          
          <div className="relative z-10 w-full h-full border border-white/5 bg-white/5 rounded-2xl flex items-center justify-center">
             <div className="text-center">
                 <div className="w-24 h-24 mx-auto border border-neonCyan/50 rounded-xl mb-6 shadow-[0_0_30px_rgba(0,255,255,0.2)] animate-pulse flex items-center justify-center">
                     <div className="w-12 h-12 bg-gradient-to-br from-neonCyan to-neonPurple rounded-full"></div>
                 </div>
                 <p className="text-gray-500 uppercase tracking-widest font-bold">System Online</p>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetail;
