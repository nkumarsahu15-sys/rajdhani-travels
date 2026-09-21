import Link from 'next/link';
import { MapPin, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { telUrl } from '@/lib/utils';
import { Logo } from './Logo';
import { BookTextLink } from './BookButton';

const linkClass = 'text-white/70 transition duration-200 hover:text-marigold';

export function Footer() {
  return (
    <footer className="bg-night pb-28 text-white md:pb-0">
      <div className="container-x grid gap-12 py-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Logo />
          <p className="mt-6 font-display text-lg font-semibold">{siteConfig.footerServices}</p>
          <p className="mt-2 text-marigold">{siteConfig.slogan}</p>
        </div>

        <nav aria-label="Footer" className="lg:col-span-4">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-[15px]">
            <li><Link href="/" className={linkClass}>Home</Link></li>
            <li><Link href="/services" className={linkClass}>Services</Link></li>
            <li><Link href="/sleeper-buses" className={linkClass}>Sleeper Buses</Link></li>
            <li><Link href="/seater-buses" className={linkClass}>Seater Buses</Link></li>
            <li><Link href="/car-rental" className={linkClass}>Car Rental</Link></li>
            <li><Link href="/gallery" className={linkClass}>Gallery</Link></li>
            <li><BookTextLink className={linkClass} /></li>
            <li><Link href="/contact" className={linkClass}>Contact Us</Link></li>
          </ul>
        </nav>

        <address className="space-y-4 text-[15px] not-italic lg:col-span-3">
          {[siteConfig.phones.booking, siteConfig.phones.urbania].map((p) => (
            <a key={p.tel} href={telUrl(p.tel)} className="flex items-start gap-3 text-white/70 transition hover:text-marigold">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-marigold" aria-hidden />
              <span>
                <span className="block text-white/50">{p.label}</span>
                {p.display}
              </span>
            </a>
          ))}
          <p className="flex items-start gap-3 text-white/70">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-marigold" aria-hidden />
            <span>{siteConfig.address.full}</span>
          </p>
        </address>
      </div>
      <div className="border-t border-white/10">
        <p className="container-x py-6 text-sm text-white/50">© Rajdhani Travels. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
