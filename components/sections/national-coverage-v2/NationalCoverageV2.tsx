'use client';

import { motion, Variants } from 'framer-motion';
import { Radio, Globe, LocateFixed } from 'lucide-react';
import { mapData, mapViewBox } from '@/data/brazilMapData';

// Importação do CSS Module
import styles from './NationalCoverageV2.module.css';

// Configuração de Delays (Escalonados para evitar que todos acendam juntos)
const getRegionDelay = (region: string) => {
    switch(region) {
        case 'NORTE': return 0;
        case 'SUDESTE': return 2.5;
        case 'CENTRO-OESTE': return 5;
        case 'NORDESTE': return 7.5;
        case 'SUL': return 10;
        default: return 0;
    }
};

// TIPAGEM EXPLÍCITA DE VARIANTS
const regionVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0.1 },
  visible: (customDelay: number) => ({
    pathLength: [0, 1, 1, 0], 
    opacity: [0.1, 1, 1, 0.1], 
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      delay: customDelay, 
      repeatDelay: Math.random() * 4 + 8 
    }
  })
};

const hudPoints = [
    { x: 250, y: 200, label: 'Norte' },
    { x: 520, y: 480, label: 'Brasília' },
    { x: 620, y: 650, label: 'São Paulo' },
    { x: 820, y: 250, label: 'Nordeste' },
    { x: 480, y: 800, label: 'Sul' },
];

export function NationalCoverageV2() {
  return (
    <section className="relative py-20 md:py-32 bg-[#050505] text-white overflow-hidden border-t border-white/5 snap-center">
      
      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0f0f0f] to-[#050505] -z-10"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none"></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* --- COLUNA ESQUERDA (TEXTO) --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start text-center md:text-left order-1 md:order-1"
          >
            <div className="flex items-center gap-3 mb-6 px-4 py-1.5 border border-red-900/30 bg-red-950/10 rounded-full backdrop-blur-md">
                <Radio className="w-4 h-4 text-red-500 animate-pulse" />
                <span className="font-mono text-[10px] text-red-400 tracking-[0.3em] uppercase">
                    Logística Nacional
                </span>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                ABRANGÊNCIA <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800 drop-shadow-[0_0_20px_rgba(220,38,38,0.6)]">
                    NACIONAL
                </span>
            </h2>

            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-md mb-10">
                Não importa onde você esteja, nossa equipe percorre <strong className="text-white border-b border-red-500/50">todo o Brasil</strong> para garantir que sua produção seja realizada com a mais alta qualidade.
            </p>

            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                <div className="relative p-5 border border-white/10 bg-[#0a0a0a] overflow-hidden group">
                    <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-white/30"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/30"></div>
                    <Globe className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors mb-3" />
                    <div className="text-3xl font-bold text-white mb-1">26+</div>
                    <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Estados Atendidos</div>
                </div>
                <div className="relative p-5 border border-white/10 bg-[#0a0a0a] overflow-hidden group">
                    <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-white/30"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/30"></div>
                    <LocateFixed className="w-6 h-6 text-red-600 group-hover:text-red-500 transition-colors mb-3 animate-pulse" />
                    <div className="text-3xl font-bold text-white mb-1">100%</div>
                    <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Disponibilidade</div>
                </div>
            </div>
          </motion.div>

          {/* --- COLUNA DIREITA (MAPA) --- */}
          <motion.div 
             className="relative flex items-center justify-center order-2 md:order-2 h-[500px] md:h-[800px] w-full"
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
            <svg 
                viewBox={mapViewBox}
                className={`w-full h-full max-w-[900px] drop-shadow-2xl  ${styles.mapSvg}`}
                style={{ overflow: 'visible' }}
            >
                <defs>
                    <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    
                    <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        {/* ALTERADO: Tons de cinza mais claros para maior visibilidade */}
                        <stop offset="0%" stopColor="#2a2a2a" /> 
                        <stop offset="100%" stopColor="#1a1a1a" /> 
                    </linearGradient>
                </defs>

                {/* CAMADA 1: BASE (Mais clara e visível) */}
                {mapData.map((state) => (
                    <path 
                        key={`base-${state.id}`}
                        d={state.d} 
                        fill="url(#mapGradient)" 
                        stroke="#404040" // Borda um pouco mais clara para definir os estados
                        strokeWidth="0.8" 
                        className={styles.statePath} 
                    />
                ))}

                {/* CAMADA 2: NEON */}
                {mapData.map((state) => (
                    <motion.path 
                        key={`neon-${state.id}`}
                        d={state.d} 
                        fill="transparent" 
                        stroke="#ef4444" 
                        strokeWidth="1" 
                        strokeLinecap="round"
                        filter="url(#neon-glow)"
                        custom={getRegionDelay(state.region)}
                        variants={regionVariants}
                        initial="hidden"
                        animate="visible"
                        style={{ pointerEvents: 'none' }} 
                    />
                ))}

                {/* CAMADA 3: HUD POINTS */}
                {hudPoints.map((point, i) => (
                   <g key={i}>
                       <motion.circle 
                          cx={point.x} 
                          cy={point.y} 
                          r="3" 
                          fill="#fff"
                          initial={{ opacity: 0.2 }}
                          animate={{ opacity: [0.2, 0.8, 0.2] }}
                          transition={{ 
                              duration: 3, 
                              repeat: Infinity, 
                              delay: i * 0.5,
                              ease: "easeInOut" 
                          }}
                       />
                       <text
                           x={point.x + 10}
                           y={point.y + 5}
                           fill="#666"
                           fontSize="12"
                           fontFamily="monospace"
                           className="hidden md:block select-none"
                       >
                           {point.label}
                       </text>
                   </g> 
                ))}
            </svg>

            {/* Live Tracking Label */}
            <div className="absolute top-10 right-10 flex flex-col items-end opacity-70">
                <div className="flex items-center gap-2 text-red-500 mb-1">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping"></div>
                    <span className="text-[10px] font-mono tracking-widest uppercase">Live Tracking</span>
                </div>
                <div className="w-24 h-[1px] bg-gradient-to-l from-red-500/50 to-transparent"></div>
                <div className="text-[9px] font-mono text-gray-500 mt-1">LAT -15.79 | LON -47.88</div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}