import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Send, Home, User, GraduationCap, Wrench, Briefcase } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa6';
import { personalInfo } from '../data';
import { Link, useLocation } from 'react-router-dom';

export default function Navebarre() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: User },
    { name: 'Education', path: '/education', icon: GraduationCap },
    { name: 'Skills', path: '/skills', icon: Wrench },
    { name: 'Projects', path: '/projects', icon: Briefcase },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tighter text-slate-50">
          {personalInfo.name.split(' ')[0]}<span className="text-indigo-500">.</span>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.name} 
                to={link.path}
                className={"flex items-center gap-2 text-sm font-medium transition-colors hover:text-indigo-400 "}
              >
                <link.icon className="w-4 h-4" />
                {link.name}
              </Link>
            );
          })}
        </nav>
        
        <div className="hidden md:flex items-center space-x-5">
          <div className="flex items-center space-x-4 border-r border-white/10 pr-5">
            <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors">
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
          <Link to="/contact" className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 rounded-lg border border-indigo-500/20 transition-all hover:scale-105 active:scale-95">
            <span>Let's talk</span>
            <Send className="w-3.5 h-3.5" />
          </Link>
        </div>

        <button 
          className="md:hidden p-2 text-slate-400 hover:text-slate-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-4 space-y-4">
              {links.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link 
                    key={link.name} 
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={"flex items-center gap-3 text-base font-medium transition-colors hover:text-indigo-400 "}
                  >
                    <link.icon className="w-5 h-5 text-indigo-400" />
                    {link.name}
                  </Link>
                );
              })}
              <Link 
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-2 mt-2 text-sm font-medium bg-indigo-500 text-white rounded-lg shadow-lg shadow-indigo-500/20"
              >
                <span>Let's talk</span>
                <Send className="w-4 h-4" />
              </Link>
              
              <div className="flex items-center justify-center space-x-6 pt-4 border-t border-white/5">
                <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="text-slate-400">
                  <FaGithub className="w-5 h-5" />
                </a>
                <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="text-slate-400">
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a href={personalInfo.socials.instagram} target="_blank" rel="noreferrer" className="text-slate-400">
                  <FaInstagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
