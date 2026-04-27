import { type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import { Github as GitHub, Linkedin as LinkedIn, MessageCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import AnimatedBackground from '../components/AnimatedBackground';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const { about } = portfolioData;

  return (
    <div className="min-h-screen selection:bg-indigo-500/30 relative">
      <AnimatedBackground />
      <main className="pb-32 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      
      <footer className="py-20 border-t border-slate-900 bg-slate-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
                PRIYANSHU.
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Data Scientist & Developer building intelligent, human-friendly software.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">Navigate</h4>
              <ul className="space-y-3">
                {['About', 'Services', 'Tech-Stack', 'Journey', 'Projects', 'Hackathons', 'Puzzle', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link to={`/${item.toLowerCase()}`} className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                      {item.replace('-', ' ')}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">Connect</h4>
              <ul className="space-y-3">
                <li>
                  <a href={`mailto:${portfolioData.contact.email}`} className="text-slate-400 hover:text-indigo-400 transition-colors text-sm break-all">
                    {portfolioData.contact.email}
                  </a>
                </li>
              </ul>
              <div className="flex gap-4">
                <a href={about.links.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white transition-all">
                  <GitHub size={18} />
                </a>
                <a href={about.links.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white transition-all">
                  <LinkedIn size={18} />
                </a>
                <a href={about.links.whatsapp} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white transition-all">
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">Status</h4>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for opportunities
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-xs">
              © 2026 Priyanshu Shakya. All rights reserved.
            </p>
            <p className="text-slate-500 text-xs flex items-center gap-1">
              Crafted with <span className="text-rose-500">❤️</span> using React & Tailwind.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
