import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Github, Linkedin, Mail, Award, BookOpen, Rocket, MapPin, Code2, Globe, Download, Brain, Cpu, Database, Sparkles, Trophy } from 'lucide-react';

export default function About() {
  const { about } = portfolioData;

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: about.links.github, color: 'hover:text-white' },
    { name: 'LinkedIn', icon: Linkedin, url: about.links.linkedin, color: 'hover:text-blue-500' },
    { name: 'LeetCode', icon: BookOpen, url: about.links.leetcode, color: 'hover:text-yellow-500' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 pt-12 pb-12 space-y-16">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center space-y-6"
      >
        <div className="inline-flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] border border-indigo-500/20">
            The Story
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href={about.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-indigo-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/20 active:scale-95 flex items-center gap-2"
            >
              <Linkedin size={14} /> Hire Me
            </a>
            <a 
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 glass-card text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all active:scale-95 flex items-center gap-2 border-slate-800"
            >
              <Download size={14} /> Download CV
            </a>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
          About <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">Me</span>
        </h1>
        <p className="text-slate-400 max-w-3xl mx-auto text-xl font-medium">
          Aspiring Data Scientist & Full-stack Developer building intelligent, human-friendly software.
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto space-y-24">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-10 space-y-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px] -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] -z-10" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-black text-white uppercase tracking-tight leading-none">The Journey</h2>
              <p className="text-slate-400 leading-relaxed text-lg font-medium">
                Hello! I'm {about.name}, a passionate {about.role}. {about.bio}
              </p>
              <p className="text-slate-500 leading-relaxed font-medium">
                I bridge the gap between complex data analysis and intuitive user experiences. My expertise spans from building predictive ML models and RAG-based AI applications to crafting pixel-perfect frontend interfaces.
              </p>
              <p className="text-slate-500 leading-relaxed font-medium">
                Currently, I'm diving deep into Generative AI and Large Language Models, exploring how they can be leveraged to create smarter, more autonomous systems that solve real-world problems.
              </p>
              
              <div className="flex gap-4 pt-4">
                {socialLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-xl glass-card flex items-center justify-center text-slate-400 transition-all ${link.color} hover:scale-110 active:scale-95 border-slate-800`}
                  >
                    <link.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-black text-white uppercase tracking-tight leading-none">Snapshot</h2>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { 
                    title: 'Technical Core', 
                    val: 'Python, React, ML/AI, Deep Learning, SQL', 
                    desc: 'Building robust backends and intelligent frontend experiences.',
                    icon: Cpu,
                    color: 'text-indigo-400',
                    border: 'hover:border-indigo-500/30'
                  },
                  { 
                    title: 'Key Achievement', 
                    val: `9+ Hackathons, 375+ LeetCode, ${about.stats.projects} Projects`, 
                    desc: 'Grand Finalist at Smart India Hackathon 2023.',
                    icon: Trophy,
                    color: 'text-cyan-400',
                    border: 'hover:border-cyan-400/30'
                  },
                  { 
                    title: 'Current Focus', 
                    val: 'Generative AI & LLM Applications (RAG)', 
                    desc: 'Developing intelligent agents and knowledge retrieval systems.',
                    icon: Sparkles,
                    color: 'text-yellow-500',
                    border: 'hover:border-yellow-500/30'
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={item.title}
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    whileHover={{ x: 5 }}
                    className={`p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 ${item.border} transition-all group flex gap-4`}
                  >
                    <div className={`mt-1 p-2 rounded-lg bg-slate-950 border border-slate-800 ${item.color} group-hover:scale-110 transition-transform`}>
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h3 className={`${item.color} font-black uppercase tracking-widest text-[10px] mb-2`}>{item.title}</h3>
                      <p className="text-white font-bold text-sm">{item.val}</p>
                      <p className="text-slate-500 text-[10px] mt-2 font-medium">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-10 border-t border-slate-800/50">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-indigo-400 font-black uppercase tracking-widest text-[10px]">Location</h3>
                <p className="text-white font-bold">{about.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-cyan-400 font-black uppercase tracking-widest text-[10px]">Email</h3>
                <p className="text-white font-bold break-all">priyanshushakya373@gmail.com</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* New Section: Work Approach */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">My Work <span className="text-indigo-500">Approach</span></h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto">How I turn complex problems into functional, high-performance solutions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Data First', desc: 'Every project starts with a deep dive into data—cleaning, exploring, and identifying patterns that drive decisions.', icon: Award, color: 'indigo' },
              { title: 'Scalable Architecture', desc: 'Building with the future in mind, using modern stacks like FastAPI, React, and robust ML pipelines.', icon: Rocket, color: 'cyan' },
              { title: 'Human Centric', desc: 'AI is powerful, but only if it is usable. I focus on intuitive UX and clear communication between human and machine.', icon: BookOpen, color: 'yellow' }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 group hover:border-indigo-500/30 transition-all text-center"
              >
                <div className={`w-14 h-14 rounded-2xl bg-${item.color}-500/10 flex items-center justify-center text-${item.color}-400 mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* New Section: Values & Soft Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Core <span className="text-cyan-400">Values</span></h2>
            <div className="space-y-6">
              {[
                { title: 'Continuous Learning', desc: 'The tech landscape changes daily; I stay ahead by constantly upskilling in LLMs and AI research.' },
                { title: 'Problem Ownership', desc: 'I don’t just write code; I take full responsibility for the solution and its impact on the user.' },
                { title: 'Radical Transparency', desc: 'Clear communication and honesty are the foundation of every successful collaboration.' }
              ].map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center text-cyan-400 font-black">
                    0{i + 1}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-white font-bold uppercase tracking-widest text-sm">{value.title}</h3>
                    <p className="text-slate-500 text-sm font-medium">{value.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="glass-card p-10 space-y-8">
            <h3 className="text-2xl font-black text-white uppercase tracking-tight">Professional Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {portfolioData.skills.professionalSoftSkills.map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 text-xs font-bold uppercase tracking-widest hover:border-indigo-500/50 hover:text-white transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -5 }}
            className="group relative glass-card p-8 border-l-4 border-l-yellow-500/50 overflow-hidden"
          >
            <h3 className="font-black uppercase tracking-[0.2em] text-[10px] mb-6 flex items-center gap-3 text-yellow-500">
              <Code2 size={18} />
              Problem Solving
            </h3>
            <div className="flex items-end gap-3">
              <span className="text-5xl font-black text-white">{about.stats.leetcode}</span>
              <span className="text-slate-500 mb-1 font-black uppercase tracking-widest text-[10px]">LeetCode</span>
            </div>
            <p className="text-slate-500 text-xs mt-4 font-bold uppercase tracking-tight">
              Consistent problem solver on LeetCode and GeeksforGeeks.
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </motion.div>

          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -5 }}
            className="group relative glass-card p-8 border-l-4 border-l-indigo-500/50 overflow-hidden"
          >
            <h3 className="font-black uppercase tracking-[0.2em] text-[10px] mb-6 flex items-center gap-3 text-indigo-500">
              <Globe size={18} />
              Projects
            </h3>
            <div className="flex items-end gap-3">
              <span className="text-5xl font-black text-white">{about.stats.projects}</span>
              <span className="text-slate-500 mb-1 font-black uppercase tracking-widest text-[10px]">Shipped</span>
            </div>
            <p className="text-slate-500 text-xs mt-4 font-bold uppercase tracking-tight">
              End-to-end applications from design to deployment.
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
