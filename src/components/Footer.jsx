import React from 'react';
import { ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa6';
import { personalInfo } from '../data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 py-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 text-slate-400 text-sm">
           {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </div>
        
        <div className="flex items-center space-x-5">
          <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors" aria-label="GitHub">
            <FaGithub className="w-5 h-5" />
          </a>
          <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors" aria-label="LinkedIn">
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a href={personalInfo.socials.instagram} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors" aria-label="Instagram">
            <FaInstagram className="w-5 h-5" />
          </a>
          
          <button 
            onClick={scrollToTop}
            className="ml-4 p-2 bg-white/5 hover:bg-white/10 text-slate-300 rounded-lg transition-colors border border-white/10"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
