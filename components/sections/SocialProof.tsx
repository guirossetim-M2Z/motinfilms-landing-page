'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export function SocialProof() {
  const clientLogos = [
    { name: 'Mercedes-Benz', image: 'https://cdn.iconscout.com/icon/free/png-256/mercedes-benz-202879.png' },
    { name: 'AWA Comercial', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/AWA_Network_Logo.svg/1200px-AWA_Network_Logo.svg.png' }, // More appropriate placeholder
    { name: 'Ecoparque', image: 'https://cdn-icons-png.flaticon.com/512/3233/3233519.png' }, // Generic eco logo
    { name: 'Coca-Cola', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/1024px-Coca-Cola_logo.svg.png' },
    { name: 'Google', image: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' },
    { name: 'Nike', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png' },
    { name: 'Adidas', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1024px-Adidas_Logo.svg.png' },
    { name: 'Microsoft', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1200px-Microsoft_logo_%282012%29.svg.png' },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 10 } },
  };

  return (
    <motion.section
      className="py-20 px-4 bg-primary text-text"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto max-w-6xl text-center">
        <motion.h2 className="text-4xl md:text-5xl font-bold mb-12" variants={itemVariants}>
          Marcas que <span className="text-accent">confiam</span> em nosso olhar.
        </motion.h2>

        <motion.div
          className="relative w-full overflow-hidden mb-12"
          variants={itemVariants}
        >
          {/* Logo Carousel - Infinite scroll effect */}
          <div className="flex animate-scroll-logos py-4">
            {/* Duplicate clientLogos for a seamless infinite scroll effect */}
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-40 h-20 mx-8 flex items-center justify-center">
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="max-h-full max-w-full object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Global style for the scrolling animation */}
        <style jsx global>{`
          @keyframes scrollLogos {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%); /* Scrolls half the width of the duplicated logos */
            }
          }
          .animate-scroll-logos {
            animation: scrollLogos 30s linear infinite; /* Adjust duration for desired speed */
            width: fit-content; /* Allows content to be wider than its container */
            display: flex; /* Ensures items are in a row */
          }
        `}</style>

        <motion.div variants={itemVariants}>
          <Button
            size="lg"
            data-nt-ut-event='click'
            data-nt-ut-category='Social Proof Section'
            data-nt-ut-label='Quero Fazer Parte da Elite'
          >
            QUERO FAZER PARTE DA ELITE
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}