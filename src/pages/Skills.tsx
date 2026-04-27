import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { PenTool, Terminal, Users, Zap, CheckCircle2, Home as HomeIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Skills() {
  const { technicalSoftware, technicalTools, professionalSoftSkills } = portfolioData.skills;

  const skillSections = [
    {
      title: "Software",
      category: "Technical",
      icon: <PenTool size={24} />,
      skills: technicalSoftware,
      color: "indigo",
      gradient: "from-indigo-500/20 to-transparent",
      borderColor: "group-hover:border-indigo-500/50",
      iconBg: "bg-indigo-500/10",
      iconColor: "text-indigo-400",
      iconHoverBg: "group-hover:bg-indigo-600",
      tagBg: "bg-indigo-500/5",
      tagBorder: "border-indigo-500/10",
      tagText: "text-indigo-300",
      tagHoverBorder: "hover:border-indigo-500/40"
    },
    {
      title: "Tools",
      category: "Technical",
      icon: <Terminal size={24} />,
      skills: technicalTools,
      color: "cyan",
      gradient: "from-cyan-500/20 to-transparent",
      borderColor: "group-hover:border-cyan-500/50",
      iconBg: "bg-cyan-500/10",
      iconColor: "text-cyan-400",
      iconHoverBg: "group-hover:bg-cyan-600",
      tagBg: "bg-cyan-500/5",
      tagBorder: "border-cyan-500/10",
      tagText: "text-cyan-300",
      tagHoverBorder: "hover:border-cyan-500/40"
    },
    {
      title: "Soft Skills",
      category: "Professional",
      icon: <Users size={24} />,
      skills: professionalSoftSkills,
      color: "emerald",
      gradient: "from-emerald-500/20 to-transparent",
      borderColor: "group-hover:border-emerald-500/50",
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-400",
      iconHoverBg: "group-hover:bg-emerald-600",
      tagBg: "bg-emerald-500/5",
      tagBorder: "border-emerald-500/10",
      tagText: "text-emerald-300",
      tagHoverBorder: "hover:border-emerald-500/40"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 pt-12 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-6 mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] border border-indigo-500/20">
          Expertise
        </div>
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase text-white leading-[0.85]">
          My <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">Skills</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium">
          A comprehensive toolkit of software, technical tools, and human-centric skills that drive my creative process.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {skillSections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="group relative h-full"
          >
            <div className={`glass-card p-10 h-full flex flex-col transition-all duration-500 ${section.borderColor} overflow-hidden shadow-2xl shadow-black/20`}>
              <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${section.gradient} blur-3xl -z-10 group-hover:opacity-100 opacity-30 transition-opacity duration-700`} />
              
              <div className="flex items-center gap-5 mb-12">
                <div className={`w-16 h-16 rounded-2xl ${section.iconBg} flex items-center justify-center ${section.iconColor} ${section.iconHoverBg} group-hover:text-white transition-all duration-500 shadow-xl shadow-black/20`}>
                  {section.icon}
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1">{section.category}</p>
                  <h3 className="text-3xl font-black text-white uppercase tracking-tight leading-none">{section.title}</h3>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-auto">
                {section.skills.map((skill, i) => (
                  <motion.div 
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.1) + (i * 0.03) }}
                    className={`px-4 py-2 rounded-xl ${section.tagBg} border ${section.tagBorder} ${section.tagText} text-xs font-bold ${section.tagHoverBorder} transition-all hover:scale-105 active:scale-95 flex items-center gap-2 group/skill cursor-default`}
                  >
                    <CheckCircle2 size={12} className="opacity-40 group-hover/skill:opacity-100 transition-opacity" />
                    {skill}
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-slate-800/50 flex items-center justify-between text-slate-500 text-[10px] font-black uppercase tracking-widest">
                <span>{section.skills.length} Competencies</span>
                <Zap size={14} className="opacity-20 group-hover:opacity-100 transition-opacity group-hover:animate-pulse" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
