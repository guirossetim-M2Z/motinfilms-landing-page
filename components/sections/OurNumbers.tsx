'use client';

import { motion } from 'framer-motion';
import { Calendar, Users, Film, CheckCircle } from 'lucide-react';
import CinematicText from '../ui/CinematicText';

const ViewfinderCorners = () => (
  <>
    <div className="absolute top-0 left-0 w-3 h-3 md:w-4 md:h-4 border-l-2 border-t-2 border-white/30" />
    <div className="absolute top-0 right-0 w-3 h-3 md:w-4 md:h-4 border-r-2 border-t-2 border-white/30" />
    <div className="absolute bottom-0 left-0 w-3 h-3 md:w-4 md:h-4 border-l-2 border-b-2 border-white/30" />
    <div className="absolute bottom-0 right-0 w-3 h-3 md:w-4 md:h-4 border-r-2 border-b-2 border-white/30" />
  </>
);

export function OurNumbers() {
  const stats = [
    { value: '+10', label: 'ANOS DE ATUAÇÃO', sub: 'MARKET PRESENCE', icon: <Calendar className="w-5 h-5 text-gray-500" /> },
    { value: '+300', label: 'CLIENTES SATISFEITOS', sub: 'PARTNERSHIPS', icon: <Users className="w-5 h-5 text-gray-500" /> },
    { value: '+500', label: 'FILMES REGISTRADOS', sub: 'DATABASE LOG', icon: <Film className="w-5 h-5 text-gray-500" /> },
    { value: '+2k', label: 'PROJETOS ENTREGUES', sub: 'SUCCESS RATE', icon: <CheckCircle className="w-5 h-5 text-gray-500" /> },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-[#050505] text-gray-100 overflow-hidden border-t border-white/5">
      {/* Backgrounds */}
      <div className="hidden md:flex absolute left-0 top-0 bottom-0 w-12 bg-[#0a0a0a] border-r border-white/10 flex-col justify-between py-2 z-10 pointer-events-none">
           {[...Array(20)].map((_, i) => <div key={i} className="w-4 h-6 mx-auto bg-black rounded-sm opacity-50"></div>)}
      </div>
      <div className="hidden md:flex absolute right-0 top-0 bottom-0 w-12 bg-[#0a0a0a] border-l border-white/10 flex-col justify-between py-2 z-10 pointer-events-none">
           {[...Array(20)].map((_, i) => <div key={i} className="w-4 h-6 mx-auto bg-black rounded-sm opacity-50"></div>)}
      </div>
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-overlay z-10"></div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.9)] z-10"></div>

      {/* CONTAINER PADRONIZADO (max-w-7xl) */}
      <div className="container mx-auto max-w-7xl relative z-20 px-4 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-24">
            <div className="flex items-center gap-3 mb-4 opacity-60">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div>
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-gray-400">System Metrics</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
               IMPACTO EM <CinematicText text="NÚMEROS" className="text-white" />
            </h2>
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-red-500 to-transparent mt-6 opacity-70"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -z-10"></div>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-black/40 border border-white/10 p-8 backdrop-blur-sm hover:bg-white/5 transition-colors duration-500 flex flex-col items-center justify-center text-center min-h-[220px]"
            >
              <ViewfinderCorners />
              <div className="absolute top-4 right-4 opacity-50 group-hover:opacity-100 transition-opacity">{stat.icon}</div>
              <span className="font-mono text-[9px] text-gray-500 tracking-[0.2em] uppercase mb-2 block border px-2 py-1 rounded border-white/10 bg-white/5">
                 {stat.sub}
              </span>
              <h3 className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tighter group-hover:text-red-500 transition-colors duration-300">
                {stat.value}
              </h3>
              <p className="font-mono text-xs md:text-sm text-gray-400 uppercase tracking-widest border-t border-gray-800 pt-4 mt-2 w-full max-w-[120px]">
                {stat.label}
              </p>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-red-500 group-hover:w-1/2 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}