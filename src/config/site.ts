/**
 * Single source of truth for Rajdhani Travels business information.
 * Update values here and the whole website updates.
 * Empty strings ('') mean "not provided yet" - the UI handles them gracefully.
 */

export type PhoneContact = {
  label: string;
  /** Number exactly as it should be displayed */
  display: string;
  /** International format used for tel: links (India +91 assumed - change if needed) */
  tel: string;
  /** Number for wa.me links: country code + number, no plus sign */
  whatsapp: string;
};

export const siteConfig = {
  name: 'Rajdhani Travels',
  wordmark: 'RAJDHANI TRAVELS',
  tagline: 'Sleeper & Seater Buses | Car Rental Services',
  slogan: 'Comfortable Journey. Reliable Service.',
  footerServices: 'Sleeper Buses | Seater Buses | Car Rental',
  description:
    'Rajdhani Travels provides comfortable and reliable transportation solutions for individuals, families, groups, tourists, businesses, weddings, events and all types of travel requirements.',
  seoDescription:
    'Rajdhani Travels - Sleeper & Seater Buses and Car Rental Services in Naubasta, Kanpur, Uttar Pradesh. Comfortable Journey. Reliable Service.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',

  phones: {
    booking: {
      label: 'Call / Booking',
      display: '9839701678',
      tel: '+919839701678',
      whatsapp: '919839701678',
    } satisfies PhoneContact,
    urbania: {
      label: 'Urbania / Booking',
      display: '9214800215',
      tel: '+919214800215',
      whatsapp: '919214800215',
    } satisfies PhoneContact,
  },

  /** Number that receives WhatsApp enquiries from buttons and the enquiry form */
  primaryWhatsapp: '919839701678',
  whatsappGreeting: 'Hello Rajdhani Travels, I would like to enquire about a booking.',

  address: {
    street: '5A Hamirpur Road, Naubasta',
    city: 'Kanpur',
    state: 'Uttar Pradesh',
    country: 'IN',
    full: '5A Hamirpur Road, Naubasta, Kanpur, Uttar Pradesh',
  },

  /** Official page URLs. Buttons open in a new tab. */
  social: {
    instagram: 'https://www.instagram.com/rajdhanitravels42?stkn=MWxydGF6amM0NnZocw==',
    facebook: 'https://www.facebook.com/share/1K6Dg2LnxC/',
    youtube: 'https://youtube.com/@rajdhanitravels42?si=-qXCbGIkEnmoIoUI',
  },

  /** Paste the correct Google Maps link / embed URL when available. */
  map: {
    link: '',
    embedUrl: '',
  },

  /** Optional: add a real "About us" story here. Shown on the About page only when not empty. */
  aboutStory: '',

  discount: {
    percent: 5,
    headline: 'FOLLOW OUR SOCIAL MEDIA PAGES & GET 5% DISCOUNT',
    text: 'Follow us on our social media pages and get 5% Discount on eligible bookings.',
  },
};

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Sleeper Buses', href: '/sleeper-buses' },
  { label: 'Seater Buses', href: '/seater-buses' },
  { label: 'Car Rental', href: '/car-rental' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;
