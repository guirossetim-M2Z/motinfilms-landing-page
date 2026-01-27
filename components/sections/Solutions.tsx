'use client';

import { motion } from 'framer-motion';
import { Building2, Package, CalendarDays, Smartphone, Trophy, Megaphone, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import CinematicText from '../ui/CinematicText';
import { triggerRdStationPopup } from '@/utils/RDStation';

const ViewfinderCorners = () => (
  <>
    <div className="absolute top-0 left-0 w-3 h-3 md:w-4 md:h-4 border-l-2 border-t-2 border-white/30 transition-colors duration-300 group-hover:border-red-500" />
    <div className="absolute top-0 right-0 w-3 h-3 md:w-4 md:h-4 border-r-2 border-t-2 border-white/30 transition-colors duration-300 group-hover:border-red-500" />
    <div className="absolute bottom-0 left-0 w-3 h-3 md:w-4 md:h-4 border-l-2 border-b-2 border-white/30 transition-colors duration-300 group-hover:border-red-500" />
    <div className="absolute bottom-0 right-0 w-3 h-3 md:w-4 md:h-4 border-r-2 border-b-2 border-white/30 transition-colors duration-300 group-hover:border-red-500" />
  </>
);

export function Solutions() {
  const solutions = [
    { title: 'Filmes Institucionais', subtitle: 'SCENE 01 - BRANDING', description: 'Apresente seus produtos, serviços, valores e missão de forma envolvente e profissional.', icon: <Building2 className="w-6 h-6 md:w-8 md:h-8" /> },
    { title: 'Filmes de Produto', subtitle: 'SCENE 02 - COMMERCIAL', description: 'Destaque seus produtos de maneira única no mercado, expondo seus diferenciais técnicos.', icon: <Package className="w-6 h-6 md:w-8 md:h-8" /> },
    { title: 'Filme Evento Corporativo', subtitle: 'SCENE 03 - COVERAGE', description: 'Capture os momentos mais importantes dos seus eventos, transformando-os em materiais impactantes.', icon: <CalendarDays className="w-6 h-6 md:w-8 md:h-8" /> },
    { title: 'Filmes Conteúdo', subtitle: 'SCENE 04 - SOCIAL', description: 'Dê voz à sua marca nas redes sociais com conteúdos estratégicos (Reels/TikTok).', icon: <Smartphone className="w-6 h-6 md:w-8 md:h-8" /> },
    { title: 'Filmes Case', subtitle: 'SCENE 05 - PROOF', description: 'Demonstre a experiência e o sucesso de clientes reais com seu produto ou serviço.', icon: <Trophy className="w-6 h-6 md:w-8 md:h-8" /> },
    { title: 'Filmes Ação de Marketing', subtitle: 'SCENE 06 - CAMPAIGN', description: 'Divulgue suas campanhas promocionais e ações com vídeos de alta energia.', icon: <Megaphone className="w-6 h-6 md:w-8 md:h-8" /> },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-[#050505] text-gray-100 overflow-hidden border-t border-white/5">
      {/* Backgrounds */}
      <div className="hidden md:flex absolute left-0 top-0 bottom-0 w-12 bg-[#0a0a0a] border-r border-white/10 flex-col justify-between py-2 z-10 pointer-events-none">
           {[...Array(30)].map((_, i) => <div key={i} className="w-4 h-6 mx-auto bg-black rounded-sm opacity-50"></div>)}
      </div>
      <div className="hidden md:flex absolute right-0 top-0 bottom-0 w-12 bg-[#0a0a0a] border-l border-white/10 flex-col justify-between py-2 z-10 pointer-events-none">
           {[...Array(30)].map((_, i) => <div key={i} className="w-4 h-6 mx-auto bg-black rounded-sm opacity-50"></div>)}
      </div>
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-overlay z-10"></div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.9)] z-10"></div>
      
      {/* CONTAINER PADRONIZADO (max-w-7xl) */}
      <div className="container mx-auto max-w-7xl relative z-20 px-4 md:px-8">
        
        {/* Header */}
        <div className="mb-16 md:mb-24">
            <div className="flex items-center gap-4 mb-6 md:mb-8 opacity-70">
                <div className="h-[1px] w-8 md:w-12 bg-red-500"></div>
                <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] text-gray-400 uppercase">Service Catalog</span>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white max-w-2xl leading-tight">
                    TIPOS DE <br />
                    <CinematicText text="SOLUÇÕES" className="text-white" />
                </h2>
                <p className="text-gray-400 max-w-md text-sm md:text-base leading-relaxed border-l border-white/10 pl-6 pb-2">
                    Oferecemos um leque completo de soluções audiovisuais para impulsionar sua marca.
                </p>
            </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {solutions.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-white/5 border border-white/10 p-6 md:p-8 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500 flex flex-col h-full min-h-[320px]"
                >
                  <ViewfinderCorners />
                  <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-black/40 border border-white/10 rounded-full shrink-0 text-white group-hover:text-red-500 transition-colors">
                          {item.icon}
                      </div>
                      <span className="font-mono text-[9px] md:text-[10px] text-gray-500 border border-white/10 px-2 py-1 rounded bg-black/20 whitespace-nowrap ml-2 group-hover:border-red-500/30 group-hover:text-red-400 transition-colors">{item.subtitle}</span>
                  </div>
                  <h3 className="font-mono text-lg md:text-xl text-white mb-3 tracking-tight group-hover:text-red-400 transition-colors">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 border-l-2 border-gray-700 pl-4 flex-grow group-hover:border-red-500/50 transition-colors">{item.description}</p>
                  <div className="mt-auto pt-4 border-t border-white/5">
                    <Button variant="ghost" className="w-full flex justify-between items-center border border-white/20 hover:bg-white text-white hover:text-black font-mono text-xs uppercase tracking-widest py-3 group/btn" data-nt-ut-event='click' data-nt-ut-category='Solutions' data-nt-ut-label={item.title} onClick={triggerRdStationPopup}>
                        <span>SAIBA MAIS</span>
                        <ArrowUpRight className="w-4 h-4 group-hover/btn:rotate-45 transition-transform duration-300" />
                    </Button>
                  </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}