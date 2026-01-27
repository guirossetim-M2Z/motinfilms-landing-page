'use client';

import { motion } from 'framer-motion';
import { Monitor, Smartphone, Clock, Layers, CheckCircle2, Scan } from 'lucide-react';
import CinematicText from '../ui/CinematicText';

export function BonusFormats() {
  const formats = [
    {
      title: 'Filme Comercial',
      type: 'VERSÃO COMPACTA',
      description: 'Versão compacta do filme principal para uso em apresentações, feiras, eventos e exibições na televisão. Com apelo comercial, destaca os pontos-chave de forma clara.',
      duration: '30 SEGUNDOS',
      ratios: ['Wide (16:9)', 'Vertical (9:16)'],
      icon: <Monitor className="w-6 h-6" />,
      highlight: 'APRESENTAÇÕES & TV'
    },
    {
      title: 'Filme de Performance',
      type: 'ADS & TRAFFIC',
      description: 'Compactos e altamente eficazes, ideais para anúncios e campanhas pagas. Com mensagens diretas e chamadas comerciais projetadas para capturar a atenção rápida.',
      duration: '15 SEGUNDOS',
      ratios: ['Wide (16:9)', 'Vertical (9:16)'],
      icon: <Smartphone className="w-6 h-6" />,
      highlight: 'ANÚNCIOS PAGOS'
    }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-[#050505] text-white overflow-hidden border-t border-white/5">
      
      {/* Background Layers */}
      <div className="hidden md:flex absolute left-0 top-0 bottom-0 w-12 bg-[#0a0a0a] border-r border-white/10 flex-col justify-between py-2 z-10 pointer-events-none">
           {[...Array(30)].map((_, i) => <div key={i} className="w-4 h-6 mx-auto bg-black rounded-sm opacity-50"></div>)}
      </div>
      <div className="hidden md:flex absolute right-0 top-0 bottom-0 w-12 bg-[#0a0a0a] border-l border-white/10 flex-col justify-between py-2 z-10 pointer-events-none">
           {[...Array(30)].map((_, i) => <div key={i} className="w-4 h-6 mx-auto bg-black rounded-sm opacity-50"></div>)}
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-red-900/10 via-[#050505] to-[#050505] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

      {/* CONTAINER PADRONIZADO */}
      <div className="container mx-auto max-w-7xl px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-12 mb-16 md:mb-20 items-start">
            <div className="flex-1">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 mb-6"
                >
                    <div className="px-3 py-1 rounded bg-green-500/10 border border-green-500/30 text-green-400 font-mono text-[10px] tracking-widest uppercase flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3" />
                        Bonus Included
                    </div>
                </motion.div>

                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
                >
                    AMPLIE O SEU <br />
                    <CinematicText text="ALCANCE" className="text-white" />
                </motion.h2>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="inline-block"
                >
                    <span className="text-xl md:text-2xl font-light text-gray-300">
                        Versões compactas <span className="text-red-500 font-bold bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">SEM CUSTOS EXTRAS</span>
                    </span>
                </motion.div>
            </div>

            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex-1 text-gray-400 leading-relaxed text-sm md:text-base border-l border-white/10 pl-6 pt-2"
            >
                A Motin Films é a única produtora de vídeos a fornecer versões compactas dos filmes principais contratados sem custos adicionais.
            </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {formats.map((item, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="group relative bg-[#0a0a0a] border border-white/10 hover:border-red-500/40 p-1 transition-all duration-500 rounded-sm overflow-hidden"
                >
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                    <div className="relative bg-[#050505] p-8 h-full flex flex-col">
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-white/5 rounded-full text-gray-300 group-hover:text-red-500 group-hover:bg-red-500/10 transition-colors">
                                {item.icon}
                            </div>
                            <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest border border-white/10 px-2 py-1 rounded">
                                {item.type}
                            </span>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-50 transition-colors">
                            {item.title}
                        </h3>
                        <p className="text-red-400 font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                            <Scan className="w-3 h-3" />
                            {item.highlight}
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed mb-8 border-b border-white/5 pb-8 flex-grow">
                            {item.description}
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1">
                                <span className="flex items-center gap-2 text-[10px] text-gray-500 font-mono uppercase tracking-wider">
                                    <Clock className="w-3 h-3" /> Duration
                                </span>
                                <span className="text-white font-bold text-sm">{item.duration}</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="flex items-center gap-2 text-[10px] text-gray-500 font-mono uppercase tracking-wider">
                                    <Layers className="w-3 h-3" /> Formats
                                </span>
                                <div className="flex gap-2">
                                    {item.ratios.map((ratio, rIdx) => (
                                        <span key={rIdx} className="text-xs text-gray-300 bg-white/5 px-2 py-0.5 rounded border border-white/10 group-hover:border-white/30 transition-colors">
                                            {ratio}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}