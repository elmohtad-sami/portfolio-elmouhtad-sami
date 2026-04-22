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

  'Accounting: Financial reporting, and compliance with international standards (IFRS)': <BookOpen className="w-5 h-5 flex-shrink-0" />,
  'Finance: Financial analysis, budgeting': <DollarSign className="w-5 h-5 flex-shrink-0" />,
  'Taxation: Tax planning, compliance': <Receipt className="w-5 h-5 flex-shrink-0" />,
  'Software Proficiency: Excel (advanced)': <Monitor className="w-5 h-5 flex-shrink-0" />,
  'Soft Skills: Analytical thinking, problem-solving': <Brain className="w-5 h-5 flex-shrink-0" />
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Skills() {
  const groups = [
    { title: 'Core Base', icon: <Terminal className="w-6 h-6" />, items: skillsInfo.core },
    { title: 'Frontend', icon: <Layout className="w-6 h-6" />, items: skillsInfo.frontend },
    { title: 'Backend', icon: <Database className="w-6 h-6" />, items: skillsInfo.backend },
    { title: 'Tools', icon: <Wrench className="w-6 h-6" />, items: skillsInfo.tools },
    { title: 'Professional', icon: <Briefcase className="w-6 h-6" />, items: skillsInfo.professional }
  ];

  return (
    <section className="py-24 min-h-[calc(100vh-16rem)]">
      <div className="max-w-5xl mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-100">Professional Skills</h2>
            <div className="h-1 w-20 bg-indigo-500 rounded-full mx-auto"></div>
            <p className="text-slate-400 mt-6 max-w-2xl mx-auto">A comprehensive overview of my technical expertise and professional capabilities.</p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {groups.map((group, idx) => {
              const isProfessional = group.title === 'Professional';
              
              return (
                <motion.div 
                  key={idx} 
                  variants={cardVariants}
                  className={`p-6 sm:p-8 bg-slate-900/50 rounded-2xl border border-white/5 shadow-xl flex flex-col transition-all duration-300 hover:border-white/10 ${isProfessional ? 'md:col-span-2' : ''}`}
                >
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="p-3 bg-indigo-500/20 text-indigo-400 rounded-xl">
                      {group.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-100">{group.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 mt-auto">
                    {group.items.map((skill, i) => {
                      const displayTitle = skill.includes(':') ? skill.split(':')[0] : skill;
                      return (
                        <motion.span 
                          whileHover={{ scale: 1.05 }}
                          key={i} 
                          title={skill}
                          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-300 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:text-indigo-400 transition-all duration-300 cursor-default shadow-sm"
                        >
                          {iconMap[skill]}
                          {displayTitle}
                        </motion.span>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
