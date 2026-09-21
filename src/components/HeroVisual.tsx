import { ImageSlot } from './ImageSlot';
import type { MediaItem } from '@/config/media';

/** Hero image frame. Shows the full photo (no cropping) inside a rounded frame. */
export function HeroVisual({ item }: { item: MediaItem }) {
  return (
    <div className="relative mx-auto w-full">
      <div aria-hidden className="absolute -inset-3 rounded-[2.25rem] border border-marigold/30" />
      <div className="relative aspect-[1536/688] overflow-hidden rounded-[2rem] bg-white shadow-lift ring-1 ring-ink/10">
        <ImageSlot
          src={item.src}
          alt={item.alt}
          art={item.art}
          priority
          sizes="(min-width: 1024px) 42vw, 92vw"
          className="absolute inset-0 h-full w-full"
        />
      </div>
    </div>
  );
}
