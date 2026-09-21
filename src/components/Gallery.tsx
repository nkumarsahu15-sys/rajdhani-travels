'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { galleryCategories, galleryItems, showPlaceholderNote, type GalleryCategory } from '@/config/media';
import { cn } from '@/lib/utils';
import { ImageSlot } from './ImageSlot';

const aspects = {
  landscape: 'aspect-[4/3]',
  portrait: 'aspect-[3/4]',
  square: 'aspect-square',
  wide: 'aspect-[16/9]',
} as const;

export function Gallery() {
  const [active, setActive] = useState<GalleryCategory | 'All'>('All');
  const items = active === 'All' ? galleryItems : galleryItems.filter((i) => i.category === active);
  const tabs: Array<GalleryCategory | 'All'> = [
    'All',
    ...galleryCategories.filter((c) => galleryItems.some((i) => i.category === c)),
  ];

  return (
    <div>
      <div role="group" aria-label="Filter gallery" className="flex flex-wrap gap-2.5">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            aria-pressed={active === tab}
            onClick={() => setActive(tab)}
            className={cn(
              'rounded-full border px-5 py-2.5 text-sm font-semibold transition duration-200',
              active === tab
                ? 'border-ink bg-ink text-white'
                : 'border-ink/15 bg-white text-ink hover:border-ink/40',
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.ul
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-10 gap-5 [column-fill:_balance] sm:columns-2 lg:columns-3"
        >
          {items.map((item) => (
            <li key={item.id} className="group mb-5 break-inside-avoid">
              <figure className="overflow-hidden rounded-3xl border border-ink/10 shadow-soft transition duration-500 hover:shadow-lift">
                <ImageSlot
                  src={item.src}
                  alt={item.alt}
                  art={item.art}
                  fit={item.fit}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className={aspects[item.aspect]}
                />
                <figcaption className="bg-white px-5 py-3.5 text-sm font-semibold text-ink">{item.category}</figcaption>
              </figure>
            </li>
          ))}
        </motion.ul>
      </AnimatePresence>

      {showPlaceholderNote && (
        <p className="mt-8 text-sm text-steel">
          Sample illustrations shown. Real Rajdhani Travels photos will be added soon.
        </p>
      )}
    </div>
  );
}
