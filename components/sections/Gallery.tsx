'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export function Gallery() {
  const projects = [
    {
      title: 'Mercedes-Benz',
      description: 'Campanha de lançamento para o novo modelo AMG, capturando a essência da velocidade e luxo.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=600&fit=crop', // Example image
      category: 'Automotivo',
    },
    {
      title: 'AWA Comercial',
      description: 'Vídeos institucionais para o grupo AWA, destacando inovação e liderança no setor.',
      image: 'https://images.unsplash.com/photo-1542831371-d130a84e680a?auto=format&fit=crop&q=80&w=800&h=600&fit=crop', // Example image
      category: 'Institucional',
    },
    {
      title: 'Ecoparque',
      description: 'Documentário promocional para um resort ecológico, enfatizando a sustentabilidade e a conexão com a natureza.',
      image: 'https://images.unsplash.com/photo-1476510860533-35acb5278c2e?auto=format&fit=crop&q=80&w=800&h=600&fit=crop', // Example image
      category: 'Turismo',
    },
    {
      title: 'Startup Inovadora',
      description: 'Vídeo pitch e campanha de marketing digital para uma nova startup de tecnologia.',
      image: 'https://images.unsplash.com/photo-1620743621943-e696f5b90f42?auto=format&fit=crop&q=80&w=800&h=600&fit=crop',
      category: 'Tecnologia',
    },
    {
      title: 'Evento Corporativo',
      description: 'Cobertura completa de eventos corporativos, transformando momentos em memórias duradouras.',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d4678e?auto=format&fit=crop&q=80&w=800&h=600&fit=crop',
      category: 'Eventos',
    },
    {
      title: 'Moda e Lifestyle',
      description: 'Produção de campanhas visuais para marcas de moda, realçando o estilo e a identidade.',
      image: 'https://images.unsplash.com/photo-1509631179647-017733856988?auto=format&fit=crop&q=80&w=800&h=600&fit=crop',
      category: 'Moda',
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: 'beforeChildren',
        staggerChildren: 0.15,
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
      <div className="container mx-auto max-w-6xl text-center">
        <motion.h2 className="text-4xl md:text-5xl font-bold mb-16" variants={itemVariants}>
          Nosso <span className="text-accent">Portfólio</span>.
          <br /> Veja a magia em movimento.
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass-panel overflow-hidden relative group cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-6 text-left">
                <span className="text-sm text-accent uppercase font-semibold mb-2 block">{project.category}</span>
                <h3 className="text-2xl font-semibold text-text mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants}>
          <Button
            size="lg"
            variant="secondary"
            data-nt-ut-event='click'
            data-nt-ut-category='Portfolio Section'
            data-nt-ut-label='Ver Todos os Trabalhos'
          >
            VER TODOS
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}