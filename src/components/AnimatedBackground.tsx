import { motion } from 'framer-motion';
import { Code2, Rocket, Brain, Cpu, Database, Sparkles, Terminal } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function AnimatedBackground() {
  const icons = [Code2, Rocket, Brain, Cpu, Database, Sparkles, Terminal];
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-slate-950">
      {/* Hacker Style Grid */}
      <div 
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #4f46e5 1.5px, transparent 1.5px),
            linear-gradient(to bottom, #4f46e5 1.5px, transparent 1.5px)
          `,
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, #000 70%, transparent 100%)'
        }}
      />

      {/* Animated Scanline Effect */}
      <motion.div 
        className="absolute inset-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent z-10"
        animate={{
          top: ['-10%', '110%']
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Glowing Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/30 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[100px]" />

      {/* Floating Binary Bits (Hacker Style) */}
      <div className="absolute inset-0 opacity-40 font-mono text-[10px] text-indigo-500/60">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`bit-${i}`}
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: '-10%',
              opacity: 0 
            }}
            animate={{ 
              y: '110%',
              opacity: [0, 1, 1, 0]
            }}
            transition={{ 
              duration: 15 + Math.random() * 20, 
              repeat: Infinity, 
              delay: Math.random() * 20,
              ease: "linear" 
            }}
            className="absolute"
          >
            {Math.random() > 0.5 ? '01' : '10'}
          </motion.div>
        ))}
      </div>

      {/* Floating Developer Icons */}
      <div className="absolute inset-0 opacity-30">
        {icons.map((Icon, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: Math.random() * 100 + '%',
              opacity: 0,
              scale: 0.5
            }}
            animate={{ 
              x: [
                Math.random() * 100 + '%', 
                Math.random() * 100 + '%', 
                Math.random() * 100 + '%'
              ],
              y: [
                Math.random() * 100 + '%', 
                Math.random() * 100 + '%', 
                Math.random() * 100 + '%'
              ],
              opacity: [0.1, 0.4, 0.1],
              rotate: [0, 180, 360],
              scale: [0.5, 0.8, 0.5]
            }}
            transition={{ 
              duration: 25 + Math.random() * 15, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute text-indigo-400/40"
          >
            <Icon size={30 + Math.random() * 30} />
          </motion.div>
        ))}
      </div>

      {/* Pinging dots */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-indigo-400 rounded-full blur-sm animate-ping" />
      <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-cyan-400 rounded-full blur-sm animate-ping" style={{ animationDelay: '1s' }} />
    </div>
  );
}
