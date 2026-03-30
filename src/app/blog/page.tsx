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

      <header className="mb-12 border-b border-zinc-200 dark:border-zinc-800 pb-8 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-2 mb-2 text-[10px] font-mono font-bold text-zinc-400 dark:text-zinc-500">
          <span>ROOT:</span>
          <span className="uppercase tracking-widest">/blog</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-zinc-100 font-outfit">
          Blog
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl font-outfit">
          Thoughts, tutorials, and deep dives into technology, SEO, and AI.
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
                className="group flex flex-col gap-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 p-6 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors font-outfit">
                    [{cat.title}]
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-900 rounded-md px-1.5 py-0.5 border border-zinc-200 dark:border-zinc-800">
                    {count} {count === 1 ? 'ARTICLE' : 'ARTICLES'}
                  </span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 font-outfit">
                  {cat.description}
                </p>
                <div className="mt-2 flex items-center gap-2 text-[10px] font-mono font-bold text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-zinc-300">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">RUN</span>
                  <span className="group-hover:underline">VIEW_CATEGORY --all</span>
                </div>
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