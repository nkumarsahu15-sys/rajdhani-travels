import { Armchair, Layers, Snowflake, Ticket, Compass, Sparkles, Users, type LucideIcon } from 'lucide-react';
import { whyChoose } from '@/data/services';
import { cn } from '@/lib/utils';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const icons: LucideIcon[] = [Armchair, Layers, Snowflake, Ticket, Compass, Sparkles, Users];

export function WhyChoose() {
  return (
    <section className="section-y bg-mist">
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading title="Why Choose Rajdhani Travels?" />
          </div>
        </div>
        <ul className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
          {whyChoose.map((item, i) => {
            const Icon = icons[i];
            const last = i === whyChoose.length - 1;
            return (
              <li key={item.title} className={cn(last && 'sm:col-span-2')}>
                <Reveal delay={(i % 2) * 0.08}>
                  <div className="group flex gap-5 border-t border-ink/15 py-8">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-ink text-marigold transition duration-300 group-hover:-translate-y-1 group-hover:bg-marigold group-hover:text-ink">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-ink">{item.title}</h3>
                      <p className="mt-2 max-w-md leading-relaxed text-steel">{item.text}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
