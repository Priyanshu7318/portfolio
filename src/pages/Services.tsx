import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Database, Code2, Cpu, Palette, Video, Layout, Rocket, ChevronRight } from 'lucide-react';

const iconMap: Record<string, any> = {
  '01': Database,
  '02': Code2,
  '03': Cpu,
  '04': Palette,
  '05': Video,
  '06': Layout,
};

export default function Services() {
  const { services } = portfolioData;

  return (
    <div className="max-w-7xl mx-auto px-6 pt-12 pb-12 space-y-16">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center space-y-6"
      >
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
          My <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">Services</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          A hybrid skill set across data, design and development.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => {
          const Icon = iconMap[service.id] || Rocket;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="glass-card p-10 h-full flex flex-col transition-all duration-500 hover:border-indigo-500/50 hover:bg-indigo-500/[0.02]">
                <div className="flex justify-between items-start mb-10">
                  <div className="w-16 h-16 bg-indigo-500/10 rounded-[1.5rem] flex items-center justify-center group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500 shadow-lg shadow-indigo-500/10">
                    <Icon size={32} className="text-indigo-400 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-slate-900 text-6xl font-black transition-colors group-hover:text-indigo-500/10">
                    {service.id}
                  </span>
                </div>
                
                <h3 className="text-2xl font-black mb-4 text-white group-hover:text-indigo-400 transition-colors uppercase tracking-tight">
                  {service.name}
                </h3>
                
                <p className="text-slate-400 mb-10 flex-grow leading-relaxed font-medium">
                  {service.description}
                </p>

                <div className="pt-6 border-t border-slate-900 flex items-center justify-between group/link">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover/link:text-indigo-400 transition-colors">
                    Inquire now
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-slate-500 group-hover/link:bg-indigo-500 group-hover/link:text-white transition-all">
                    <ChevronRight size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
