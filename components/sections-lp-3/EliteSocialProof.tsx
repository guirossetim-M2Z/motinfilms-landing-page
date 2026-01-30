'use client';

import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

const logos = [
  'Mercedes Benz', 'Sony', 'Warner Pictures', 'Unimed', 'Itaipu'
  // Use imagens reais aqui, coloquei texto apenas para estrutura
];

export function EliteSocialProof() {
  return (
    <section className="relative py-24 bg-[#050505] border-y border-white/5">
      <div className="container mx-auto max-w-7xl px-4 md:px-8 text-center">
        
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-white">
            QUEM LIDERA O MERCADO JÁ ENTENDEU. <br />
            <span className="text-gray-500">E VOCÊ?</span>
        </h2>
        
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-black p-8 md:p-12 border border-white/10 rounded-2xl relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <TrendingUp className="w-24 h-24 text-white" />
            </div>
            
            <p className="text-xl md:text-3xl font-medium text-white mb-6 relative z-10 leading-snug">
                "O resultado foi tão acima da média que tivemos que reestruturar nosso time comercial para atender a demanda."
            </p>
            
            <div className="h-[1px] w-20 bg-red-500 mx-auto mb-4"></div>
            <p className="text-gray-400 font-mono text-sm uppercase tracking-widest">Depoimento de Parceiro Corporativo</p>
        </motion.div>

        <p className="mt-12 text-gray-500 text-lg">
            Você vai continuar assistindo ao sucesso deles ou <span className="text-white border-b border-white cursor-pointer">vai construir o seu?</span>
        </p>

      </div>
    </section>
  );
}