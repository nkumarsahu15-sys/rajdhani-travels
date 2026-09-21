import { Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { seater } from '@/data/services';
import { telUrl } from '@/lib/utils';
import { BookButton } from '@/components/BookButton';
import { Button } from '@/components/Button';
import { CtaSection } from '@/components/CtaSection';
import { PageHero } from '@/components/PageHero';
import { SeaterDetails } from '@/components/ServiceDetails';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Luxury AC & Non-AC Seater Buses',
  description:
    'Seater buses from 16-Seater to 56-Seater for groups, tours, weddings, school & college trips and corporate travel. Rajdhani Travels, Kanpur.',
  path: '/seater-buses',
});

export default function SeaterBusesPage() {
  return (
    <>
      <PageHero title={seater.title} subtitle={seater.seatHeadline}>
        <BookButton size="lg" preset={{ vehicle: 'seater' }} />
        <Button href={telUrl(siteConfig.phones.booking.tel)} variant="outline" size="lg" icon={<Phone className="h-4 w-4" aria-hidden />}>
          CALL NOW
        </Button>
      </PageHero>
      <SeaterDetails showTitle={false} />
      <CtaSection />
    </>
  );
}
