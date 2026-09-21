import { Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { media } from '@/config/media';
import { car, seater, sleeper } from '@/data/services';
import { telUrl, whatsappUrl } from '@/lib/utils';
import { BookButton } from '@/components/BookButton';
import { Button } from '@/components/Button';
import { ContactSection } from '@/components/ContactSection';
import { CtaSection } from '@/components/CtaSection';
import { DestinationBoard } from '@/components/DestinationBoard';
import { HeroVisual } from '@/components/HeroVisual';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceOverviewCard } from '@/components/ServiceOverviewCard';
import { DiscountBanner, InstagramSection } from '@/components/SocialSection';
import { WhyChoose } from '@/components/WhyChoose';
import { WhatsAppIcon } from '@/components/icons';

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_85%_10%,rgba(244,163,0,0.14),transparent)]" />
        <div className="container-x relative grid gap-14 py-14 sm:py-20 lg:grid-cols-12 lg:items-center lg:py-24">
          <div className="lg:col-span-7">
            <h1 className="text-[length:clamp(3rem,9vw,7rem)] font-extrabold leading-[0.92] tracking-tight text-ink">
              RAJDHANI
              <br /> TRAVELS
            </h1>
            <p className="mt-8 text-xl font-semibold text-ink sm:text-2xl">{siteConfig.tagline}</p>
            <p className="mt-2 text-xl font-semibold text-marigold-700 sm:text-2xl">{siteConfig.slogan}</p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-steel">{siteConfig.description}</p>
            <div className="mt-10 flex flex-wrap gap-3">
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
          </div>
          <div className="lg:col-span-5">
            <HeroVisual item={media.hero} />
          </div>
        </div>
      </section>
      <DestinationBoard />

      <section className="section-y bg-white">
        <div className="container-x">
          <SectionHeading
            title="Our transportation options"
            description="Choose from Sleeper Buses, Seater Buses and Cars."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:grid-rows-2">
            <Reveal className="lg:col-span-7 lg:row-span-2">
              <ServiceOverviewCard
                layout="feature"
                href={sleeper.slug}
                title={sleeper.title}
                text={sleeper.subtitle}
                tags={sleeper.bookingOptions.map((o) => o.title)}
                media={media.sleeper}
                className="h-full"
              />
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-5">
              <ServiceOverviewCard href={seater.slug} title={seater.title} text={seater.seatHeadline} media={media.seater} className="h-full" />
            </Reveal>
            <Reveal delay={0.16} className="lg:col-span-5">
              <ServiceOverviewCard href={car.slug} title={car.title} text={car.description} media={media.car} className="h-full" />
            </Reveal>
          </div>
        </div>
      </section>

      <WhyChoose />
      <CtaSection />

      <section className="section-y bg-mist">
        <div className="container-x space-y-8">
          <InstagramSection />
          <DiscountBanner />
        </div>
      </section>

      <ContactSection />
    </>
  );
}
