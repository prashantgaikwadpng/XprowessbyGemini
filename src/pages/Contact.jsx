// src/pages/Contact.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, Send, ChevronDown } from 'lucide-react';

const faqs = [
  { q: "What is your typical project timeline?", a: "Depending on the immense scale of the architecture, projects take between 4 weeks (rapid MVP) to 6 months (massive enterprise systems). Our Agile sprints ensure weekly deliverables." },
  { q: "Do you handle post-deployment server maintenance?", a: "Yes. Our cloud infrastructure team offers 24/7 DevOps monitoring, ensuring 99.99% uptime using automated Kubernetes scaling." },
  { q: "How do you ensure data security?", a: "We employ zero-trust security architectures, database-level encryption (AES-256), and rigorous penetration testing before any system goes online." },
  { q: "Can you rescue an existing failing project?", a: "Absolutely. Our elite architects excel at performing deep codebase audits, refactoring monolithic legacy code into performant microservices." }
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message deployed to the matrix!");
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="pt-32 pb-20 overflow-hidden min-h-screen">
      
      {/* Contact Section */}
      <div className="px-6 max-w-7xl mx-auto mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Let's Build The <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonCyan to-neonPurple">Future.</span>
            </h1>
            <p className="text-xl text-gray-400 mb-12">
              Have a project in mind or just want to say hi? Connect with our team of elite developers and strategists to map your vision into reality.
            </p>
            
            <div className="space-y-8">
              {[
                { icon: Mail, title: "Email Us", val: "hello@xprowess.com" },
                { icon: MapPin, title: "Headquarters", val: "Cyber City, Node 42, Earth" },
                { icon: Phone, title: "Comm Link", val: "+1 (555) 019-2026" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neonCyan shadow-[0_0_15px_rgba(0,255,255,0.15)]">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-gray-500 font-medium uppercase tracking-wider text-sm mb-1">{item.title}</h4>
                    <p className="text-xl font-medium text-white">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neonPurple/20 to-neonCyan/20 blur-3xl -z-10 rounded-full"></div>
            <form 
              onSubmit={handleSubmit}
              className="bg-darkBg/60 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neonCyan to-neonPurple"></div>
              <h3 className="text-3xl font-bold mb-8 text-white">Send Transmission</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Identifier (Name)</label>
                  <input 
                    type="text" 
                    required
                    value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-neonCyan focus:ring-1 focus:ring-neonCyan transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Comms Link (Email)</label>
                  <input 
                    type="email" 
                    required
                    value={form.email}
                    onChange={e => setForm({...form, email: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-neonPurple focus:ring-1 focus:ring-neonPurple transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Coordinates / Message</label>
                  <textarea 
                    required
                    rows="4"
                    value={form.message}
                    onChange={e => setForm({...form, message: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all resize-none"
                    placeholder="Describe your architectural needs..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-neonCyan to-neonPurple text-darkBg font-bold text-lg hover:shadow-[0_0_20px_rgba(188,19,254,0.6)] transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  Engage <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-black/40 py-32 border-t border-white/5 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-400 text-xl">Everything you need to know about our elite delivery protocols.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="text-xl font-bold text-white">{faq.q}</span>
                  <ChevronDown className={`text-neonCyan transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-400 text-lg leading-relaxed border-t border-white/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;
