import type { ReactNode } from 'react';

/** Dark page header shared by every inner page. */
export function PageHero({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-mist">
      <div className="absolute inset-0 bg-[radial-gradient(55%_70%_at_88%_0%,rgba(244,163,0,0.16),transparent)]" />
      <div aria-hidden className="absolute -bottom-28 right-[4%] hidden h-[26rem] w-80 rounded-t-full border border-marigold/25 lg:block" />
      <div aria-hidden className="absolute -bottom-28 right-[10%] hidden h-[21rem] w-60 rounded-t-full border border-ink/10 lg:block" />
      <div className="container-x relative py-20 sm:py-28">
        <h1 className="max-w-3xl text-balance text-5xl font-extrabold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {subtitle && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel sm:text-xl">{subtitle}</p>}
        {children && <div className="mt-9 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}
