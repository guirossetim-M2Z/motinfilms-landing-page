// components/RDStationScript.tsx
import Script from 'next/script'

export default function RDStationScript() {
  return (
    <Script
      id="rd-station-loader"
      src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/11c7dc74-1a5c-4f2e-a40a-b5824fed51b0-loader.js"
      strategy="afterInteractive"
    />
  )
}