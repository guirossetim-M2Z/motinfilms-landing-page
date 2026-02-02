import { LandingPage1Template } from '@/components/templates/LandingPage1';
import { notFound } from 'next/navigation';

type PageProps = {
  params: Promise<{ slug: string }>;
};

// Função auxiliar para limpar o slug e pegar um nome de cidade "bonito"
function formatCityName(slug: string) {
  // Remove termos comuns para limpar o nome
  let cleanName = slug
    .replace('produtora-audiovisual-', '')
    .replace('produtora-', '')
    .replace('audiovisual-', '');

  // Transforma "rio-de-janeiro" em "Rio De Janeiro"
  return cleanName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  if (!slug) return {};

  const cityName = formatCityName(slug);

  return {
    title: `Produtora Audiovisual em ${cityName} | Motin Films`,
    description: `A Motin Films atende ${cityName} e todo o Brasil com produções cinematográficas de alto nível.`,
  };
}

export default async function Lp2CityPage({ params }: PageProps) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  // AQUI ESTAVA O BLOQUEIO: Removi o "if (!startsWith...)"
  // Agora ele aceita qualquer URL e tenta extrair a cidade dela.
  const cityName = formatCityName(slug);

  return <LandingPage1Template city={cityName} />;
}