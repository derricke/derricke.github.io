import React from 'react';
import Link from 'next/link';
import { getAllPosts } from '@/lib/content/api';
import { getAllCategories } from '@/lib/content/api';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';
import { JsonLd } from '@/components/seo/JsonLd';

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
          description: 'Thoughts, tutorials, and deep dives into everything software engineering.',
          blogPost: posts.map((post) => ({
            '@type': 'BlogPosting',
            headline: post.title,
            url: `${siteUrl}/blog/${post.category}/${post.slug}`,
            datePublished: post.publishedAt,
            author: {
              '@type': 'Person',
              name: post.author.name,
            },
          })),
        }}
      />

      <header className="mb-12 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Blog</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Thoughts, tutorials, and deep dives into everything software engineering.
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
        <div className="space-y-12">
          {posts.map((post) => (
            <article key={post.slug} className="group flex flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs flex-wrap">
                <time dateTime={post.publishedAt} className="text-gray-500">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <Link
                  href={`/blog/${post.category}`}
                  className="relative z-10 rounded-full bg-purple-100 dark:bg-purple-900/40 px-3 py-1.5 font-medium text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-800/40 transition-colors"
                >
                  {post.category}
                </Link>
                {post.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="relative z-10 rounded-full bg-gray-50 dark:bg-zinc-800 px-3 py-1.5 font-medium text-gray-600 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="group relative">
                <h3 className="mt-3 text-2xl font-semibold leading-6 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-amber-500 transition-colors">
                  <Link href={`/blog/${post.category}/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {post.blufSummary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}