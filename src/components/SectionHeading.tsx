import { cn } from '@/lib/utils';
import { Reveal } from './Reveal';

export function SectionHeading({
  title,
  description,
  tone = 'light',
  align = 'left',
  className,
  as: Tag = 'h2',
}: {
  title: string;
  description?: string;
  tone?: 'light' | 'dark';
  align?: 'left' | 'center';
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
}) {
  return (
    <Reveal className={cn(align === 'center' && 'mx-auto text-center', 'max-w-3xl', className)}>
      <Tag
        className={cn(
          'text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl',
          tone === 'dark' ? 'text-white' : 'text-ink',
        )}
      >
        {title}
      </Tag>
      {description && (
        <p className={cn('mt-5 text-lg leading-relaxed', tone === 'dark' ? 'text-white/70' : 'text-steel')}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
