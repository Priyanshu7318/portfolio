import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Home as HomeIcon, Terminal, Globe, Cpu, Brain, Code2, Database, Layout, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const techIcons: { [key: string]: any } = {
  "Python": Terminal,
  "JavaScript": Globe,
  "Machine Learning": Cpu,
  "LLMs": Brain,
  "C / C++": Code2,
  "MySQL": Database,
  "HTML5 / CSS3": Layout
};

export default function TechStack() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative">
      <Link 
        to="/" 
        className="absolute top-10 left-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors group"
      >
        <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-indigo-500/50 transition-colors">
          <HomeIcon size={14} />
        </div>
        Back to Home 
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] border border-indigo-500/20 mb-4">
          <Sparkles size={10} className="animate-pulse" /> Core Engine
        </div>
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
          Languages & <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">Frameworks</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto font-medium">
          Battle-tested tools I use to ship production-grade work. From raw data processing 
          to pixel-perfect frontends.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.techStack[0].items.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
          >
            <div className="glass-card p-6 h-full transition-all duration-300 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-lg">
                  {(() => {
                    const Icon = techIcons[tech.name] || Terminal;
                    return <Icon size={24} />;
                  })()}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight group-hover:text-indigo-400 transition-colors leading-none mb-1">
                    {tech.name}
                  </h3>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{tech.detail}</p>
                </div>
              </div>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {tech.subItems.map((sub) => (
                  <span 
                    key={sub}
                    className="px-3 py-1 rounded-lg bg-slate-900/50 text-[10px] font-bold text-slate-400 border border-slate-800 group-hover:border-indigo-500/30 group-hover:text-slate-200 transition-all"
                  >
                    {sub}
                  </span>
                ))}
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest">
                  hover to reveal →
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
