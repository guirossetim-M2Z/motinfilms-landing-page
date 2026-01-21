import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { SocialProof } from '@/components/sections/SocialProof';
import { Gallery } from '@/components/sections/Gallery';
import { CallToAction } from '@/components/sections/CallToAction';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-primary">
      <Hero />
      <Features />
      <SocialProof />
      <Gallery />
      <CallToAction />
    </main>
  );
}