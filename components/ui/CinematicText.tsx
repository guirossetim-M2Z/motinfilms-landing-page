'use client';

import React, { useState, useEffect, useMemo } from 'react';

// Definindo "Moods" (Climas) Cinematográficos.
// Cada objeto tem as classes Tailwind e um ID para controle.
const CINEMATIC_MOODS = [
  {
    id: 'final_cut',
    // Estilo: Título de cinema finalizado, branco puro, alto contraste e brilho.
    classes: "font-sans font-black tracking-wide uppercase text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]",
  },
  {
    id: 'raw_script',
    // Estilo: Roteiro técnico, cru, monocromático.
    classes: "font-mono font-medium tracking-tighter uppercase text-gray-400/80",
  },
  {
    id: 'vfx_layer',
    // Estilo: Pós-produção moderna, gradiente estilo "cyberpunk/holograma".
    classes: "font-sans font-bold uppercase bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent tracking-normal",
  },
  {
    id: 'director_note',
    // Estilo: Anotação do diretor, luz vermelha de gravação, clássico.
    classes: "font-serif italic font-light tracking-widest text-red-500 drop-shadow-[0_2px_4px_rgba(220,38,38,0.5)]",
  },
];

interface CinematicTextProps {
  text: string;
  className?: string;
  speed?: 'slow' | 'medium' | 'fast'; // Opção para controlar a velocidade geral
}

export const CinematicText: React.FC<CinematicTextProps> = ({ 
  text, 
  className = "",
  speed = 'medium'
}) => {
  const words = useMemo(() => text.split(" "), [text]);
  
  // Define a base de tempo para os intervalos
  const timeBase = speed === 'fast' ? 2500 : speed === 'slow' ? 5000 : 3000;

  return (
    // Usamos 'inline-block' e 'whitespace-pre-wrap' para manter o fluxo de texto natural
    <div className={`inline-block ${className}`}>
      {words.map((word, i) => (
        // Adicionamos um espaço após cada palavra, exceto a última
        <React.Fragment key={i}>
          <WordShifter word={word} timeBase={timeBase} />
          {i < words.length - 1 ? ' ' : ''}
        </React.Fragment>
      ))}
    </div>
  );
};

// Sub-componente que gerencia o estado e animação de CADA palavra
const WordShifter = ({ word, timeBase }: { word: string, timeBase: number }) => {
  const [moodIndex, setMoodIndex] = useState(0);
  // Estado crucial: estamos no meio de uma transição "flash"?
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Intervalo aleatório baseado na velocidade escolhida
    const randomInterval = Math.floor(Math.random() * timeBase) + (timeBase * 0.5);

    const intervalId = setInterval(() => {
      // 1. INÍCIO DA TRANSIÇÃO: Dispara o efeito visual (flash/blur)
      setIsTransitioning(true);

      // 2. TROCA DE ESTILO: Após um breve momento (o tempo do flash), troca o estilo real
      setTimeout(() => {
          setMoodIndex((prev) => (prev + 1) % CINEMATIC_MOODS.length);
          
          // 3. FIM DA TRANSIÇÃO: Remove o efeito de flash para revelar o novo estilo
          // Um pequeno timeout extra garante que o CSS processe a troca suavemente
          setTimeout(() => {
              setIsTransitioning(false);
          }, 150); 

      }, 300); // Duração do "flash" de transição (300ms)

    }, randomInterval);

    return () => clearInterval(intervalId);
  }, [timeBase]);

  const currentMood = CINEMATIC_MOODS[moodIndex];

  // Classes Base: necessárias para que as transformações CSS funcionem bem
  // 'inline-block' permite scale/transform. 'transform-gpu' força aceleração de hardware.
  const baseClasses = "inline-block transition-all transform-gpu relative origin-center";
  
  // A MÁGICA DA TRANSIÇÃO DE CINEMA:
  // Quando isTransitioning é true, aplicamos um "Film Burn" digital:
  // - duration-300: O flash é rápido.
  // - scale-110: Um leve zoom in para impacto.
  // - blur-[2px]: Desfoque de movimento.
  // - brightness-[2.5] saturate-50: O segredo. Estoura a luz e tira a saturação, parecendo um flash branco.
  const transitionEffect = isTransitioning
    ? "duration-300 ease-out scale-110 blur-[1px] brightness-[2.5] saturate-50 z-10" // Efeito de "Flash/Burn"
    : "duration-700 ease-in-out scale-100 blur-0 brightness-100 saturate-100 z-0"; // Estado normal (assenta suavemente)

  return (
    <span className={`${baseClasses} ${currentMood.classes} ${transitionEffect}`}>
      {word}
      
      {/* Efeito Extra Opcional: Aberração Cromática durante a transição */}
      {/* Cria um "fantasma" vermelho/ciano desalinhado durante o flash */}
      <span 
        aria-hidden="true" 
        className={`absolute inset-0 pointer-events-none select-none mix-blend-screen text-red-500 transition-opacity duration-300 ${isTransitioning ? 'opacity-70 translate-x-[2px]' : 'opacity-0 translate-x-0'}`}
      >
        {word}
      </span>
      <span 
         aria-hidden="true" 
         className={`absolute inset-0 pointer-events-none select-none mix-blend-screen text-cyan-300 transition-opacity duration-300 ${isTransitioning ? 'opacity-70 -translate-x-[2px]' : 'opacity-0 translate-x-0'}`}
      >
        {word}
       </span>

    </span>
  );
};

export default CinematicText;