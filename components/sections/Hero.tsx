'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export function Hero() {
  const imageUrl = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1920&h=1080&fit=crop";
  const videoUrl = "https://motinfilms.com.br/Showreel.mp4"; // <-- seu video

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 10 } },
  };

  return (
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
          {/* Fallback para navegadores que não suportam video */}
        </video>

        {/* Opcional: overlay sutil para melhorar contraste do texto */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>

      {/* --- Opcional: usar imagem em mobiles para economizar dados ---
      <div className="absolute inset-0 bg-cover bg-center opacity-30 md:block hidden"
           style={{ backgroundImage: `url(${imageUrl})` }} />
      */}

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        <motion.h1 className="text-6xl md:text-8xl font-extrabold text-text leading-tight drop-shadow-lg" variants={itemVariants}>
          <span className="text-accent">Motive</span> sua audiência.
          <br /> Eleve sua <span className="text-accent">marca</span>.
        </motion.h1>
        <motion.p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto" variants={itemVariants}>
          Transformamos sua visão em impacto cinematográfico. Filmes que não apenas mostram, mas comunicam, emocionam e geram resultados reais para o seu negócio.
        </motion.p>
        <motion.div variants={itemVariants}>
          <Button
            size="lg"
            data-nt-ut-event='click'
            data-nt-ut-category='Hero Section'
            data-nt-ut-label='Quero Elevar o Nivel'
          >
            QUERO ELEVAR O NÍVEL
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
