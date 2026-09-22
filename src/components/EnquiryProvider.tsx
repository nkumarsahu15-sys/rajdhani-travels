'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { EnquiryForm, type EnquiryPreset } from './EnquiryForm';

type EnquiryContextValue = {
  openEnquiry: (preset?: EnquiryPreset) => void;
  closeEnquiry: () => void;
};

const EnquiryContext = createContext<EnquiryContextValue | null>(null);

export function useEnquiry() {
  const ctx = useContext(EnquiryContext);
  if (!ctx) throw new Error('useEnquiry must be used inside <EnquiryProvider>');
  return ctx;
}

const FOCUSABLE = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

/** Provides the "Book Now" enquiry dialog to the whole site. */
export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [preset, setPreset] = useState<EnquiryPreset | undefined>();
  const dialogRef = useRef<HTMLDivElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);

  const openEnquiry = useCallback((p?: EnquiryPreset) => {
    returnFocus.current = document.activeElement as HTMLElement | null;
    setPreset(p);
    setOpen(true);
  }, []);

  const closeEnquiry = useCallback(() => {
    setOpen(false);
    returnFocus.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;

    // Use a fixed-body lock instead of `overflow: hidden`. This is more
    // reliable on mobile browsers while still allowing the dialog itself
    // to receive vertical touch scrolling.
    const scrollY = window.scrollY;
    const body = document.body;
    const previous = {
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
    };

    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.width = '100%';

    dialogRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeEnquiry();
    };
    document.addEventListener('keydown', onKey);

    return () => {
      body.style.position = previous.position;
      body.style.top = previous.top;
      body.style.width = previous.width;
      window.scrollTo(0, scrollY);
      document.removeEventListener('keydown', onKey);
    };
  }, [open, closeEnquiry]);

  function trapFocus(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key !== 'Tab' || !dialogRef.current) return;
    const nodes = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
    if (nodes.length === 0) return;
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  const value = useMemo(() => ({ openEnquiry, closeEnquiry }), [openEnquiry, closeEnquiry]);

  return (
    <EnquiryContext.Provider value={value}>
      {children}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-end justify-center overflow-hidden sm:items-center sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute inset-0 bg-night/80 backdrop-blur-sm" onClick={closeEnquiry} aria-hidden />
            <motion.div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="enquiry-title"
              tabIndex={-1}
              onKeyDown={trapFocus}
              className="relative min-h-0 max-h-[92dvh] w-full touch-pan-y overflow-y-auto overscroll-contain rounded-t-3xl bg-white p-6 shadow-lift [scrollbar-gutter:stable] [-webkit-overflow-scrolling:touch] focus:outline-none sm:max-w-2xl sm:rounded-3xl sm:p-9"
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                type="button"
                onClick={closeEnquiry}
                aria-label="Close enquiry form"
                className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full text-ink transition hover:bg-mist"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
              <h2 id="enquiry-title" className="pr-10 text-3xl font-bold tracking-tight text-ink">
                Book your journey
              </h2>
              <p className="mb-7 mt-2 text-steel">Tell us what you need and Rajdhani Travels will take it from here.</p>
              <EnquiryForm preset={preset} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </EnquiryContext.Provider>
  );
}
