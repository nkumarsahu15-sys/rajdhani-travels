'use client';

import type { ReactNode } from 'react';
import type { EnquiryPreset } from './EnquiryForm';
import { Button, type ButtonVariant } from './Button';
import { useEnquiry } from './EnquiryProvider';

/** "BOOK NOW" - opens the enquiry dialog (no separate booking system). */
export function BookButton({
  children = 'BOOK NOW',
  variant = 'primary',
  size = 'md',
  className,
  preset,
  icon,
}: {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: 'md' | 'lg';
  className?: string;
  preset?: EnquiryPreset;
  icon?: ReactNode;
}) {
  const { openEnquiry } = useEnquiry();
  return (
    <Button variant={variant} size={size} className={className} icon={icon} onClick={() => openEnquiry(preset)}>
      {children}
    </Button>
  );
}

/** Plain text version used in the footer link list. */
export function BookTextLink({ className, children = 'Book Now' }: { className?: string; children?: ReactNode }) {
  const { openEnquiry } = useEnquiry();
  return (
    <button type="button" onClick={() => openEnquiry()} className={className}>
      {children}
    </button>
  );
}
