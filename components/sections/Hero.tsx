'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import CinematicText from '../ui/CinematicText';
import Image from 'next/image';
import { triggerRdStationPopup } from '@/utils/RDStation';

export function Hero() {
  const videoUrl = "https://motinfilms.com.br/Showreel.mp4"; 

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  return (
    <>
      <style>{`
        .stronger-title {
          line-height: 1.1;
        }
        @media (min-width: 768px) {
           .stronger-title {
              line-height: 90px;
           }
        }
      `}</style>
      <motion.section
        className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden bg-primary"
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        {/* VIDEO BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="w-full h-full object-cover opacity-30 pointer-events-none"
            preload="auto"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        </div>

        {/* CONTAINER PADRONIZADO (max-w-4xl para texto centralizado, mas alinhado com o resto) */}
        <div className="relative z-10 container mx-auto max-w-7xl px-4 md:px-8 flex flex-col items-center">
            <div className="max-w-4xl space-y-8">
              <Image width="200" height="200" src="/images/motin-logo-white.webp" alt="Filmes que comunicam" className="mx-auto w-32 md:w-52" />
              <motion.h1 className="text-5xl md:text-8xl font-extrabold text-text drop-shadow-lg stronger-title">
                Motive sua audiência.
                <br /> Eleve sua <CinematicText text="marca " speed="fast" />
              </motion.h1>
              <motion.p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto" >
                Transformamos sua visão em impacto cinematográfico. Filmes que não apenas mostram, mas comunicam, emocionam e geram resultados reais para o seu negócio.
              </motion.p>
              <motion.div>
                <Button
                  size="lg"
                  data-nt-ut-event='click'
                  data-nt-ut-category='Hero Section'
                  data-nt-ut-label='Quero Elevar o Nivel'
                  onClick={triggerRdStationPopup}
                >
                  QUERO ELEVAR O NÍVEL
                </Button>
              </motion.div>
            </div>
        </div>
      </motion.section>
    </>
  );
}