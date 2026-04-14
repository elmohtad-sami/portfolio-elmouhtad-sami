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

  'Accounting: Financial reporting, and compliance with international standards (IFRS)': <BookOpen className="text-amber-400 w-5 h-5 flex-shrink-0" />,
  'Finance: Financial analysis, budgeting': <DollarSign className="text-emerald-400 w-5 h-5 flex-shrink-0" />,
  'Taxation: Tax planning, compliance': <Receipt className="text-orange-400 w-5 h-5 flex-shrink-0" />,
  'Software Proficiency: Excel (advanced)': <Monitor className="text-green-400 w-5 h-5 flex-shrink-0" />,
  'Soft Skills: Analytical thinking, problem-solving': <Brain className="text-pink-400 w-5 h-5 flex-shrink-0" />
};

const getAccentClasses = (accent) => {
  switch (accent) {
    case 'purple': return {
      hoverBorder: 'hover:border-purple-500/50',
      hoverText: 'group-hover:text-purple-300',
      badgeHoverBorder: 'hover:border-purple-500',
      badgeHoverText: 'hover:text-purple-300',
      bgGlow: 'from-purple-500/10',
      indexHoverText: 'group-hover:text-purple-400'
    };
    case 'green': return {
      hoverBorder: 'hover:border-emerald-500/50',
      hoverText: 'group-hover:text-emerald-300',
      badgeHoverBorder: 'hover:border-emerald-500',
      badgeHoverText: 'hover:text-emerald-300',
      bgGlow: 'from-emerald-500/10',
      indexHoverText: 'group-hover:text-emerald-400'
    };
    case 'amber': return {
      hoverBorder: 'hover:border-amber-500/50',
      hoverText: 'group-hover:text-amber-300',
      badgeHoverBorder: 'hover:border-amber-500',
      badgeHoverText: 'hover:text-amber-300',
      bgGlow: 'from-amber-500/10',
      indexHoverText: 'group-hover:text-amber-400'
    };
    case 'cyan':
    default: return {
      hoverBorder: 'hover:border-cyan-500/50',
      hoverText: 'group-hover:text-cyan-300',
      badgeHoverBorder: 'hover:border-cyan-500',
      badgeHoverText: 'hover:text-cyan-300',
      bgGlow: 'from-cyan-500/10',
      indexHoverText: 'group-hover:text-cyan-400'
    };
  }
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
    { title: 'Core Base', icon: <Terminal className="w-5 h-5 text-cyan-400 mb-2 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />, items: skillsInfo.core, accent: 'cyan' },
    { title: 'Frontend', icon: <Layout className="w-5 h-5 text-purple-400 mb-2 drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]" />, items: skillsInfo.frontend, accent: 'purple' },
    { title: 'Backend', icon: <Database className="w-5 h-5 text-[#00ff41] mb-2 drop-shadow-[0_0_8px_rgba(0,255,65,0.8)]" />, items: skillsInfo.backend, accent: 'green' },
    { title: 'Tools', icon: <Wrench className="w-5 h-5 text-cyan-400 mb-2 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />, items: skillsInfo.tools, accent: 'cyan' },
    { title: 'Professional', icon: <Briefcase className="w-5 h-5 text-amber-400 mb-2 drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]" />, items: skillsInfo.professional, accent: 'amber' }
  ];

  return (
    <section className="py-20 min-h-[calc(100vh-16rem)] font-['Fira_Code'] z-10 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center md:justify-start mb-16 gap-4">
          <span className="text-cyan-500 font-bold text-2xl">~/</span>
          <h2 className="text-3xl font-bold text-slate-100 uppercase tracking-widest neon-text-cyan">
            SYS.SKILLS
          </h2>
          <div className="h-px bg-cyan-900/50 flex-grow ml-4 hidden md:block mix-blend-screen shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {groups.map((group, idx) => {
            const isProfessional = group.title === 'Professional';
            const styles = getAccentClasses(group.accent);
            
            return (
              <motion.div 
                key={idx} 
                variants={cardVariants}
                className={`p-6 border border-slate-800 rounded-lg bg-slate-950/60 backdrop-blur-md flex flex-col ${styles.hoverBorder} transition-all duration-300 group shadow-lg overflow-hidden relative ${isProfessional ? 'md:col-span-2 lg:col-span-3 lg:w-3/4 lg:mx-auto' : ''}`}
              >
                {/* Background glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${styles.bgGlow} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none`}></div>
                
                <div className="flex justify-between items-start relative z-10">
                  {group.icon}
                  <span className={`text-[10px] text-slate-600 ${styles.indexHoverText} transition-colors font-mono`}>0x0{idx + 1}</span>
                </div>
                <h3 className={`text-xl font-bold mb-6 text-slate-200 ${styles.hoverText} transition-colors relative z-10`}>{group.title}</h3>
                
                {isProfessional ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-auto relative z-10">
                    {group.items.map((skill, i) => {
                      const parts = skill.split(': ');
                      const category = parts[0];
                      const desc = parts[1] || '';
                      return (
                        <motion.div 
                          whileHover={{ scale: 1.02 }}
                          key={i} 
                          className="flex items-start gap-4 p-4 bg-slate-900/80 border border-slate-700/50 rounded-md hover:border-amber-500/40 hover:bg-slate-800 transition-all duration-300 shadow-sm"
                        >
                          <div className="mt-1 bg-slate-800 p-2 rounded-md border border-slate-700 flex-shrink-0 group-hover:border-amber-500/30 transition-colors shadow-inner">
                             {iconMap[skill]}
                          </div>
                          <div>
                            <h4 className="text-amber-400 font-bold text-sm tracking-wide">{category}</h4>
                            {desc && <p className="text-slate-400 text-xs mt-1.5 leading-relaxed font-sans">{desc}</p>}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-3 mt-auto relative z-10">
                    {group.items.map((skill, i) => (
                      <motion.span 
                        whileHover={{ scale: 1.05, y: -2 }}
                        key={i} 
                        className={`flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-700 rounded-md ${styles.badgeHoverBorder} ${styles.badgeHoverText} hover:shadow-[0_0_12px_rgba(currentColor,0.3)] transition-all duration-300 cursor-default`}
                      >
                        {iconMap[skill]}
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
