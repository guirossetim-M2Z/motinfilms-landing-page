'use client';

import { motion } from 'framer-motion';
import { MapPin, Globe, Navigation } from 'lucide-react';

export function NationalCoverage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#050505] text-white overflow-hidden border-t border-white/5 snap-center">
      
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#1a0505] to-[#050505] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.15)_0%,transparent_60%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ef444408_1px,transparent_1px),linear-gradient(to_bottom,#ef444408_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>
      
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vh] h-[60vh] pointer-events-none opacity-30">
        <motion.div animate={{ scale: [1, 1.4], opacity: [0.4, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }} className="absolute inset-0 border border-red-600/30 rounded-full" />
        <motion.div animate={{ scale: [1, 1.8], opacity: [0.2, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: 1.5 }} className="absolute inset-0 border border-red-600/10 rounded-full" />
      </div>

      {/* CONTAINER PADRONIZADO (max-w-7xl) */}
      <div className="container mx-auto max-w-7xl px-4 md:px-8 relative z-10 py-12">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-3 mb-8 opacity-90">
             <div className="p-2 rounded-full bg-red-950/30 border border-red-500/20 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                <Globe className="w-4 h-4 text-red-500" />
             </div>
             <span className="font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase text-red-200/60">Logistics & Operations</span>
          </motion.div>

          <motion.h2 initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-white drop-shadow-2xl">
            ABRANGÊNCIA <br className="md:hidden" />
            <span className="md:ml-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-red-500 to-red-900">NACIONAL</span>
          </motion.h2>

          <div className="flex items-center justify-center w-full max-w-lg mb-12 opacity-60">
             <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
             <div className="mx-4 font-mono text-[10px] text-red-200/50 flex items-center gap-2">
                <Navigation className="w-3 h-3 text-red-500" />
                <span>BRAZILIAN TERRITORY</span>
             </div>
             <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
          </div>

          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-lg md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mb-12">
            Não importa onde você esteja, nossa equipe percorre 
            <span className="text-red-400 font-medium"> todo o Brasil </span> 
            para garantir que sua produção seja realizada com a 
            <span className="border-b border-red-500/50 pb-1 mx-1 text-white">mais alta qualidade.</span>
          </motion.p>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="flex flex-wrap justify-center gap-6 md:gap-10">
             {['SÃO PAULO', 'RIO DE JANEIRO', 'CURITIBA', 'BRASÍLIA', 'NORDESTE'].map((loc, idx) => (
                <div key={idx} className="flex items-center gap-2 text-gray-500 hover:text-red-400 transition-colors cursor-default duration-300 group">
                   <MapPin className="w-4 h-4 text-red-700 group-hover:text-red-500" />
                   <span className="font-mono text-xs tracking-widest">{loc}</span>
                </div>
             ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}