import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, Figtree } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/config/site';
import { EnquiryProvider } from '@/components/EnquiryProvider';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MobileContactBar } from '@/components/MobileContactBar';
import { LocalBusinessJsonLd } from '@/components/LocalBusinessJsonLd';

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const body = Figtree({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Rajdhani Travels | Sleeper & Seater Buses and Car Rental in Kanpur',
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.seoDescription,
  applicationName: siteConfig.name,
  openGraph: {
    title: 'Rajdhani Travels | Sleeper & Seater Buses | Car Rental Services',
    description: siteConfig.seoDescription,
    siteName: siteConfig.name,
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rajdhani Travels',
    description: siteConfig.seoDescription,
  },
};

export const viewport: Viewport = {
  themeColor: '#0A1A2F',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-marigold focus:px-5 focus:py-3 focus:font-semibold focus:text-ink"
        >
          Skip to content
        </a>
        <EnquiryProvider>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <MobileContactBar />
        </EnquiryProvider>
        <LocalBusinessJsonLd />
      </body>
    </html>
  );
}
