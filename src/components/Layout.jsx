import React from 'react';
import { motion } from 'framer-motion';
import Navebarre from './Navebarre';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="relative min-h-screen flex flex-col font-['Fira_Code'] text-slate-300">
      {/* Global Backgrounds */}
      <div className="star-bg"></div>
      
      {/* Floating animated particles - Hacker Vibe (Global) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-cyan-900/10 to-transparent pointer-events-none" />
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-cyan-500/20 rounded-md bg-cyan-900/10 backdrop-blur-sm"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              rotate: Math.random() * 360,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              rotate: Math.random() * 360 + 180,
              scale: Math.random() * 0.5 + 0.5
            }}
            transition={{ 
              duration: Math.random() * 15 + 15, 
              repeat: Infinity, 
              repeatType: "reverse", 
              ease: "linear" 
            }}
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
            }}
          />
        ))}
      </div>

      <Navebarre />
      <main className="flex-grow pt-16 z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
