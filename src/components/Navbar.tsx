import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Code2, FolderKanban, Trophy, Mail, Cpu, Gamepad2, Layers } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/about', label: 'About', icon: User },
  { path: '/services', label: 'Services', icon: Briefcase },
  { path: '/tech-stack', label: 'TechStack', icon: Layers },
  { path: '/skills', label: 'Skills', icon: Code2 },
  { path: '/journey', label: 'Journey', icon: Cpu },
  { path: '/projects', label: 'Projects', icon: FolderKanban },
  { path: '/hackathons', label: 'Hackathons', icon: Trophy },
  { path: '/puzzle', label: 'Puzzle', icon: Gamepad2 },
  { path: '/contact', label: 'Contact', icon: Mail },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed md:top-6 md:bottom-auto md:left-1/2 md:-translate-x-1/2 md:translate-y-0 top-1/2 -translate-y-1/2 left-4 z-50 px-4 md:w-full max-w-fit">
      <div 
        className="flex md:flex-row flex-col items-center gap-1 p-2 glass-card shadow-2xl overflow-y-auto md:overflow-x-auto no-scrollbar max-h-[80vh] md:max-h-none"
      >
        <Link 
          to="/contact" 
          className="md:order-last order-first flex items-center justify-center px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all hover:scale-105 active:scale-95 whitespace-nowrap mb-2 md:mb-0 md:ml-2"
        >
          Let's Talk
        </Link>

        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <div
              key={item.path}
            >
              <Link
                to={item.path}
                className={cn(
                  "nav-link flex md:flex-col flex-row items-center gap-2 md:gap-1 min-w-[120px] md:min-w-[70px] p-2 md:p-0 relative group",
                  isActive && "text-indigo-400"
                )}
              >
                <Icon 
                  size={18} 
                  className={cn(
                    "transition-all duration-300 group-hover:scale-110",
                    isActive ? "text-indigo-400 drop-shadow-[0_0_8px_rgba(129,140,248,0.5)]" : "text-slate-400 group-hover:text-slate-200"
                  )} 
                />
                <span className={cn(
                  "text-[10px] uppercase tracking-wider font-bold transition-colors duration-300",
                  isActive ? "text-indigo-400" : "text-slate-500 group-hover:text-slate-300"
                )}>
                  {item.label}
                </span>
                {isActive && (
                  <div
                    className="absolute inset-0 bg-indigo-500/10 rounded-xl -z-10 border border-indigo-500/20"
                  />
                )}
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
