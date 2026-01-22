'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Play, Maximize2, Film, Clapperboard, Aperture, X, ChevronRight } from 'lucide-react';
import CinematicText from '../ui/CinematicText';

// Interface para tipagem do projeto
interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  videoId: string; // ID do YouTube
  category: string;
  techSpecs: string;
  ratio: string;
}

export function Gallery() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Lista de Projetos Atualizada
  const projects: Project[] = [
    {
      title: 'MERCEDES-BENZ',
      subtitle: 'EXTRA-PESADOS',
      description: 'Filme institucional produzido para a Mercedes-Benz, focando na sua linha de caminhões extra-pesados e reforçando sua posição como uma das maiores fabricantes do mundo.',
      image: '/images/portfolio_thumbnails/mercedes-benz.jpg',
      videoId: 'kKpIG1XKbS0',
      category: 'AUTOMOTIVO',
      techSpecs: 'ARRI ALEXA • HIGH SPEED',
      ratio: '2.39:1'
    },
    {
      title: 'UNIFATEB',
      subtitle: 'INSTITUCIONAL',
      description: 'Filme institucional produzido para a Unifateb e o Colégio Dom Bosco, instituições que há mais de duas décadas impulsionam o desenvolvimento educacional de Telêmaco Borba e região.',
      image: '/images/portfolio_thumbnails/unifateb.jpg',
      videoId: 'Wyg3UPuf5Ec',
      category: 'EDUCAÇÃO',
      techSpecs: 'SONY FX6 • ANAMORPHIC',
      ratio: '2.39:1'
    },
    {
      title: 'AWA COMERCIAL',
      subtitle: 'INDÚSTRIA DE AÇO',
      description: 'Filme institucional para a AWA Comercial, referência nacional na fabricação e distribuição de produtos em aço para o setor da construção civil.',
      image: '/images/portfolio_thumbnails/awa_comercial.jpg',
      videoId: '6bseD2wgI6A',
      category: 'INDÚSTRIA',
      techSpecs: 'RED KOMODO • MACRO',
      ratio: '16:9'
    },
    {
      title: 'ECOPARQUE',
      subtitle: 'BAIRRO PLANEJADO',
      description: 'Filme promocional com influenciadoras para divulgar o Ecoparque, bairro integrado e sustentável em Cascavel (PR).',
      image: '/images/portfolio_thumbnails/ecoparque.jpg',
      videoId: 'J3KO2lBBh-w',
      category: 'REAL ESTATE',
      techSpecs: 'DRONE FPV • NATURAL LIGHT',
      ratio: '16:9'
    },
    // {
    //   title: 'SS&C BLUE PRISM',
    //   subtitle: 'BUENOS AIRES',
    //   description: 'Cobertura do evento exclusivo da SS&C Blue Prism na Argentina que reuniu líderes para debater o futuro da automação de processos.',
    //   image: '/images/portfolio_thumbnails/blueprism.jpg',
    //   videoId: 'carUjyho6cc',
    //   category: 'EVENTO',
    //   techSpecs: 'HYBRID COVERAGE • DOC',
    //   ratio: '16:9'
    // },
    {
      title: 'FAVRETTO MÍDIA',
      subtitle: 'OOH EXPERIENCE',
      description: 'Filme produzido para a Favretto Mídia Exterior, apresentando seu mais novo produto que leva publicidade para elevadores comerciais e residenciais.',
      image: '/images/portfolio_thumbnails/favretto-midia-exterior.jpg',
      videoId: 'YU1VTsr-h-Q',
      category: 'PUBLICIDADE',
      techSpecs: 'STUDIO • MOTION GRAPHICS',
      ratio: '9:16' // Vertical (Elevador)
    },
    {
      title: 'DITRATOR',
      subtitle: 'PEÇAS AGRÍCOLAS',
      description: 'Filme institucional produzido para a Ditrator, distribuidora de peças para tratores agrícolas e motores a diesel com mais de 30 anos de história.',
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
    <section className="py-24 px-4 bg-[#080808] text-gray-100 relative overflow-hidden border-t border-white/5">

      {/* --- CINEMATIC ATMOSPHERE --- */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-transparent to-[#080808] pointer-events-none z-10"></div>

      <div className="container mx-auto max-w-7xl relative z-20">

        {/* --- HEADER --- */}
        <div className="text-center mb-20">
          <div className="flex justify-center items-center gap-3 mb-6 opacity-60">
            <div className="h-[1px] w-8 bg-accent"></div>
            <Film className="w-4 h-4 text-accent" />
            <span className="font-mono text-xs tracking-[0.4em] uppercase text-gray-400">Arquivo de Produção // 2024</span>
            <div className="h-[1px] w-8 bg-accent"></div>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white">
            NOSSO <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">PORTFÓLIO</span>
          </h2>

          <div className="text-xl md:text-2xl mt-4">
            Veja a <CinematicText text="MAGIA EM MOVIMENTO" speed="medium" />
          </div>
        </div>

        {/* --- GRID (CONTACT SHEET STYLE) --- */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
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
              {/* Moldura do "Monitor de Referência" */}
              <div className="relative overflow-hidden aspect-video bg-[#0f0f0f] border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:border-accent/50 transition-colors duration-500">

                {/* IMAGEM + EFEITOS DE COR */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 
                               filter grayscale brightness-[0.7] contrast-[1.1] 
                               group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>

                {/* UI DO MONITOR (OVERLAY) */}
                <div className="absolute inset-0 z-10 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/80 via-transparent to-black/40">

                  {/* Top Bar */}
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm px-2 py-1 rounded border border-white/10">
                      <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse shadow-[0_0_8px_rgba(220,38,38,0.8)]"></div>
                      <span className="font-mono text-[9px] tracking-widest text-white">REC</span>
                    </div>
                    <span className="font-mono text-[9px] bg-black/50 backdrop-blur-sm px-2 py-1 rounded border border-white/10 text-gray-300">
                      {project.ratio}
                    </span>
                  </div>

                  {/* Center Play */}
                  <div className="self-center transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-md hover:bg-accent hover:border-accent hover:text-black transition-all">
                      <Play className="w-6 h-6 ml-1 fill-current" />
                    </div>
                  </div>

                  {/* Bottom Bar */}
                  <div className="flex justify-between items-end">
                    <div className="flex items-center gap-2 text-white/80">
                      <Aperture className="w-3 h-3" />
                      <span className="font-mono text-[9px] tracking-wider uppercase">{project.techSpecs}</span>
                    </div>
                    <Maximize2 className="w-4 h-4 text-white/70 hover:text-white transition-colors" />
                  </div>
                </div>

                {/* Crop Marks */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-white/20 pointer-events-none"></div>
                <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-white/20 pointer-events-none"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-white/20 pointer-events-none"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-white/20 pointer-events-none"></div>
              </div>

              {/* METADADOS DO PROJETO */}
              <div className="mt-5 flex justify-between items-start border-b border-white/10 pb-5 group-hover:border-accent/30 transition-colors duration-500">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-bold bg-white/10 border border-white/20 text-gray-300 px-1.5 py-0.5 rounded uppercase font-mono tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-[9px] text-gray-600 font-mono tracking-widest">SCENE 0{index + 1}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors font-sans uppercase tracking-tight pt-1">
                    {project.title}
                  </h3>

                  <p className="text-xs text-gray-400 font-mono font-light opacity-60 group-hover:opacity-100 transition-opacity max-w-xs leading-relaxed line-clamp-2">
                    // {project.description}
                  </p>
                </div>

                <div className="pt-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">
                  <Clapperboard className="w-5 h-5 text-gray-500 group-hover:text-accent transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- FOOTER CTA --- */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-[10px] text-gray-500 mb-6 tracking-[0.4em] uppercase">
            Acesso ao Banco de Dados Completo
          </p>
          <Button
            size="lg"
            variant="ghost"
            data-nt-ut-event='click'
            data-nt-ut-category='Portfolio Section'
            className="border border-white/20 text-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 font-mono text-xs uppercase tracking-widest px-10 py-6"
            href='https://motinfilms.com.br/portfolio'
          >
            Ver Catálogo Completo
          </Button>
        </motion.div>
      </div>

      {/* --- CINEMATIC VIDEO MODAL --- */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)} // Close on backdrop click
          >
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-5xl bg-[#0a0a0a] border border-white/10 overflow-hidden relative shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent close on modal click
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/50 rounded-full text-white hover:bg-accent hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Video Player */}
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedProject.videoId}?autoplay=1&rel=0&modestbranding=1`}
                  title={selectedProject.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 border-0"
                ></iframe>
              </div>

              {/* Description Panel */}
              <div className="p-8 border-t border-white/10 bg-[#0f0f0f]">
                <div className="flex flex-col md:flex-row gap-8 justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-accent font-mono text-xs uppercase tracking-widest px-2 py-1 border border-accent/20 bg-accent/5 rounded">
                        {selectedProject.category}
                      </span>
                      <span className="text-gray-500 font-mono text-xs">
                        {selectedProject.techSpecs}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4 uppercase tracking-tight">
                      {selectedProject.title}
                    </h3>
                    <p className="text-gray-400 font-light leading-relaxed max-w-2xl">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="hidden md:block">
                    <div className="w-24 h-24 border border-white/5 bg-white/5 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
                      <Film className="w-10 h-10 text-white/20" />
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