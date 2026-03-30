import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/content/api';

export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://derrickemery.com';
  
  const allContent = getAllPosts();

  const dynamicRoutes = allContent.map((item) => ({
    url: `${siteUrl}/blog/${item.slug}`,
    lastModified: new Date(item.lastModifiedAt || new Date()).toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const staticRoutes = [
    {
      url: siteUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    }
  ];

  return [...staticRoutes, ...dynamicRoutes];
}
