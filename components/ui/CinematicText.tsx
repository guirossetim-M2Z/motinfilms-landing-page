'use client';

import React, { useState, useEffect, useMemo } from 'react';

// Estilos simplificados (sem filtros pesados no CSS base)
const CINEMATIC_MOODS = [
  {
    id: 'final_cut',
    classes: "font-sans font-black uppercase text-white tracking-wide",
  },
  {
    id: 'raw_script',
    classes: "font-mono font-medium uppercase text-gray-400 tracking-tighter",
  },
  {
    id: 'director_note',
    classes: "font-serif italic font-light text-red-500 tracking-widest",
  },
  {
    id: 'vfx_wireframe',
    // Usando outline simples ao invés de gradientes complexos se quiser performance máxima
    classes: "font-sans font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500", 
  },
];

interface CinematicTextProps {
  text: string;
  className?: string;
  speed?: 'slow' | 'medium' | 'fast';
}

export const CinematicText: React.FC<CinematicTextProps> = ({ 
  text, 
  className = "",
  speed = 'medium'
}) => {
  const words = useMemo(() => text.split(" "), [text]);
  const timeBase = speed === 'fast' ? 1500 : speed === 'slow' ? 4000 : 2500;

  return (
    <div className={`inline-block ${className}`}>
      {words.map((word, i) => (
        <React.Fragment key={i}>
          <WordShifter word={word} timeBase={timeBase} />
          {/* Espaço simples entre palavras */}
          {i < words.length - 1 ? ' ' : ''}
        </React.Fragment>
      ))}
    </div>
  );
};

const WordShifter = ({ word, timeBase }: { word: string, timeBase: number }) => {
  const [styleIndex, setStyleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Aumentamos levemente o tempo mínimo para reduzir a frequência de atualizações
    const randomInterval = Math.floor(Math.random() * timeBase) + (timeBase * 0.8);

    const intervalId = setInterval(() => {
      // 1. Apaga a palavra rápido (Corte seco)
      setIsVisible(false);

      // 2. Troca o estilo enquanto está invisível (50ms depois)
      setTimeout(() => {
        setStyleIndex((prev) => (prev + 1) % CINEMATIC_MOODS.length);
        
        // 3. Reaparece
        setIsVisible(true);
      }, 50);

    }, randomInterval);

    return () => clearInterval(intervalId);
  }, [timeBase]);

  const currentStyle = CINEMATIC_MOODS[styleIndex];

  return (
    <span 
      // 'will-change-opacity' avisa a GPU. 
      // duration-200 cria um fade in suave, sem pesar.
      className={`
        inline-block transition-opacity duration-200 ease-out will-change-[opacity]
        ${currentStyle.classes} 
        ${isVisible ? 'opacity-100' : 'opacity-0'}
      `}
    >
      {word}
    </span>
  );
};

export default CinematicText;