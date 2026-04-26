import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Rocket, GraduationCap, Award, MapPin, Home as HomeIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Journey() {
  const { experience, education, certifications } = portfolioData.journey;

  return (
    <div className="max-w-7xl mx-auto px-6 pt-12 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8 space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] border border-indigo-500/20 mb-4">
          Milestones
        </div>
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
          Experience & <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">Education</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto font-medium">
          The trajectory of my professional growth. From academic foundations to 
          real-world impact in tech.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Experience Section */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
              <Rocket size={24} />
            </div>
            <h3 className="text-2xl font-black text-white uppercase tracking-tight">Work Experience</h3>
          </div>

          <div className="space-y-6 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-800">
            {experience.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-12 group"
              >
                <div className="absolute left-3 top-2 w-2.5 h-2.5 rounded-full bg-indigo-500 ring-4 ring-slate-950 group-hover:scale-125 transition-transform" />
                <div className="glass-card p-6 hover:border-indigo-500/30 transition-all hover:bg-indigo-500/5">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h4 className="text-xl font-black text-white uppercase tracking-tight">{exp.role}</h4>
                    <span className="px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-400 text-[10px] font-black uppercase tracking-widest">
                      {exp.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                    <span className="flex items-center gap-1">
                      <Rocket size={12} className="text-indigo-400" /> {exp.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} className="text-indigo-400" /> {exp.location}
                    </span>
                  </div>
                  <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em] font-black">
                    {exp.type}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education & Certifications Section */}
        <div className="space-y-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">Education</h3>
            </div>

            <div className="space-y-6 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-800">
              {education.map((edu, index) => (
                <motion.div
                  key={`${edu.degree}-${index}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-12 group"
                >
                  <div className="absolute left-3 top-2 w-2.5 h-2.5 rounded-full bg-cyan-500 ring-4 ring-slate-950 group-hover:scale-125 transition-transform" />
                  <div className="glass-card p-6 hover:border-cyan-500/30 transition-all hover:bg-cyan-500/5">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="text-xl font-black text-white uppercase tracking-tight">{edu.degree}</h4>
                      <span className="px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 text-[10px] font-black uppercase tracking-widest">
                        {edu.duration}
                      </span>
                    </div>
                    <p className="text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-1">{edu.field}</p>
                    <p className="text-slate-400 text-sm font-bold mb-2">{edu.institution}</p>
                    <div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-slate-900/50 border border-slate-800 text-cyan-400 text-[10px] font-black uppercase tracking-widest">
                      Score: {edu.score}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                <Award size={24} />
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">Certifications</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="glass-card p-4 border-l-4 border-l-emerald-500/50 hover:bg-emerald-500/5 hover:border-emerald-500/30 transition-all group"
                >
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest group-hover:text-emerald-400 transition-colors">{cert}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
