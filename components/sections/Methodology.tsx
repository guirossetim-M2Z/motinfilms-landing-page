'use client';

import { motion } from 'framer-motion';
import { BrainCircuit, FileText, GalleryVerticalEnd, Video, Film } from 'lucide-react';
import CinematicText from '../ui/CinematicText';

const methodologySteps = [
  {
    title: 'Planejamento Estratégico',
    subtitle: 'STEP 01 - BRIEFING',
    description: 'Em uma reunião de briefing, mergulhamos no seu negócio para entender suas necessidades e criar filmes que atendam aos seus objetivos de conversão.',
    icon: <BrainCircuit className="w-6 h-6" />,
  },
  {
    title: 'Roteiro Persuasivo',
    subtitle: 'STEP 02 - SCRIPT',
    description: 'Nosso time especializado cria roteiros que não apenas contam sua história, mas tornam sua mensagem clara, impactante e focada em resultados.',
    icon: <FileText className="w-6 h-6" />,
  },
  {
    title: 'Storyboard Detalhado',
    subtitle: 'STEP 03 - PRE-VISUALIZATION',
    description: 'Antes da filmagem, desenhamos um storyboard detalhado, planejando meticulosamente cada cena para garantir uma narrativa coerente.',
    icon: <GalleryVerticalEnd className="w-6 h-6" />,
  },
  {
    title: 'Captação High-End',
    subtitle: 'STEP 04 - SHOOTING',
    description: 'Utilizamos movimentos de câmera inovadores, iluminação cinematográfica e drones para capturas aéreas impressionantes.',
    icon: <Video className="w-6 h-6" />,
  },
  {
    title: 'Edição & Finalização',
    subtitle: 'STEP 05 - POST-PRODUCTION',
    description: 'Color grading, sound design e cortes rítmicos. Nossas técnicas de pós-produção elevam a qualidade e dão a "cara de cinema" ao projeto.',
    icon: <Film className="w-6 h-6" />,
  },
];

export function Methodology() {
  return (
    <section className="relative bg-[#050505] text-white overflow-hidden border-t border-white/5 py-24 md:py-32">
      {/* Background Layers */}
      <div className="hidden md:flex absolute left-0 top-0 bottom-0 w-12 bg-[#0a0a0a] border-r border-white/10 flex-col justify-between py-2 z-10 pointer-events-none">
           {[...Array(30)].map((_, i) => <div key={i} className="w-4 h-6 mx-auto bg-black rounded-sm opacity-50"></div>)}
      </div>
      <div className="hidden md:flex absolute right-0 top-0 bottom-0 w-12 bg-[#0a0a0a] border-l border-white/10 flex-col justify-between py-2 z-10 pointer-events-none">
           {[...Array(30)].map((_, i) => <div key={i} className="w-4 h-6 mx-auto bg-black rounded-sm opacity-50"></div>)}
      </div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none mix-blend-overlay"></div>

      {/* CONTAINER PADRONIZADO (max-w-7xl) */}
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        
        {/* Header Methodology */}
        <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-2 mb-4"
            >
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span className="font-mono text-xs text-red-400 tracking-[0.3em] uppercase">Workflow</span>
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                NOSSA <CinematicText text="METODOLOGIA" className="text-white" />
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed">
                Você traz a ideia e nós executamos. Cuidamos de cada detalhe para que você se concentre no que importa: <span className="text-white font-medium">o crescimento do seu negócio.</span>
            </p>
        </div>

        {/* Vertical Timeline - Conteúdo Interno mantido em max-w-4xl para leitura */}
        <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white/10 to-transparent md:-translate-x-1/2 h-full z-0"></div>

            <div className="flex flex-col gap-12 md:gap-20 relative z-10">
                {methodologySteps.map((step, idx) => {
                    const isEven = idx % 2 === 0;
                    return (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={`flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''} gap-8 md:gap-0 group`}
                        >
                            <div className={`flex-1 w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                                <span className="font-mono text-[10px] text-red-500 tracking-widest uppercase mb-2 block">
                                    {step.subtitle}
                                </span>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-14 h-14 flex items-center justify-center">
                                <div className="relative w-12 h-12 bg-[#0a0a0a] border border-white/20 rounded-full flex items-center justify-center group-hover:border-red-500 group-hover:shadow-[0_0_15px_rgba(239,68,68,0.4)] transition-all duration-300 z-10">
                                    <div className="text-gray-300 group-hover:text-white transition-colors">
                                        {step.icon}
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:block md:w-1/2"></div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
      </div>
    </section>
  );
}