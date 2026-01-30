'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { triggerRdStationPopup } from '@/utils/RDStation';
import { Phone, MapPin } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 bg-[#020202] text-white overflow-hidden flex flex-col items-center text-center">
        
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay"></div>
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50"></div>

        <div className="container mx-auto max-w-4xl px-4 md:px-8 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                SEU CONCORRENTE ESPERA QUE VOCÊ CONTINUE FAZENDO O BÁSICO. <br />
                <span className="text-red-500">VAI DECEPCIONÁ-LO?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10 font-light">
                Não deixe sua marca ser subestimada por causa de vídeos ruins. O mercado pertence a quem se posiciona melhor. <br />
                Vamos criar o filme que vai mudar o patamar do seu negócio.
            </p>

            <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mb-12"
            >
                <Button 
                    size="lg" 
                    className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6 font-bold tracking-widest uppercase shadow-[0_0_40px_rgba(255,255,255,0.2)] h-auto whitespace-normal text-center"
                    onClick={triggerRdStationPopup}
                >
                    QUERO UM ORÇAMENTO EXCLUSIVO
                </Button>
            </motion.div>

            <div className="flex flex-col md:flex-row justify-center gap-8 text-gray-400 text-sm font-mono">
                <div className="flex items-center gap-2 justify-center">
                    <MapPin className="w-4 h-4" /> Curitiba - PR (Atendendo todo o Brasil)
                </div>
            </div>
        </div>
    </section>
  );
}