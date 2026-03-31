import { MetadataRoute } from 'next';
import { getAllPosts, getAllCategories } from '@/lib/content/api';

export const dynamic = 'force-static';

const buildTime = new Date().toISOString();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://derrickemery.com';

  const allContent = getAllPosts();
  const categories = getAllCategories();

  // Individual post pages at /blog/[category]/[slug]
  const postRoutes = allContent.map((item) => ({
    url: `${siteUrl}/blog/${item.category}/${item.slug}`,
    lastModified: item.lastModifiedAt || buildTime,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Category index pages at /blog/[category]
  const categoryRoutes = categories.map((cat) => ({
    url: `${siteUrl}/blog/${cat.slug}`,
    lastModified: buildTime,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const staticRoutes = [
    {
      url: siteUrl,
      lastModified: buildTime,
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: buildTime,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: buildTime,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ];

  return [...staticRoutes, ...categoryRoutes, ...postRoutes];
}
