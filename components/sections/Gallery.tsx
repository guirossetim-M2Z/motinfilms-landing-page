'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Play, Maximize2, Film, Clapperboard, X } from 'lucide-react';
import CinematicText from '../ui/CinematicText';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  videoId: string;
  category: string;
  techSpecs: string;
  ratio: string;
}

export function Gallery() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'MERCEDES-BENZ',
      subtitle: 'EXTRA-PESADOS',
      description: 'Filme institucional produzido para a Mercedes-Benz, focando na sua linha de caminhões extra-pesados.',
      image: '/images/portfolio_thumbnails/mercedes-benz.jpg',
      videoId: 'kKpIG1XKbS0',
      category: 'AUTOMOTIVO',
      techSpecs: 'ARRI ALEXA • HIGH SPEED',
      ratio: '2.39:1'
    },
    {
      title: 'UNIFATEB',
      subtitle: 'INSTITUCIONAL',
      description: 'Filme institucional produzido para a Unifateb e o Colégio Dom Bosco, impulsionando o desenvolvimento educacional.',
      image: '/images/portfolio_thumbnails/unifateb.jpg',
      videoId: 'Wyg3UPuf5Ec',
      category: 'EDUCAÇÃO',
      techSpecs: 'SONY FX6 • ANAMORPHIC',
      ratio: '2.39:1'
    },
    {
      title: 'AWA COMERCIAL',
      subtitle: 'INDÚSTRIA DE AÇO',
      description: 'Filme institucional para a AWA Comercial, referência nacional na fabricação de produtos em aço.',
      image: '/images/portfolio_thumbnails/awa_comercial.jpg',
      videoId: '6bseD2wgI6A',
      category: 'INDÚSTRIA',
      techSpecs: 'RED KOMODO • MACRO',
      ratio: '16:9'
    },
    {
      title: 'ECOPARQUE',
      subtitle: 'BAIRRO PLANEJADO',
      description: 'Filme promocional com influenciadoras para divulgar o Ecoparque, bairro integrado e sustentável.',
      image: '/images/portfolio_thumbnails/ecoparque.jpg',
      videoId: 'J3KO2lBBh-w',
      category: 'REAL ESTATE',
      techSpecs: 'DRONE FPV • NATURAL LIGHT',
      ratio: '16:9'
    },
    {
      title: 'FAVRETTO MÍDIA',
      subtitle: 'OOH EXPERIENCE',
      description: 'Apresentando o mais novo produto que leva publicidade para elevadores comerciais e residenciais.',
      image: '/images/portfolio_thumbnails/favretto-midia-exterior.jpg',
      videoId: 'YU1VTsr-h-Q',
      category: 'PUBLICIDADE',
      techSpecs: 'STUDIO • MOTION',
      ratio: '9:16'
    },
    {
      title: 'DITRATOR',
      subtitle: 'PEÇAS AGRÍCOLAS',
      description: 'Filme institucional para a Ditrator, distribuidora de peças para tratores agrícolas e motores a diesel.',
      image: '/images/portfolio_thumbnails/ditrator.jpg',
      videoId: 'AO4UycrhPMM',
      category: 'AGRO',
      techSpecs: 'CANON R5 • GIMBAL',
      ratio: '16:9'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <section className="relative py-20 md:py-32 px-4 bg-[#020202] text-white overflow-hidden border-t border-white/5">

      {/* --- BACKGROUND DECORATIVO --- */}
      <div className="hidden md:flex absolute left-0 top-0 bottom-0 w-12 bg-[#0a0a0a] border-r border-white/10 flex-col justify-between py-2 z-10 pointer-events-none">
        {[...Array(30)].map((_, i) => <div key={i} className="w-4 h-6 mx-auto bg-black rounded-sm opacity-50"></div>)}
      </div>
      <div className="hidden md:flex absolute right-0 top-0 bottom-0 w-12 bg-[#0a0a0a] border-l border-white/10 flex-col justify-between py-2 z-10 pointer-events-none">
        {[...Array(30)].map((_, i) => <div key={i} className="w-4 h-6 mx-auto bg-black rounded-sm opacity-50"></div>)}
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-gradient-to-b from-white/5 via-transparent to-transparent blur-3xl pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

      {/* CONTAINER PADRONIZADO (max-w-7xl) */}
      <div className="container mx-auto max-w-7xl px-4 md:px-8 relative z-20">

        {/* --- HEADER --- */}
        <div className="text-center mb-12 md:mb-20">
          <div className="flex justify-center items-center gap-2 md:gap-3 mb-4 md:mb-6 opacity-60">
            <div className="h-[1px] w-4 md:w-8 bg-accent"></div>
            <Film className="w-3 h-3 md:w-4 md:h-4 text-accent" />
            <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.4em] uppercase text-gray-400">
              Arquivo 2024
            </span>
            <div className="h-[1px] w-4 md:w-8 bg-accent"></div>
          </div>

          <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 text-white">
            NOSSO <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">PORTFÓLIO</span>
          </h2>

          <div className="text-lg md:text-2xl mt-4">
            Veja a <CinematicText text="MAGIA EM MOVIMENTO" speed="medium" />
          </div>
        </div>

        {/* --- GRID --- */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Moldura do "Monitor" */}
              <div className="relative overflow-hidden aspect-video bg-[#0f0f0f] border border-white/10 shadow-lg group-hover:border-accent/50 transition-colors duration-500">
                <div className="absolute inset-0 z-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 
                               filter grayscale brightness-[0.8] contrast-[1.1] 
                               group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>

                {/* Overlay UI */}
                <div className="absolute inset-0 z-10 flex flex-col justify-between p-3 md:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/80 via-transparent to-black/40">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm px-2 py-1 rounded border border-white/10">
                      <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
                      <span className="font-mono text-[9px] tracking-widest text-white">REC</span>
                    </div>
                  </div>
                  <div className="self-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-md">
                      <Play className="w-5 h-5 md:w-6 md:h-6 ml-1 fill-current text-white" />
                    </div>
                  </div>
                  <div className="flex justify-between items-end">
                    <Maximize2 className="w-4 h-4 text-white/70" />
                  </div>
                </div>
              </div>

              {/* Metadados */}
              <div className="mt-4 md:mt-5 flex justify-between items-start border-b border-white/10 pb-4 md:pb-5 group-hover:border-accent/30 transition-colors duration-500">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-bold bg-white/10 border border-white/20 text-gray-300 px-1.5 py-0.5 rounded uppercase font-mono tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-[9px] text-gray-600 font-mono tracking-widest">0{index + 1}</span>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-accent transition-colors font-sans uppercase tracking-tight pt-1">
                    {project.title}
                  </h3>

                  <p className="text-xs text-gray-400 font-mono font-light opacity-80 md:opacity-60 group-hover:opacity-100 transition-opacity max-w-xs leading-relaxed line-clamp-2">
                    // {project.subtitle}
                  </p>
                </div>

                <div className="pt-2 md:opacity-0 md:-translate-x-4 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all duration-300">
                  <Clapperboard className="w-5 h-5 text-gray-500 group-hover:text-accent" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Button */}
        <motion.div className="mt-16 md:mt-24 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <Button
            size="lg"
            variant="ghost"
            data-nt-ut-event='click'
            data-nt-ut-category='Gallery Section'
            data-nt-ut-label='Abrir Catálogo de clientes site institucional'
            className="border border-white/20 text-white hover:bg-white hover:text-black font-mono text-xs uppercase tracking-widest px-8 md:px-10 py-4 md:py-6 w-full md:w-auto"
            href='https://motinfilms.com.br/portfolio'
          >
            Ver Catálogo Completo
          </Button>
        </motion.div>
      </div>

      {/* --- MODAL --- */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full h-full md:h-auto md:max-w-5xl bg-[#0a0a0a] border border-white/10 overflow-y-auto md:overflow-hidden relative shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-black/50 rounded-full text-white hover:bg-accent hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="w-full shrink-0 aspect-video bg-black sticky top-0 md:relative z-40">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedProject.videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                  title={selectedProject.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 border-0"
                ></iframe>
              </div>

              <div className="p-6 md:p-8 border-t border-white/10 bg-[#0f0f0f] grow">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-between items-start">
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-accent font-mono text-xs uppercase tracking-widest px-2 py-1 border border-accent/20 bg-accent/5 rounded">
                        {selectedProject.category}
                      </span>
                      <span className="text-gray-500 font-mono text-xs border border-white/10 px-2 py-1 rounded">
                        {selectedProject.techSpecs}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 uppercase tracking-tight">
                        {selectedProject.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}