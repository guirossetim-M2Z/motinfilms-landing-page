import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import dynamic from 'next/dynamic';

// Otimização: Carrega o script do RD Station apenas no lado do cliente (navegador)
// ssr: false garante que o servidor não perca tempo processando isso.

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
      <link rel="preconnect" href="https://images.unsplash.com" />
      <link rel="preconnect" href="https://popups.rdstation.com.br" />
      <body className={`${inter.variable} font-sans`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}