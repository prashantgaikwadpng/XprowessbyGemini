// src/pages/ServiceDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Terminal, PieChart, Database, Network, Shield } from 'lucide-react';

const expandedServiceData = {
  'web-development': {
    title: 'Future-Proof Web Development',
    subtitle: 'Lightning-fast, highly scalable web applications built for the enterprise.',
    headerGradient: 'from-blue-400 to-neonCyan',
    content: 'We engineer highly interactive web applications using React, Next.js, and modern tools. We do not use templates. Every single line of code is meticulously crafted to ensure uncompromised speed, iron-clad security, and a flawless UX that captures user attention instantly.',
    pillars: [
      { title: 'Single Page Applications', desc: 'React and Vue architectures that feel like native apps.' },
      { title: 'Server-Side Rendering (SSR)', desc: 'Next.js frameworks for unprecedented SEO and primary load speeds.' },
      { title: 'Progressive Web Apps', desc: 'Offline capabilities and instant loading on mobile devices.' }
    ],
    techStack: ['React 19', 'Next.js 15', 'TailwindCSS 4', 'Node.js', 'GraphQL'],
    abstractIcon: Terminal,
    abstractColor: 'text-neonCyan'
  },
  'bi-and-software': {
    title: 'Advanced Business Intelligence',
    subtitle: 'Transforming petabytes of raw data into strategic foresight.',
    headerGradient: 'from-pink-500 to-neonPurple',
    content: 'Our BI solutions go beyond simple dashboards. We integrate AI-powered predictive models, real-time data streaming architectures, and automated anomaly detection to ensure you always know what is happening in your business before your competitors do.',
    pillars: [
      { title: 'Dashboard Digitization', desc: 'Bespoke, highly interactive visualizations converting raw data to insight.' },
      { title: 'Predictive Analytics', desc: 'Machine Learning models forecasting trends, revenue, and churn.' },
      { title: 'Data Warehousing', desc: 'Scalable cloud storage structures in Snowflake or BigQuery.' }
    ],
    techStack: ['PowerBI', 'Tableau', 'Python/Pandas', 'Snowflake', 'TensorFlow'],
    abstractIcon: PieChart,
    abstractColor: 'text-pink-500'
  },
  'custom-software': {
    title: 'Enterprise Custom Software',
    subtitle: 'Microservices architectures built for infinity scale.',
    headerGradient: 'from-green-400 to-emerald-600',
    content: 'We tear down monolithic legacy systems and rebuild them using distributed microservices. Whether you need a bespoke ERP, a massive highly-concurrent trading platform, or a complex CRM, we architect it from the ground up for zero downtime.',
    pillars: [
      { title: 'Cloud-Native microservices', desc: 'Dockerized, Kubernetes-orchestrated application clusters.' },
      { title: 'Bespoke ERP & CRM', desc: 'Systems uniquely tailored to your exact business workflows.' },
      { title: 'API Gateways', desc: 'Secure, high-throughput endpoints for seamless B2B integration.' }
    ],
    techStack: ['Go / Rust', 'Java Spring Boot', 'Kubernetes', 'AWS / Azure', 'PostgreSQL'],
    abstractIcon: Network,
    abstractColor: 'text-green-400'
  }
};

const ServiceDetail = () => {
  const { id } = useParams();
  
  // Fallback to custom software if id doesn't exactly match
  const service = expandedServiceData[id] || expandedServiceData['custom-software'];
  const AbstractIcon = service.abstractIcon || Shield;

  return (
    <div className="pt-32 pb-20 overflow-hidden min-h-screen relative">
      <div className="absolute top-0 right-0 w-3/4 h-[800px] bg-gradient-to-br from-white/5 to-transparent blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/services" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-16 text-lg font-bold tracking-wide uppercase group">
          <ArrowLeft className="mr-3 group-hover:-translate-x-2 transition-transform" /> All Services
        </Link>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className={`text-5xl md:text-7xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r ${service.headerGradient} drop-shadow-2xl`}>
              {service.title}
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-8 border-l-4 border-white/20 pl-6">
              {service.subtitle}
            </h2>
            <p className="text-gray-400 text-xl leading-relaxed mb-12">
              {service.content}
            </p>

            <Link to="/contact" className="px-10 py-5 rounded-sm bg-white text-darkBg hover:bg-transparent hover:text-white border-2 border-white transition-all font-black text-lg tracking-widest uppercase inline-block">
              Initiate Project
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className={`relative h-[600px] rounded-[3rem] overflow-hidden group border border-white/10 bg-darkBg/50 backdrop-blur-3xl flex items-center justify-center p-8`}
          >
            {/* Glowing Orbs */}
            <div className={`absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-gradient-to-r ${service.headerGradient} opacity-20 blur-[120px] rounded-full mix-blend-screen transition-transform duration-1000 group-hover:scale-110`}></div>
            
            <div className="relative z-10 w-full h-full border border-white/10 bg-black/40 rounded-[2rem] flex items-center justify-center backdrop-blur-sm shadow-2xl">
               <div className="text-center">
                   <div className="w-32 h-32 mx-auto border border-white/10 rounded-2xl mb-8 flex items-center justify-center bg-white/5 backdrop-blur-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
                       <AbstractIcon className={`w-16 h-16 ${service.abstractColor} animate-pulse`} />
                   </div>
                   <p className="text-gray-400 font-mono tracking-widest uppercase">System Initialization</p>
                   <div className="w-48 h-1 bg-white/10 mx-auto mt-4 rounded-full overflow-hidden">
                     <div className={`h-full bg-gradient-to-r ${service.headerGradient} w-0 group-hover:w-full transition-all duration-1000 ease-out`}></div>
                   </div>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Pillars Grid */}
        <div className="mb-32">
          <h3 className="text-4xl font-bold text-white mb-12 text-center">Core Pillars of Implementation</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {service.pillars.map((pillar, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors"
              >
                <CheckCircle2 className={`w-10 h-10 mb-6 ${service.abstractColor}`} />
                <h4 className="text-2xl font-bold text-white mb-4">{pillar.title}</h4>
                <p className="text-gray-400 text-lg">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Stack Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-white/5 to-white/10 border border-white/20 p-12 rounded-[3rem] text-center backdrop-blur-xl"
        >
          <h3 className="text-2xl font-bold text-gray-300 mb-8 uppercase tracking-widest">Technologies Utilized</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {service.techStack.map((tech, i) => (
              <span key={i} className={`px-6 py-3 rounded-full border border-white/20 bg-darkBg text-white font-bold text-lg shadow-lg`}>
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ServiceDetail;
