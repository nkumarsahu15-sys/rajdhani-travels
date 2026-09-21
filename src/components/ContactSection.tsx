import { MapPin, Phone } from 'lucide-react';
import { siteConfig, type PhoneContact } from '@/config/site';
import { telUrl, whatsappUrl } from '@/lib/utils';
import { Button } from './Button';
import { Reveal } from './Reveal';
import { WhatsAppIcon } from './icons';

function ContactCard({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-ink/10 bg-mist p-6 transition duration-300 hover:border-marigold hover:bg-white hover:shadow-soft sm:p-7">
      <div className="flex items-center gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-marigold text-ink">{icon}</span>
        <h3 className="text-lg font-semibold text-ink">{title}</h3>
      </div>
      <div className="mt-5">{children}</div>
    </div>
  );
}

function PhoneCard({ contact }: { contact: PhoneContact }) {
  return (
    <ContactCard icon={<Phone className="h-5 w-5" aria-hidden />} title={contact.label}>
      <a
        href={telUrl(contact.tel)}
        className="font-display text-3xl font-bold tracking-wide text-ink transition hover:text-marigold-700 sm:text-4xl"
      >
        {contact.display}
      </a>
      <div className="mt-5 flex flex-wrap gap-3">
        <Button href={telUrl(contact.tel)} variant="primary" icon={<Phone className="h-4 w-4" aria-hidden />}>
          CALL NOW
        </Button>
        <Button
          href={whatsappUrl(contact.whatsapp, siteConfig.whatsappGreeting)}
          variant="whatsapp"
          icon={<WhatsAppIcon />}
        >
          WHATSAPP
        </Button>
      </div>
    </ContactCard>
  );
}

export function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(45%_60%_at_0%_0%,rgba(244,163,0,0.13),transparent)]" />
      <div className="container-x section-y relative grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <h2 className="text-balance text-5xl font-extrabold leading-[1.02] tracking-tight text-ink sm:text-6xl">
            Book Your Journey Today
          </h2>
          <p className="mt-8 font-display text-2xl font-bold tracking-wide text-marigold-700">{siteConfig.wordmark}</p>
          <ul className="mt-3 space-y-1.5 text-lg text-steel">
            <li>Sleeper &amp; Seater Buses Available</li>
            <li>Car Rental Also Available</li>
          </ul>
        </Reveal>
        <div className="grid gap-5 lg:col-span-7">
          <Reveal>
            <PhoneCard contact={siteConfig.phones.booking} />
          </Reveal>
          <Reveal delay={0.06}>
            <PhoneCard contact={siteConfig.phones.urbania} />
          </Reveal>
          <Reveal delay={0.12}>
            <ContactCard icon={<MapPin className="h-5 w-5" aria-hidden />} title="Head Office">
              <address className="text-lg not-italic leading-relaxed text-ink">{siteConfig.address.full}</address>
            </ContactCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
