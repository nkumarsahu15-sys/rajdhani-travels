import { Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { bookFor } from '@/data/services';
import { telUrl, whatsappUrl } from '@/lib/utils';
import { BookButton } from './BookButton';
import { Button } from './Button';
import { Chip } from './Chip';
import { Reveal } from './Reveal';
import { WhatsAppIcon } from './icons';

/** "Planning a Trip?" call-to-action. Reused on Home and the service pages. */
export function CtaSection() {
  return (
    <section className="relative overflow-hidden border-t border-ink/10 bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(50%_80%_at_0%_100%,rgba(244,163,0,0.16),transparent)]" />
      <div className="container-x section-y relative grid gap-14 lg:grid-cols-12 lg:items-center">
        <Reveal className="lg:col-span-7">
          <h2 className="text-balance text-5xl font-extrabold leading-[1] tracking-tight text-ink sm:text-6xl">
            Planning a Trip?
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-steel">
            Whether you need a Sleeper Bus, Seater Bus or Car, Rajdhani Travels has transportation options for your
            requirement.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <BookButton size="lg" />
            <Button href={telUrl(siteConfig.phones.booking.tel)} variant="outline" size="lg" icon={<Phone className="h-4 w-4" aria-hidden />}>
              CALL NOW
            </Button>
            <Button
              href={whatsappUrl(siteConfig.primaryWhatsapp, siteConfig.whatsappGreeting)}
              variant="whatsapp"
              size="lg"
              icon={<WhatsAppIcon />}
            >
              WHATSAPP
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-5">
          <h3 className="mb-4 text-lg font-semibold text-ink">Book for</h3>
          <ul className="flex flex-wrap gap-2.5">
            {bookFor.map((item) => (
              <li key={item}>
                <Chip tone="light">{item}</Chip>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
