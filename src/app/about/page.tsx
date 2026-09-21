import Link from 'next/link';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { car, seater, sleeper } from '@/data/services';
import { CtaSection } from '@/components/CtaSection';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'About Rajdhani Travels',
  description:
    'Rajdhani Travels provides comfortable and reliable transportation solutions for individuals, families, groups, tourists, businesses, weddings and events from Naubasta, Kanpur.',
  path: '/about',
});

const offers = [
  { href: sleeper.slug, title: sleeper.name, text: sleeper.subtitle },
  { href: seater.slug, title: seater.name, text: seater.seatHeadline },
  { href: car.slug, title: car.name, text: car.description },
];

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Rajdhani Travels" subtitle={siteConfig.slogan} />

      <section className="section-y bg-white">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="text-balance font-display text-3xl font-semibold leading-snug tracking-tight text-ink sm:text-4xl">
              {siteConfig.description}
            </p>
            {siteConfig.aboutStory && (
              <p className="mt-8 max-w-2xl whitespace-pre-line text-lg leading-relaxed text-steel">{siteConfig.aboutStory}</p>
            )}
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-5">
            <div className="rounded-[2rem] border border-ink/10 bg-mist p-8 text-ink sm:p-10">
              <p className="font-display text-2xl font-bold tracking-wide text-marigold-700">{siteConfig.wordmark}</p>
              <p className="mt-2 text-steel">{siteConfig.footerServices}</p>
              <p className="mt-8 flex items-start gap-3 text-steel">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-marigold" aria-hidden />
                <span>
                  <span className="block font-semibold text-ink">Head Office</span>
                  {siteConfig.address.full}
                </span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-mist">
        <div className="container-x">
          <ul className="grid gap-5 md:grid-cols-3">
            {offers.map((o, i) => (
              <li key={o.href}>
                <Reveal delay={i * 0.07} className="h-full">
                  <Link
                    href={o.href}
                    className="group flex h-full flex-col justify-between gap-8 rounded-3xl bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift"
                  >
                    <div>
                      <h2 className="text-2xl font-bold tracking-tight text-ink">{o.title}</h2>
                      <p className="mt-3 line-clamp-4 leading-relaxed text-steel">{o.text}</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 font-semibold text-ink">
                      View details
                      <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
