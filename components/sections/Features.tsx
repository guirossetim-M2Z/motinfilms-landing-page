'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, ArrowRight, Lightbulb, TrendingUp, Sparkle } from 'lucide-react';
import { clsx } from 'clsx'; // For conditional classes

export function Features() {
  const painPoints = [
    {
      title: 'Comunicação Amadora',
      description: 'Vídeos sem direção clara ou qualidade profissional afastam clientes e prejudicam a imagem da sua marca.',
      icon: <Lightbulb className="w-12 h-12 text-accent" />,
      cta: 'QUERO ME DIFERENCIAR DA CONCORRÊNCIA',
      event: 'click',
      category: 'Features Pain Points',
      label: 'Quero me Diferenciar',
    },
    {
      title: 'Oportunidades Perdidas',
      description: 'Conteúdo genérico não engaja, resultando em menos leads, vendas estagnadas e um posicionamento fraco no mercado.',
      icon: <TrendingUp className="w-12 h-12 text-accent" />,
      cta: 'QUERO AUTENTICIDADE E POSICIONAMENTO',
      event: 'click',
      category: 'Features Solutions',
      label: 'Quero Autenticidade e Posicionamento',
    },
  ];

  const solutions = [
    {
      title: 'Roteiro Estratégico',
      description: 'Não filmamos apenas, contamos histórias. Criamos narrativas que conectam com sua audiência e impulsionam seus objetivos de negócio.',
      icon: <Sparkle className="w-12 h-12 text-accent" />,
    },
    {
      title: 'Captação Dinâmica',
      description: 'Utilizamos tecnologia de ponta e técnicas cinematográficas para capturar cada momento com maestria e impacto visual inigualável.',
      icon: <Sparkle className="w-12 h-12 text-accent" />,
    },
    {
      title: 'Edição de Alto Nível',
      description: 'Transformamos as imagens brutas em obras de arte, com ritmo, cor e som que prendem a atenção e evocam a emoção desejada.',
      icon: <Sparkle className="w-12 h-12 text-accent" />,
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
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 10 } },
  };

  return (
    <motion.section
      className="py-20 px-4 bg-primary text-text"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h2 className="text-4xl md:text-5xl font-bold text-center mb-16" variants={itemVariants}>
          <span className="text-accent">Desafios</span> comuns que nossos clientes enfrentam.
        </motion.h2>

        {/* Pain Points Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {painPoints.map((point) => (
            <motion.div
              key={point.title}
              className="glass-panel p-8 flex flex-col items-start space-y-4"
              variants={itemVariants}
            >
              {point.icon}
              <h3 className="text-2xl font-semibold text-text">{point.title}</h3>
              <p className="text-gray-300 flex-grow">{point.description}</p>
              <Button
                variant="secondary"
                data-nt-ut-event={point.event}
                data-nt-ut-category={point.category}
                data-nt-ut-label={point.label}
              >
                {point.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.h2 className="text-4xl md:text-5xl font-bold text-center mt-20 mb-16" variants={itemVariants}>
          Como a <span className="text-accent">Motin Films</span> transforma.
        </motion.h2>

        {/* Solutions Carousel */}
        <div className="relative overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
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
              className="glass-panel p-8 text-center flex flex-col items-center justify-center min-h-[300px]"
            >
              {solutions[currentSolutionIndex].icon}
              <h3 className="text-3xl font-semibold text-text mt-4 mb-2">{solutions[currentSolutionIndex].title}</h3>
              <p className="text-lg text-gray-300 max-w-2xl">{solutions[currentSolutionIndex].description}</p>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/10 p-3 rounded-full text-white hover:bg-white/20 transition-colors z-20"
            aria-label="Previous solution"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/10 p-3 rounded-full text-white hover:bg-white/20 transition-colors z-20"
            aria-label="Next solution"
          >
            <ArrowRight />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {solutions.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentSolutionIndex ? 1 : -1);
                  setCurrentSolutionIndex(idx);
                }}
                className={clsx(
                  'w-3 h-3 rounded-full transition-colors',
                  currentSolutionIndex === idx ? 'bg-accent' : 'bg-gray-700 hover:bg-gray-600'
                )}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}