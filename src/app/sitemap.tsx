import { MetadataRoute } from 'next';

export const dynamic = 'force-static';
/*
// In a real app, you would fetch your dynamic data from a database or CMS
// This is a placeholder for your data fetching logic
async function getPosts(): Promise<{ slug: string; updatedAt: string }[]> {
  // Example: fetching from a headless CMS
  const res = await fetch('https://api.example.com/posts');
  if (!res.ok) {
    // Handle error appropriately
    return [];
  }
  const posts = await res.json();
  return posts;
}
*/

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://derrickemery.com';

  // 1. Add static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // ...add other static pages here
  ];

  // 2. Fetch and add dynamic routes (e.g., blog posts)
  /*
  const posts = await getPosts();

  const dynamicPostRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'daily',
    priority: 0.7,
  }));
  */

  // 3. Combine and return all routes
  return [...staticRoutes];
}
