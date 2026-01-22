'use client';

import { RDPopupConversionListener } from '@/components/integrations/RDPopupConversionListener';
import { TrackingProvider } from 'ninetwo-user-tracking';
import { ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  // Assuming the ninetwo-user-tracking library is configured to pick up a TRACKING_ID
  // from environment variables or through its own internal setup.
  // The plan did not provide a specific TrackingID to pass here.
  return (
    <TrackingProvider gtmId="G-XE9HVWPVF1" debug>
      {children}
      <RDPopupConversionListener />
    </TrackingProvider>
  );
}