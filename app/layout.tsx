import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import RDStationScript from '@/components/integrations/RDStationScript';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'Motin Films - Eleve o Nível da Sua Marca',
  description: 'Filmes que comunicam, emocionam e geram resultados. Produção audiovisual de alto impacto para marcas que desejam se destacar.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} font-sans`}>
        <Providers>
          {children}
        </Providers>
        <RDStationScript />
      </body>
    </html>
  );
}