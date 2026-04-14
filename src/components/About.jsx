import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data';

export default function About() {
  return (
    <section className="py-20 min-h-[calc(100vh-16rem)] flex items-center">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Image — Neon Glow Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative justify-self-center md:justify-self-end flex items-center justify-center"
          >
            {/* Outer ambient glow */}
            <div className="absolute w-72 h-72 md:w-80 md:h-80 rounded-full bg-white/5 blur-3xl pointer-events-none" />

            {/* Neon ring container */}
            <div
              className="relative w-64 h-64 md:w-72 md:h-72 rounded-full p-1 transition-all duration-500 hover:scale-105"
              style={{
                boxShadow: `
                  0 0 8px 2px rgba(255, 255, 255, 0.6),
                  0 0 20px 6px rgba(255, 255, 255, 0.35),
                  0 0 40px 12px rgba(255, 255, 255, 0.15),
                  inset 0 0 8px 2px rgba(255, 255, 255, 0.3)
                `,
                border: '2px solid rgba(255, 255, 255, 0.8)'
              }}
            >
              <img
                src="/sami22.jpeg"
                alt="About me"
                className="w-full h-full object-cover rounded-full grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

          {/* Right Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-center md:text-left"
          >
            <h2 className="text-4xl font-bold text-slate-100">About Me</h2>
            <div className="h-1 w-20 bg-indigo-500 rounded-full mx-auto md:mx-0"></div>
            
            <p className="text-lg text-slate-400 leading-relaxed">
              {personalInfo.about}
            </p>
            
            <p className="text-lg text-slate-400 leading-relaxed">

            </p>
            
            <div className="pt-4">
               <Link to="/contact" className="inline-block px-8 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-slate-200 rounded-lg transition-colors font-medium">
                 Get in touch
               </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
