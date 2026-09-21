import { Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { telUrl, whatsappUrl } from '@/lib/utils';
import { WhatsAppIcon } from './icons';

/** Always-visible Call / WhatsApp shortcuts on phones. */
export function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-2 border-t border-white/10 bg-night/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
      <a
        href={telUrl(siteConfig.phones.booking.tel)}
        className="flex h-12 items-center justify-center gap-2 rounded-full bg-marigold text-sm font-semibold text-ink active:scale-[0.98]"
      >
        <Phone className="h-4 w-4" aria-hidden /> Call now
      </a>
      <a
        href={whatsappUrl(siteConfig.primaryWhatsapp, siteConfig.whatsappGreeting)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] text-sm font-semibold text-[#053B1B] active:scale-[0.98]"
      >
        <WhatsAppIcon /> WhatsApp
      </a>
    </div>
  );
}
