import { CtaSection } from '@/components/CtaSection';
import { Gallery } from '@/components/Gallery';
import { PageHero } from '@/components/PageHero';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Gallery',
  description:
    'Gallery of Rajdhani Travels sleeper buses, seater buses, cars, interiors, travel and wedding & event transportation.',
  path: '/gallery',
});

export default function GalleryPage() {
  return (
    <>
      <PageHero title="Gallery" subtitle="Sleeper buses, seater buses, cars, interiors, travel, and weddings & events." />
      <section className="section-y bg-white">
        <div className="container-x">
          <Gallery />
        </div>
      </section>
      <CtaSection />
    </>
  );
}
