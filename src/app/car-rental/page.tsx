import { Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { car } from '@/data/services';
import { telUrl } from '@/lib/utils';
import { BookButton } from '@/components/BookButton';
import { Button } from '@/components/Button';
import { CtaSection } from '@/components/CtaSection';
import { PageHero } from '@/components/PageHero';
import { CarDetails } from '@/components/ServiceDetails';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Car Rental',
  description:
    'Cars available on rent from Rajdhani Travels, Kanpur: 5-seater, 7-seater, luxury and premium cars for family travel, outstation trips, weddings and special events.',
  path: '/car-rental',
});

export default function CarRentalPage() {
  return (
    <>
      <PageHero title={car.title} subtitle={car.description}>
        <BookButton size="lg" preset={{ vehicle: 'car' }} />
        <Button href={telUrl(siteConfig.phones.booking.tel)} variant="outline" size="lg" icon={<Phone className="h-4 w-4" aria-hidden />}>
          CALL NOW
        </Button>
      </PageHero>
      <CarDetails showTitle={false} />
      <CtaSection />
    </>
  );
}
