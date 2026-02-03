'use client';

import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

// Otimização: Separa a lib de tracking do bundle principal.
// NOTA: Não usamos 'ssr: false' aqui porque ele envolve os {children}.
// Se desligar o SSR aqui, você mata o SEO do site inteiro.

const RDStationScript = dynamic(() => import('@/lib/RDStationScript'), {
  ssr: false,
});

const TrackingProvider = dynamic(
  () => import('ninetwo-user-tracking').then((mod) => mod.TrackingProvider)
);

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <TrackingProvider gtmId="GTM-MMXG7WK" debug>
      {children}

      <RDStationScript />
    </TrackingProvider>
  );
}