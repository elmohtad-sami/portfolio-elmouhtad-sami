import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Layout, Database, Wrench, Briefcase, BookOpen, DollarSign, Receipt, Monitor, Brain } from 'lucide-react';
import { skillsInfo } from '../data';
import { 
  SiReact, SiNodedotjs, SiTailwindcss, SiJavascript, SiGit,
  SiTypescript, SiNextdotjs, SiVuedotjs, SiFramer,
  SiExpress, SiPostgresql, SiMongodb,
  SiDocker, SiVercel, SiFigma, SiJest
} from 'react-icons/si';
import { FaServer } from 'react-icons/fa';

const iconMap = {
  'React': <SiReact className="text-[#61DAFB] w-4 h-4" />,
  'Node.js': <SiNodedotjs className="text-[#339933] w-4 h-4" />,
  'Tailwind CSS': <SiTailwindcss className="text-[#06B6D4] w-4 h-4" />,
  'JavaScript': <SiJavascript className="text-[#F7DF1E] w-4 h-4" />,
  'Git': <SiGit className="text-[#F05032] w-4 h-4" />,
  
  'TypeScript': <SiTypescript className="text-[#3178C6] w-4 h-4" />,
  'Next.js': <SiNextdotjs className="text-white w-4 h-4" />,
  'Vue.js': <SiVuedotjs className="text-[#4FC08D] w-4 h-4" />,
  'Framer Motion': <SiFramer className="text-[#0055FF] w-4 h-4" />,
  
  'Express': <SiExpress className="text-white w-4 h-4" />,
  'PostgreSQL': <SiPostgresql className="text-[#4169E1] w-4 h-4" />,
  'MongoDB': <SiMongodb className="text-[#47A248] w-4 h-4" />,
  'REST APIs': <FaServer className="text-slate-400 w-4 h-4" />,
  
  'Docker': <SiDocker className="text-[#2496ED] w-4 h-4" />,
  'Vercel': <SiVercel className="text-white w-4 h-4" />,
  'Figma': <SiFigma className="text-[#F24E1E] w-4 h-4" />,
  'Jest': <SiJest className="text-[#C21325] w-4 h-4" />,

  'Accounting: Financial reporting, and compliance with international standards (IFRS)': <BookOpen className="text-amber-400 w-4 h-4" />,
  'Finance: Financial analysis, budgeting': <DollarSign className="text-emerald-400 w-4 h-4" />,
  'Taxation: Tax planning, compliance': <Receipt className="text-orange-400 w-4 h-4" />,
  'Software Proficiency: Excel (advanced)': <Monitor className="text-green-400 w-4 h-4" />,
  'Soft Skills: Analytical thinking, problem-solving': <Brain className="text-pink-400 w-4 h-4" />
};

export default function Skills() {
  const groups = [
    { title: 'Core Base', icon: <Terminal className="w-5 h-5 text-cyan-400 mb-2 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />, items: skillsInfo.core },
    { title: 'Frontend', icon: <Layout className="w-5 h-5 text-purple-400 mb-2 drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]" />, items: skillsInfo.frontend },
    { title: 'Backend', icon: <Database className="w-5 h-5 text-[#00ff41] mb-2 drop-shadow-[0_0_8px_rgba(0,255,65,0.8)]" />, items: skillsInfo.backend },
    { title: 'Tools', icon: <Wrench className="w-5 h-5 text-cyan-400 mb-2 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />, items: skillsInfo.tools },
    { title: 'Professional', icon: <Briefcase className="w-5 h-5 text-amber-400 mb-2 drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]" />, items: skillsInfo.professional }
  ];

  return (
    <section className="py-20 min-h-[calc(100vh-16rem)] font-['Fira_Code'] z-10 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center md:justify-start mb-12 gap-4">
            <span className="text-cyan-500 font-bold text-2xl">~/</span>
            <h2 className="text-3xl font-bold text-slate-100 uppercase tracking-widest neon-text-cyan">
              SYS.SKILLS
            </h2>
            <div className="h-px bg-cyan-900/50 flex-grow ml-4 hidden md:block mix-blend-screen shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groups.map((group, idx) => (
              <div key={idx} className="p-6 border border-slate-800 rounded-sm bg-black/60 flex flex-col hover:border-cyan-500/50 hover:bg-cyan-950/10 transition-all duration-300 neon-border-hover group">
                <div className="flex justify-between items-start">
                  {group.icon}
                  <span className="text-[10px] text-slate-600 group-hover:text-cyan-600 transition-colors">0x0{idx + 1}</span>
                </div>
                <h3 className="text-lg font-bold mb-6 text-slate-200 group-hover:text-cyan-300 transition-colors">{group.title}</h3>
                <div className="flex flex-wrap gap-3 mt-auto">
                  {group.items.map((skill, i) => (
                    <span key={i} className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-700 rounded-sm hover:border-cyan-500 hover:text-cyan-300 hover:shadow-[0_0_10px_rgba(34,211,238,0.2)] transition-all duration-200 cursor-default">
                      {iconMap[skill]}
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
