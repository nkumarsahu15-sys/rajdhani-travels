import { ContactSection } from '@/components/ContactSection';
import { EnquiryForm } from '@/components/EnquiryForm';
import { MapSection } from '@/components/MapSection';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Contact Rajdhani Travels',
  description:
    'Call, WhatsApp or send an enquiry to Rajdhani Travels. Head office: 5A Hamirpur Road, Naubasta, Kanpur, Uttar Pradesh.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Rajdhani Travels" subtitle="Sleeper & Seater Buses Available. Car Rental Also Available." />
      <ContactSection />
      <section className="section-y bg-mist">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <SectionHeading
            title="Send an enquiry"
            description="Fill in your requirement and send it to Rajdhani Travels on WhatsApp."
            className="lg:col-span-4"
          />
          <Reveal delay={0.06} className="lg:col-span-8">
            <div className="rounded-[2rem] bg-white p-6 shadow-soft sm:p-10">
              <EnquiryForm />
            </div>
          </Reveal>
        </div>
      </section>
      <MapSection />
    </>
  );
}
