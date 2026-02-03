'use client';

import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import Image from 'next/image'; // 1. Importação do Next Image

export function AncineLicense() {
    return (
        <section className="relative h-[200px] md:h-[240px] flex items-center justify-center overflow-hidden border-y border-white/10 group bg-[#050505]">

            {/* --- BACKGROUND OTIMIZADO --- */}
            {/* 2. Wrapper motion.div para fazer a animação de Scale */}
            <motion.div
                className="absolute inset-0 z-0"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 10, ease: "linear" }}
            >
                <Image
                    src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?..."
                    alt="Cinema Background"
                    fill
                    className="object-cover opacity-30"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 720px" // Ajusta para o tamanho real exibido
                    priority // Adicione priority se esta imagem for parte do LCP
                />
            </motion.div>

            {/* Overlays de Gradiente (z-0 para ficar junto com o fundo, mas acima da imagem) */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60 z-0 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-900/10 to-transparent mix-blend-screen pointer-events-none z-0"></div>

            {/* --- SCANNER EFFECT --- */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 z-0">
                <motion.div
                    animate={{ top: ['-10%', '110%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 w-full h-[2px] bg-red-500 shadow-[0_0_20px_rgba(239,68,68,1)]"
                />
            </div>

            {/* --- CONTEÚDO PADRONIZADO (max-w-7xl) --- */}
            <div className="relative z-10 container mx-auto max-w-7xl px-4 md:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-12">

                {/* Lado Esquerdo */}
                <div className="flex items-center gap-4">
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className="p-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-md"
                    >
                        <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </motion.div>

                    <div className="text-center md:text-left">
                        <p className="font-mono text-[10px] md:text-xs text-red-500 uppercase tracking-[0.3em] mb-1">
                            Certified Production
                        </p>
                        <h3 className="text-xl md:text-3xl font-bold text-white tracking-wide">
                            PRODUTORA <span className="text-gray-400">LICENCIADA</span>
                        </h3>
                    </div>
                </div>

                {/* Divisor */}
                <div className="hidden md:block w-[1px] h-12 bg-white/10"></div>

                {/* Lado Direito */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative p-4 rounded-lg"
                >
                    <div className="absolute inset-0 bg-white/5 blur-xl rounded-full pointer-events-none"></div>
                    {/* Também otimizei o logo da Ancine */}
                    <div className="relative h-14 md:h-20 w-32 md:w-48">
                        <Image
                            src="/images/ancine-logo-1.png"
                            alt="Logo Ancine"
                            fill
                            className="object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                            sizes="(max-width: 768px) 150px, 200px"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}