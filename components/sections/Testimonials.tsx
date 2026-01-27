'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Ficamos super satisfeitos com a produção. Vídeo principal, vídeos de performance bônus, show. Atendimento, suporte, grupo com profissionais pré, durante e pós evento. Já os temos como prioridade.",
    author: "Diretoria ENAF",
    role: "Evento Nacional",
    rating: 5
  },
  {
    quote: "A nossa minissérie 'Escolar pelo Brasil' contou a história de 10 papelarias e foi inspirador. Agradecemos imensamente ao excelente trabalho da Motin Films e todo o cuidado que tiveram com esse projeto tão especial.",
    author: "Escolar Office Brasil",
    role: "Feira de Negócios",
    rating: 5
  },
  {
    quote: "Ficamos bem contentes com o resultado e com o trabalho de toda a equipe. Conseguiram pegar ótimos takes e prestaram suporte, sempre que necessário. Todos estão de parabéns.",
    author: "Parceiro Corporativo",
    role: "Confidencial",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Borders */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/5">
        <motion.div animate={{ x: ['-100%', '100%'] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="w-1/2 h-full bg-gradient-to-r from-transparent via-red-500 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/5">
        <motion.div animate={{ x: ['100%', '-100%'] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="w-1/2 h-full bg-gradient-to-r from-transparent via-red-500 to-transparent" />
      </div>

      {/* CONTAINER PADRONIZADO (max-w-7xl) */}
      <div className="container mx-auto max-w-7xl px-4 md:px-8 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            RESULTADOS <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-700">COMPROVADOS</span>
          </h2>
          <p className="font-mono text-xs text-gray-500 uppercase tracking-widest">
            Por quem mais entende
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative bg-[#050505] border border-white/10 p-8 rounded-sm hover:border-white/20 hover:bg-white/5 transition-all duration-300 group"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5 group-hover:text-red-900/20 transition-colors" />
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, starIdx) => (
                  <Star key={starIdx} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed italic mb-8 relative z-10">"{t.quote}"</p>
              <div className="mt-auto flex items-center gap-4 border-t border-white/5 pt-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center font-bold text-xs text-white border border-white/10">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{t.author}</h4>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}