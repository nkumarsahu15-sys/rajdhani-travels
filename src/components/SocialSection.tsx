import { siteConfig } from '@/config/site';
import { socialFollow } from '@/data/services';
import { Chip } from './Chip';
import { Reveal } from './Reveal';
import { SocialButton } from './SocialButton';
import { InstagramIcon } from './icons';

/** "Follow Now on Instagram" card. */
export function InstagramSection() {
  return (
    <Reveal>
      <div className="relative overflow-hidden rounded-[2rem] border border-ink/10 bg-white px-7 py-12 shadow-soft sm:px-12 sm:py-16">
        <div aria-hidden className="absolute -right-16 -top-24 h-72 w-72 rounded-full border border-marigold/25" />
        <div aria-hidden className="absolute -right-4 -top-12 h-72 w-72 rounded-full border border-ink/10" />
        <div className="relative max-w-2xl">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-marigold text-ink">
            <InstagramIcon className="h-7 w-7" />
          </span>
          <h2 className="mt-7 text-balance text-4xl font-bold tracking-tight text-ink sm:text-5xl">{socialFollow.title}</h2>
          <p className="mt-5 text-lg text-steel">{socialFollow.intro}</p>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {socialFollow.items.map((item) => (
              <li key={item}>
                <Chip tone="light">{item}</Chip>
              </li>
            ))}
          </ul>
          <div className="mt-9">
            <SocialButton platform="instagram" variant="primary" size="lg">
              {socialFollow.button}
            </SocialButton>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/** Ticket-style promotional card for the 5% social media discount. */
export function DiscountBanner() {
  const { discount } = siteConfig;
  return (
    <Reveal>
      <div className="relative flex flex-col overflow-hidden rounded-[2rem] bg-marigold text-ink md:flex-row">
        <div className="flex flex-col items-center justify-center px-10 py-8 text-center md:w-56 md:shrink-0 md:py-12">
          <span className="font-display text-7xl font-extrabold leading-none tracking-tight">{discount.percent}%</span>
          <span className="mt-2 text-lg font-bold">Discount</span>
        </div>
        {/* ticket perforation */}
        <div aria-hidden className="relative mx-8 border-t-2 border-dashed border-ink/35 md:mx-0 md:my-8 md:border-l-2 md:border-t-0">
          <span className="absolute -left-11 -top-3 h-6 w-6 rounded-full bg-mist md:-left-[13px] md:-top-11" />
          <span className="absolute -right-11 -top-3 h-6 w-6 rounded-full bg-mist md:-bottom-11 md:left-[-13px] md:right-auto md:top-auto" />
        </div>
        <div className="flex-1 px-7 py-9 sm:px-12 sm:py-12">
          <h2 className="text-balance text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">{discount.headline}</h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink/80">{discount.text}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <SocialButton platform="instagram" />
            <SocialButton platform="facebook" />
            <SocialButton platform="youtube" />
          </div>
        </div>
      </div>
    </Reveal>
  );
}
