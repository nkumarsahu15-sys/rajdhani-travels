import { cn } from '@/lib/utils';

export function Chip({ children, tone = 'dark' }: { children: React.ReactNode; tone?: 'light' | 'dark' | 'ink' }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition duration-300',
        tone === 'dark' && 'border border-white/15 bg-white/5 text-white/90 hover:border-marigold/60 hover:text-white',
        tone === 'light' && 'border border-ink/10 bg-white text-ink hover:border-ink/30',
        tone === 'ink' && 'bg-ink/10 text-ink',
      )}
    >
      {children}
    </span>
  );
}
