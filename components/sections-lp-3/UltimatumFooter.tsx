'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { triggerRdStationPopup } from '@/utils/RDStation';
import { Phone, MapPin, AlertCircle } from 'lucide-react';

export function UltimatumFooter() {
  return (
    <section className="relative py-24 md:py-32 bg-[#020202] text-white overflow-hidden flex flex-col items-center text-center">
        
        {/* Background Noise & Red Glow */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-red-900/10 to-transparent pointer-events-none"></div>

        <div className="container mx-auto max-w-4xl px-4 md:px-8 relative z-10">
            
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/5 border border-white/10 rounded text-gray-300 text-sm">
                <AlertCircle className="w-4 h-4 text-red-500" />
                <span>Vagas limitadas para produção este mês</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                SUA MARCA MERECE O TOPO. <br />
                <span className="text-gray-500">MAS A AGENDA É LIMITADA.</span>
            </h2>
            
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Mantemos um padrão de qualidade obsessivo, por isso não atendemos todo mundo. Selecionamos projetos onde sabemos que podemos gerar impacto real. <br/><br/>
                <span className="text-white">Não deixe para depois. Seu concorrente pode estar falando conosco agora.</span>
            </p>

            <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mb-12 relative"
            >
                <Button 
                    size="lg" 
                    className="relative bg-white text-black hover:bg-gray-200 text-lg px-12 py-8 font-bold tracking-widest uppercase shadow-2xl border-none"
                    onClick={triggerRdStationPopup}
                >
                    APLICAR PARA UMA PRODUÇÃO MOTIN
                </Button>
            </motion.div>

            <div className="flex flex-col md:flex-row justify-center gap-8 text-gray-400 text-sm font-mono border-t border-white/10 pt-8 w-full">
                <div className="flex items-center gap-2 justify-center hover:text-white transition-colors">
                    <MapPin className="w-4 h-4" /> Atuação Nacional: Onde houver negócios, nós vamos.
                </div>
            </div>
        </div>
    </section>
  );
}