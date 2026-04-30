import { Code2, Rocket, Brain, Cpu, Database, Sparkles, Terminal } from 'lucide-react';

export default function Background() {
  const icons = [Code2, Rocket, Brain, Cpu, Database, Sparkles, Terminal];

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

      {/* Static Glowing Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/20 rounded-full blur-[120px]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/15 rounded-full blur-[100px]" />

      {/* Static Binary Bits (Hacker Style) */}
      <div className="absolute inset-0 opacity-20 font-mono text-[10px] text-indigo-500/40">
        {[...Array(15)].map((_, i) => (
          <div
            key={`bit-${i}`}
            className="absolute"
            style={{ 
              left: (i * 7) + '%', 
              top: (i * 13) % 100 + '%',
            }}
          >
            {Math.random() > 0.5 ? '01' : '10'}
          </div>
        ))}
      </div>

      {/* Static Developer Icons */}
      <div className="absolute inset-0 opacity-20">
        {icons.map((Icon, i) => (
          <div
            key={i}
            className="absolute"
            style={{ 
              left: (i * 15 + 5) + '%', 
              top: (i * 25 + 10) % 100 + '%',
              transform: `rotate(${i * 45}deg) scale(0.7)`
            }}
          >
            <Icon size={40} className="text-indigo-500/30" />
          </div>
        ))}
      </div>
    </div>
  );
}
