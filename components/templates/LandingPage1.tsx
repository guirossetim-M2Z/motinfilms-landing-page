'use client'
import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { SocialProof } from '@/components/sections/SocialProof';
import { Gallery } from '@/components/sections/Gallery';
import { CallToAction } from '@/components/sections/CallToAction';
import { TrackView } from 'ninetwo-user-tracking';
import { OurNumbers } from '@/components/sections/OurNumbers';
import { Solutions } from '@/components/sections/Solutions';
import { AncineLicense } from '@/components/sections/AncineLicense';
import { BonusFormats } from '@/components/sections/BonusFormats';
import { Methodology } from '@/components/sections/Methodology';
import { Testimonials } from '@/components/sections/Testimonials';
import { NationalCoverageV2 } from '@/components/sections/national-coverage-v2/NationalCoverageV2';


// Aceita uma prop "city" opcional, caso queira personalizar o texto no futuro
interface LandingPage1Props {
  city?: string;
}

export function LandingPage1Template({ city }: LandingPage1Props) {
  const locationText = city ? `em ${city}` : "Nacional";
  return (
    <main className="min-h-screen bg-[#050505]">

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
        eventName="nossos_numeros_view"
        category="Nossos Numeros Section"
        label="Visualização de nossos numeros"
        threshold={0.5}
      >
        <OurNumbers />
      </TrackView>


      <TrackView
        eventName="portfolio_view"
        category="Portfólio Section"
        label="Visualização do portfólio"
        threshold={0.5}
      >
        <SocialProof />
      </TrackView>


      <NationalCoverageV2 />


      <TrackView
        eventName="gallery_view"
        category="Galeria Section"
        label="Visualização da Galeria"
        threshold={0.5}
      >
        <Gallery />
      </TrackView>

      <CallToAction />

      <TrackView
        eventName="solutions_view"
        category="Solutions Section"
        label="Seção Soluções"
        threshold={0.5}
      >
        <Solutions />
      </TrackView>

      <AncineLicense />

      <TrackView
        eventName="bonus_formats_view"
        category="Bonus Formats Section"
        label="Seção Amplie o seu alcance"
        threshold={0.5}
      >
        <BonusFormats />
      </TrackView>


      <TrackView
        eventName="methodology_and_testimonials_view"
        category="Methodology And Testimonials Section"
        label="Seção Nossa metodologia"
        threshold={0.5}
      >
        <Methodology />
      </TrackView>


      <TrackView
        eventName="testimonials_view"
        category="Testimonials Section"
        label="Seção Depoimentos"
        threshold={0.5}
      >
        <Testimonials />
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

