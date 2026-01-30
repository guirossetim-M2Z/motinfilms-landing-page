'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import CinematicText from '@/components/ui/CinematicText';
import Image from 'next/image';
import { triggerRdStationPopup } from '@/utils/RDStation';
import { CheckCircle2, Clapperboard, Globe } from 'lucide-react';

export function Lp2Hero() {
  const videoUrl = "https://motinfilms.com.br/Showreel.mp4"; 

  // Removi "Certificação Ancine" daqui para tratá-lo como elemento VIP visual
  const sideBenefits = [
    { text: "Estratégia de Martech", icon: <CheckCircle2 className="w-3 h-3 text-red-500" /> },
    { text: "Abrangência Nacional", icon: <Globe className="w-3 h-3 text-red-500" /> }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden bg-[#050505] py-20 md:py-10">
      
      {/* VIDEO BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="w-full h-full object-cover opacity-30 pointer-events-none"
          preload="auto"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#050505] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl px-4 md:px-8 flex flex-col items-center">
        <div className="max-w-5xl space-y-8">
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
             <Image width="180" height="180" src="/images/motin-logo-white.webp" alt="Motin Films" className="mx-auto w-28 md:w-40 opacity-80" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight drop-shadow-2xl"
          >
            PARE DE SER COMPARADO PELO <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">PREÇO.</span>
            <br />
            TORNE SUA MARCA <CinematicText text="INCOMPARÁVEL" speed="medium" />
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Em um mercado saturado de vídeos genéricos, quem domina a narrativa visual lidera o jogo. Transformamos sua empresa em uma autoridade inquestionável através da qualidade de cinema.
          </motion.p>

          {/* --- NOVA ÁREA DE BENEFÍCIOS COM ANCINE EM EVIDÊNCIA --- */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 py-6 w-full"
          >
            
            {/* Benefício Esquerda (Desktop) / Topo (Mobile) */}
            <div className="flex items-center gap-2 text-xs md:text-sm font-mono text-gray-400 uppercase tracking-widest border border-white/10 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md hover:border-red-900/50 transition-colors">
                {sideBenefits[0].icon}
                {sideBenefits[0].text}
            </div>

            {/* --- CENTRAL: SELO ANCINE (Destaque Criativo) --- */}
            <div className="relative group">
                {/* Glow Effect atrás do selo */}
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-orange-500 to-red-600 rounded-lg blur opacity-20 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                
                <div className="relative flex items-center justify-center bg-white px-6 py-3 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 border border-white/20">
                    <div className="flex flex-col items-center leading-none">
                        <span className="text-[8px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">Produtora Licenciada</span>
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

            {/* Benefício Direita (Desktop) / Baixo (Mobile) */}
            <div className="flex items-center gap-2 text-xs md:text-sm font-mono text-gray-400 uppercase tracking-widest border border-white/10 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md hover:border-red-900/50 transition-colors">
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
              className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6 font-bold tracking-widest uppercase shadow-[0_0_40px_rgba(255,255,255,0.2)] h-auto whitespace-normal text-center"
              onClick={triggerRdStationPopup}
            >
              QUERO DESTACAR MINHA MARCA AGORA
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}