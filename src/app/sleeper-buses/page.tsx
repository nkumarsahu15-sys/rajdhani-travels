import { Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { sleeper } from '@/data/services';
import { telUrl } from '@/lib/utils';
import { BookButton } from '@/components/BookButton';
import { Button } from '@/components/Button';
import { CtaSection } from '@/components/CtaSection';
import { PageHero } from '@/components/PageHero';
import { SleeperDetails } from '@/components/ServiceDetails';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Luxury Sleeper Buses',
  description:
    'AC & Non-AC Sleeper Buses from Rajdhani Travels, Kanpur. Ticket booking, full bus rental, tourist booking and private group travel.',
  path: '/sleeper-buses',
});

export default function SleeperBusesPage() {
  return (
    <>
      <PageHero title={sleeper.title} subtitle={sleeper.subtitle}>
        <BookButton size="lg" preset={{ vehicle: 'sleeper' }} />
        <Button href={telUrl(siteConfig.phones.booking.tel)} variant="outline" size="lg" icon={<Phone className="h-4 w-4" aria-hidden />}>
          CALL NOW
        </Button>
      </PageHero>
      <SleeperDetails showTitle={false} />
      <CtaSection />
    </>
  );
}
