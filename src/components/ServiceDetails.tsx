import { Bus, Car, Check, Compass, Ticket, Users, type LucideIcon } from 'lucide-react';
import { media } from '@/config/media';
import { car, seater, sleeper } from '@/data/services';
import { BookButton } from './BookButton';
import { Chip } from './Chip';
import { FacilityList } from './FacilityList';
import { ImageSlot } from './ImageSlot';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

function Statement({ children }: { children: React.ReactNode }) {
  return (
    <Reveal className="mt-16">
      <blockquote className="max-w-4xl border-l-4 border-marigold pl-6 font-display text-2xl font-semibold leading-snug tracking-tight text-ink sm:pl-8 sm:text-3xl">
        {children}
      </blockquote>
    </Reveal>
  );
}

function FacilitiesPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-[1.75rem] border border-ink/10 bg-white p-7 shadow-soft sm:p-9">
      <h3 className="mb-6 text-2xl font-bold tracking-tight text-ink">{title}</h3>
      <FacilityList items={items} tone="light" />
    </div>
  );
}

const sleeperIcons: LucideIcon[] = [Ticket, Bus, Compass, Users];

/** Sleeper bus content. On the Services page it shows its own title; on its own page the hero carries it. */
export function SleeperDetails({ showTitle = true }: { showTitle?: boolean }) {
  return (
    <section id="sleeper-buses" className="section-y scroll-mt-20 bg-white">
      <div className="container-x">
        {showTitle && <SectionHeading title={sleeper.title} description={sleeper.subtitle} className="mb-14" />}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-14">
          <Reveal className="lg:col-span-5 lg:self-center">
            <div className="group">
              <ImageSlot
                {...media.sleeper}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="aspect-[4/3] rounded-[2rem] border border-ink/10 shadow-soft"
              />
            </div>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-7">
            {!showTitle && <p className="mb-3 text-xl font-semibold text-ink">{sleeper.subtitle}</p>}
            <p className="mb-8 text-lg leading-relaxed text-steel">{sleeper.description}</p>
            <FacilitiesPanel title="Sleeper Bus Facilities" items={sleeper.facilities} />
          </Reveal>
        </div>

        <div className="mt-20">
          <SectionHeading as="h3" title="Sleeper Bus Booking Options" />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {sleeper.bookingOptions.map((option, i) => {
              const Icon = sleeperIcons[i];
              return (
                <li key={option.title}>
                  <Reveal delay={i * 0.06} className="h-full">
                    <div className="group h-full rounded-3xl border border-ink/10 bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-marigold hover:shadow-lift">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-mist text-ink transition duration-300 group-hover:bg-marigold">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <h4 className="mt-6 text-xl font-bold tracking-tight text-ink">{option.title}</h4>
                      <p className="mt-2 leading-relaxed text-steel">{option.text}</p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>

        <Statement>{sleeper.statement}</Statement>
      </div>
    </section>
  );
}

export function SeaterDetails({ showTitle = true }: { showTitle?: boolean }) {
  return (
    <section id="seater-buses" className="section-y scroll-mt-20 bg-mist">
      <div className="container-x">
        {showTitle && <SectionHeading title={seater.title} className="mb-14" />}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-14">
          <Reveal delay={0.08} className="order-2 lg:order-1 lg:col-span-7">
            <p className="mb-8 text-lg leading-relaxed text-steel">{seater.description}</p>
            <FacilitiesPanel title="Seater Bus Facilities" items={seater.facilities} />
          </Reveal>
          <Reveal className="order-1 lg:order-2 lg:col-span-5 lg:self-center">
            <div className="group">
              <ImageSlot
                {...media.seater}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="aspect-[4/3] rounded-[2rem] border border-ink/10 shadow-soft"
              />
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-20">
          <div className="rounded-[2rem] bg-white p-7 shadow-soft sm:p-12">
            <h3 className="max-w-3xl text-balance text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              {seater.seatHeadline}
            </h3>
            <ul className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {seater.seatOptions.map((n) => (
                <li
                  key={n}
                  aria-label={`${n}-Seater`}
                  className="rounded-2xl border border-ink/10 bg-mist px-5 py-5 transition duration-300 hover:-translate-y-1 hover:border-marigold hover:bg-white"
                >
                  <span className="block font-display text-5xl font-extrabold leading-none tracking-tight text-ink">{n}</span>
                  <span className="mt-1.5 block text-sm font-semibold text-steel">-Seater</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 flex max-w-3xl items-start gap-3 text-lg leading-relaxed text-ink">
              <Bus className="mt-1 h-5 w-5 shrink-0 text-marigold-600" aria-hidden />
              {seater.seatNote}
            </p>
          </div>
        </Reveal>

        <div className="mt-20">
          <SectionHeading as="h3" title="Seater Bus Booking Options" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {seater.bookingOptions.map((option, i) => (
              <li key={option}>
                <Reveal delay={(i % 3) * 0.06}>
                  <div className="flex items-center gap-4 rounded-2xl border border-ink/10 bg-white px-5 py-4 transition duration-300 hover:border-marigold hover:shadow-soft">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink text-marigold">
                      <Check className="h-4 w-4" strokeWidth={3} aria-hidden />
                    </span>
                    <span className="font-semibold text-ink">{option}</span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        <Statement>{seater.statement}</Statement>
      </div>
    </section>
  );
}

export function CarDetails({ showTitle = true }: { showTitle?: boolean }) {
  return (
    <section id="car-rental" className="section-y scroll-mt-20 bg-white">
      <div className="container-x">
        {showTitle && <SectionHeading title={car.title} className="mb-14" />}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-14">
          <Reveal className="lg:col-span-5 lg:self-center">
            <div className="group">
              <ImageSlot
                {...media.car}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="aspect-[4/3] rounded-[2rem] border border-ink/10 shadow-soft"
              />
            </div>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-7">
            <p className="mb-8 text-lg leading-relaxed text-steel">{car.description}</p>
            <h3 className="mb-5 text-2xl font-bold tracking-tight text-ink">Car Options Available</h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {car.options.map((option) => (
                <li
                  key={option}
                  className="flex items-center gap-4 rounded-2xl border border-ink/10 bg-mist px-5 py-4 transition duration-300 hover:border-marigold hover:bg-white"
                >
                  <Car className="h-5 w-5 shrink-0 text-marigold-600" aria-hidden />
                  <span className="font-semibold text-ink">{option}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 leading-relaxed text-steel">{car.optionsNote}</p>
          </Reveal>
        </div>

        <div className="mt-20">
          <SectionHeading as="h3" title="Perfect For" />
          <Reveal delay={0.05}>
            <ul className="mt-8 flex flex-wrap gap-3">
              {car.perfectFor.map((item) => (
                <li key={item}>
                  <Chip tone="light">{item}</Chip>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="mt-20">
          <div className="grid overflow-hidden rounded-[2rem] border border-ink/10 bg-mist lg:grid-cols-2">
            <div className="group">
              <ImageSlot
                {...media.wedding}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="aspect-[4/3] h-full lg:aspect-auto lg:min-h-[24rem]"
              />
            </div>
            <div className="p-8 sm:p-12">
              <h3 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{car.wedding.title}</h3>
              <p className="mt-4 text-lg leading-relaxed text-steel">{car.wedding.text}</p>
              <p className="mt-6 font-semibold text-marigold-700">{car.wedding.intro}</p>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {car.wedding.audiences.map((a) => (
                  <li key={a}>
                    <Chip tone="light">{a}</Chip>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <BookButton preset={{ vehicle: 'car' }} size="lg" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
