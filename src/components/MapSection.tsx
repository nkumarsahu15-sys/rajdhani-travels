import { MapPin } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Button } from './Button';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

/**
 * Location section. Add the official Google Maps link / embed URL in
 * siteConfig.map - until then a neutral placeholder is displayed.
 */
export function MapSection() {
  const { link, embedUrl } = siteConfig.map;
  return (
    <section className="section-y bg-white">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-4">
          <SectionHeading title="Find us" description="Visit the Rajdhani Travels head office." />
          <Reveal delay={0.1}>
            <address className="mt-8 flex gap-3 text-lg not-italic leading-relaxed text-ink">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-marigold-600" aria-hidden />
              {siteConfig.address.full}
            </address>
            <div className="mt-7">
              <Button
                href={link || undefined}
                disabled={!link}
                variant="dark"
                icon={<MapPin className="h-4 w-4" aria-hidden />}
                title={link ? undefined : 'Map link coming soon'}
              >
                OPEN IN GOOGLE MAPS
              </Button>
              {!link && <p className="mt-3 text-sm text-steel">Map link coming soon.</p>}
            </div>
          </Reveal>
        </div>
        <Reveal className="lg:col-span-8" delay={0.05}>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-ink/10 bg-mist shadow-soft">
            {embedUrl ? (
              <iframe
                src={embedUrl}
                title="Rajdhani Travels head office location"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
              />
            ) : (
              <div role="img" aria-label="Map placeholder for the Rajdhani Travels head office" className="absolute inset-0">
                <svg viewBox="0 0 800 500" className="h-full w-full" aria-hidden preserveAspectRatio="xMidYMid slice">
                  <rect width="800" height="500" fill="#EEF1F5" />
                  <g stroke="#D3DAE3" strokeWidth="14" fill="none" strokeLinecap="round">
                    <path d="M-20 340 L820 220" />
                    <path d="M180 -20 L300 520" />
                    <path d="M560 -20 L500 520" />
                    <path d="M-20 120 L820 90" />
                  </g>
                  <g stroke="#FFFFFF" strokeWidth="6" fill="none" strokeLinecap="round">
                    <path d="M-20 340 L820 220" />
                    <path d="M180 -20 L300 520" />
                    <path d="M560 -20 L500 520" />
                    <path d="M-20 120 L820 90" />
                  </g>
                  <g transform="translate(340 200)">
                    <path d="M0 -70 C-38 -70 -62 -42 -62 -10 C-62 30 0 90 0 90 C0 90 62 30 62 -10 C62 -42 38 -70 0 -70 Z" fill="#0A1A2F" />
                    <circle cx="0" cy="-12" r="22" fill="#F4A300" />
                  </g>
                </svg>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
