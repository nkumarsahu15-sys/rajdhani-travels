import Link from 'next/link';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export type ButtonVariant = 'primary' | 'dark' | 'outline' | 'outlineLight' | 'light' | 'whatsapp';

const base =
  'inline-flex items-center justify-center gap-2.5 rounded-full font-semibold tracking-wide transition duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] aria-disabled:pointer-events-none aria-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50';

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-marigold text-ink shadow-[0_12px_28px_-12px_rgba(244,163,0,0.8)] hover:bg-[#FFB61F]',
  dark: 'bg-ink text-white hover:bg-ink-700',
  outline: 'border border-ink/30 text-ink hover:border-ink hover:bg-ink/5',
  outlineLight: 'border border-white/30 text-white hover:border-white/70 hover:bg-white/10',
  light: 'border border-ink/15 bg-white text-ink hover:border-ink/40 hover:shadow-soft',
  whatsapp: 'bg-[#25D366] text-[#053B1B] hover:bg-[#3BE07B]',
};

const sizes = {
  md: 'h-11 px-6 text-sm',
  lg: 'h-14 px-8 text-[15px]',
};

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: keyof typeof sizes;
  icon?: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  title?: string;
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  className,
  href,
  onClick,
  type = 'button',
  disabled,
  title,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const content = (
    <>
      {icon}
      <span>{children}</span>
    </>
  );

  if (href) {
    if (href.startsWith('/')) {
      return (
        <Link href={href} className={classes} title={title}>
          {content}
        </Link>
      );
    }
    const external = href.startsWith('http');
    return (
      <a
        href={href}
        className={classes}
        title={title}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes} title={title}>
      {content}
    </button>
  );
}
