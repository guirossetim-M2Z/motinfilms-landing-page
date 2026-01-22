'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button'; // Seu botão existente
import { Play, Maximize2, Film, Clapperboard } from 'lucide-react';
import CinematicText from '../ui/CinematicText';

export function Gallery() {
  const projects = [
    {
      title: 'MERCEDES-BENZ AMG',
      subtitle: 'VELOCIDADE & LUXO',
      description: 'Campanha de lançamento global. Captura em alta velocidade com braço robótico.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=600&fit=crop',
      category: 'AUTOMOTIVO',
      techSpecs: 'RED RAPTOR • ANAMORPHIC',
      ratio: '2.39:1'
    },
    {
      title: 'GRUPO AWA',
      subtitle: 'INSTITUCIONAL',
      description: 'Narrativa corporativa focada em liderança e inovação tecnológica.',
      image: 'https://images.unsplash.com/photo-1542831371-d130a84e680a?auto=format&fit=crop&q=80&w=800&h=600&fit=crop',
      category: 'CORPORATE',
      techSpecs: 'ARRI ALEXA • SPHERICAL',
      ratio: '16:9'
    },
    {
      title: 'ECOPARQUE RESORT',
      subtitle: 'DESTINOS',
      description: 'Documentário imersivo. Uso extensivo de drones e luz natural.',
      image: 'https://images.unsplash.com/photo-1476510860533-35acb5278c2e?auto=format&fit=crop&q=80&w=800&h=600&fit=crop',
      category: 'TURISMO',
      techSpecs: 'DJI INSPIRE 3 • 4K',
      ratio: '2:1'
    },
    {
      title: 'NEO STARTUP',
      subtitle: 'PITCH DECK',
      description: 'Vídeo manifesto para rodada de investimentos Série A.',
      image: 'https://images.unsplash.com/photo-1620743621943-e696f5b90f42?auto=format&fit=crop&q=80&w=800&h=600&fit=crop',
      category: 'TECH',
      techSpecs: 'SONY FX6 • MACRO',
      ratio: '16:9'
    },
    {
      title: 'SUMMIT GLOBAL',
      subtitle: 'COBERTURA AO VIVO',
      description: 'Aftermovie oficial do maior evento de empreendedorismo do setor.',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d4678e?auto=format&fit=crop&q=80&w=800&h=600&fit=crop',
      category: 'EVENTOS',
      techSpecs: 'HYBRID SETUP',
      ratio: '1.85:1'
    },
    {
      title: 'VOGUE X',
      subtitle: 'FASHION FILM',
      description: 'Editorial de vídeo focado em texturas, movimento e identidade visual.',
      image: 'https://images.unsplash.com/photo-1509631179647-017733856988?auto=format&fit=crop&q=80&w=800&h=600&fit=crop',
      category: 'MODA',
      techSpecs: '16MM FILM • GRAIN',
      ratio: '4:3'
    },
  ];

  // Animação sequencial dos itens
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 20 } },
  };

  return (
    <section className="py-24 px-4 bg-[#080808] text-gray-100 relative overflow-hidden">

      {/* Background Decorativo - Grid de Edição */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-transparent to-[#080808] pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl relative z-10">

        {/* --- HEADER --- */}
        <div className="text-center mb-20">
          <div className="flex justify-center items-center gap-2 mb-4 opacity-60">
            <Film className="w-4 h-4 text-accent" />
            <span className="font-mono text-xs tracking-[0.5em] uppercase">Arquivo de Produção</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            NOSSO <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-600">PORTFÓLIO</span>
          </h2>

          <div className="text-xl md:text-2xl">
            Veja a magia em movimento
          </div>
        </div>

        {/* --- GRID DE PROJETOS (Estilo Contact Sheet) --- */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative cursor-pointer"
            >
              {/* Moldura do "Monitor" */}
              <div className="relative overflow-hidden aspect-video bg-gray-900 border border-white/10 shadow-lg group-hover:border-accent/50 transition-colors duration-500">

                {/* Imagem com Efeito de Grading (PB -> Cor) */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 filter grayscale brightness-75 contrast-125 group-hover:grayscale-0 group-hover:brightness-100"
                  />
                  {/* Overlay de Granulação na imagem */}
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                </div>

                {/* UI Overlay (Elementos que aparecem no hover) */}
                <div className="absolute inset-0 z-10 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                  {/* Top Info */}
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                      <span className="font-mono text-[10px] tracking-widest text-white/90">REC</span>
                    </div>
                    <span className="font-mono text-[10px] border border-white/30 px-1 text-white/70">{project.ratio}</span>
                  </div>

                  {/* Center Action */}
                  <div className="self-center transform scale-50 group-hover:scale-100 transition-transform duration-300 delay-100">
                    <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-md hover:bg-accent hover:border-accent hover:text-black transition-all">
                      <Play className="w-6 h-6 ml-1 fill-current" />
                    </div>
                  </div>

                  {/* Bottom Info */}
                  <div className="flex justify-between items-end">
                    <span className="font-mono text-[10px] text-white/60">{project.techSpecs}</span>
                    <Maximize2 className="w-4 h-4 text-white/70 hover:text-white" />
                  </div>
                </div>

                {/* Linhas de "Crop Marks" nos cantos (Decorativo) */}
                <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/30 pointer-events-none"></div>
                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/30 pointer-events-none"></div>
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/30 pointer-events-none"></div>
                <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/30 pointer-events-none"></div>
              </div>

              {/* Informações Abaixo do Monitor (Estilo Claquete) */}
              <div className="mt-4 flex justify-between items-end border-b border-white/10 pb-4 group-hover:border-accent/50 transition-colors">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold bg-white text-black px-1 uppercase font-mono">
                      {project.category}
                    </span>
                    <span className="text-[10px] text-gray-500 font-mono">SCENE 0{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors font-sans uppercase tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 font-mono mt-1 opacity-60 group-hover:opacity-100 transition-opacity">
                    {project.subtitle}
                  </p>
                </div>

                {/* Seta discreta */}
                <div className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <Clapperboard className="w-5 h-5 text-gray-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- FOOTER BUTTON --- */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-xs text-gray-500 mb-4 tracking-[0.3em] uppercase">Explore todo o arquivo</p>
          <Button
            size="lg"
            variant="secondary" // Certifique-se que seu botão suporta variant outline ou mude classes aqui
            className="border-white/20 hover:bg-white hover:text-black min-w-[200px] tracking-widest font-mono uppercase text-xs"
            data-nt-ut-event='click'
            data-nt-ut-category='Portfolio Section'
          >
            Ver catálogo completo
          </Button>
        </motion.div>
      </div>
    </section>
  );
}