import { siteConfig } from '@/config/site';
import { Button, type ButtonVariant } from './Button';
import { FacebookIcon, InstagramIcon, YouTubeIcon } from './icons';

const platforms = {
  instagram: { label: 'Instagram', icon: InstagramIcon },
  facebook: { label: 'Facebook', icon: FacebookIcon },
  youtube: { label: 'YouTube', icon: YouTubeIcon },
} as const;

export type Platform = keyof typeof platforms;

/**
 * Links to the official page from siteConfig.social.
 * If the URL has not been added yet, the button is shown disabled instead of linking anywhere.
 */
export function SocialButton({
  platform,
  variant = 'dark',
  size = 'md',
  children,
  className,
}: {
  platform: Platform;
  variant?: ButtonVariant;
  size?: 'md' | 'lg';
  children?: React.ReactNode;
  className?: string;
}) {
  const { label, icon: Icon } = platforms[platform];
  const url = siteConfig.social[platform];
  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      icon={<Icon />}
      href={url || undefined}
      disabled={!url}
      title={url ? undefined : 'Official page link coming soon'}
    >
      {children ?? label}
    </Button>
  );
}
