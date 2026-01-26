'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Check, Clapperboard, Star } from 'lucide-react';
import { TrackView } from 'ninetwo-user-tracking';
import CinematicText from '../ui/CinematicText';
import { triggerRdStationPopup } from '@/utils/RDStation';

export function CallToAction() {
  const ctaItems = [
    { text: 'ANÁLISE DE PONTO CEGO', code: 'SCENE_01' },
    { text: 'ROTEIRO DE DIFERENCIAÇÃO', code: 'SCENE_02' },
    { text: 'PLANO DE AÇÃO IMEDIATO', code: 'SCENE_03' },
  ];

  return (
    <section className="relative py-16 md:py-24 px-4 bg-[#020202] text-white overflow-hidden flex flex-col items-center justify-center min-h-[500px] md:min-h-[600px]">

      {/* Faixas Laterais: HIDDEN no Mobile */}
      <div className="hidden md:flex absolute left-0 top-0 bottom-0 w-12 bg-[#0a0a0a] border-r border-white/10 flex-col justify-between py-2 z-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="w-4 h-6 mx-auto bg-black rounded-sm opacity-50"></div>
        ))}
      </div>
      <div className="hidden md:flex absolute right-0 top-0 bottom-0 w-12 bg-[#0a0a0a] border-l border-white/10 flex-col justify-between py-2 z-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="w-4 h-6 mx-auto bg-black rounded-sm opacity-50"></div>
        ))}
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-gradient-to-b from-white/5 via-transparent to-transparent blur-3xl pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

      <div className="container mx-auto max-w-4xl relative z-20 text-center">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 mb-6 md:mb-8 border border-white/20 px-3 py-1 md:px-4 rounded-full bg-white/5 backdrop-blur-sm"
        >
          <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
          <span className="font-mono text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-gray-300">
            OPORTUNIDADE EXCLUSIVA
          </span>
        </motion.div>

        {/* Título Responsivo */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-6xl font-bold mb-6 leading-tight"
        >
          PRONTO PARA O <br className="hidden md:block" />
          <span className="relative inline-block px-2 mx-2 mt-2 md:mt-0">
            <div className="absolute inset-0 bg-white/10 -skew-x-12 blur-sm"></div>
            {/* Forçando speed='fast' no mobile se necessário, ou mantendo medium */}
            <CinematicText text="CLOSE-UP" speed="medium" />
          </span>
          <span className="block md:inline mt-2 md:mt-0">DA SUA MARCA?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-xl mb-8 md:mb-12 max-w-2xl mx-auto text-gray-400 font-light px-2"
        >
          Receba um <span className="text-white font-semibold border-b border-white/30">Diagnóstico de Posicionamento</span> gratuito.
        </motion.p>

        <div className="relative max-w-xl mx-auto mb-8 md:mb-12">
          <div className="absolute inset-0 bg-white/5 blur-xl rounded-full"></div>

          <motion.div
            className="relative bg-black/40 border border-white/10 backdrop-blur-md p-6 md:p-8 rounded-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 md:w-16 h-1 bg-gray-500/50 rounded-b-md"></div>

            <div className="space-y-4 md:space-y-6 text-left">
              {ctaItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + (index * 0.1) }}
                  className="flex items-start gap-3 md:gap-4 group"
                >
                  <div className="mt-1 w-5 h-5 min-w-[20px] rounded border border-white/30 flex items-center justify-center bg-white/5 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                    <Check className="w-3 h-3" />
                  </div>
                  <div>
                    <span className="block font-mono text-[9px] md:text-[10px] text-gray-500 mb-0.5 tracking-wider">{item.code}</span>
                    <span className="text-sm md:text-lg font-medium text-gray-200 group-hover:text-white transition-colors">{item.text}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: 'spring' }}
          className="relative group inline-block w-full md:w-auto px-4 md:px-0"
        >
          <div className="absolute inset-0 bg-white rounded-sm blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

          <Button
            size="lg"
            data-nt-ut-event='click'
            data-nt-ut-category='Offer Section'
            data-nt-ut-label='Pedir Diagnostico Gratuito'
            className="relative bg-white text-black hover:bg-gray-200 hover:text-black h-14 md:h-16 w-full md:w-auto px-6 md:px-10 text-sm md:text-lg tracking-widest font-bold uppercase rounded-sm border-2 border-transparent hover:border-black/10 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center"
            onClick={triggerRdStationPopup}
          >
            <Clapperboard className="w-4 h-4 md:w-5 md:h-5 mr-3 group-hover:animate-pulse" />
            Solicitar Diagnóstico
          </Button>

          <p className="mt-4 font-mono text-[9px] md:text-[10px] text-gray-500 uppercase tracking-widest opacity-60">
            Vagas limitadas para este mês
          </p>
        </motion.div>

      </div>
    </section>
  );
}