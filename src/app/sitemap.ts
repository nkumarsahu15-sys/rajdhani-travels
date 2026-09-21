import type { MetadataRoute } from 'next';
import { siteConfig, navLinks } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return navLinks.map((link) => ({
    url: `${siteConfig.url}${link.href === '/' ? '' : link.href}`,
    changeFrequency: 'monthly' as const,
    priority: link.href === '/' ? 1 : 0.7,
  }));
}
