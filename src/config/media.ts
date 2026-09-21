/**
 * Images used across the website.
 *
 * HOW TO ADD REAL PHOTOS
 * 1. Put the photo in /public/images (e.g. /public/images/sleeper-bus-1.jpg)
 * 2. Set `src` below to '/images/sleeper-bus-1.jpg'
 * 3. Update `alt` so it describes the real photo.
 *
 * While `src` is empty a neutral illustration is shown, so nothing looks broken.
 */

export type ArtKind = 'sleeper' | 'seater' | 'car' | 'interior' | 'travel' | 'wedding';

export type MediaItem = {
  src?: string;
  alt: string;
  art: ArtKind;
  /** 'contain' shows the whole photo (best for vehicle cut-outs), 'cover' fills the frame. */
  fit?: 'cover' | 'contain';
};

export const media = {
  hero: {
    src: '/images/hero-fleet.jpg',
    alt: 'Rajdhani Travels fleet: sleeper coach, seater bus, tempo traveller and Innova car',
    art: 'sleeper',
  },
  sleeper: { src: '/images/sleeper-coach.jpg', alt: 'Rajdhani Travels sleeper coach', art: 'sleeper', fit: 'contain' },
  seater: { src: '/images/seater-bus.jpg', alt: 'Rajdhani Travels seater bus', art: 'seater', fit: 'contain' },
  car: { src: '/images/innova-crysta.jpg', alt: 'Innova Crysta car available on rent', art: 'car', fit: 'contain' },
  wedding: { src: '/images/innova-crysta.jpg', alt: 'Innova Crysta car', art: 'wedding', fit: 'contain' },
} satisfies Record<string, MediaItem>;

export const galleryCategories = [
  'Sleeper Buses',
  'Seater Buses',
  'Cars',
  'Interiors',
  'Travel',
  'Weddings & Events',
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryItem = MediaItem & {
  id: string;
  category: GalleryCategory;
  aspect: 'landscape' | 'portrait' | 'square' | 'wide';
};

/** Only shown when placeholder illustrations are used. */
export const showPlaceholderNote = false;

/**
 * Add new photos here. Categories with no photos are hidden from the filter tabs automatically.
 */
export const galleryItems: GalleryItem[] = [
  { id: 'sleeper-coach', category: 'Sleeper Buses', aspect: 'wide', art: 'sleeper', fit: 'contain', src: '/images/sleeper-coach.jpg', alt: 'Rajdhani Travels sleeper coach' },
  { id: 'seater-bus', category: 'Seater Buses', aspect: 'wide', art: 'seater', fit: 'contain', src: '/images/seater-bus.jpg', alt: 'Rajdhani Travels seater bus' },
  { id: 'tempo-traveller', category: 'Seater Buses', aspect: 'wide', art: 'seater', fit: 'contain', src: '/images/tempo-traveller.jpg', alt: 'Rajdhani Travels tempo traveller' },
  { id: 'night-bus', category: 'Seater Buses', aspect: 'wide', art: 'seater', fit: 'cover', src: '/images/night-bus.jpg', alt: 'Rajdhani Travels bus with yellow and black livery' },
  { id: 'innova-crysta', category: 'Cars', aspect: 'wide', art: 'car', fit: 'contain', src: '/images/innova-crysta.jpg', alt: 'Innova Crysta car available on rent' },
];
