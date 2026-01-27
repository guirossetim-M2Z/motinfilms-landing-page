'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, ArrowRight, AlertCircle, Play, Sparkles, Zap, Aperture } from 'lucide-react';
import { clsx } from 'clsx';
import CinematicText from '../ui/CinematicText';
import { triggerRdStationPopup } from '@/utils/RDStation';

const ViewfinderCorners = () => (
  <>
    <div className="absolute top-0 left-0 w-3 h-3 md:w-4 md:h-4 border-l-2 border-t-2 border-white/30" />
    <div className="absolute top-0 right-0 w-3 h-3 md:w-4 md:h-4 border-r-2 border-t-2 border-white/30" />
    <div className="absolute bottom-0 left-0 w-3 h-3 md:w-4 md:h-4 border-l-2 border-b-2 border-white/30" />
    <div className="absolute bottom-0 right-0 w-3 h-3 md:w-4 md:h-4 border-r-2 border-b-2 border-white/30" />
  </>
);

export function Features() {
  const painPoints = [
    {
      title: 'COMUNICAÇÃO_AMADORA',
      description: 'Vídeos sem direção clara afastam clientes. O público percebe a falta de acabamento como falta de credibilidade da marca.',
      icon: <AlertCircle className="w-6 h-6 md:w-8 md:h-8 text-red-500" />,
      cta: 'CORRIGIR ROTEIRO',
      event: 'click',
      category: 'Pain Points',
      label: 'Diferenciacao',
    },
    {
      title: 'OPORTUNIDADES_PERDIDAS',
      description: 'Conteúdo genérico vira paisagem. Sem retenção visual, seus leads escorrem pelos dedos antes mesmo do CTA final.',
      icon: <Zap className="w-6 h-6 md:w-8 md:h-8 text-yellow-500" />,
      cta: 'CRIAR AUTENTICIDADE',
      event: 'click',
      category: 'Pain Points',
      label: 'Posicionamento',
    },
  ];

  const solutions = [
    {
      title: 'Roteiro Estratégico',
      subtitle: 'SCENE 01 - CONCEPT',
      description: 'Não filmamos apenas, contamos histórias. Criamos narrativas que conectam com sua audiência e impulsionam seus objetivos de negócio.',
      icon: <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    },
    {
      title: 'Captação Dinâmica',
      subtitle: 'SCENE 02 - PRODUCTION',
      description: 'Tecnologia de ponta (Cinema Line) e iluminação narrativa para capturar cada momento com impacto visual de Hollywood.',
      icon: <Aperture className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    },
    {
      title: 'Edição High-End',
      subtitle: 'SCENE 03 - POST-PROD',
      description: 'Color grading, sound design imersivo e cortes rítmicos. Transformamos material bruto em obra de arte persuasiva.',
      icon: <Play className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    },
  ];

  const [currentSolutionIndex, setCurrentSolutionIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentSolutionIndex((prevIndex) => (prevIndex + 1) % solutions.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentSolutionIndex((prevIndex) =>
      prevIndex === 0 ? solutions.length - 1 : prevIndex - 1
    );
  };

  const slideVariants = {
    enter: (direction: number) => ({ x: direction > 0 ? 50 : -50, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (direction: number) => ({ x: direction < 0 ? 50 : -50, opacity: 0, scale: 0.95 }),
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center py-16 md:py-24 bg-[#050505] text-gray-100 overflow-hidden">
      
      {/* --- CINEMATIC BACKGROUND LAYERS --- */}
      <div className="hidden md:flex absolute left-0 top-0 bottom-0 w-12 bg-[#0a0a0a] border-r border-white/10 flex-col justify-between py-2 z-10 pointer-events-none">
           {[...Array(30)].map((_, i) => <div key={i} className="w-4 h-6 mx-auto bg-black rounded-sm opacity-50"></div>)}
      </div>
      <div className="hidden md:flex absolute right-0 top-0 bottom-0 w-12 bg-[#0a0a0a] border-l border-white/10 flex-col justify-between py-2 z-10 pointer-events-none">
           {[...Array(30)].map((_, i) => <div key={i} className="w-4 h-6 mx-auto bg-black rounded-sm opacity-50"></div>)}
      </div>
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-overlay z-10"></div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.9)] z-10"></div>

      {/* CONTAINER PADRONIZADO (max-w-7xl px-4 md:px-8) */}
      <div className="container mx-auto max-w-7xl relative z-20 px-4 md:px-8">
        
        {/* --- HEADER: PAIN POINTS --- */}
        <div className="mb-20 md:mb-32">
            <div className="flex items-center gap-4 mb-6 md:mb-8 opacity-70">
                <div className="h-[1px] w-8 md:w-12 bg-gray-500"></div>
                <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] text-gray-400 uppercase">Input Log: Market Challenges</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {painPoints.map((point, idx) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative bg-white/5 border border-white/10 p-6 md:p-8 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500 flex flex-col h-full"
                >
                  <ViewfinderCorners />
                  <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-black/40 border border-white/10 rounded-full shrink-0">
                          {point.icon}
                      </div>
                      <span className="font-mono text-[9px] md:text-[10px] text-red-500/70 border border-red-900/30 px-2 py-1 rounded bg-red-900/10 whitespace-nowrap ml-2">
                          LOG_0{idx + 1}
                      </span>
                  </div>
                  <h3 className="font-mono text-lg md:text-xl text-white mb-3 tracking-tight group-hover:text-red-400 transition-colors break-words">
                      {point.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 border-l-2 border-gray-700 pl-4 flex-grow">
                      {point.description}
                  </p>
                  <div className="mt-auto">
                    <Button
                        variant="ghost"
                        className="w-full border border-white/20 hover:bg-white text-white hover:text-black font-mono text-xs uppercase tracking-widest py-3"
                        data-nt-ut-event={point.event}
                        data-nt-ut-category={point.category}
                        onClick={triggerRdStationPopup}
                    >
                        {point.cta}
                    </Button>
                  </div>
                </motion.div>
            ))}
            </div>
        </div>

        {/* --- TRANSITION TITLE --- */}
        <div className="text-center mb-16 relative px-2">
             <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-50"></div>
             <span className="bg-[#050505] px-4 md:px-6 relative z-10 inline-block">
                <span className="text-2xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white block md:inline mb-2 md:mb-0">
                    COMO A MOTIN
                </span>
                <span className="block md:inline md:ml-4 text-2xl md:text-5xl lg:text-6xl">
                    <CinematicText text="TRANSFORMA O CAOS" speed="fast" />
                </span>
             </span>
        </div>

        {/* --- SOLUTIONS CAROUSEL (MONITOR STYLE) --- */}
        <div className="relative">
          <div className="absolute -top-8 md:-top-6 left-0 flex gap-3 md:gap-4 px-2">
            <div className="flex items-center gap-2">
               <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div>
               <span className="font-mono text-[9px] md:text-[10px] text-red-500 tracking-widest">REC</span>
            </div>
            <span className="font-mono text-[9px] md:text-[10px] text-gray-500 hidden md:inline">ISO 800</span>
            <span className="font-mono text-[9px] md:text-[10px] text-gray-500">4K RAW</span>
          </div>

          <div className="border-y border-white/20 bg-black/40 backdrop-blur-md relative overflow-hidden min-h-[400px] md:h-[450px] flex items-center justify-center">
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <div className="w-[1px] h-full bg-white"></div>
                <div className="h-[1px] w-full bg-white absolute"></div>
             </div>

            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentSolutionIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="w-full px-12 md:px-24 text-center relative z-20 flex flex-col items-center justify-center h-full py-8"
              >
                <div className="inline-flex items-center justify-center p-4 rounded-full border border-white/10 bg-white/5 mb-6 backdrop-blur-xl ring-1 ring-white/20 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                  {solutions[currentSolutionIndex].icon}
                </div>
                <p className="font-mono text-[10px] md:text-xs text-blue-400 mb-3 tracking-[0.2em] uppercase">
                    {solutions[currentSolutionIndex].subtitle}
                </p>
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6 tracking-wide">
                    {solutions[currentSolutionIndex].title}
                </h3>
                <p className="text-sm md:text-lg text-gray-300 font-light leading-relaxed max-w-xl mx-auto">
                    {solutions[currentSolutionIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>

            <button onClick={handlePrev} className="absolute left-0 top-0 bottom-0 w-12 md:w-20 flex items-center justify-center text-white/30 hover:text-white hover:bg-gradient-to-r hover:from-black/50 hover:to-transparent transition-all z-30 group" aria-label="Previous">
                <ArrowLeft className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
            </button>
            <button onClick={handleNext} className="absolute right-0 top-0 bottom-0 w-12 md:w-20 flex items-center justify-center text-white/30 hover:text-white hover:bg-gradient-to-l hover:from-black/50 hover:to-transparent transition-all z-30 group" aria-label="Next">
                <ArrowRight className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          <div className="flex justify-center items-center gap-1 mt-6">
            {solutions.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentSolutionIndex ? 1 : -1);
                  setCurrentSolutionIndex(idx);
                }}
                className={clsx(
                  'h-1 transition-all duration-300 rounded-full',
                  currentSolutionIndex === idx ? 'w-8 md:w-12 bg-white shadow-[0_0_10px_white]' : 'w-2 md:w-4 bg-gray-700 hover:bg-gray-600'
                )}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}