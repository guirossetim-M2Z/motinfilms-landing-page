'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Check } from 'lucide-react';

export function CallToAction() {
  const ctaItems = [
    { text: 'Análise de Ponto Cego' },
    { text: 'Roteiro de Diferenciação' },
    { text: 'Plano de Ação Imediato' },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100, damping: 10 } },
  };

  return (
    <motion.section
      className="py-20 px-4 bg-accent text-primary" // Inverted colors for strong contrast with other sections
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h2 className="text-4xl md:text-5xl font-bold mb-6" variants={itemVariants}>
          Pronto para <span className="text-primary">Elevar</span> seu Posicionamento?
        </motion.h2>
        <motion.p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-medium" variants={itemVariants}>
          Receba um <span className="font-bold">Diagnóstico de Posicionamento Audiovisual Gratuito</span> e descubra o potencial inexplorado da sua marca.
        </motion.p>

        <div className="flex flex-col items-center justify-center space-y-4 mb-12">
          {ctaItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-3 text-lg md:text-xl font-medium"
              variants={itemVariants}
            >
              <Check className="w-6 h-6 text-primary" />
              <span>{item.text}</span>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants}>
          <Button
            size="lg"
            variant="secondary" // Using secondary variant but customizing its colors to fit the inverted section
            data-nt-ut-event='click'
            data-nt-ut-category='Offer Section'
            data-nt-ut-label='Pedir Diagnostico Gratuito'
            className="border-primary text-primary hover:bg-primary hover:text-accent"
          >
            PEÇA SEU DIAGNÓSTICO GRATUITO
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}