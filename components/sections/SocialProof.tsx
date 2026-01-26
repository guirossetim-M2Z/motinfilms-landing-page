'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import CinematicText from '../ui/CinematicText';
import { triggerRdStationPopup } from '@/utils/RDStation';

// Lista completa baseada nos arquivos que você forneceu
const partners = [
  { name: 'Electrolux', src: '/images/logos_marcas/electrolux-logo.png' },
  { name: 'Warner Bros', src: '/images/logos_marcas/wb-logo.png' },
  { name: 'Sony', src: '/images/logos_marcas/sony-logo.png' },
  { name: 'Paris Filmes', src: '/images/logos_marcas/paris-filmes-logo.png' },
  { name: 'Itaipu', src: '/images/logos_marcas/itaipu-logo.png' },
  { name: 'Unimed', src: '/images/logos_marcas/unimed-logo.png' },
  { name: 'Santos FC', src: '/images/logos_marcas/santos-logo.png' },
  { name: 'Lumicenter', src: '/images/logos_marcas/lumicenter-logo.png' },
  { name: 'Dental Uni', src: '/images/logos_marcas/dentaluni-logo.png' },
  // { name: 'Escolar Office', src: '/images/logos_marcas/escolar-office-brasil.jpeg' },
  { name: 'Favretto', src: '/images/logos_marcas/favretto-logo.png' },
  { name: 'Compwire', src: '/images/logos_marcas/compwire-logo.png' },
  { name: 'Action Coach', src: '/images/logos_marcas/actioncoach-logo.png' },
  { name: 'Naport', src: '/images/logos_marcas/naport-logo.png' },
  { name: 'Blue Prism', src: '/images/logos_marcas/ssc-blueprism-logo.png' },
];

// Dividimos em duas linhas para o efeito de "End Credits"
const row1 = partners.slice(0, 8);
const row2 = partners.slice(8);

export function SocialProof() {
  return (
    <section className="relative py-24 bg-[#050505] text-white overflow-hidden border-t border-white/5 shadow-2xl">
      
      {/* Background Noise & Vignette */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] pointer-events-none z-10"></div>

      <div className="container mx-auto max-w-6xl text-center relative z-20 mb-16">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <p className="font-mono text-xs text-gray-500 uppercase tracking-[0.4em] mb-4">
                Créditos de Produção
            </p>
            <h2 className="text-3xl md:text-5xl font-bold">
              GRANDES HISTÓRIAS, <br />
              PARCEIROS LENDÁRIOS
            </h2>
        </motion.div>
      </div>

      {/* --- LOGO SCROLL AREA --- */}
      <div className="relative w-full flex flex-col gap-12 mb-20">
        
        {/* Máscaras laterais para suavizar a entrada/saída (Fade) */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-60 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-60 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none"></div>

        {/* Linha 1: Move para a Esquerda */}
        <div className="flex animate-scroll-left w-max hover:[animation-play-state:paused]">
          {[...row1, ...row1, ...row1].map((partner, index) => (
             <LogoItem key={`r1-${index}`} partner={partner} />
          ))}
        </div>

        {/* Linha 2: Move para a Direita */}
        <div className="flex animate-scroll-right w-max hover:[animation-play-state:paused]">
          {[...row2, ...row2, ...row2].map((partner, index) => (
             <LogoItem key={`r2-${index}`} partner={partner} />
          ))}
        </div>
      </div>

      <motion.div 
        className="text-center relative z-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Button
          size="lg"
          variant="ghost"
          data-nt-ut-event='click'
          data-nt-ut-category='Social Proof Section'
          data-nt-ut-label='Quero Fazer Parte da Elite'
          className="text-gray-400 hover:text-white hover:bg-white/5 border border-white/10 font-mono tracking-widest uppercase text-xs px-8 py-6"
          onClick={triggerRdStationPopup}
        >
          QUERO FAZER PARTE DA ELITE
        </Button>
      </motion.div>

      {/* CSS para Animações Infinitas */}
      <style jsx global>{`
        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); }
        }
        @keyframes scrollRight {
          from { transform: translateX(-33.33%); }
          to { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scrollLeft 40s linear infinite;
        }
        .animate-scroll-right {
          animation: scrollRight 40s linear infinite;
        }
      `}</style>
    </section>
  );
}

// Componente auxiliar para renderizar cada logo
const LogoItem = ({ partner }: { partner: { name: string; src: string } }) => (
  <div className="flex-shrink-0 w-[200px] h-24 mx-4 flex items-center justify-center group relative">
    {/* Efeito Glow atrás da logo no hover */}
    <div className="absolute inset-0 bg-white/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <img
      src={partner.src}
      alt={partner.name}
      loading="lazy"
      // A mágica acontece aqui:
      // brightness-0 invert -> Transforma qualquer logo colorida em BRANCA SÓLIDA
      // opacity-30 -> Deixa ela escura (cinza) no estado normal
      // hover -> Restaura a cor original e opacidade total
      className="max-h-12 w-auto object-contain transition-all duration-500 
                 filter brightness-0 invert opacity-30 
                 group-hover:filter-none group-hover:opacity-100 group-hover:scale-110"
    />
  </div>
);