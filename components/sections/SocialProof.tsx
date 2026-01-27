'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import CinematicText from '../ui/CinematicText';
import { triggerRdStationPopup } from '@/utils/RDStation';

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
  { name: 'Favretto', src: '/images/logos_marcas/favretto-logo.png' },
  { name: 'Compwire', src: '/images/logos_marcas/compwire-logo.png' },
  { name: 'Action Coach', src: '/images/logos_marcas/actioncoach-logo.png' },
  { name: 'Naport', src: '/images/logos_marcas/naport-logo.png' },
  { name: 'Blue Prism', src: '/images/logos_marcas/ssc-blueprism-logo.png' },
];

const row1 = partners.slice(0, 8);
const row2 = partners.slice(8);

export function SocialProof() {
  return (
    <section className="relative py-24 bg-[#050505] text-white overflow-hidden border-t border-white/5 shadow-2xl">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] pointer-events-none z-10"></div>

      {/* CONTAINER PADRONIZADO (max-w-7xl) */}
      <div className="container mx-auto max-w-7xl px-4 md:px-8 relative z-20 mb-16 md:mb-24">
        <div className="flex flex-col items-center justify-center text-center">
            <div className="flex items-center gap-3 mb-4 opacity-60">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div>
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-gray-400">
                    Production Credits
                </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white max-w-4xl leading-tight">
               GRANDES HISTÓRIAS, <br className="md:hidden" />
               <span className="md:ml-3">
                  <CinematicText text="PARCEIROS LENDÁRIOS" className="text-white" />
               </span>
            </h2>
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-red-500 to-transparent mt-8 opacity-70"></div>
        </div>
      </div>

      <div className="relative w-full flex flex-col gap-12 mb-20">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-60 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-60 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none"></div>

        <div className="flex animate-scroll-left w-max hover:[animation-play-state:paused]">
          {[...row1, ...row1, ...row1].map((partner, index) => (
             <LogoItem key={`r1-${index}`} partner={partner} />
          ))}
        </div>
        <div className="flex animate-scroll-right w-max hover:[animation-play-state:paused]">
          {[...row2, ...row2, ...row2].map((partner, index) => (
             <LogoItem key={`r2-${index}`} partner={partner} />
          ))}
        </div>
      </div>

      <motion.div className="text-center relative z-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
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

      <style jsx global>{`
        @keyframes scrollLeft { from { transform: translateX(0); } to { transform: translateX(-33.33%); } }
        @keyframes scrollRight { from { transform: translateX(-33.33%); } to { transform: translateX(0); } }
        .animate-scroll-left { animation: scrollLeft 40s linear infinite; }
        .animate-scroll-right { animation: scrollRight 40s linear infinite; }
      `}</style>
    </section>
  );
}

const LogoItem = ({ partner }: { partner: { name: string; src: string } }) => (
  <div className="flex-shrink-0 w-[200px] h-24 mx-4 flex items-center justify-center group relative">
    <div className="absolute inset-0 bg-white/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <img
      src={partner.src}
      alt={partner.name}
      loading="lazy"
      className="max-h-12 w-auto object-contain transition-all duration-500 filter brightness-0 invert opacity-30 group-hover:filter-none group-hover:opacity-100 group-hover:scale-110"
    />
  </div>
);