import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { MediaItem } from '@/config/media';
import { cn } from '@/lib/utils';
import { ImageSlot } from './ImageSlot';

export function ServiceOverviewCard({
  href,
  title,
  text,
  tags,
  media,
  layout = 'row',
  className,
}: {
  href: string;
  title: string;
  text: string;
  tags?: string[];
  media: MediaItem;
  layout?: 'feature' | 'row';
  className?: string;
}) {
  const feature = layout === 'feature';
  return (
    <Link
      href={href}
      className={cn(
        'group flex overflow-hidden rounded-[1.75rem] border border-ink/10 bg-white shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-lift',
        feature ? 'flex-col' : 'flex-col sm:flex-row',
        className,
      )}
    >
      <ImageSlot
        src={media.src}
        alt={media.alt}
        art={media.art}
        fit={media.fit}
        sizes={feature ? '(min-width: 1024px) 55vw, 100vw' : '(min-width: 1024px) 20vw, (min-width: 640px) 35vw, 100vw'}
        className={cn(feature ? 'aspect-[4/3] lg:aspect-auto lg:min-h-[22rem] lg:flex-1' : 'aspect-[16/10] sm:aspect-auto sm:w-[46%] sm:shrink-0')}
      />
      <div className={cn('flex flex-col justify-between gap-5', feature ? 'p-7 sm:p-9' : 'flex-1 p-6 sm:p-7')}>
        <div>
          <h3 className={cn('font-bold tracking-tight text-ink', feature ? 'text-3xl sm:text-4xl' : 'text-2xl')}>{title}</h3>
          <p className={cn('mt-3 leading-relaxed text-steel', !feature && 'line-clamp-3')}>{text}</p>
          {tags && (
            <ul className="mt-5 flex flex-wrap gap-2">
              {tags.map((t) => (
                <li key={t} className="rounded-full bg-mist px-3.5 py-1.5 text-sm font-medium text-ink">
                  {t}
                </li>
              ))}
            </ul>
          )}
        </div>
        <span className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-ink">
          View details
          <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
