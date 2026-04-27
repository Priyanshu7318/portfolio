import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Trophy, Calendar, MapPin, Target, ChevronLeft, ChevronRight, Award, Flame, Home as HomeIcon, Sparkles, Code2, Rocket, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hackathons() {
  const { hackathons } = portfolioData;
  const [activeImage, setActiveImage] = useState<{ [key: string]: number }>({});

  const handleNextImage = (hackName: string, maxImages: number) => {
    setActiveImage(prev => ({
      ...prev,
      [hackName]: ((prev[hackName] || 0) + 1) % maxImages
    }));
  };

  const handlePrevImage = (hackName: string, maxImages: number) => {
    setActiveImage(prev => ({
      ...prev,
      [hackName]: ((prev[hackName] || 0) - 1 + maxImages) % maxImages
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

      {/* Background Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        {[Trophy, Target, Award, Rocket, Code2, Brain].map((Icon, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.05, 0.15, 0.05],
              y: [Math.random() * 100, Math.random() * -100],
              x: [Math.random() * 50, Math.random() * -50],
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 10 + Math.random() * 20, 
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute text-indigo-500/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            <Icon size={40 + Math.random() * 60} />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 space-y-4 relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] border border-indigo-500/20 mb-4">
          <Sparkles size={10} className="animate-pulse" /> Battlegrounds
        </div>
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white leading-[0.85]">
          National <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">Hackathons</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto font-medium text-lg">
          High-intensity builds, tight deadlines, and lessons that don't fit in a classroom. 
          9+ national-level competitions and counting.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {hackathons.map((hack, index) => {
          const currentImgIndex = activeImage[hack.name] || 0;
          const hackImages = hack.images || [`https://api.dicebear.com/7.x/shapes/svg?seed=${hack.name}`];

          return (
            <motion.div
              key={hack.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col h-full"
            >
              <div className="glass-card h-full flex flex-col hover:border-indigo-500/40 transition-all duration-500 shadow-2xl shadow-black/20 overflow-hidden">
                {/* Image Slider */}
                <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={`${hack.name}-${currentImgIndex}`}
                      src={hackImages[currentImgIndex]} 
                      alt={hack.name}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/shapes/svg?seed=${hack.name}-${currentImgIndex}`;
                      }}
                    />
                  </AnimatePresence>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                  
                  {/* Image Controls */}
                  {hackImages.length > 1 && (
                    <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        onClick={(e) => { e.preventDefault(); handlePrevImage(hack.name, hackImages.length); }}
                        className="p-2 rounded-full bg-slate-950/80 text-white hover:bg-indigo-600 transition-colors backdrop-blur-md"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button 
                        onClick={(e) => { e.preventDefault(); handleNextImage(hack.name, hackImages.length); }}
                        className="p-2 rounded-full bg-slate-950/80 text-white hover:bg-indigo-600 transition-colors backdrop-blur-md"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  )}

                  <div className="absolute top-4 right-4 px-3 py-1 bg-indigo-600 text-white rounded-lg text-[9px] font-black uppercase tracking-widest shadow-lg shadow-indigo-500/40 z-10">
                    {hack.rank}
                  </div>
                  
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white/90 text-[10px] font-black uppercase tracking-widest z-10">
                    <Flame size={14} className="text-orange-500" />
                    {hack.duration} Sprint
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <motion.div 
                      animate={{ 
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-xl group-hover:rotate-12"
                    >
                      <Award size={24} />
                    </motion.div>
                    <div className="flex flex-col items-end">
                      <span className="flex items-center gap-1.5 text-slate-500 text-[10px] font-black uppercase tracking-widest">
                        <Calendar size={12} className="text-indigo-500" /> {hack.date}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-2 group-hover:text-indigo-400 transition-colors uppercase tracking-tight leading-none">
                    {hack.name}
                  </h3>
                  <p className="text-indigo-400/80 text-[10px] font-black uppercase tracking-widest mb-6 flex items-center gap-2">
                    <Target size={12} /> {hack.project}
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-slate-400 text-xs font-medium">
                      <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center">
                        <MapPin size={14} className="text-slate-500" />
                      </div>
                      {hack.location}
                    </div>
                  </div>

                  <div className="mt-auto">
                    <div className="flex items-center justify-between p-4 bg-slate-900/50 rounded-2xl border border-slate-800 group-hover:border-indigo-500/20 transition-all duration-500">
                      <div>
                        <p className="text-[9px] text-slate-500 uppercase tracking-widest font-black mb-1">Role</p>
                        <p className="text-xs text-white font-black">{hack.role}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[9px] text-slate-500 uppercase tracking-widest font-black mb-1 flex items-center justify-end gap-1">
                          <Trophy size={8} /> Prize
                        </p>
                        <p className="text-xs text-indigo-400 font-black">{hack.prize}</p>
                      </div>
                    </div>
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
