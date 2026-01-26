'use client'
import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { SocialProof } from '@/components/sections/SocialProof';
import { Gallery } from '@/components/sections/Gallery';
import { CallToAction } from '@/components/sections/CallToAction';
import { TrackView } from 'ninetwo-user-tracking';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-primary">
      <Hero />

      <TrackView
        eventName="features_view"
        category="Destaque Section"
        label="Visualização de destaques"
        threshold={0.5}
      >
        <Features />
      </TrackView>

      <TrackView
        eventName="portfolio_view"
        category="Portfólio Section"
        label="Visualização do portfólio"
        threshold={0.5}
      >
        <SocialProof />
      </TrackView>


      <TrackView
        eventName="gallery_view"
        category="Galeria Section"
        label="Visualização da Galeria"
        threshold={0.5}
      >
        <Gallery />
      </TrackView>

      <TrackView
        eventName="call_to_action_view"
        category="Call to Action Section"
        label="Pedir Diagnostico Gratuito"
        threshold={0.5}
      >
        <CallToAction />
      </TrackView>
    </main>
  );
}