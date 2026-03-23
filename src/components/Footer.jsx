// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-24 pb-12 relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMGg0MHYxSDB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+CjxwYXRoIGQ9Ik0wIDB2NDBoMXYtNDB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+Cjwvc3ZnPg==')] opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Link to="/" className="text-3xl font-bold tracking-tighter text-white flex items-center gap-2">
              <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-neonCyan to-neonPurple flex items-center justify-center text-darkBg shadow-[0_0_15px_rgba(0,255,255,0.5)]">X</span>
              PROWESS
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm">
              We are the architects of the digital tomorrow. Delivering infinite scale, uncrackable security, and awe-inspiring aesthetic experiences.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-neonCyan hover:border-neonCyan transition-all"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-neonPurple hover:border-neonPurple transition-all"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-pink-500 hover:border-pink-500 transition-all"><Github size={18} /></a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Our Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services/web-development" className="text-gray-400 hover:text-neonCyan transition-colors text-sm">Web Development</Link></li>
              <li><Link to="/services/bi-and-software" className="text-gray-400 hover:text-neonCyan transition-colors text-sm">Business Intelligence</Link></li>
              <li><Link to="/services/custom-software" className="text-gray-400 hover:text-neonCyan transition-colors text-sm">Custom Software</Link></li>
              <li><Link to="/services/ai-development" className="text-gray-400 hover:text-neonCyan transition-colors text-sm">AI Integration</Link></li>
              <li><Link to="/services/cloud-infrastructure" className="text-gray-400 hover:text-neonCyan transition-colors text-sm">Cloud Infrastructure</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-neonPurple transition-colors text-sm">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-neonPurple transition-colors text-sm">Contact</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-neonPurple transition-colors text-sm">Careers</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-neonPurple transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-neonPurple transition-colors text-sm">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Comm Link</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to our matrix transmission to receive future technology insights.</p>
            <form className="flex w-full" onSubmit={(e) => { e.preventDefault(); alert("Subscribed!"); }}>
              <input 
                type="email" 
                required 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-l-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-neonCyan"
              />
              <button className="bg-gradient-to-r from-neonCyan to-neonPurple px-4 rounded-r-lg text-darkBg font-bold">
                <Mail size={18} />
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} Xprowess. Archiving the future.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            All systems operational.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
