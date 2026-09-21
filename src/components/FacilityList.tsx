import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export function FacilityList({
  items,
  tone = 'dark',
  columns = 2,
}: {
  items: string[];
  tone?: 'light' | 'dark';
  columns?: 1 | 2;
}) {
  return (
    <ul className={cn('grid gap-x-8 gap-y-3.5', columns === 2 && 'sm:grid-cols-2')}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            className={cn(
              'mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full',
              tone === 'dark' ? 'bg-marigold text-ink' : 'bg-ink text-marigold',
            )}
          >
            <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
          </span>
          <span className={cn('text-[15px] leading-snug', tone === 'dark' ? 'text-white/90' : 'text-ink')}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
