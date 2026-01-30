'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import CinematicText from '@/components/ui/CinematicText';
import Image from 'next/image';
import { triggerRdStationPopup } from '@/utils/RDStation';
import { TrendingUp, AlertOctagon } from 'lucide-react';

export function Lp3Hero() {
  const videoUrl = "https://motinfilms.com.br/Showreel.mp4"; 

  // Configuração dos benefícios laterais (Ancine agora é o destaque central)
  const sideBenefits = [
    { 
        text: "Estratégia de Martech", 
        icon: <TrendingUp className="w-3 h-3 text-blue-500" />,
        borderHover: "hover:border-blue-500/50"
    },
    { 
        text: "Não é gasto, é investimento", 
        icon: <AlertOctagon className="w-3 h-3 text-red-500" />,
        borderHover: "hover:border-red-500/50"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden bg-[#050505] py-20 md:py-10">
      
      {/* VIDEO BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="w-full h-full object-cover opacity-20 pointer-events-none filter grayscale contrast-125"
          preload="auto"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#050505] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl px-4 md:px-8 flex flex-col items-center">
        <div className="max-w-5xl space-y-8">
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
             <Image width="180" height="180" src="/images/motin-logo-white.webp" alt="Motin Films" className="mx-auto w-24 md:w-32 opacity-70" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight drop-shadow-2xl"
          >
            ENQUANTO VOCÊ ECONOMIZA NO VÍDEO, <br />
            SEU CONCORRENTE <CinematicText text="DOMINA O MERCADO" className="text-red-500" speed="fast" /> COM A NOSSA AJUDA.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
          >
            A era do amadorismo acabou. Ou sua marca tem <span className="text-white font-bold">qualidade de cinema</span>, ou ela é invisível. Pare de ser ignorado no feed e comece a ser desejado.
          </motion.p>

          {/* --- NOVA ÁREA DE BENEFÍCIOS (LAYOUT CENTRALIZADO) --- */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 py-6 w-full"
          >
            
            {/* Lado Esquerdo: Martech (Azul para contraste tático) */}
            <div className={`flex items-center gap-2 text-xs md:text-sm font-mono text-gray-400 uppercase tracking-widest border border-white/10 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md transition-colors ${sideBenefits[0].borderHover}`}>
                {sideBenefits[0].icon}
                {sideBenefits[0].text}
            </div>

            {/* --- CENTRO: SELO ANCINE (Destaque VIP) --- */}
            <div className="relative group z-20">
                {/* Glow Effect (Fundo) */}
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-orange-500 to-red-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                
                {/* Cartão Branco */}
                <div className="relative flex items-center justify-center bg-white px-6 py-3 rounded-lg shadow-[0_0_30px_rgba(255,255,255,0.1)] transform transition-transform duration-300 hover:scale-105 border border-white/20">
                    <div className="flex flex-col items-center leading-none">
                        <span className="text-[8px] font-bold text-gray-500 uppercase tracking-[0.25em] mb-1">Produtora Licenciada</span>
                        <div className="relative w-24 h-8 md:w-32 md:h-10">
                            <Image 
                                src="/images/ancine-logo-1.png" 
                                alt="Certificação Ancine" 
                                fill
                                style={{ objectFit: 'contain' }}
                                className="filter drop-shadow-sm"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Lado Direito: Investimento (Vermelho para urgência) */}
            <div className={`flex items-center gap-2 text-xs md:text-sm font-mono text-gray-400 uppercase tracking-widest border border-white/10 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md transition-colors ${sideBenefits[1].borderHover}`}>
                {sideBenefits[1].icon}
                {sideBenefits[1].text}
            </div>

          </motion.div>
          {/* ------------------------------------------------------- */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="pb-4"
          >
            <Button
              size="lg"
              className=" text-white hover:text-white text-lg px-10 py-8 font-bold tracking-widest uppercase shadow-[0_0_30px_rgba(0,0,0)] border-none h-auto whitespace-normal text-center"
              onClick={triggerRdStationPopup}
            >
              QUERO PARAR DE PERDER VENDAS
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}