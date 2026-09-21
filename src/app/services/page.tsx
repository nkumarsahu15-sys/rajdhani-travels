import { CtaSection } from '@/components/CtaSection';
import { PageHero } from '@/components/PageHero';
import { CarDetails, SeaterDetails, SleeperDetails } from '@/components/ServiceDetails';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Our Services',
  description:
    'Sleeper Buses, Seater Buses and Car Rental from Rajdhani Travels, Naubasta, Kanpur. Ticket booking, full bus rental, tourist trips, group travel and weddings.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Our Services" subtitle="Choose from Sleeper Buses, Seater Buses and Cars." />
      <SleeperDetails />
      <SeaterDetails />
      <CarDetails />
      <CtaSection />
    </>
  );
}
