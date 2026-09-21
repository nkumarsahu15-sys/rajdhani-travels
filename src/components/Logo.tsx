import Link from 'next/link';
import { cn } from '@/lib/utils';

/** Text logo. Swap the inner markup for an <Image> when an official logo file is available. */
export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" aria-label="Rajdhani Travels - home" className={cn('group inline-flex items-center gap-3', className)}>
      <span className="grid h-10 w-10 place-items-center rounded-t-full rounded-b-lg bg-marigold transition duration-300 group-hover:-translate-y-0.5">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-ink" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M5 20V10a7 7 0 0 1 14 0v10" />
          <path d="M9 20v-6h6v6" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-extrabold tracking-[0.04em] text-white">RAJDHANI</span>
        <span className="mt-1 text-[11px] font-semibold tracking-[0.42em] text-marigold">TRAVELS</span>
      </span>
    </Link>
  );
}
