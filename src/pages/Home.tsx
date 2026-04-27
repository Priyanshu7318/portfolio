import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Github, ExternalLink, Code2, Rocket, Trophy, MapPin, ChevronRight, Gamepad2, Sparkles, Brain, Cpu, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const { about, services } = portfolioData;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[85vh] relative text-center overflow-hidden">
        
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl space-y-12 relative"
        >
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="flex items-center justify-center gap-4"
            >
              <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-indigo-500/50" />
              <span className="px-5 py-2 rounded-full bg-indigo-500/10 text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em] border border-indigo-500/20 backdrop-blur-md shadow-xl shadow-indigo-500/5">
                {about.availability}
              </span>
              <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-indigo-500/50" />
            </motion.div>

            <div className="relative inline-block">
              <motion.h1 
                className="text-7xl md:text-[10rem] font-black leading-[0.8] tracking-tighter uppercase mb-2"
              >
                {about.name.split(' ').map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ 
                      delay: 0.4 + (i * 0.15),
                      duration: 0.8,
                      ease: [0.215, 0.61, 0.355, 1]
                    }}
                    className="inline-block mr-4 last:mr-0"
                  >
                    {i === 1 ? (
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 bg-[length:200%_auto] animate-gradient-x">
                        {word}
                      </span>
                    ) : word}
                  </motion.span>
                ))}
              </motion.h1>
              
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1, duration: 1 }}
                className="h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"
              />
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-xl md:text-3xl text-slate-400 max-w-3xl mx-auto leading-tight font-medium tracking-tight"
            >
              {about.bio.split('. ')[0]}.
              <span className="block text-slate-600 text-lg mt-4 font-bold uppercase tracking-widest">
                {about.focus}
              </span>
            </motion.p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-10">
            {[
              { label: 'Location', val: about.location, icon: MapPin, color: 'text-indigo-400', bg: 'bg-indigo-400/10' },
              { label: 'LeetCode', val: about.stats.leetcode, icon: Code2, color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
              { label: 'Streak', val: about.stats.gfgStreak, icon: Rocket, color: 'text-orange-500', bg: 'bg-orange-500/10' }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + (i * 0.1) }}
                className="flex items-center gap-4 group cursor-default"
              >
                <div className={`w-12 h-12 rounded-2xl ${stat.bg} flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform duration-500`}>
                  <stat.icon size={22} className={stat.color} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">{stat.label}</p>
                  <p className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">{stat.val}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="flex flex-wrap justify-center gap-6 pt-4"
          >
            <Link to="/contact" className="group relative px-12 py-6 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] transition-all hover:bg-indigo-500 shadow-2xl shadow-indigo-500/40 active:scale-95 overflow-hidden">
              <span className="relative z-10">Initialize Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Link>
            <Link to="/projects" className="px-12 py-6 glass-card hover:bg-slate-800 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] transition-all flex items-center gap-3 active:scale-95 border-slate-800">
              Explore Projects
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-px h-12 bg-gradient-to-b from-indigo-500 to-transparent animate-bounce" />
        </motion.div>
      </section>

      {/* About Section Summary */}
      <section className="py-12 border-y border-slate-900">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] border border-indigo-500/20">
              The Identity
            </div>
            <h3 className="text-4xl font-black text-white uppercase tracking-tighter leading-none">
              The <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">Focus</span>
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'AI/ML', icon: Brain, color: 'text-indigo-400' },
                { label: 'Full Stack', icon: Code2, color: 'text-cyan-400' },
                { label: 'Data Sci', icon: Database, color: 'text-emerald-400' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/50 border border-slate-800 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  <item.icon size={12} className={item.color} />
                  {item.label}
                </div>
              ))}
            </div>
            <p className="text-slate-500 leading-relaxed font-medium line-clamp-4">
              {about.bio}
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-indigo-400 hover:text-indigo-300 transition-colors group active:scale-95">
              View Full Story <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
        </div>
      </section>

      {/* Services Preview */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] border border-indigo-500/20 mb-2">
              Capabilities
            </div>
            <h2 className="text-5xl font-black text-white uppercase tracking-tight leading-none">
              My <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">Services</span>
            </h2>
          </div>
          <Link to="/services" className="px-8 py-4 glass-card hover:bg-slate-800 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 active:scale-95 border-slate-800 group">
            View All Services <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 group hover:border-indigo-500/30 transition-all flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 mb-6">
                <Code2 size={24} />
              </div>
              <h3 className="text-xl font-black text-white uppercase tracking-tight mb-3">{service.name}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium flex-1">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack Preview */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] border border-cyan-500/20 mb-2">
              Technology
            </div>
            <h2 className="text-5xl font-black text-white uppercase tracking-tight leading-none">
              Power <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400">Stack</span>
            </h2>
          </div>
          <Link to="/tech-stack" className="px-8 py-4 glass-card hover:bg-slate-800 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 active:scale-95 border-slate-800 group">
            View Full Stack <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {portfolioData.techStack[0].items.slice(0, 7).map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card p-6 flex flex-col items-center justify-center text-center space-y-3 group hover:border-cyan-500/50 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-xl font-black text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-500">
                {tech.icon}
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Preview */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] border border-indigo-500/20 mb-2">
              Expertise
            </div>
            <h2 className="text-5xl font-black text-white uppercase tracking-tight leading-none">
              Technical <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">Toolkit</span>
            </h2>
          </div>
          <Link to="/skills" className="px-8 py-4 glass-card hover:bg-slate-800 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 active:scale-95 border-slate-800 group">
            View All Skills <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Software', items: portfolioData.skills.technicalSoftware.slice(0, 4), icon: Code2, color: 'text-indigo-400' },
            { label: 'Tools', items: portfolioData.skills.technicalTools.slice(0, 4), icon: Rocket, color: 'text-cyan-400' },
            { label: 'Professional', items: portfolioData.skills.professionalSoftSkills.slice(0, 4), icon: Trophy, color: 'text-white' },
          ].map((skillGroup, i) => (
            <motion.div
              key={skillGroup.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 group hover:border-indigo-500/30 transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center ${skillGroup.color}`}>
                  <skillGroup.icon size={20} />
                </div>
                <h3 className="text-lg font-black text-white uppercase tracking-tight">{skillGroup.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    {skill}
                  </span>
                ))}
                <span className="px-3 py-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 text-[10px] font-black uppercase tracking-widest">
                  + More
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Journey Preview */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] border border-cyan-500/20 mb-2">
              The Path
            </div>
            <h2 className="text-5xl font-black text-white uppercase tracking-tight leading-none">
              My <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400">Journey</span>
            </h2>
          </div>
          <Link to="/journey" className="px-8 py-4 glass-card hover:bg-slate-800 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 active:scale-95 border-slate-800 group">
            View Full Timeline <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-black text-white uppercase tracking-tight flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                <Rocket size={16} />
              </div>
              Latest Experience
            </h3>
            {portfolioData.journey.experience.slice(0, 2).map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 border-l-4 border-l-indigo-500 group hover:bg-slate-900/50 transition-all"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-black text-white uppercase tracking-tight">{exp.role}</h4>
                  <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-2 py-1 rounded">{exp.duration}</span>
                </div>
                <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">{exp.company}</p>
              </motion.div>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-black text-white uppercase tracking-tight flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                <Trophy size={16} />
              </div>
              Education
            </h3>
            {portfolioData.journey.education.slice(0, 1).map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-6 border-l-4 border-l-cyan-500 group hover:bg-slate-900/50 transition-all"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-black text-white uppercase tracking-tight">{edu.degree}</h4>
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-2 py-1 rounded">{edu.duration}</span>
                </div>
                <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">{edu.institution}</p>
                <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest mt-2">{edu.field}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hackathons Preview */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] border border-cyan-500/20 mb-2">
              Battle Tested
            </div>
            <h2 className="text-5xl font-black text-white uppercase tracking-tight leading-none">
              Top <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400">Hackathons</span>
            </h2>
          </div>
          <Link to="/hackathons" className="px-8 py-4 glass-card hover:bg-slate-800 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 active:scale-95 border-slate-800 group">
            View All Hackathons <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 glass-card p-8 flex flex-col justify-center space-y-6 border-l-4 border-l-cyan-500 bg-cyan-500/5 relative overflow-hidden group"
          >
            <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Trophy size={120} />
            </div>
            
            <div className="space-y-4 relative z-10">
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">The Grind</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-medium">
                "Hackathons aren't just about winning; they're about building the impossible in record time."
              </p>
              <div className="flex items-center gap-2 text-cyan-400">
                <div className="w-8 h-px bg-cyan-500/50" />
                <span className="text-[10px] font-black uppercase tracking-widest">Motivation</span>
              </div>
            </div>

            <div className="pt-2">
              <Link to="/hackathons" className="inline-flex items-center gap-3 px-6 py-3 bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-400 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border border-cyan-500/20 group/btn">
                Full Track Record <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioData.hackathons.slice(0, 3).map((hack, i) => (
            <motion.div
              key={hack.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 group hover:border-cyan-500/30 transition-all flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Trophy size={40} className="text-cyan-400" />
              </div>
              <div className="mb-6">
                <span className="text-cyan-400 text-[10px] font-black uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                  {hack.rank}
                </span>
              </div>
              <h3 className="text-xl font-black text-white uppercase tracking-tight mb-3 group-hover:text-cyan-400 transition-colors">
                {hack.name}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium mb-6 flex-1 line-clamp-2">
                Project: {hack.project}
              </p>
              <div className="flex items-center gap-4 text-slate-400">
                <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest">
                  <MapPin size={12} className="text-cyan-500" /> {hack.location}
                </div>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="space-y-12 pb-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] border border-indigo-500/20 mb-2">
              Featured Work
            </div>
            <h2 className="text-5xl font-black text-white uppercase tracking-tight leading-none">
              Latest <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">Builds</span>
            </h2>
          </div>
          <Link to="/projects" className="px-8 py-4 glass-card hover:bg-slate-800 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 active:scale-95 border-slate-800 group">
            Explore Portfolio <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.projects.slice(0, 2).map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group glass-card overflow-hidden"
            >
              <div className="flex flex-col md:flex-row h-full">
                <div className="w-full md:w-2/5 aspect-video md:aspect-auto bg-slate-900 overflow-hidden relative">
                  <img 
                    src={project.images?.[0] || `https://api.dicebear.com/7.x/shapes/svg?seed=${project.title}`}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 to-transparent md:hidden" />
                </div>
                <div className="p-8 flex-1 flex flex-col justify-center">
                  <span className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">{project.category}</span>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium mb-6 line-clamp-2">{project.description}</p>
                  <Link to="/projects" className="text-[10px] font-black uppercase tracking-widest text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-2">
                    Case Study <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mini-Game / Puzzle Preview */}
      <section className="space-y-12 pb-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-[10px] font-black uppercase tracking-[0.2em] border border-orange-500/20 mb-2">
              Deep Focus
            </div>
            <h2 className="text-5xl font-black text-white uppercase tracking-tight leading-none">
              The <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-400">Playground</span>
            </h2>
          </div>
          <Link to="/puzzle" className="px-8 py-4 glass-card hover:bg-slate-800 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 active:scale-95 border-slate-800 group">
            Play Now <Gamepad2 size={14} className="group-hover:rotate-12 transition-transform" />
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card overflow-hidden relative group border-orange-500/10"
        >
          <div className="flex flex-col md:flex-row items-stretch">
            <div className="w-full md:w-1/2 p-10 space-y-8 relative z-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400 border border-orange-500/20">
                    <Sparkles size={24} />
                  </div>
                  <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Mind Refresh</h3>
                </div>
                
                <p className="text-slate-400 text-lg leading-relaxed font-medium">
                  "A sharp mind needs a short reset. Step away from the code, solve the puzzle, and return with a fresh perspective."
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Trophy, label: 'High Scores', desc: 'Beat the clock' },
                  { icon: Rocket, label: 'Logic Flow', desc: 'Sharpen thinking' }
                ].map((item) => (
                  <div key={item.label} className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                    <item.icon size={18} className="text-orange-400" />
                    <p className="text-[10px] font-black uppercase tracking-widest text-white">{item.label}</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-6">
                <Link 
                  to="/puzzle" 
                  className="inline-flex items-center gap-3 px-8 py-4 bg-orange-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-orange-500 transition-all shadow-xl shadow-orange-500/20 active:scale-95 group/play"
                >
                  Start Mission <ChevronRight size={14} className="group-hover/play:translate-x-1 transition-transform" />
                </Link>
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="player" className="w-full h-full rounded-full" />
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-slate-950 bg-orange-500 flex items-center justify-center text-[8px] font-black text-white">
                    +12
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 bg-slate-900/50 p-10 flex items-center justify-center relative overflow-hidden min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-50" />
              
              {/* Abstract Visual Motivation */}
              <div className="relative w-full h-full flex items-center justify-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 90, 180, 270, 360]
                  }}
                  transition={{ 
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute w-64 h-64 border border-orange-500/20 rounded-[3rem]"
                />
                <motion.div
                  animate={{ 
                    scale: [1.1, 1, 1.1],
                    rotate: [360, 270, 180, 90, 0]
                  }}
                  transition={{ 
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute w-48 h-48 border border-orange-500/10 rounded-[2rem]"
                />
                
                <div className="relative z-10 flex flex-col items-center gap-6">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-32 h-32 rounded-[2.5rem] bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center shadow-2xl shadow-orange-500/20"
                  >
                    <Gamepad2 size={60} className="text-white" />
                  </motion.div>
                  <div className="text-center space-y-1">
                    <p className="text-white font-black uppercase tracking-[0.3em] text-[10px]">Level 01</p>
                    <p className="text-orange-400 font-black uppercase tracking-widest text-[8px] opacity-50">System Ready</p>
                  </div>
                </div>

                {/* Floating Icons */}
                {[
                  { icon: Sparkles, top: '15%', left: '20%', delay: 0 },
                  { icon: Trophy, top: '25%', right: '15%', delay: 1 },
                  { icon: Rocket, bottom: '20%', left: '25%', delay: 2 },
                  { icon: Code2, bottom: '15%', right: '20%', delay: 1.5 }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      y: [0, -15, 0],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ 
                      duration: 4,
                      delay: item.delay,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute text-orange-500/30"
                    style={{ top: item.top, bottom: item.bottom, left: item.left, right: item.right }}
                  >
                    <item.icon size={24} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Let's Talk CTA Section */}
      <section className="py-12 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[100px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 text-center space-y-4 border-indigo-500/10 relative"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] border border-indigo-500/20 mb-2">
            Next Steps
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
            Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">Collaborate?</span>
          </h2>
          
          <p className="text-slate-400 max-w-2xl mx-auto font-medium text-base leading-relaxed">
            Whether you have a groundbreaking idea or a complex problem to solve, I'm here to help you navigate the technical landscape and build something extraordinary.
          </p>

          <div className="pt-4">
            <Link 
              to="/contact" 
              className="group relative inline-flex items-center gap-4 px-10 py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] transition-all hover:bg-indigo-500 shadow-2xl shadow-indigo-500/40 active:scale-95 overflow-hidden"
            >
              <span className="relative z-10">Let's Talk</span>
              <ChevronRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Link>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 opacity-10">
            <Sparkles size={40} className="text-indigo-400" />
          </div>
          <div className="absolute bottom-10 right-10 opacity-10">
            <Rocket size={40} className="text-cyan-400" />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
