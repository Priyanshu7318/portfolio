import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Github as GitHub, ExternalLink, ChevronLeft, ChevronRight, Layers, Brain, Zap, Cpu, Database, Play, Globe, Sprout, Layout, Home as HomeIcon, Sparkles, Rocket, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const categoryIcons: { [key: string]: any } = {
  'AI / NLP': Brain,
  'AI / Automation': Zap,
  'Deep Learning': Cpu,
  'Full-stack': Database,
  'Streaming': Play,
  'Web App': Globe,
  'AgriTech': Sprout,
  'Frontend': Layout,
};

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [activeImage, setActiveImage] = useState<{ [key: string]: number }>({});
  
  const categories = ['All', ...new Set(portfolioData.projects.map(p => p.category))];

  const filteredProjects = filter === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === filter);

  const handleNextImage = (projectId: string, maxImages: number) => {
    setActiveImage(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % maxImages
    }));
  };

  const handlePrevImage = (projectId: string, maxImages: number) => {
    setActiveImage(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + maxImages) % maxImages
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative">
      <Link 
        to="/" 
        className="absolute top-10 left-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors group"
      >
        <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-indigo-500/50 transition-colors">
          <HomeIcon size={14} />
        </div>
        Back to home
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 space-y-4 relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] border border-indigo-500/20 mb-4">
          <Sparkles size={10} className="animate-pulse" /> Portfolio
        </div>
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white leading-[0.85]">
          Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">Projects</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto font-medium text-lg">
          A collection of my work spanning AI, data science, and full-stack development. 
          Each project represents a unique challenge solved with data-driven intelligence.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-16 relative z-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 ${
              filter === cat 
                ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-500/30' 
                : 'bg-slate-900/50 text-slate-500 hover:text-white border border-slate-800 hover:border-slate-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mb-8 flex items-center justify-between text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] relative z-10">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
            <Layers size={14} />
          </div>
          {filter} • {filteredProjects.length} projects
        </motion.span>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="hidden md:flex items-center gap-4"
        >
          <span className="flex items-center gap-2">
            <div className="flex -space-x-1">
              <div className="w-5 h-5 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center"><ChevronLeft size={10} /></div>
              <div className="w-5 h-5 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center"><ChevronRight size={10} /></div>
            </div>
            Use arrows to explore screens
          </span>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => {
            const currentImgIndex = activeImage[project.id] || 0;
            const projectImages = project.images || [`https://api.dicebear.com/7.x/shapes/svg?seed=${project.title}`];
            
            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col h-full"
              >
                <div className="glass-card flex flex-col h-full hover:border-indigo-500/40 transition-all duration-500 shadow-2xl shadow-black/20">
                  {/* Image Section */}
                  <div className="relative aspect-video bg-slate-950 overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.img 
                        key={`${project.id}-${currentImgIndex}`}
                        src={projectImages[currentImgIndex]} 
                        alt={project.title}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/shapes/svg?seed=${project.title}-${currentImgIndex}`;
                        }}
                      />
                    </AnimatePresence>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                    
                    {/* Image Controls */}
                    {projectImages.length > 1 && (
                      <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button 
                          onClick={(e) => { e.preventDefault(); handlePrevImage(project.id, projectImages.length); }}
                          className="p-2 rounded-full bg-slate-950/80 text-white hover:bg-indigo-600 transition-colors backdrop-blur-md"
                        >
                          <ChevronLeft size={16} />
                        </button>
                        <button 
                          onClick={(e) => { e.preventDefault(); handleNextImage(project.id, projectImages.length); }}
                          className="p-2 rounded-full bg-slate-950/80 text-white hover:bg-indigo-600 transition-colors backdrop-blur-md"
                        >
                          <ChevronRight size={16} />
                        </button>
                      </div>
                    )}

                    {/* Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {projectImages.map((_, i) => (
                        <div 
                          key={i} 
                          className={`h-1 rounded-full transition-all duration-300 ${i === currentImgIndex ? 'w-4 bg-indigo-500' : 'w-1 bg-white/30'}`} 
                        />
                      ))}
                    </div>

                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <div className="px-3 py-1 bg-indigo-500 text-white rounded-lg text-[9px] font-black uppercase tracking-widest shadow-lg shadow-indigo-500/40 flex items-center gap-1.5">
                        {(() => {
                          const Icon = categoryIcons[project.category] || Layers;
                          return <Icon size={10} />;
                        })()}
                        {project.category}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 flex-1 flex flex-col relative">
                    <motion.div 
                      animate={{ 
                        y: [0, -5, 0],
                        rotate: [0, 5, 0, -5, 0]
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute top-0 right-8 -translate-y-1/2 w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-xl group-hover:rotate-12"
                    >
                      {(() => {
                        const Icon = categoryIcons[project.category] || Layers;
                        return <Icon size={32} />;
                      })()}
                    </motion.div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="space-y-1">
                        <h4 className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em]">{project.subtitle}</h4>
                        <h3 className="text-2xl font-black text-white group-hover:text-indigo-400 transition-colors tracking-tight">{project.title}</h3>
                      </div>
                      <span className="text-slate-800 text-4xl font-black group-hover:text-indigo-500/10 transition-colors leading-none">
                        {project.id}
                      </span>
                    </div>
                    
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1 font-medium">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.techStack.map((tech) => (
                        <motion.span 
                          key={tech} 
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-3 py-1 bg-slate-900/50 rounded-lg text-[10px] font-bold text-slate-300 border border-slate-800 group-hover:border-indigo-500/30 transition-colors flex items-center gap-1.5"
                        >
                          <div className="w-1 h-1 rounded-full bg-indigo-500/50 group-hover:bg-indigo-500" />
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-4 bg-slate-900/80 hover:bg-slate-800 text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border border-slate-800 active:scale-95 group/btn"
                      >
                        <GitHub size={14} className="group-hover/btn:rotate-12 transition-transform" /> Source
                      </a>
                      <button className="group relative flex-1 flex items-center justify-center gap-2 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg shadow-indigo-500/20 overflow-hidden active:scale-95">
                        <span className="relative z-10 flex items-center gap-2">
                          <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Live Demo
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
