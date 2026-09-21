'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { navLinks, siteConfig } from '@/config/site';
import { cn, telUrl, whatsappUrl } from '@/lib/utils';
import { Logo } from './Logo';
import { BookButton } from './BookButton';
import { Button } from './Button';
import { WhatsAppIcon } from './icons';

const bar = 'absolute left-0 h-0.5 w-full rounded bg-white';

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b bg-night/85 backdrop-blur-xl transition duration-300',
        scrolled ? 'border-white/10 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.8)]' : 'border-transparent',
      )}
    >
      <nav aria-label="Main" className="container-x flex h-[72px] items-center justify-between gap-6">
        <Logo />

        <ul className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => {
            const active = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'relative rounded-full px-3.5 py-2 text-[14px] font-medium transition duration-200 hover:text-white',
                    active ? 'text-white' : 'text-white/70',
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      'absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left rounded bg-marigold transition duration-300',
                      active ? 'scale-x-100' : 'scale-x-0',
                    )}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <div className="hidden xl:block">
            <BookButton />
          </div>
          <button
            type="button"
            className="relative grid h-11 w-11 place-items-center rounded-full border border-white/15 xl:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-[14px] w-5" aria-hidden>
              <motion.span className={bar} style={{ top: 0 }} animate={open ? { y: 6, rotate: 45 } : { y: 0, rotate: 0 }} transition={{ duration: 0.25 }} />
              <motion.span className={bar} style={{ top: 6 }} animate={{ opacity: open ? 0 : 1 }} transition={{ duration: 0.15 }} />
              <motion.span className={bar} style={{ top: 12 }} animate={open ? { y: -6, rotate: -45 } : { y: 0, rotate: 0 }} transition={{ duration: 0.25 }} />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto bg-night xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="container-x flex min-h-full flex-col py-8">
              <ul className="flex flex-col">
                {navLinks.map((link, i) => {
                  const active = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * i, duration: 0.3 }}
                      className="border-b border-white/10"
                    >
                      <Link
                        href={link.href}
                        aria-current={active ? 'page' : undefined}
                        className={cn(
                          'flex items-center justify-between py-4 font-display text-2xl font-semibold',
                          active ? 'text-marigold' : 'text-white',
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
              <div className="mt-8 grid gap-3 pb-6">
                <BookButton size="lg" />
                <Button href={telUrl(siteConfig.phones.booking.tel)} variant="outlineLight" size="lg" icon={<Phone className="h-4 w-4" aria-hidden />}>
                  CALL NOW
                </Button>
                <Button
                  href={whatsappUrl(siteConfig.primaryWhatsapp, siteConfig.whatsappGreeting)}
                  variant="whatsapp"
                  size="lg"
                  icon={<WhatsAppIcon />}
                >
                  WHATSAPP
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
