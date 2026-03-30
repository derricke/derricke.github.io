import React from 'react';
import Link from 'next/link';
import { getAllPosts } from '@/lib/content/api';
import { getAllCategories } from '@/lib/content/api';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { PostCard } from '@/components/PostCard';
import { getAuthorProfile } from '@/lib/content/authors';

export const metadata: Metadata = constructMetadata({
  title: 'Blog | Derrick Emery',
  description: 'Articles, tutorials, and thoughts on technology, SEO, and AI-powered tools.',
  path: '/blog',
});

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://derrickemery.com';

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-4xl">
      <JsonLd
        type="Blog"
        data={{
          name: 'Derrick Emery Blog',
          url: `${siteUrl}/blog`,
          description: 'Thoughts, tutorials, and deep dives into everything Derrick is interested in.',
          publisher: {
            '@type': 'Organization',
            name: 'Derrick Emery',
            logo: {
              '@type': 'ImageObject',
              url: `${siteUrl}/logo.png`,
            }
          },
          blogPost: posts.map((post) => {
            const author = getAuthorProfile(post.author.name);
            return {
              '@type': 'BlogPosting',
              headline: post.title,
              description: post.description,
              url: `${siteUrl}/blog/${post.category}/${post.slug}`,
              datePublished: post.publishedAt,
              author: {
                '@type': 'Person',
                name: post.author.name,
                url: author?.links.linkedin || `${siteUrl}/about`,
                sameAs: author?.sameAs || []
              },
            };
          }),
        }}
      />

      <header className="mb-12 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Blog</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Thoughts, tutorials, and deep dives into everything Derrick is interested in.
        </p>
      </header>

      {/* Browse by Category */}
      <section aria-labelledby="categories-heading" className="mb-16">
        <h2
          id="categories-heading"
          className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-6"
        >
          Browse by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {categories.map((cat) => {
            const count = posts.filter((p) => p.category === cat.slug).length;
            return (
              <Link
                key={cat.slug}
                href={`/blog/${cat.slug}`}
                className="group flex flex-col gap-2 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900/50 p-6 hover:border-purple-300 dark:hover:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-950/20 transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors">
                    {cat.title}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-zinc-700 rounded-full px-2 py-0.5">
                    {count} {count === 1 ? 'post' : 'posts'}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                  {cat.description}
                </p>
                <span className="mt-1 text-xs font-medium text-purple-600 dark:text-purple-400 group-hover:underline">
                  View all →
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Latest Posts */}
      <section aria-labelledby="latest-heading">
        <h2
          id="latest-heading"
          className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-6"
        >
          Latest Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => {
            const category = categories.find((c) => c.slug === post.category);
            return (
              <PostCard 
                key={post.slug} 
                post={post} 
                categoryTitle={category?.title || post.category} 
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}